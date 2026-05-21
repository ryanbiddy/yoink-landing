import Link from "next/link";
import type { Metadata } from "next";
import {
  InstallCta,
  LaunchArticleGrid,
  PageShell,
  Section,
  StripeDivider,
} from "../../components/SitePrimitives";
import { githubUrl, siteUrl } from "../site";

const canonicalUrl = `${siteUrl}/local-first`;
const articleTitle =
  "Why Yoink is local-first - and why that matters for AI-powered creator tools";
const articleDescription =
  "Core Yoink runs on your machine: no accounts, no Yoink cloud, and optional BYO-key AI features. Here's why that architecture matters for YouTube research.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: canonicalUrl,
    siteName: "Yoink",
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Yoink local-first YouTube research architecture.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: articleTitle,
  description: articleDescription,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: {
    "@type": "Person",
    name: "Ryan Biddy",
    url: "https://ryanbiddy.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ReplayRyan",
    url: "https://ryanbiddy.com",
  },
  image: `${siteUrl}/og-image.png`,
  articleSection: "Local-first AI research tools",
  keywords: [
    "local-first AI",
    "YouTube research",
    "Yoink",
    "AI creator tools",
    "MCP server",
    "private AI research",
  ],
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

const localPieces = [
  {
    title: "Chrome extension",
    body: "Runs in your browser, detects YouTube pages, adds the Yoink button, and sends extraction requests to your local helper.",
  },
  {
    title: "Local helper",
    body: "Runs at localhost:5179, talks to YouTube through your machine, and writes structured markdown corpora to disk.",
  },
  {
    title: "MCP server",
    body: "Runs locally so Claude Code, Cursor, OpenClaw, Hermes, and other agents can call Yoink tools without a Yoink cloud.",
  },
  {
    title: "Operator Skill",
    body: "A local SKILL.md instruction set that teaches agents how to use Yoink like a YouTube research operator.",
  },
];

export default function LocalFirstPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <article>
        <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Local-first
            </p>
            <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
              Why Yoink is local-first - and why that matters for AI-powered
              creator tools
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              The default assumption in AI tooling is that your data lives in
              someone else&apos;s cloud. Yoink takes the opposite stance: your
              YouTube research should stay on your machine.
            </p>
          </div>
        </section>

        <StripeDivider />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                The problem
              </p>
              <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
                Creator research is strategic work.
              </h2>
            </div>
            <div className="space-y-6 text-xl leading-9 text-[#a3a3a3]">
              <p>
                When you study competitor channels, draft hooks for unpublished
                videos, analyze audience comments, or build a corpus you plan to
                monetize, you are not just browsing. You are handling strategic,
                pre-public, often confidential work.
              </p>
              <p>
                The video URLs you research, the patterns you uncover, and the
                corpus you accumulate over months are the raw material of your
                work. Cloud-AI defaults turn that material into a service
                interaction: account data, logs, server-side processing, and a
                system you do not own.
              </p>
              <p>
                Yoink treats that material as yours. Everything that can run
                locally, does.
              </p>
            </div>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Architecture
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            What local-first actually means in Yoink.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {localPieces.map((piece) => (
              <div key={piece.title} className="border border-white/12 p-6">
                <h3 className="font-display text-4xl font-bold leading-none text-white">
                  {piece.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {piece.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-xl leading-9 text-[#a3a3a3]">
            The only optional cloud touch is the BYO Anthropic API key. If you
            turn on Hook Type classification, Comment Intelligence, or Entity
            Extraction, Yoink sends the necessary transcript or comment chunks to
            Anthropic&apos;s API using your key, billed to your account, under
            Anthropic&apos;s API terms. The core product works without any LLM
            call.
          </p>
        </Section>

        <StripeDivider />

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Your machine
              </p>
              <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
                What stays with you.
              </h2>
            </div>
            <ul className="grid gap-4 text-lg leading-8 text-[#a3a3a3] md:grid-cols-2">
              {[
                "Every yoinked video corpus with transcript, screenshots, comments, and metadata.",
                "Your accumulated research library: 50 videos, 500 videos, or 5000.",
                "Your settings and saved AI feature preferences.",
                "Your Anthropic key, stored through the OS keyring.",
                "Your Hook Type corrections and taxonomy calibration.",
                "Your local entity graph and search index.",
              ].map((item) => (
                <li key={item} className="border border-white/12 p-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Strategy
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Local-first is not just a privacy stance.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {[
              [
                "You are not training someone else's model",
                "Your competitor research stays your research.",
              ],
              [
                "Your corpus accumulates as an asset",
                "Yoink Memory and SQLite FTS make the library more useful over time.",
              ],
              [
                "Works with any agent",
                "MCP and SKILL.md let the same corpus travel across your tools.",
              ],
              [
                "No SaaS lock-in",
                "No account to delete, no shutdown export window, no subscription gate.",
              ],
              [
                "Defensible against cloud AI",
                "NotebookLM, ChatGPT, and Gemini can analyze videos. They cannot credibly be local-first.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border border-white/12 p-5">
                <h3 className="font-display text-3xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#a3a3a3]">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Tradeoffs
              </p>
              <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
                The honest costs.
              </h2>
            </div>
            <div className="space-y-6 text-xl leading-9 text-[#a3a3a3]">
              <p>
                No cross-device sync by default. Your corpus on your laptop does
                not magically appear on your desktop unless you choose to sync
                the folder yourself.
              </p>
              <p>
                Updates are product updates, not cloud flips. You install Yoink,
                and you control the local helper running on your machine.
              </p>
              <p>
                Windows is the supported packaged build today. Mac packaging is
                planned for v2.1.
              </p>
              <p>
                These are real costs. We chose them on purpose. They are the
                price of the ownership posture that defines the product.
              </p>
            </div>
          </div>
        </Section>

        <InstallCta
          title="The cloud-AI default treats your research as a service interaction."
          body="Yoink treats it as your work. Install the local helper, use the Chrome extension, and keep your YouTube corpus on your machine."
        />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Related reading
          </p>
          <LaunchArticleGrid currentHref="/local-first" />
          <p className="mt-8 text-base leading-8 text-[#a3a3a3]">
            Yoink is open-source under MIT. Issues and contributions live at{" "}
            <a
              href={githubUrl}
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              github.com/ryanbiddy/yoink
            </a>
            . Start with the{" "}
            <Link
              href="/getting-started"
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              getting started guide
            </Link>
            .
          </p>
        </Section>
      </article>
    </PageShell>
  );
}
