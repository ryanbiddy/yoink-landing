import Link from "next/link";
import type { Metadata } from "next";
import {
  InstallCta,
  LaunchArticleGrid,
  PageShell,
  Section,
  StripeDivider,
} from "../../components/SitePrimitives";
import { githubUrl, operatorSkillUrl, siteUrl } from "../site";

const canonicalUrl = "https://ryanbiddy.com/yoink/getting-started";
const articleTitle = "Getting started: Yoink + Claude Code for YouTube research";
const articleDescription =
  "Step-by-step setup for using Yoink with Claude Code. Install the helper, configure the MCP server, drop in the Skill, and run your first operator-grade hook autopsy.";

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
        alt: "Yoink and Claude Code setup guide.",
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

const howToSteps = [
  {
    name: "Install Yoink",
    text: "Run the Windows installer to install the Chrome extension, local helper server, and MCP bridge.",
  },
  {
    name: "Add your Anthropic API key",
    text: "Optional but recommended. Save and test the key in the setup page so Hook Type and Comment Intelligence can run.",
  },
  {
    name: "Add Yoink to Claude Code",
    text: "Copy the generated MCP config snippet from the setup page into Claude Code's MCP configuration.",
  },
  {
    name: "Install the Yoink Operator Skill",
    text: "Drop SKILL.md into your agent's skills directory so Claude knows how to use Yoink like a research operator.",
  },
  {
    name: "Run your first yoink",
    text: "Ask Claude Code to yoink a YouTube URL and explain what makes the hook work.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: articleTitle,
  description: articleDescription,
  url: canonicalUrl,
  totalTime: "PT5M",
  image: `${siteUrl}/og-image.png`,
  author: {
    "@type": "Person",
    name: "Ryan Biddy",
    url: "https://ryanbiddy.com",
  },
  step: howToSteps.map((step, index) => ({
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

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-5 overflow-x-auto whitespace-pre rounded-none bg-black p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
      {children}
    </pre>
  );
}

export default function GettingStartedPage() {
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
              Setup guide
            </p>
            <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
              Getting started: Yoink + Claude Code for YouTube research
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              Yoink turns Claude Code into a YouTube research analyst. This
              guide walks through the full setup: helper, MCP, Operator Skill,
              and your first hook autopsy.
            </p>
          </div>
        </section>

        <StripeDivider />

        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              "Claude Code installed",
              "Yoink Windows installer",
              "Anthropic API key, optional but recommended",
            ].map((item) => (
              <div key={item} className="border border-white/12 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  Need
                </p>
                <p className="mt-5 text-lg leading-8 text-white">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-[#a3a3a3]">
            End state: you can ask Claude Code to yoink a URL and explain what
            makes the hook work. Claude gets the corpus, timestamp citations,
            Hook Type classification, comment signal, and enough structure to
            act like an operator instead of a generic summarizer.
          </p>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Five-minute setup
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            From installer to first yoink.
          </h2>
          <div className="mt-12 space-y-8">
            {howToSteps.map((step, index) => (
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
                      Placeholder: setup page with MCP config snippets visible.
                    </p>
                  </div>
                ) : null}
                {index === 2 ? (
                  <CodeBlock>{`{
  "mcpServers": {
    "yoink": {
      "command": "C:\\\\Users\\\\<you>\\\\AppData\\\\Local\\\\Yoink\\\\python\\\\python.exe",
      "args": ["C:\\\\Users\\\\<you>\\\\AppData\\\\Local\\\\Yoink\\\\yoink_mcp.py"]
    }
  }
}`}</CodeBlock>
                ) : null}
                {index === 3 ? (
                  <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                    The raw skill lives at{" "}
                    <a
                      href={operatorSkillUrl}
                      className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
                    >
                      SKILL.md
                    </a>
                    . The setup page also includes copyable install options for
                    supported skill clients.
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            First run
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Your first operator-grade hook autopsy.
          </h2>
          <CodeBlock>{`Yoink this video and tell me what makes the hook work:
https://www.youtube.com/watch?v=YOUR_VIDEO_HERE`}</CodeBlock>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {[
              "Claude calls yoink_video to extract transcript, screenshots, comments, and channel context.",
              "Claude calls classify_hook to identify one of the 9 Hook Type categories.",
              "Claude calls analyze_comments to surface what the audience actually said.",
              "Claude writes the analysis with timestamped citations back to YouTube.",
            ].map((item) => (
              <div key={item} className="border border-white/12 p-5 text-sm leading-7 text-[#a3a3a3]">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 border border-white/12 bg-[#0f0f0f] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Screenshot slot
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a3a3a3]">
              Placeholder: Claude Code output showing a real hook autopsy with
              timestamped citations.
            </p>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Common workflows
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            What to ask once it works.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              [
                "Single video, deep analysis",
                "Best for understanding why a specific video works, drafting a writeup, or deciding whether a creator is worth studying further.",
              ],
              [
                "Tweet-ready output",
                "Ask for a short hook autopsy thread: category, structural why, and an operator takeaway.",
              ],
              [
                "Playlist analysis",
                "Yoink up to 10 videos, then ask which hook types repeat and which ones perform best.",
              ],
              [
                "Comment-grounded analysis",
                "Ask what the comments reveal about why a video worked and where the audience disagrees.",
              ],
              [
                "Cross-corpus reasoning",
                "Use search_yoinks, list_recent_yoinks, and find_mentions across your local library.",
              ],
              [
                "Citation-backed research",
                "Use get_citation_map when you want agent output tied back to YouTube timestamps.",
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
            Troubleshooting
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              [
                "Helper offline",
                "Open the Yoink setup page and check the helper status panel. It can show whether the local server is running.",
              ],
              [
                "AI analysis missing",
                "Hook Type, Comment Intelligence, and Entity Extraction require a valid Anthropic API key saved through Yoink settings.",
              ],
              [
                "Extraction fails on one video",
                "Age-restricted, members-only, or geoblocked videos can fail. Yoink reports that status in the job result.",
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

        <InstallCta
          title="Turn Claude Code into a YouTube research analyst."
          body="Install Yoink, connect the local MCP server, and run your first hook autopsy from a real video URL."
        />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            What to read next
          </p>
          <LaunchArticleGrid currentHref="/getting-started" />
          <p className="mt-8 text-base leading-8 text-[#a3a3a3]">
            Yoink is open-source under MIT. Bug reports, contributions, and
            feature requests live at{" "}
            <a
              href={githubUrl}
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              github.com/ryanbiddy/yoink
            </a>
            . Start with the{" "}
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
