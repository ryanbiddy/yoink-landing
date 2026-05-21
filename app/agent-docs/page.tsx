import type { Metadata } from "next";
import {
  InstallCta,
  LaunchArticleGrid,
  PageShell,
  Section,
  SkillLink,
  StripeDivider,
} from "../../components/SitePrimitives";
import { agentDocsUrl, githubUrl, operatorSkillUrl, siteUrl } from "../site";
import { mcpTools } from "../v2-data";

const canonicalUrl = `${siteUrl}/agent-docs`;
const pageTitle = "Yoink agent docs - MCP tools, Operator Skill, and setup";
const pageDescription =
  "Agent-readable Yoink v2 docs for MCP setup, 13 local tools, supported clients, and the portable agentskills.io Operator Skill.";

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
        alt: "Yoink v2 agent docs for MCP and Operator Skill.",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  datePublished: "2026-05-20",
  dateModified: "2026-05-21",
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
  articleSection: "AI agent integration docs",
  keywords: [
    "Yoink MCP",
    "YouTube MCP server",
    "Claude Desktop MCP",
    "Cursor MCP",
    "ChatGPT Desktop MCP",
    "Operator Skill",
    "Agent Skills",
    "agentskills.io",
  ],
  about: mcpTools.map(([name]) => name),
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

export default function AgentDocsPage() {
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
              Agent docs
            </p>
            <h1 className="max-w-6xl break-words font-display text-4xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
              Yoink v2 docs for agents that need YouTube context.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              Yoink exposes YouTube extraction, search, citations, Hook Type,
              Comment Intelligence, and entity lookup as local MCP tools. This
              page is the crawlable summary for agents, docs crawlers, and
              developers connecting Claude Desktop, Cursor, ChatGPT Desktop,
              Continue, Cline, or another MCP client.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={agentDocsUrl}
                className="focus-ring inline-flex items-center justify-center bg-white px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:opacity-90"
              >
                Full GitHub MCP docs
              </a>
              <a
                href={operatorSkillUrl}
                className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-4 text-sm font-semibold uppercase text-white transition hover:border-yoink-orange hover:text-yoink-orange"
              >
                Raw Operator Skill
              </a>
            </div>
          </div>
        </section>

        <StripeDivider />

        <Section>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              ["Transport", "Stdio supported. Local HTTP JSON-RPC is experimental."],
              ["Clients", "Claude Desktop and Cursor are launch-tested. ChatGPT Desktop, Continue, Cline, and other MCP clients use the same shape."],
              ["Tools", "13 MCP tools covering extraction, search, citations, analysis, and diagnostics."],
              ["Privacy", "The MCP server runs locally and reads your local Yoink library."],
            ].map(([title, body]) => (
              <div key={title} className="border border-white/12 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  {title}
                </p>
                <p className="mt-5 text-lg leading-8 text-white">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Tool catalog
          </p>
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            13 local tools your agent can call.
          </h2>
          <div className="mt-12 overflow-hidden border border-white/12">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-yoink-orange">
                <tr>
                  <th className="border-b border-white/12 px-4 py-4 font-semibold">
                    Tool
                  </th>
                  <th className="border-b border-white/12 px-4 py-4 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {mcpTools.map(([name, description]) => (
                  <tr key={name} className="border-b border-white/10 last:border-0">
                    <td className="px-4 py-4 font-mono text-yoink-orange">
                      {name}
                    </td>
                    <td className="px-4 py-4 text-[#a3a3a3]">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Config
          </p>
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Stdio MCP config.
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
            The installed setup page generates the exact command paths for your
            machine. The shape looks like this:
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#8a8a8a]">
            This snippet uses a placeholder path. After install, Yoink&apos;s
            setup page generates the real one for your machine - copy it from
            there.
          </p>
          <CodeBlock>{`{
  "mcpServers": {
    "yoink": {
      "command": "C:\\\\Users\\\\<you>\\\\AppData\\\\Local\\\\Yoink\\\\python\\\\python.exe",
      "args": ["C:\\\\Users\\\\<you>\\\\AppData\\\\Local\\\\Yoink\\\\yoink_mcp.py"]
    }
  }
}`}</CodeBlock>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#a3a3a3]">
            HTTP JSON-RPC is available for local clients that need it, but stdio
            is the supported launch path. Full transport notes live in the{" "}
            <a
              href={agentDocsUrl}
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              GitHub MCP docs
            </a>
            .
          </p>
        </Section>

        <StripeDivider />

        <Section>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-white/12 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Operator Skill
              </p>
              <h2 className="mt-6 break-words font-display text-3xl font-bold leading-none text-white sm:text-5xl">
                Give the agent the workflow, not just the tools.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#a3a3a3]">
                MCP exposes the functions. The agentskills.io Operator Skill
                tells the agent how to use them: citation discipline,
                hook-autopsy mode, YouTube research defaults, and
                source-grounded output.
              </p>
              <p className="mt-6 text-base leading-8 text-[#a3a3a3]">
                Open the <SkillLink />.
              </p>
            </div>
            <div className="border border-white/12 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Agent crawl hints
              </p>
              <h2 className="mt-6 break-words font-display text-3xl font-bold leading-none text-white sm:text-5xl">
                Machine-readable paths.
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-8 text-[#a3a3a3]">
                <li>
                  <a className="text-white underline decoration-yoink-orange underline-offset-4" href="/llms.txt">
                    /llms.txt
                  </a>{" "}
                  summarizes Yoink for LLM crawlers.
                </li>
                <li>
                  <a className="text-white underline decoration-yoink-orange underline-offset-4" href="/sitemap.xml">
                    /sitemap.xml
                  </a>{" "}
                  lists the launch pages.
                </li>
                <li>
                  <a className="text-white underline decoration-yoink-orange underline-offset-4" href={githubUrl}>
                    GitHub repo
                  </a>{" "}
                  is the source of truth for code and docs.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <InstallCta
          title="Connect Yoink to your agent."
          body="Install Yoink, copy the generated MCP snippet, and give your agent a local YouTube research layer."
        />

        <Section>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
            Related reading
          </p>
          <LaunchArticleGrid currentHref="/agent-docs" />
        </Section>
      </article>
    </PageShell>
  );
}
