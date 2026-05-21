import { NextResponse } from "next/server";

const features = {
  mac: {
    title: "Mac in v2.1",
    audienceName: "yoink-v2-mac-waitlist",
    audienceEnv: "RESEND_AUDIENCE_ID_MAC",
    propertyKey: "yoink_waitlist_mac",
  },
  "multi-platform": {
    title: "More video platforms",
    audienceName: "yoink-future-multi-platform-waitlist",
    audienceEnv: "RESEND_AUDIENCE_ID_MULTI_PLATFORM",
    propertyKey: "yoink_waitlist_multi_platform",
  },
  projects: {
    title: "Send to Projects",
    audienceName: "yoink-future-projects-waitlist",
    audienceEnv: "RESEND_AUDIENCE_ID_PROJECTS",
    propertyKey: "yoink_waitlist_projects",
  },
  podcast: {
    title: "Podcast support",
    audienceName: "yoink-v2-podcast-waitlist",
    audienceEnv: "RESEND_AUDIENCE_ID_PODCAST",
    propertyKey: "yoink_waitlist_podcast",
  },
} as const;

type FeatureId = keyof typeof features;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isFeatureId(value: unknown): value is FeatureId {
  return typeof value === "string" && value in features;
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

async function resendFetch(path: string, init: RequestInit) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return fetch(`https://api.resend.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "yoink-landing/1.0",
      ...init.headers,
    },
  });
}

async function readResendError(response: Response) {
  try {
    const body = (await response.json()) as { message?: string; error?: string };
    return body.message || body.error || response.statusText;
  } catch {
    return response.statusText;
  }
}

function isDuplicateContact(status: number, message: string) {
  return (
    status === 409 ||
    message.toLowerCase().includes("already exists") ||
    message.toLowerCase().includes("already added")
  );
}

async function addGlobalContact(email: string, featureId: FeatureId) {
  const feature = features[featureId];
  const signedUpAt = new Date().toISOString();
  const properties = {
    yoink_waitlists: featureId,
    yoink_waitlist_last_feature: featureId,
    yoink_waitlist_last_label: feature.title,
    yoink_waitlist_last_audience: feature.audienceName,
    yoink_waitlist_source: "yoink-landing-roadmap",
    yoink_waitlist_signed_up_at: signedUpAt,
    [feature.propertyKey]: "true",
  };

  const createResponse = await resendFetch("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email,
      unsubscribed: false,
      properties,
    }),
  });

  if (createResponse.ok) {
    return;
  }

  const createError = await readResendError(createResponse);

  if (!isDuplicateContact(createResponse.status, createError)) {
    throw new Error(createError);
  }

  const updateResponse = await resendFetch(
    `/contacts/${encodeURIComponent(email)}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        unsubscribed: false,
        properties,
      }),
    },
  );

  if (!updateResponse.ok) {
    throw new Error(await readResendError(updateResponse));
  }
}

async function addAudienceContact(email: string, featureId: FeatureId) {
  const feature = features[featureId];
  const audienceId = process.env[feature.audienceEnv];

  if (!audienceId) {
    return;
  }

  const response = await resendFetch(`/audiences/${audienceId}/contacts`, {
    method: "POST",
    body: JSON.stringify({
      email,
      unsubscribed: false,
    }),
  });

  if (response.ok) {
    return;
  }

  const message = await readResendError(response);

  if (!isDuplicateContact(response.status, message)) {
    throw new Error(message);
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON payload.", 400);
  }

  const email =
    typeof payload === "object" && payload && "email" in payload
      ? String(payload.email).trim().toLowerCase()
      : "";
  const featureId =
    typeof payload === "object" && payload && "feature" in payload
      ? payload.feature
      : "";

  if (!emailPattern.test(email)) {
    return jsonError("Enter a valid email address.", 400);
  }

  if (!isFeatureId(featureId)) {
    return jsonError("Choose a valid waitlist feature.", 400);
  }

  try {
    await addGlobalContact(email, featureId);
    await addAudienceContact(email, featureId);
  } catch (error) {
    console.error("Waitlist signup failed", error);
    return jsonError("Waitlist signup is not available right now.", 500);
  }

  return NextResponse.json({
    ok: true,
    feature: {
      id: featureId,
      title: features[featureId].title,
      audienceName: features[featureId].audienceName,
    },
  });
}
