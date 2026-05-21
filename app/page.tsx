import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { AiAnalysisCarousel } from "../components/AiAnalysisCarousel";
import {
  agentDocsUrl,
  githubUrl,
  siteDescription,
  siteUrl,
  windowsDownloadUrl,
} from "./site";
import { audienceRoutes, launchArticles } from "./v2-data";

const steps = [
  {
    number: "01",
    title: "Find a video",
    body: "Any YouTube video, channel, or playlist.",
    Visual: YouTubeStepVisual,
  },
  {
    number: "02",
    title: "Click Yoink",
    body: "One button under every video. Right-click thumbnails too.",
    Visual: YoinkButtonVisual,
  },
  {
    number: "03",
    title: "Get the corpus",
    body: "Transcript, screenshots, comments, channel context - all structured.",
    Visual: CorpusLabelsVisual,
  },
  {
    number: "04",
    title: "Send to your AI",
    body: "Claude. ChatGPT. Whatever you already use.",
    Visual: AiLogosVisual,
  },
];

const useCases = [
  {
    title: "Creators benchmarking their niche",
    body: "Yoink an entire competitor's channel. Drop the corpus into Claude and ChatGPT. Ask: 'What hooks are working? What pacing patterns? What thumbnails convert?' Pattern recognition that used to take days, now in one paste.",
    Icon: SparkIcon,
  },
  {
    title: "Developers learning from talks",
    body: "Watching a Karpathy lecture and want to implement what he's explaining? Yoink the video, paste into Claude and ChatGPT, ask them to walk through the implementation step by step. Your AI becomes a tutor for the video.",
    Icon: CodeIcon,
  },
  {
    title: "Researchers who don't have time to watch",
    body: "Stack of 30-minute videos you'll 'get to later'? Yoink them, paste the corpora into Claude and ChatGPT, ask for the parts that matter. Watch only the videos that survive the filter.",
    Icon: FilterIcon,
  },
];

const v2Highlights = [
  {
    title: "MCP server",
    body: "Thirteen local tools your AI agent can call directly, from yoink_video to find_mentions.",
    Icon: CodeIcon,
  },
  {
    title: "Yoink Memory",
    body: "A searchable local library of every corpus you have saved, indexed for fast recall.",
    Icon: FilterIcon,
  },
  {
    title: "Playlist Mode",
    body: "Batch up to 10 videos from a playlist and get a combined corpus without babysitting tabs.",
    Icon: PlayOutlineIcon,
  },
  {
    title: "Hook Type classification",
    body: "Nine opening-hook categories with self-calibration when you correct the classifier.",
    Icon: SparkIcon,
  },
  {
    title: "Comment Intelligence",
    body: "Themes, mentioned products, and notable disagreements pulled from the audience layer.",
    Icon: ComputerIcon,
  },
  {
    title: "Entity Extraction",
    body: "Use find_mentions to locate people, tools, products, and topics across your library.",
    Icon: FilterIcon,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ReplayRyan",
      url: "https://ryanbiddy.com",
      founder: {
        "@type": "Person",
        name: "Ryan Biddy",
        url: "https://ryanbiddy.com",
      },
      sameAs: ["https://x.com/ryanbiddy", githubUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Yoink",
      url: siteUrl,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#launch-page`,
      name: "Yoink v2 launch page",
      url: siteUrl,
      description: siteDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#software`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#software`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Yoink",
      alternateName: "Yoink by ReplayRyan",
      applicationCategory: "BrowserApplication",
      applicationSubCategory: "Chrome extension",
      operatingSystem: "Windows",
      browserRequirements: "Requires Google Chrome or a Chromium browser.",
      softwareVersion: "2.0",
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      screenshot: [
        `${siteUrl}/screenshot-1.png`,
        `${siteUrl}/screenshot-2.png`,
        `${siteUrl}/screenshot-5.png`,
      ],
      codeRepository: githubUrl,
      downloadUrl: windowsDownloadUrl,
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@id": `${siteUrl}/#organization`,
      },
      featureList: [
        "Chrome extension for one-click YouTube-to-AI capture",
        "Local MCP server with 13 callable tools for AI agents",
        "Portable Operator Skill for Claude, Cursor, OpenClaw, and Hermes",
        "Yoink Memory searchable library with full-text search",
        "Optional BYO-key Hook Type, Comment Intelligence, and Entity Extraction",
      ],
      description: siteDescription,
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#agent-resources`,
      name: "Yoink v2 agent and launch resources",
      itemListElement: [
        ["/agent-docs", "Agent docs for Yoink MCP"],
        ["/agents", "Yoink for AI Agents"],
        ["/hooks", "The 9 YouTube Hook Types"],
        ["/getting-started", "Getting started with Yoink and Claude Code"],
        ["/local-first", "Why Yoink is local-first"],
        ["/channel-audit", "The 10-video channel audit"],
        ["/llms.txt", "Yoink llms.txt"],
      ].map(([path, name], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: `${siteUrl}${path}`,
      })),
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase text-yoink-orange">
      {children}
    </p>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16.8 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6 0 0-2.7-1-2.7-3.7Z"
        fill="currentColor"
      />
      <path
        d="M14.7 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.8-1 2.8 1 0 2-.5 2.7-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 5.2 10.8 4v7.5H3V5.2Z" fill="currentColor" />
      <path d="m12.2 3.8 8.8-1.3v9h-8.8V3.8Z" fill="currentColor" />
      <path d="M3 12.8h7.8V20L3 18.8v-6Z" fill="currentColor" />
      <path d="M12.2 12.8H21v8.7l-8.8-1.3v-7.4Z" fill="currentColor" />
    </svg>
  );
}

function YouTubeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 90 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M87.9 10c-1-3.9-4.1-6.9-8-8C72.8 0 45 0 45 0S17.2 0 10.1 2c-3.9 1.1-7 4.1-8 8C.2 17.1.2 32 .2 32s0 14.9 1.9 22c1 3.9 4.1 6.9 8 8 7.1 2 34.9 2 34.9 2s27.8 0 34.9-2c3.9-1.1 7-4.1 8-8 1.9-7.1 1.9-22 1.9-22s0-14.9-1.9-22Z"
        fill="#FF0000"
      />
      <path d="M36 45.7 59.2 32 36 18.3v27.4Z" fill="white" />
    </svg>
  );
}

function YouTubeStepVisual() {
  return (
    <div className="relative w-full max-w-[245px] overflow-hidden border border-white/12 bg-black">
      <Image
        src="/karpathy-thumbnail.jpg"
        alt=""
        width={320}
        height={180}
        className="aspect-video w-full object-cover"
      />
      <div className="absolute right-2 top-2 flex h-7 w-10 items-center justify-center bg-black/80">
        <YouTubeLogo className="h-4 w-auto" />
      </div>
    </div>
  );
}

function YoinkButtonVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="relative h-[72px] w-[177px] max-w-full overflow-hidden border border-white/18 bg-[#111]">
        <Image
          src="/youtube-yoink-controls-crop.png"
          alt="Yoink button inside the YouTube video controls row."
          width={236}
          height={96}
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="absolute left-[4px] top-[8px] h-[56px] w-[168px] rounded-full border-2 border-yoink-orange shadow-[0_0_0_2px_rgba(234,88,12,0.32),0_0_16px_rgba(234,88,12,0.86),inset_0_0_10px_rgba(234,88,12,0.2)]"
        />
      </div>
    </div>
  );
}

