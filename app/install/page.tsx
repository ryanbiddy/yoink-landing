import type { Metadata } from "next";
import Link from "next/link";
import {
  InstallCta,
  PageShell,
  Section,
  StripeDivider,
} from "../../components/SitePrimitives";
import { githubUrl, siteUrl, windowsDownloadUrl } from "../site";

const canonicalUrl = `${siteUrl}/install`;
const pageTitle = "Install Yoink v2 on Windows";
const pageDescription =
  "Download the Yoink Windows helper, sideload the Chrome extension while Web Store approval is pending, and click the Y button on any YouTube video.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "Yoink",
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Yoink v2 Windows install instructions.",
      },
    ],
  },
};

const installSteps = [
  {
    title: "Download the GitHub release",
    body: "Grab Yoink-Setup-2.0.0.exe and Yoink-Extension-2.0.0.zip from the latest release. The Chrome Web Store listing is pending approval, so direct install is the clean path for launch.",
  },
  {
    title: "Run the Windows helper installer",
    body: "The helper bundles Python, yt-dlp, ffmpeg, keyring, and the MCP SDK. No Python install, no command line, no PATH wrangling.",
  },
  {
    title: "Extract the extension zip",
    body: "Unzip Yoink-Extension-2.0.0.zip somewhere you will not delete immediately, such as Documents\\Yoink Extension.",
  },
  {
    title: "Load it in your Chromium browser",
    body: "Open chrome://extensions, enable Developer mode, choose Load unpacked, then select the extracted extension folder.",
  },
  {
    title: "Click the Y button on YouTube",
    body: "Open any YouTube video. The Yoink button appears under the video and sends the request to your local helper.",
  },
];

export default function InstallPage() {
  return (
    <PageShell>
      <Section className="pt-20 sm:pt-28 lg:pt-32">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Install Yoink
        </p>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl break-words font-display text-4xl font-bold leading-[1.03] text-white sm:text-7xl lg:text-[104px]">
              Windows now. Web Store soon.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              Yoink v2 ships as a Windows helper plus a Chrome extension. Until
              the Web Store listing is approved, install from the GitHub release
              and sideload the extension in Chrome, Edge, Brave, Comet, Opera GX,
              or Vivaldi.
            </p>
          </div>
          <div className="border border-white/12 p-6">
            <a
              href={windowsDownloadUrl}
              className="focus-ring inline-flex w-full items-center justify-center bg-white px-4 py-4 text-xs font-semibold uppercase text-yoink-black transition hover:opacity-90 sm:px-5 sm:text-sm"
            >
              Download latest release
            </a>
            <p className="mt-4 text-sm font-semibold leading-6 text-white">
              <span className="block">Yoink-Setup-2.0.0.exe</span>
              <span className="block">Windows 10/11 · ~120 MB</span>
            </p>
            <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
              Web Store listing pending approval. The release should also
              include Yoink-Extension-2.0.0.zip.
            </p>
          </div>
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Direct install flow
        </p>
        <div className="grid gap-6 lg:grid-cols-5">
          {installSteps.map((step, index) => (
            <article key={step.title} className="border border-white/12 p-6">
              <p className="text-sm font-semibold text-yoink-orange">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-none text-white">
                {step.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 border border-white/12 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            SmartScreen note
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#a3a3a3]">
            Windows may flag the installer as &quot;unrecognized publisher&quot;
            - click &quot;More info&quot; -&gt; &quot;Run anyway&quot;. Code
            signing is on the v2.1 roadmap.
          </p>
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          After install
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          <Link
            href="/creators"
            className="focus-ring border border-white/12 p-6 transition hover:border-yoink-orange"
          >
            <h2 className="font-display text-4xl font-bold leading-none text-white">
              Paste into Claude or ChatGPT
            </h2>
            <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
              The browser path: click Yoink, then paste the structured corpus
              wherever you work.
            </p>
          </Link>
          <Link
            href="/agent-docs"
            className="focus-ring border border-white/12 p-6 transition hover:border-yoink-orange"
          >
            <h2 className="font-display text-4xl font-bold leading-none text-white">
              Connect your MCP agent
            </h2>
            <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
              The setup page generates the exact config path for your machine.
            </p>
          </Link>
          <a
            href={githubUrl}
            className="focus-ring border border-white/12 p-6 transition hover:border-yoink-orange"
          >
            <h2 className="font-display text-4xl font-bold leading-none text-white">
              Read the source
            </h2>
            <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
              Yoink is MIT-licensed and open source.
            </p>
          </a>
        </div>
      </Section>

      <InstallCta />
    </PageShell>
  );
}
