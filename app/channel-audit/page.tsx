import Link from "next/link";
import type { Metadata } from "next";
import {
  InstallCta,
  LaunchArticleGrid,
  PageShell,
  Section,
  StripeDivider,
} from "../../components/SitePrimitives";
import { siteUrl } from "../site";

const canonicalUrl = "https://ryanbiddy.com/yoink/channel-audit";
const articleTitle =
  "The 10-Video Channel Audit: how to read a YouTube channel like an operator";
const articleDescription =
  "A repeatable framework for analyzing any YouTube channel in under 30 minutes using Yoink. Hook patterns, audience signals, and the gaps a creator hasn't filled.";

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
        alt: "Yoink 10-video YouTube channel audit framework.",
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

const steps = [
  {
    name: "Yoink the last 10 uploads",
    text: "Use Playlist Mode when possible, or yoink the 10 most recent videos one by one. You want transcripts, screenshots, comments, channel context, Hook Type, and Comment Intelligence.",
  },
  {
    name: "Map hook type distribution",
    text: "Ask which Hook Type categories the creator uses, avoids, and repeats. Most channels converge on two or three patterns.",
  },
  {
    name: "Check performance correlation",
    text: "Compare dominant hook types against the best and worst performers. The safe default is not always the highest-performing pattern.",
  },
  {
    name: "Aggregate comment intelligence",
    text: "Look for demand gaps, repeated tools, products, and disagreements across all 10 videos.",
  },
  {
    name: "Name where they are not playing",
    text: "Turn the absence into action: topic gaps, format gaps, and audience gaps.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: articleTitle,
  description: articleDescription,
  url: canonicalUrl,
  totalTime: "PT30M",
  image: `${siteUrl}/og-image.png`,
  author: {
    "@type": "Person",
    name: "Ryan Biddy",
    url: "https://ryanbiddy.com",
  },
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

function Prompt({ children }: { children: string }) {
  return (
    <pre className="mt-5 overflow-x-auto whitespace-pre-wrap bg-black p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
      {children}
    </pre>
  );
}

export default function ChannelAuditPage() {
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
              Operator framework
            </p>
            <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
              The 10-Video Channel Audit: how to read a YouTube channel like an
              operator
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              One viral video tells you almost nothing. Ten videos tell you the
              operating principle: the pattern across the catalog that explains
              why the channel works, or why it does not.
            </p>
          </div>
        </section>

        <StripeDivider />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Why ten
              </p>
              <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
                Enough signal. Not a research project.
              </h2>
            </div>
            <div className="grid gap-4 text-lg leading-8 text-[#a3a3a3] md:grid-cols-2">
              {[
                "Hook type frequencies stabilize enough to see the creator's real operating pattern.",
                "Performance variance becomes visible: hits, misses, and average performers.",
                "Comment patterns converge beyond one noisy comment section.",
                "The workflow still fits inside one focused research session.",
              ].map((item) => (
                <div key={item} className="border border-white/12 p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            The audit
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Five steps, one channel.
          </h2>
          <div className="mt-12 space-y-8">
            {steps.map((step, index) => (
              <section key={step.name} className="border border-white/12 p-6">
                <p className="font-mono text-sm font-semibold text-yoink-orange">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-5xl font-bold leading-none text-white">
                  {step.name}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[#a3a3a3]">
                  {step.text}
                </p>
                {index === 0 ? (
                  <div className="mt-6 border border-white/12 bg-[#0f0f0f] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                      Screenshot slot
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#a3a3a3]">
                      Placeholder: Yoink playlist progress showing 10 videos
                      with completion states.
                    </p>
                  </div>
                ) : null}
                {index === 1 ? (
                  <Prompt>{`Based on the last 10 videos from [creator name], what's the hook type distribution? Which categories do they use, which do they avoid, and is there a pattern in which ones perform best?`}</Prompt>
                ) : null}
                {index === 2 ? (
                  <Prompt>{`Which hook types correlate with the best performance in this creator's last 10 videos? Are the outliers using the same hooks as the average performers, or different ones?`}</Prompt>
                ) : null}
                {index === 3 ? (
                  <Prompt>{`Across the 10 videos, what topics do commenters keep asking about that the creator hasn't addressed yet? What tools or products do commenters keep mentioning? Where do commenters consistently disagree with the creator?`}</Prompt>
                ) : null}
                {index === 4 ? (
                  <Prompt>{`Based on the 10 videos, what topics, formats, or audience segments is this creator not covering that their audience seems to want or that the niche supports? Be specific.`}</Prompt>
                ) : null}
              </section>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Worked example
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            What the audit gives you.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              [
                "Hook distribution",
                "A documentary channel might show Story Open as the dominant pattern, Curiosity Gap as the secondary pattern, and almost no Question or Authority hooks.",
              ],
              [
                "Performance correlation",
                "The creator's dominant hook is not always the best performer. That mismatch is where experiments live.",
              ],
              [
                "Comment Intelligence",
                "Commenters may keep asking about source material, production process, tools, or a topic the creator has not covered.",
              ],
              [
                "Gaps",
                "The output should name specific topic gaps, format gaps, and audience gaps. 'More variety' is not useful. Named gaps are actionable.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border border-white/12 p-6">
                <h3 className="font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-white/12 bg-[#0f0f0f] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Example slot
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a3a3a3]">
              Placeholder: sample Claude Code audit output with hook
              distribution, comment themes, and named opportunity gaps.
            </p>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            What to do with it
          </p>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              [
                "Creator auditing yourself",
                "Use the gaps as roadmap. Use dominant-but-not-best-performing hooks as experiments.",
              ],
              [
                "Creator auditing a competitor",
                "Study what works, then look harder at the gaps they left open.",
              ],
              [
                "Marketer evaluating a partner",
                "Use audience quality, brand fit, comment themes, and unresolved tension as diligence signals.",
              ],
              [
                "Researcher building a corpus",
                "Repeat 10-video audits per channel, then use search_yoinks and find_mentions across the library.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="border border-white/12 p-6">
                <h3 className="font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            30-minute reality
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["5 minutes", "Kick off the playlist yoink and let extraction plus AI passes complete."],
              ["15 minutes", "Run the five Claude prompts and react to the analysis."],
              ["10 minutes", "Write the gaps and takeaways in a form you can act on."],
            ].map(([time, body]) => (
              <div key={time} className="border border-white/12 p-6">
                <p className="font-display text-5xl font-bold leading-none text-yoink-orange">
                  {time}
                </p>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
            Faster than watching three videos at 2x. More useful than ten hours
            of vibes-based research.
          </p>
        </Section>

        <InstallCta
          title="Run your first 10-video channel audit."
          body="Install Yoink, follow the getting started guide, pick a channel, and let Claude or ChatGPT reason over the corpus."
        />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Related reading
          </p>
          <LaunchArticleGrid currentHref="/channel-audit" />
          <p className="mt-8 text-base leading-8 text-[#a3a3a3]">
            Start with the{" "}
            <Link
              href="/getting-started"
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              Yoink + Claude Code setup guide
            </Link>
            , then use the{" "}
            <Link
              href="/hooks"
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              Hook Type taxonomy
            </Link>
            .
          </p>
        </Section>
      </article>
    </PageShell>
  );
}