function CorpusLabelsVisual() {
  const labels = [
    "Metadata",
    "Transcript",
    "Screenshots",
    "Comments",
    "Channel context",
  ];

  return (
    <div className="w-full max-w-[220px] overflow-hidden border border-white/12 bg-[#090909]">
      <div className="border-b border-white/10 px-4 py-1.5 text-[10px] font-semibold text-white">
        filename.md
      </div>
      <div className="px-4 py-2">
        {labels.map((label, index) => (
          <div
            key={label}
            className={`py-0.5 font-mono text-[10px] font-semibold leading-4 text-yoink-orange ${
              index === labels.length - 1 ? "" : "border-b border-white/10"
            }`}
          >
            # {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function AiLogosVisual() {
  const logos = [
    {
      src: "/claude-logo-original.jpg",
      alt: "Claude",
    },
    {
      src: "/chatgpt-logo-original.webp",
      alt: "ChatGPT",
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-transparent via-yoink-orange/60 to-transparent"
      />
      <div className="relative flex items-center justify-center gap-5">
        {logos.map((logo, index) => (
          <div
            key={logo.alt}
            className={`flex h-24 w-24 items-center justify-center overflow-hidden border bg-black p-1.5 shadow-[0_0_28px_rgba(0,0,0,0.5)] ${
              index === 0
                ? "border-yoink-orange/70 shadow-[0_0_24px_rgba(234,88,12,0.2)]"
                : "border-white/25"
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m10 9 5 3-5 3V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 10V7a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12v10H6V10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 14v2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ComputerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 5h16v11H4V5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 20h6M12 16v4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 8-4 4 4 4M15 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14l-5.5 6v5l-3 1.5V12L5 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-mark-color.png"
        alt=""
        width={footer ? 24 : 32}
        height={footer ? 24 : 32}
        className={footer ? "h-6 w-6" : "h-8 w-8"}
        priority={!footer}
      />
      <span
        className={`font-serif text-white ${
          footer ? "text-2xl" : "text-3xl"
        }`}
      >
        Yoink
      </span>
    </span>
  );
}

function DownloadButtons({ inverse = false }: { inverse?: boolean }) {
  const macBase = inverse
    ? "bg-yoink-black/80 text-yoink-orange/65"
    : "border border-white/15 bg-white/[0.04] text-white/55";
  const windowsBase = inverse
    ? "bg-yoink-black text-yoink-orange"
    : "bg-white text-yoink-black";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`inline-flex cursor-not-allowed items-center justify-center gap-3 px-5 py-4 text-sm font-semibold uppercase ${macBase}`}
      >
        <AppleIcon className="h-5 w-5" />
        Download for Mac
        <span className="text-[10px] font-bold uppercase">Mac in v2.1</span>
      </button>
      <a
        href={windowsDownloadUrl}
        className={`focus-ring inline-flex items-center justify-center gap-3 px-5 py-4 text-sm font-semibold uppercase transition hover:opacity-90 ${windowsBase}`}
      >
        <WindowsIcon className="h-5 w-5" />
        Download for Windows
      </a>
    </div>
  );
}

function DemoFrame() {
  return (
    <div className="relative overflow-hidden border border-white/15 bg-[#0f0f0f] p-3 sm:p-5">
      <div className="aspect-video border border-white/10 bg-yoink-black">
        <div className="flex h-full items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yoink-orange text-yoink-orange">
            <PlayOutlineIcon className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-yoink-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
            <BrandLockup />
          </Link>
          <nav
            aria-label="Primary"
            className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-sm font-medium text-white"
          >
            <Link href="/creators" className="focus-ring transition hover:text-yoink-orange">
              Creators
            </Link>
            <Link href="/agents" className="focus-ring transition hover:text-yoink-orange">
              Agents
            </Link>
            <Link href="/research" className="focus-ring transition hover:text-yoink-orange">
              Research
            </Link>
            <Link href="/agent-docs" className="focus-ring transition hover:text-yoink-orange">
              Agent docs
            </Link>
            <Link href="/hooks" className="focus-ring transition hover:text-yoink-orange">
              Hooks
            </Link>
            <a
              href={githubUrl}
              className="focus-ring transition hover:text-yoink-orange"
            >
              GitHub
            </a>
          </nav>
        </header>

        <div className="mx-auto max-w-7xl pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
          <Eyebrow>github.com/ryanbiddy/yoink</Eyebrow>
          <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
            <span className="text-yoink-orange">Yoink</span> turns YouTube into
            prompt-ready context for any AI.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
            Use the Chrome extension when you want one-click capture for Claude
            and ChatGPT, the local MCP server when your agent needs 13 callable
            YouTube tools, or the Operator Skill when Claude, Cursor, OpenClaw,
            or Hermes needs the workflow preloaded.
          </p>
          <div className="mt-10">
            <DownloadButtons />
          </div>
          <p className="mt-5 text-base text-[#8a8a8a]">
            Free forever. Local-first. AI features are opt-in and bring your own
            key.{" "}
            <a
              href={githubUrl}
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              Open source on GitHub.
            </a>
          </p>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-yoink-orange bg-yoink-orange p-6 text-yoink-black sm:p-8 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-4 bg-[repeating-linear-gradient(135deg,rgba(10,10,10,0.28)_0,rgba(10,10,10,0.28)_2px,transparent_2px,transparent_12px)]"
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em]">
              What&apos;s new in V2
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <h2 className="max-w-5xl font-display text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-[96px]">
                Yoink is now the YouTube layer for agents.
              </h2>
              <div>
                <p className="text-xl leading-9">
                  The one-click Chrome extension is still here. V2 adds a local
                  MCP server with 13 callable tools, a portable Operator Skill,
                  Yoink Memory, Playlist Mode, Hook Type classification, Comment
                  Intelligence, and cross-corpus entity search.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/agent-docs"
                    className="focus-ring inline-flex items-center justify-center bg-yoink-black px-5 py-4 text-sm font-semibold uppercase text-yoink-orange transition hover:opacity-90"
                  >
                    Agent docs
                  </Link>
                  <a
                    href={agentDocsUrl}
                    className="focus-ring inline-flex items-center justify-center border border-yoink-black px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:bg-yoink-black hover:text-yoink-orange"
                  >
                    GitHub MCP docs
                  </a>
                  <Link
                    href="/llms.txt"
                    className="focus-ring inline-flex items-center justify-center border border-yoink-black px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:bg-yoink-black hover:text-yoink-orange"
                  >
                    llms.txt
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border border-white/12 p-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Agent-readable product facts
              </p>
              <h3 className="mt-5 font-display text-4xl font-bold leading-none text-white">
                Crawl this first.
              </h3>
            </div>
            <dl className="grid gap-5 text-sm leading-7 text-[#a3a3a3] md:grid-cols-2">
              {[
                ["What is Yoink?", "A local-first YouTube-to-AI corpus tool for Claude, ChatGPT, and AI agents."],
                ["Primary interfaces", "Chrome extension, local MCP server, and portable Operator Skill."],
                ["Agent tools", "13 MCP tools for extraction, search, comments, hooks, citations, health, and entity mentions."],
                ["Privacy model", "Core extraction runs locally. AI features are opt-in and bring-your-own Anthropic key."],
              ].map(([term, description]) => (
                <div key={term}>
                  <dt className="font-semibold text-white">{term}</dt>
                  <dd className="mt-1">{description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {v2Highlights.map(({ title, body, Icon }) => (
              <article key={title} className="border border-white/12 p-6">
                <Icon className="h-9 w-9 text-yoink-orange" />
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">{body}</p>
              </article>
            ))}
          </div>

          <Link
            href="/hooks"
            className="focus-ring mt-8 block border border-white/12 p-6 transition hover:border-yoink-orange"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Canonical guide
            </p>
            <p className="mt-4 font-display text-4xl font-bold leading-none text-white">
              Read the 9 YouTube Hook Types - Yoink&apos;s taxonomy, explained.
            </p>
            <p className="mt-4 text-base leading-8 text-[#a3a3a3]">
              Built for creators, researchers, and AI agents that need a shared
              language for video openings.
            </p>
          </Link>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {launchArticles
              .filter((article) => article.href !== "/hooks")
              .map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="focus-ring group border border-white/12 p-6 transition hover:border-yoink-orange"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                    Launch guide
                  </p>
                  <h3 className="mt-6 font-display text-4xl font-bold leading-none text-white">
                    {article.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                    {article.body}
                  </p>
                  <p className="mt-8 text-sm font-semibold uppercase text-white group-hover:text-yoink-orange">
                    Read article
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Choose your path</Eyebrow>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Which one are you?
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audienceRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="focus-ring group border border-white/12 p-6 transition hover:border-yoink-orange"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  {route.href.replace("/", "")}
                </p>
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {route.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {route.body}
                </p>
                <p className="mt-8 text-sm font-semibold uppercase text-white group-hover:text-yoink-orange">
                  Open route
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Demo</Eyebrow>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            How Yoink works
          </h2>
          <div className="mt-12">
            <DemoFrame />
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            From video to context in one click.
          </h2>

          <div className="relative mt-14">
            <div className="absolute left-8 right-8 top-12 hidden h-px bg-white/15 lg:block" />
            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map(({ number, title, body, Visual }) => (
                <article key={number} className="relative bg-yoink-black">
                  <div className="mb-8 flex h-44 items-center justify-center overflow-hidden border border-white/12 bg-[#0f0f0f] p-4">
                    <Visual />
                  </div>
                  <p className="text-sm font-semibold text-yoink-orange">
                    {number}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-bold leading-none text-white">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#8a8a8a]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Example</Eyebrow>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Here&apos;s what your AI sees.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="min-w-0 overflow-hidden border border-white/12 bg-[#0f0f0f] p-4">
              <Image
                src="/karpathy-thumbnail.jpg"
                alt="Placeholder thumbnail for Andrej Karpathy's Intro to Large Language Models talk."
                width={1280}
                height={720}
                className="aspect-video h-auto w-full max-w-full object-cover"
              />
              <p className="mt-4 text-sm text-[#8a8a8a]">
                Placeholder source: an AI-relevant YouTube talk.
              </p>
            </div>

            <div className="min-w-0 border border-white/12 bg-[#0f0f0f] p-5">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <p className="min-w-0 break-all text-sm font-semibold text-white">
                  karpathy-intro-to-large-language-models.md
                </p>
                <p className="text-xs font-semibold uppercase text-yoink-orange">
                  structured corpus
                </p>
              </div>
              <div className="space-y-5 text-sm leading-6">
                {[
                  ["Metadata", "Title, channel, URL, duration, chapters."],
                  ["Transcript", "Timestamped transcript with clean sections."],
                  ["Screenshots", "Key frames paired with timestamps."],
                  ["Comments", "Top comments and audience signals."],
                  ["Channel context", "Creator metadata and related videos."],
                ].map(([title, body]) => (
                  <div key={title} className="grid grid-cols-[120px_1fr] gap-4">
                    <p className="font-semibold text-yoink-orange">{title}</p>
                    <p className="text-[#a3a3a3]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <AiAnalysisCarousel />
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Private by design</Eyebrow>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              Your research stays on your machine.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#8a8a8a]">
              Yoink runs locally. No cloud uploads. No accounts. No tracking.
              Your videos, transcripts, and analyses never leave your hardware
              unless you choose to send them somewhere.
            </p>
            <div className="mt-10 space-y-6">
              {[
                [LockIcon, "No accounts required"],
                [ComputerIcon, "Runs entirely on your computer"],
                [CodeIcon, "Open source on GitHub"],
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-4">
                  <Icon className="h-7 w-7 text-yoink-orange" />
                  <p className="text-lg text-white">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Built for deep work</Eyebrow>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Three ways people use Yoink today.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {useCases.map(({ title, body, Icon }) => (
              <article key={title} className="border border-white/12 p-6">
                <Icon className="h-9 w-9 text-yoink-orange" />
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Built by ReplayRyan</Eyebrow>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              AI-native tools for creator-operators.
            </h2>
          </div>
          <p className="text-xl leading-9 text-[#a3a3a3]">
            I&apos;m Ryan. ReplayRyan is my portfolio of AI-native tools for the
            people doing creator and marketing work in the AI era. Yoink is the
            first. Built for the moment when a video is useful but the URL is not
            enough.{" "}
            <a
              href="https://ryanbiddy.com"
              className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
            >
              Visit ryanbiddy.com.
            </a>
          </p>
        </div>
      </section>

      <section className="bg-yoink-orange px-5 py-20 text-yoink-black sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase text-yoink-black">
            Download Yoink
          </p>
          <h2 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-[96px]">
            Turn the next great video into usable AI context.
          </h2>
          <div className="mt-10">
            <DownloadButtons inverse />
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#8a8a8a] md:grid-cols-3 md:items-end">
          <div>
            <BrandLockup footer />
            <p className="mt-2">by ReplayRyan</p>
          </div>
          <nav
            aria-label="Footer links"
            className="flex flex-wrap gap-5 md:justify-center"
          >
            <Link className="focus-ring hover:text-white" href="/creators">
              Creators
            </Link>
            <Link className="focus-ring hover:text-white" href="/agents">
              Agents
            </Link>
            <Link className="focus-ring hover:text-white" href="/research">
              Research
            </Link>
            <Link className="focus-ring hover:text-white" href="/agent-docs">
              Agent docs
            </Link>
            <Link className="focus-ring hover:text-white" href="/hooks">
              Hooks
            </Link>
            <Link className="focus-ring hover:text-white" href="/local-first">
              Local-first
            </Link>
            <Link className="focus-ring hover:text-white" href="/getting-started">
              Getting started
            </Link>
            <Link className="focus-ring hover:text-white" href="/channel-audit">
              Channel audit
            </Link>
            <Link className="focus-ring hover:text-white" href="/privacy">
              Privacy
            </Link>
            <a className="focus-ring hover:text-white" href={githubUrl}>
              GitHub
            </a>
            <a className="focus-ring hover:text-white" href="https://x.com/ryanbiddy">
              X (@ryanbiddy)
            </a>
          </nav>
          <p className="md:text-right">Copyright 2026 ReplayRyan.</p>
        </div>
      </footer>
    </main>
  );
}
