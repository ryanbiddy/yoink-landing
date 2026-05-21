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
import { audienceRoutes, launchArticles, mcpTools } from "./v2-data";

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

const v2Highlights = [
  {
    id: "mcp-server",
    title: "MCP server",
    body: "Thirteen local tools your AI agent can call directly, from yoink_video to find_mentions.",
    Icon: CodeIcon,
  },
  {
    id: "yoink-memory",
    title: "Yoink Memory",
    body: "A searchable local library of every corpus you have saved, backed by a local SQLite FTS5 index.",
    Icon: FilterIcon,
  },
  {
    id: "playlist-mode",
    title: "Playlist Mode",
    body: "Batch up to 10 videos from a playlist, tolerate partial failures, cancel mid-flight, and get a combined corpus.",
    Icon: PlayOutlineIcon,
  },
  {
    id: "hook-type",
    title: "Hook Type classification",
    body: "Nine opening-hook categories - curiosity_gap through stakes - with self-calibration from your own library.",
    Icon: SparkIcon,
  },
  {
    id: "comment-intelligence",
    title: "Comment Intelligence",
    body: "Themes, mentioned products, and notable disagreements pulled from the audience layer.",
    Icon: ComputerIcon,
  },
  {
    id: "entity-extraction",
    title: "Entity Extraction",
    body: "Use find_mentions to locate people, tools, products, and topics across your library.",
    Icon: FilterIcon,
  },
];

const productPaths = [
  {
    id: "browser-path",
    eyebrow: "Browser path",
    title: "Click Yoink, paste anywhere.",
    body: "The YouTube page gets a Yoink button. One click copies a markdown corpus to your clipboard with transcripts, comments, metadata, channel context, and up to 12 base64 screenshots for Claude, ChatGPT, or any chat AI.",
    Icon: PlayOutlineIcon,
  },
  {
    id: "agent-path",
    eyebrow: "Agent path",
    title: "Let MCP call Yoink directly.",
    body: "The local Model Context Protocol server exposes 13 tools, so Claude Desktop, Cursor, ChatGPT Desktop, Continue, Cline, and other MCP clients can call yoink_video, classify_hook, analyze_comments, and find_mentions without a paste step.",
    Icon: CodeIcon,
  },
  {
    id: "operator-path",
    eyebrow: "Operator path",
    title: "Drop in the Skill.",
    body: "The portable agentskills.io SKILL.md teaches compatible agents the workflow: citation discipline, hook-autopsy tweet mode, the Hook Type taxonomy, and how to use the MCP tools like an operator.",
    Icon: SparkIcon,
  },
];

const moatCards = [
  {
    id: "bookmark-ux",
    title: "Bookmark UX",
    body: "Capture context where you find it: the YouTube page, playlist, or thumbnail. No dashboard upload loop.",
    Icon: PlayOutlineIcon,
  },
  {
    id: "structured-corpus",
    title: "Structured corpus",
    body: "Yoink packages transcript, screenshots, comments, metadata, channel context, and citations into one markdown file.",
    Icon: DocumentIcon,
  },
  {
    id: "local-first",
    title: "Local-first",
    body: "Your research library stays on your machine. AI features are opt-in and use your own Anthropic key.",
    Icon: LockIcon,
  },
  {
    id: "agent-native",
    title: "Agent-native",
    body: "MCP gives agents 13 tools. The Operator Skill teaches the workflow: hooks, comments, citations, and cross-corpus search.",
    Icon: CodeIcon,
  },
];

const uniqueMoatItems = [
  {
    title: "Cross-corpus search",
    body: 'find_mentions("Karpathy") returns every video in your library that names him, with timestamped citations.',
  },
  {
    title: "Hook Type classification",
    body: "Nine categories of opening, self-calibrated against your own library.",
  },
  {
    title: "Local MCP for YouTube",
    body: "Your agent calls yoink_video and search_yoinks directly - no paste, no upload.",
  },
];

