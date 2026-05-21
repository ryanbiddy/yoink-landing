import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "../site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Yoink, a local-only Chrome extension for structuring YouTube video context.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

function BrandLockup() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-mark-color.png"
        alt=""
        width={32}
        height={32}
        priority
        className="h-8 w-8"
      />
      <span className="font-display text-2xl font-black text-white">Yoink</span>
    </span>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-yoink-black text-white">
      <header className="border-b border-yoink-orange">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
            <BrandLockup />
          </Link>
          <Link
            href="/"
            className="focus-ring border border-yoink-orange/60 px-4 py-2 font-mono text-xs font-extrabold uppercase text-white transition hover:bg-yoink-orange hover:text-yoink-black"
          >
            Back home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-xs font-extrabold uppercase text-yoink-orange">
          Last updated: May 10, 2026
        </p>
        <h1 className="mt-4 font-display text-5xl font-black leading-none sm:text-6xl">
          Yoink Privacy Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-8 text-yoink-ash">
          <p>
            Yoink is designed to be a local-only tool. The extension helps you
            turn the YouTube page you are already viewing into a structured
            document that you can paste into Claude, ChatGPT, or another AI
            tool. By default, Yoink does not collect, store, sell, or transmit
            your personal information.
          </p>

          <section>
            <h2 className="font-display text-3xl font-black text-white">
              What Yoink processes
            </h2>
            <p className="mt-3">
              When you click Yoink on a YouTube video, the extension may read
              information visible on that page, such as the video title,
              transcript text, metadata, available chapters, screenshots, and
              comments. This information is used only to create the structured
              output you requested. The output is prepared locally in your
              browser and remains under your control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-black text-white">
              Data collection
            </h2>
            <p className="mt-3">
              Yoink does not collect user data by default. It does not create an
              account, does not send video content to our servers, and does not
              transmit personally identifiable information. Yoink does not use
              cookies, tracking pixels, cross-site trackers, or advertising
              identifiers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-black text-white">
              Optional analytics
            </h2>
            <p className="mt-3">
              Yoink may offer anonymous usage analytics that you can opt into
              from the extension settings. These analytics are intended to help
              improve reliability and understand broad feature usage. If you do
              not opt in, analytics are not sent. If you do opt in, analytics
              are anonymous and do not include personally identifiable
              information, YouTube transcripts, screenshots, comments, prompts,
              or the contents of your generated documents.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-black text-white">
              Third-party services
            </h2>
            <p className="mt-3">
              Yoink does not automatically send your generated document to
              Claude, ChatGPT, or any other AI service. You choose where to paste
              or upload the output. Once you share content with a third-party
              service, that service&apos;s own privacy policy applies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-black text-white">
              Changes and contact
            </h2>
            <p className="mt-3">
              We may update this policy as Yoink evolves. Material changes will
              be reflected on this page. Questions about Yoink privacy can be
              sent to{" "}
              <a
                className="focus-ring font-bold text-yoink-orange underline decoration-white decoration-2 underline-offset-4"
                href="mailto:ryan@ryanbiddy.com"
              >
                ryan@ryanbiddy.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
