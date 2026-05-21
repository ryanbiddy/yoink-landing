"use client";

import { FormEvent, SVGProps, useState } from "react";

const roadmapFeatures = [
  {
    id: "mac",
    title: "Mac in v2.1",
    description:
      "Native Mac packaging is planned for v2.1 - same one-click experience, same local-first privacy.",
    Icon: AppleRoadmapIcon,
  },
  {
    id: "channel-decoder",
    title: "Channel Decoder",
    description:
      "Yoink an entire YouTube channel at once. Get a structured corpus of every video - perfect for competitive research.",
    Icon: LayersIcon,
  },
  {
    id: "niche-corpus",
    title: "Niche Corpus",
    description:
      "Combine multiple channels and videos into one master corpus. Compare patterns across an entire content niche in your niche.",
    Icon: GridIcon,
  },
  {
    id: "podcast",
    title: "Podcast support",
    description:
      "Extend Yoink beyond YouTube. Yoink any podcast episode into structured corpora for your AI.",
    Icon: MicrophoneIcon,
  },
];

type FeatureId = (typeof roadmapFeatures)[number]["id"];

function AppleRoadmapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.8 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6 0 0-2.7-1-2.7-3.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.7 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.8-1 2.8 1 0 2-.5 2.7-1.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 4 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4h6v6H4V4ZM14 4h6v6h-6V4ZM4 14h6v6H4v-6ZM14 14h6v6h-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicrophoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 6a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0V6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m5 12.5 4.3 4.3L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoadmapWaitlistSection() {
  const [openFeature, setOpenFeature] = useState<FeatureId | null>(null);
  const [emails, setEmails] = useState<Record<string, string>>({});
  const [pendingFeature, setPendingFeature] = useState<FeatureId | null>(null);
  const [signedUp, setSignedUp] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    featureId: FeatureId,
  ) {
    event.preventDefault();
    setPendingFeature(featureId);
    setErrors((current) => ({ ...current, [featureId]: "" }));

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emails[featureId],
          feature: featureId,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not join the waitlist.");
      }

      setSignedUp((current) => ({ ...current, [featureId]: true }));
      setOpenFeature(null);
      setEmails((current) => ({ ...current, [featureId]: "" }));
    } catch (error) {
      setErrors((current) => ({
        ...current,
        [featureId]:
          error instanceof Error
            ? error.message
            : "Could not join the waitlist.",
      }));
    } finally {
      setPendingFeature(null);
    }
  }

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          On the roadmap
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          What&apos;s coming to Yoink.
        </h2>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-[#8a8a8a]">
          Yoink v1 is just the start. Get early access to v2 features the day
          they ship.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roadmapFeatures.map(({ id, title, description, Icon }) => {
            const isOpen = openFeature === id;
            const isPending = pendingFeature === id;
            const isSignedUp = signedUp[id];

            return (
              <article
                key={id}
                className="flex min-h-[430px] flex-col border border-white/12 p-6"
              >
                <Icon className="h-9 w-9 text-yoink-orange" />
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {description}
                </p>

                <div className="mt-auto pt-8">
                  {isSignedUp ? (
                    <div
                      className="flex items-center gap-3 text-sm font-semibold text-[#22c55e]"
                      aria-live="polite"
                    >
                      <CheckIcon className="h-5 w-5" />
                      You&apos;re on the list for {title}.
                    </div>
                  ) : isOpen ? (
                    <form
                      className="space-y-3"
                      onSubmit={(event) => handleSubmit(event, id)}
                    >
                      <label className="sr-only" htmlFor={`waitlist-${id}`}>
                        Email for {title}
                      </label>
                      <input
                        id={`waitlist-${id}`}
                        type="email"
                        required
                        value={emails[id] || ""}
                        onChange={(event) =>
                          setEmails((current) => ({
                            ...current,
                            [id]: event.target.value,
                          }))
                        }
                        placeholder="you@example.com"
                        className="focus-ring w-full border border-white/15 bg-black px-4 py-3 text-sm text-white placeholder:text-[#8a8a8a]"
                      />
                      <button
                        type="submit"
                        disabled={isPending}
                        className="focus-ring w-full bg-white px-4 py-3 text-sm font-semibold uppercase text-yoink-black transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
                      >
                        {isPending ? "Submitting..." : "Submit"}
                      </button>
                      <p className="text-xs leading-5 text-[#8a8a8a]">
                        We&apos;ll only email you when this specific feature
                        ships. No newsletter spam.
                      </p>
                      {errors[id] ? (
                        <p className="text-xs font-semibold text-[#fca5a5]">
                          {errors[id]}
                        </p>
                      ) : null}
                    </form>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenFeature(id)}
                      className="focus-ring w-full border border-yoink-orange px-4 py-3 text-sm font-semibold uppercase text-yoink-orange transition hover:bg-yoink-orange hover:text-yoink-black"
                    >
                      Notify me
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