const comparisonColumns = [
  {
    title: "Cloud-AI tools",
    body: "Notebook-style tools can ingest video, but your research corpus lives in someone else's cloud and the workflow stays inside that vendor.",
  },
  {
    title: "Transcript extensions",
    body: "Transcript buttons are useful, but they usually stop at text. Screenshots, comments, channel context, citations, and agent tools are missing.",
  },
  {
    title: "Yoink",
    body: "Local corpus ownership, one-click capture, 13 MCP tools, Operator Skill workflow, Hook Type, Comment Intelligence, and find_mentions across your library.",
  },
];

const installSteps = [
  {
    title: "Download the Windows helper",
    body: "The Chrome extension talks to a 120 MB helper that ships everything you need - no Python install, no command line, no PATH wrangling.",
    Icon: ComputerIcon,
  },
  {
    title: "Sideload the extension for now",
    body: "While the Web Store listing is pending approval, load Yoink-Extension-2.0.0.zip from the same GitHub release in Chrome or any Chromium browser.",
    Icon: PlayOutlineIcon,
  },
  {
    title: "Pick your workflow",
    body: "Paste the corpus into Claude or ChatGPT, or connect your agent with the generated MCP config and let it call Yoink directly.",
    Icon: CodeIcon,
  },
];

const faqItems = [
  {
    question: "Why does Yoink need a helper?",
    answer:
      "The browser extension cannot reliably run yt-dlp, ffmpeg, local file writes, screenshot processing, the SQLite Library Index, or an MCP server by itself. The helper does that work locally and the extension stays thin.",
  },
  {
    question: "Can my agent call Yoink directly?",
    answer:
      "Yes. Yoink v2 includes a local Model Context Protocol server with 13 tools and config snippets for Claude Desktop, Cursor, Continue, and Cline. Any MCP-compatible client can use the same local server shape.",
  },
  {
    question: "Is my API key safe?",
    answer:
      "AI-powered features are optional and use your own Anthropic API key. The key is encrypted at rest by Windows Credential Manager and sent only as the Authorization header on Anthropic API calls.",
  },
  {
    question: "Does Yoink send telemetry?",
    answer:
      "No. Yoink has no analytics, no telemetry, and no remote logging. Core extraction talks to YouTube and your local helper; optional AI analysis talks to Anthropic with your key.",
  },
  {
    question: "What browsers work?",
    answer:
      "Yoink targets Chrome and Chromium-based browsers: Chrome, Edge, Brave, Comet, Opera GX, and Vivaldi. Windows is the supported packaged build today; Mac is planned for v2.1.",
  },
  {
    question: "Free forever - what's the catch?",
    answer:
      "There's no Yoink subscription. The product is MIT-licensed and open source, so even if I stopped working on it tomorrow, your install keeps running and the source is yours to fork. The optional AI features (Hook Type, Comment Intelligence, Entity Extraction) bill your own Anthropic key - Yoink never sits in the middle.",
  },
];

const macLaunchHref =
  "mailto:hello@ryanbiddy.com?subject=Yoink%20Mac%20launch%20list";

