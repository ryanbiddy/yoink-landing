import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { AiAnalysisCarousel } from "../components/AiAnalysisCarousel";
import { RoadmapWaitlistSection } from "../components/RoadmapWaitlistSection";

const githubUrl = "https://github.com/ryanbiddy/yoink";
const windowsDownloadUrl =
  "https://chromewebstore.google.com/detail/yoink/placeholder";

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
      <div className="relative h-[60px] w-[260px] max-w-full overflow-hidden border border-white/18 bg-[#111]">
        <Image
          src="/youtube-yoink-controls-crop.png"
          alt="Yoink button inside the YouTube video controls row."
          width={260}
          height={60}
          className="h-auto w-full"
        />
        <div
          aria-hidden="true"
          className="absolute left-[70px] top-[6px] h-[48px] w-[112px] rounded-full border-2 border-yoink-orange shadow-[0_0_0_2px_rgba(234,88,12,0.38),0_0_16px_rgba(234,88,12,0.92),inset_0_0_12px_rgba(234,88,12,0.25)]"
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
      src: "/logo-claude-mark.jpg",
      alt: "Claude",
      className: "scale-110",
    },
    {
      src: "/logo-chatgpt-mark.webp",
      alt: "ChatGPT",
      className: "scale-[1.12]",
    },
    {
      src: "/logo-claude-mark.jpg",
      alt: "Claude Code",
      className: "scale-110",
    },
    {
      src: "/logo-chatgpt-mark.webp",
      alt: "Codex",
      className: "scale-[1.12]",
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-6 right-6 top-1/2 h-px bg-gradient-to-r from-transparent via-yoink-orange/50 to-transparent"
      />
      <div className="relative flex items-center justify-center gap-2 sm:gap-3">
        {logos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className={`flex h-11 w-11 items-center justify-center overflow-hidden border bg-black shadow-[0_0_24px_rgba(0,0,0,0.45)] ${
              index % 2 === 0
                ? "border-yoink-orange/70 shadow-[0_0_20px_rgba(234,88,12,0.22)]"
                : "border-white/25"
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={64}
              height={64}
              className={`h-full w-full object-cover ${logo.className}`}
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
        aria-disabled="true"
        className={`inline-flex cursor-not-allowed items-center justify-center gap-3 px-5 py-4 text-sm font-semibold uppercase ${macBase}`}
      >
        <AppleIcon className="h-5 w-5" />
        Download for Mac
        <span className="text-[10px] font-bold uppercase">Coming soon</span>
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
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
            <BrandLockup />
          </Link>
          <a
            href={githubUrl}
            className="focus-ring text-sm font-medium text-white transition hover:text-yoink-orange"
          >
            GitHub
          </a>
        </header>

        <div className="mx-auto max-w-7xl pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
          <Eyebrow>github.com/ryanbiddy/yoink</Eyebrow>
          <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
            <span className="text-yoink-orange">Yoink</span> turns YouTube into
            prompt-ready context for any AI.
          </h1>
          <div className="mt-10">
            <DownloadButtons />
          </div>
          <p className="mt-5 text-base text-[#8a8a8a]">
            Free forever.{" "}
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

      <RoadmapWaitlistSection />

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
