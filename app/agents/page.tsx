import type { Metadata } from "next";
import {
  CodeIcon,
  FeatureCard,
  InstallCta,
  PageHero,
  PageShell,
  Section,
  SkillLink,
  SparkIcon,
  StripeDivider,
} from "../../components/SitePrimitives";
import { githubUrl, siteUrl } from "../site";
import { mcpTools } from "../v2-data";

export const metadata: Metadata = {
  title: "Yoink for AI Agents",
  description:
    "Yoink exposes 13 local MCP tools and an Operator Skill that let Claude Desktop, Cursor, and other agents extract, search, cite, and analyze YouTube context.",
  alternates: {
    canonical: `${siteUrl}/agents`,
  },
};

const snippets = [
  {
    label: "Claude Desktop",
    code: String.raw`{
  "mcpServers": {
    "yoink": {
      "command": "C:\\Users\\<you>\\AppData\\Local\\Yoink\\python\\python.exe",
      "args": ["C:\\Users\\<you>\\AppData\\Local\\Yoink\\yoink_mcp.py"]
    }
  }
}`,
  },
  {
    label: "Cursor",
    code: String.raw`{
  "mcpServers": {
    "yoink": {
      "command": "C:\\Users\\<you>\\AppData\\Local\\Yoink\\python\\python.exe",
      "args": ["C:\\Users\\<you>\\AppData\\Local\\Yoink\\yoink_mcp.py"]
    }
  }
}`,
  },
  {
    label: "Continue",
    code: String.raw`{
  "mcpServers": [
    {
      "name": "yoink",
      "command": "C:\\Users\\<you>\\AppData\\Local\\Yoink\\python\\python.exe",
      "args": ["C:\\Users\\<you>\\AppData\\Local\\Yoink\\yoink_mcp.py"]
    }
  ]
}`,
  },
  {
    label: "Cline",
    code: String.raw`{
  "mcpServers": {
    "yoink": {
      "command": "C:\\Users\\<you>\\AppData\\Local\\Yoink\\python\\python.exe",
      "args": ["C:\\Users\\<you>\\AppData\\Local\\Yoink\\yoink_mcp.py"]
    }
  }
}`,
  },
];

export default function AgentsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For agents"
        title="13 MCP tools that turn your agent into a YouTube research analyst."
        body="Local Model Context Protocol server. Stdio plus experimental HTTP JSON-RPC. Launch-tested with Claude Desktop and Cursor, with the same config shape for ChatGPT Desktop, Continue, Cline, and other MCP clients."
        primaryLabel="Download for Windows"
      />

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Tool catalog
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          The YouTube layer your agent can call.
        </h2>
        <div className="mt-12 overflow-hidden border border-white/12">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-yoink-orange">
              <tr>
                <th className="border-b border-white/12 px-4 py-4 font-semibold">
                  Tool
                </th>
                <th className="border-b border-white/12 px-4 py-4 font-semibold">
                  What it does
                </th>
              </tr>
            </thead>
            <tbody>
              {mcpTools.map(([name, description]) => (
                <tr key={name} className="border-b border-white/10 last:border-0">
                  <td className="px-4 py-4 font-mono text-yoink-orange">{name}</td>
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
          Config snippets
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Paste the local server into your agent.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {snippets.map((snippet) => (
            <div key={snippet.label} className="border border-white/12 p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                {snippet.label}
              </p>
              <pre className="overflow-x-auto whitespace-pre rounded-none bg-black p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
                {snippet.code}
              </pre>
            </div>
          ))}
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard
            title="Agent run transcript"
            body="User: Find the strongest hooks in this playlist. Agent: calls yoink_playlist, polls get_job_status, fetches the corpus, runs classify_hook across each video, then cites the strongest examples with get_citation_map."
            Icon={CodeIcon}
          />
          <FeatureCard
            title="Operator Skill"
            body="For clients that support portable agentskills.io skills, Yoink ships a drop-in SKILL.md that teaches the agent how to cite, compare, and analyze YouTube corpora without relearning the workflow."
            Icon={SparkIcon}
          >
            <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
              Open the <SkillLink />.
            </p>
          </FeatureCard>
        </div>
      </Section>

      <InstallCta
        title="Give your agent a local YouTube research layer."
        body="Install Yoink, add the MCP snippet, and let the agent call the corpus instead of guessing from a URL."
      />

      <Section>
        <a
          href={githubUrl}
          className="focus-ring text-xl text-white underline decoration-yoink-orange underline-offset-4"
        >
          Read the source on GitHub.
        </a>
      </Section>
    </PageShell>
  );
}