const karpathyVideoUrl = "https://www.youtube.com/watch?v=zjkBMFhNj_g";

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
      browserRequirements:
        "Requires Google Chrome or a Chromium browser plus the local Yoink helper.",
      softwareRequirements:
        "Windows helper bundles Python, yt-dlp, ffmpeg, keyring, and MCP SDK.",
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
        "Chrome extension for one-click YouTube-to-AI capture from the video page",
        "Clipboard paste flow for Claude, ChatGPT, and chat AI tools",
        "Structured corpus output with transcripts, screenshots, comments, metadata, channel context, and citations",
        "Local MCP server with 13 callable tools for AI agents",
        "Portable agentskills.io Operator Skill for Claude, Cursor, OpenClaw, and Hermes",
        "Playlist Mode for up to 10 videos",
        "Yoink Memory searchable library backed by local SQLite FTS5",
        "Optional BYO-key Hook Type classification, Comment Intelligence, and Entity Extraction",
      ],
      description: siteDescription,
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#agent-resources`,
      name: "Yoink v2 agent and launch resources",
      itemListElement: [
        ["/agent-docs", "Agent docs for Yoink MCP"],
        ["/install", "Yoink Windows install instructions"],
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

function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 3h8l4 4v14H6V3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h4M9 12h6M9 16h6"
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
  const windowsBase = inverse
    ? "bg-yoink-black text-yoink-orange"
    : "bg-white text-yoink-black";
  const agentBase = inverse
    ? "border border-yoink-black text-yoink-black hover:bg-yoink-black hover:text-yoink-orange"
    : "border border-white/15 text-white hover:border-yoink-orange hover:text-yoink-orange";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={windowsDownloadUrl}
        className={`focus-ring inline-flex w-full items-center justify-center gap-2 px-4 py-4 text-xs font-semibold uppercase transition hover:opacity-90 sm:w-auto sm:gap-3 sm:px-5 sm:text-sm ${windowsBase}`}
      >
        <WindowsIcon className="h-5 w-5" />
        Download for Windows
      </a>
      <Link
        href="/agent-docs"
        className={`focus-ring inline-flex w-full items-center justify-center gap-2 px-4 py-4 text-xs font-semibold uppercase transition sm:w-auto sm:gap-3 sm:px-5 sm:text-sm ${agentBase}`}
      >
        <CodeIcon className="h-5 w-5" />
        Agent docs
      </Link>
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
    <main className="overflow-x-hidden bg-yoink-black text-white">
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
            className="flex w-full flex-wrap items-center justify-start gap-x-4 gap-y-3 text-sm font-medium text-white sm:w-auto sm:justify-end sm:gap-x-5"
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
            <Link href="/install" className="focus-ring transition hover:text-yoink-orange">
              Install
            </Link>
            <Link href="/hooks" className="focus-ring transition hover:text-yoink-orange">
              Hooks
            </Link>
            <a
              href={githubUrl}
              className="focus-ring hidden transition hover:text-yoink-orange sm:inline"
            >
              GitHub
            </a>
          </nav>
        </header>

        <div className="mx-auto max-w-7xl pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
          <Eyebrow>github.com/ryanbiddy/yoink</Eyebrow>
          <h1 className="max-w-6xl break-words font-display text-4xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
            <span className="block">Your YouTube</span>
            <span className="block">bookmark for LLMs</span>
            <span className="block text-yoink-orange">and agents.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
            One click on a YouTube video. Transcript, screenshots, comments,
            and channel context &mdash; structured for Claude or ChatGPT, or
            callable directly by your MCP agent.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
            <div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={windowsDownloadUrl}
                  className="focus-ring inline-flex w-full items-center justify-center gap-2 bg-white px-4 py-4 text-xs font-semibold uppercase text-yoink-black transition hover:opacity-90 sm:w-auto sm:gap-3 sm:px-5 sm:text-sm lg:w-full"
                >
                  <WindowsIcon className="h-5 w-5" />
                  Download for Windows
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-white">
                <span className="block">Yoink-Setup-2.0.0.exe</span>
                <span className="block">Windows 10/11 · ~120 MB</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
                Web Store listing pending approval &mdash; install via direct
                download for now.
              </p>
              <div className="mt-5 space-y-2 text-sm leading-6">
                <Link
                  href="/agent-docs"
                  className="focus-ring block text-white underline decoration-yoink-orange underline-offset-4 transition hover:text-yoink-orange"
                >
                  -&gt; Building an MCP agent? Skip to the config snippets.
                </Link>
                <a
                  href={macLaunchHref}
                  className="focus-ring block text-white underline decoration-yoink-orange underline-offset-4 transition hover:text-yoink-orange"
                >
                  -&gt; On a Mac? Get notified when v2.1 lands.
                </a>
              </div>
            </div>
            <div className="border border-white/12 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Install in 3 steps
              </p>
              <ol className="mt-5 space-y-4 text-base leading-7 text-[#a3a3a3]">
                <li className="flex gap-4">
                  <span className="font-semibold text-yoink-orange">1</span>
                  <span>Download + run the installer (Yoink-Setup-2.0.0.exe).</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold text-yoink-orange">2</span>
                  <span>
                    Install the Chrome extension - sideload
                    Yoink-Extension-2.0.0.zip from the same GitHub release.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold text-yoink-orange">3</span>
                  <span>Click the Y button on any YouTube video.</span>
                </li>
              </ol>
              <Link
                href="/install"
                className="focus-ring mt-6 inline-block text-sm font-semibold uppercase text-white underline decoration-yoink-orange underline-offset-4 transition hover:text-yoink-orange"
              >
                Read sideload instructions
              </Link>
            </div>
          </div>
          <p className="mt-5 text-base text-[#8a8a8a]">
            Free forever. Windows now. Chrome, Edge, Brave, Comet, Opera GX,
            and Vivaldi. Mac in v2.1.{" "}
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
          <Eyebrow>Product paths</Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h2 className="max-w-5xl break-words font-display text-3xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-[96px]">
              Three paths. One local corpus.
            </h2>
            <p className="text-xl leading-9 text-[#a3a3a3]">
              Yoink is not just a Chrome extension and not just an MCP server.
              It is one local YouTube research layer with a browser path for
              paste workflows, an agent path for callable tools, and an
              Operator Skill for disciplined analysis.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productPaths.map(({ id, eyebrow, title, body, Icon }) => (
              <article id={id} key={title} className="border border-white/12 p-6">
                <Icon className="h-9 w-9 text-yoink-orange" />
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  {eyebrow}
                </p>
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <Eyebrow>Competitive moat</Eyebrow>
            <h2 className="max-w-5xl break-words font-display text-3xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-[96px]">
              Not another transcript button.
            </h2>
            <p className="mt-6 max-w-4xl text-xl leading-9 text-[#a3a3a3]">
              Transcript extraction is table stakes. Yoink wins on the layer
              around it: bookmark UX, structured operator analysis, local corpus
              ownership, and agent-native tools that can search, cite, and
              compare your library.
            </p>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-white">
              ChatGPT and Claude can&apos;t see inside YouTube videos. Paste a
              URL and they rely on hallucinated summaries or fail entirely.
              Yoink gives them the actual transcript, frames, comments, and
              channel context.
            </p>
          </div>

          <div className="mt-12 border border-white/12 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Three things no other tool does
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {uniqueMoatItems.map((item) => (
                <div key={item.title} className="border-t border-white/12 pt-5">
                  <h3 className="font-display text-4xl font-bold leading-none text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#a3a3a3]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {moatCards.map(({ id, title, body, Icon }) => (
              <article id={id} key={title} className="border border-white/12 p-6">
                <Icon className="h-9 w-9 text-yoink-orange" />
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {comparisonColumns.map((column) => (
              <article
                key={column.title}
                className={`border p-6 ${
                  column.title === "Yoink"
                    ? "border-yoink-orange bg-yoink-orange text-yoink-black"
                    : "border-white/12"
                }`}
              >
                <h3
                  className={`font-display text-4xl font-bold leading-none ${
                    column.title === "Yoink" ? "text-yoink-black" : "text-white"
                  }`}
                >
                  {column.title}
                </h3>
                <p
                  className={`mt-5 text-base leading-8 ${
                    column.title === "Yoink" ? "text-yoink-black" : "text-[#a3a3a3]"
                  }`}
                >
                  {column.body}
                </p>
              </article>
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden border border-yoink-orange bg-yoink-orange p-6 text-yoink-black sm:p-8 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-4 bg-[repeating-linear-gradient(135deg,rgba(10,10,10,0.28)_0,rgba(10,10,10,0.28)_2px,transparent_2px,transparent_12px)]"
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em]">
              What&apos;s new in V2
            </p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <h2 className="max-w-5xl break-words font-display text-3xl font-bold leading-[1.03] sm:text-6xl lg:text-[96px]">
                Yoink is now the YouTube layer for agents.
              </h2>
              <div>
                <p className="text-xl leading-9">
                  The one-click Chrome extension is still here. V2 adds a local
                  MCP server with 13 callable tools, a portable Operator Skill,
                  Yoink Memory, Playlist Mode, Hook Type classification, Comment
                  Intelligence, Smart Screenshot Picker, and cross-corpus entity
                  search through find_mentions.
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

          <div className="mt-8 border border-white/12 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              MCP tool names
            </p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[#a3a3a3]">
              Agents can discover and call these local Model Context Protocol
              tools directly:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {mcpTools.map(([name]) => (
                <code
                  key={name}
                  className="border border-white/12 bg-black px-3 py-2 text-xs text-white"
                >
                  {name}
                </code>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {v2Highlights.map(({ id, title, body, Icon }) => (
              <article id={id} key={title} className="border border-white/12 p-6">
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
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
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
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
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
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
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
            {/* TODO(Ryan): Add a 6-10 second muted autoplay click-to-paste demo loop under Step 04 once the recording exists. */}
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      <section id="install-reality" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Install reality</Eyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <h2 className="max-w-5xl break-words font-display text-3xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-[88px]">
              One installer, one local research engine.
            </h2>
            <p className="text-xl leading-9 text-[#a3a3a3]">
              The Chrome extension talks to a 120 MB helper that ships
              everything you need - no Python install, no command line, no PATH
              wrangling. One installer, one click.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {installSteps.map(({ title, body, Icon }) => (
              <article key={title} className="border border-white/12 p-6">
                <Icon className="h-9 w-9 text-yoink-orange" />
                <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={windowsDownloadUrl}
              className="focus-ring inline-flex items-center justify-center bg-white px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:opacity-90"
            >
              Download Windows helper
            </a>
            <a
              href={githubUrl}
              className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-4 text-sm font-semibold uppercase text-white transition hover:border-yoink-orange hover:text-yoink-orange"
            >
              View source on GitHub
            </a>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a3a3a3]">
            Windows may flag the installer as &quot;unrecognized
            publisher&quot; - click &quot;More info&quot; -&gt; &quot;Run
            anyway&quot;. Code signing is on the v2.1 roadmap.
          </p>
        </div>
      </section>

      <div className="stripe-divider" />

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Example</Eyebrow>
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            Here&apos;s what your AI sees.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="min-w-0 overflow-hidden border border-white/12 bg-[#0f0f0f] p-4">
              <Image
                src="/karpathy-thumbnail.jpg"
                alt="Andrej Karpathy YouTube talk thumbnail used as the Yoink demo source."
                width={1280}
                height={720}
                className="aspect-video h-auto w-full max-w-full object-cover"
              />
              <p className="mt-4 text-sm text-[#8a8a8a]">
                Demo source:{" "}
                <a
                  href={karpathyVideoUrl}
                  className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
                >
                  Andrej Karpathy&apos;s Intro to Large Language Models talk
                </a>
                .
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
            <h2 className="break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              Your research stays on your machine.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#8a8a8a]">
              Yoink runs locally. No cloud uploads. No accounts. No analytics,
              no telemetry, and no remote logging. Optional Hook Type, Comment
              Intelligence, and Entity Extraction calls go to Anthropic with
              your own API key, encrypted at rest by Windows Credential Manager.
            </p>
            <div className="mt-10 space-y-6">
              {[
                [LockIcon, "No accounts required"],
                [ComputerIcon, "Core extraction runs on your computer"],
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

      <section id="faq" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="max-w-4xl break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
            The practical stuff before you install.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="border border-white/12 p-6">
                <h3 className="font-display text-4xl font-bold leading-none text-white">
                  {item.question}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {item.answer}
                </p>
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
            <h2 className="break-words font-display text-3xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              Tools for the creator-operator era.
            </h2>
          </div>
          <p className="text-xl leading-9 text-[#a3a3a3]">
            I&apos;m Ryan. ReplayRyan is where I build AI-first tools for the
            people doing creator and marketing work in the AI era. Yoink is
            built for the moment when a video is useful but the URL is not
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
          <h2 className="max-w-5xl break-words font-display text-3xl font-bold leading-[1.05] sm:text-6xl lg:text-[96px]">
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
            <Link className="focus-ring hover:text-white" href="/install">
              Install
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
            <Link className="focus-ring hover:text-white" href="/#faq">
              FAQ
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
