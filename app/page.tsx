import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/yoink/placeholder";

const githubUrl = "https://github.com/ryanbiddy/yoink";

const journeySteps = [
  {
    number: "01",
    title: "Find a video",
    description: "Any YouTube video, channel, or playlist.",
    image: "/step-find-video.png",
    alt: "Simplified YouTube video page mockup.",
  },
  {
    number: "02",
    title: "Click Yoink",
    description: "One button under every video. Right-click thumbnails too.",
    image: "/step-click-yoink.png",
    alt: "Close-up mockup of the Yoink button with the orange Y mark.",
  },
  {
    number: "03",
    title: "Get the corpus",
    description:
      "Transcript, screenshots, comments, channel context - already structured.",
    image: "/step-corpus.png",
    alt: "Structured corpus document mockup with section labels.",
  },
  {
    number: "04",
    title: "Paste anywhere",
    description: "Claude, ChatGPT, Notion - wherever you're working.",
    image: "/step-paste-anywhere.png",
    alt: "Simple Claude, ChatGPT, and Notion destination icons.",
  },
];

const youtubePlaceholder = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        height: 100%;
        margin: 0;
        background: #0A0A0A;
        font-family: Inter, Arial, sans-serif;
      }

      a {
        align-items: center;
        color: #FFFFFF;
        display: flex;
        height: 100%;
        justify-content: center;
        position: relative;
        text-decoration: none;
      }

      .frame {
        position: absolute;
        inset: 18px;
        border: 1px solid rgba(234, 88, 12, 0.45);
      }

      .play {
        align-items: center;
        background: #EA580C;
        box-shadow: 7px 7px 0 #FFFFFF;
        display: flex;
        height: 64px;
        justify-content: center;
        width: 92px;
      }

      .play::before {
        border-bottom: 13px solid transparent;
        border-left: 20px solid #0A0A0A;
        border-top: 13px solid transparent;
        content: "";
        margin-left: 5px;
      }

      .label,
      .hint,
      .time {
        font-family: "JetBrains Mono", ui-monospace, monospace;
        font-size: 12px;
        font-weight: 800;
        position: absolute;
        text-transform: uppercase;
      }

      .label {
        left: 30px;
        top: 28px;
      }

      .hint {
        bottom: 28px;
        color: rgba(255, 255, 255, 0.68);
        left: 30px;
      }

      .time {
        bottom: 28px;
        color: #EA580C;
        right: 30px;
      }
    </style>
  </head>
  <body>
    <a href="https://www.youtube.com/watch?v=ScMzIvxBSi4" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube placeholder video">
      <span class="frame" aria-hidden="true"></span>
      <span class="label">Demo placeholder</span>
      <span class="play" aria-hidden="true"></span>
      <span class="hint">30 seconds goes here</span>
      <span class="time">00:30</span>
    </a>
  </body>
</html>`;

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12v10H6V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 14v2"
        stroke="currentColor"
        strokeWidth="1.8"
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
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 20h6M12 16v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.6a8.4 8.4 0 0 0-2.7 16.35c.42.08.57-.18.57-.4v-1.42c-2.33.5-2.82-1-2.82-1-.38-.96-.93-1.22-.93-1.22-.76-.52.06-.5.06-.5.84.06 1.28.86 1.28.86.75 1.27 1.95.9 2.42.69.08-.54.3-.9.54-1.11-1.86-.21-3.82-.93-3.82-4.15 0-.91.33-1.66.86-2.25-.09-.21-.37-1.07.08-2.22 0 0 .7-.23 2.3.86A7.9 7.9 0 0 1 12 7.8c.71 0 1.43.1 2.1.29 1.6-1.09 2.3-.86 2.3-.86.45 1.15.17 2.01.08 2.22.54.59.86 1.34.86 2.25 0 3.23-1.96 3.93-3.83 4.14.3.26.57.78.57 1.57v2.14c0 .22.15.49.58.4A8.4 8.4 0 0 0 12 3.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandLockup({ small = false }: { small?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-mark-color.png"
        alt=""
        width={small ? 24 : 32}
        height={small ? 24 : 32}
        className={small ? "h-6 w-6" : "h-8 w-8"}
        priority={!small}
      />
      <span
        className={`font-display font-black text-white ${
          small ? "text-lg" : "text-2xl"
        }`}
      >
        Yoink
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-yoink-black text-white">
      <section className="dark-grid grain relative isolate border-b border-yoink-orange">
        <Image
          src="/logo-mark-color.png"
          alt=""
          width={320}
          height={320}
          priority
          className="pointer-events-none absolute -right-20 top-36 -z-10 h-72 w-72 rotate-12 opacity-10 sm:h-96 sm:w-96"
        />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
            <BrandLockup />
          </Link>
          <a
            href={githubUrl}
            className="focus-ring inline-flex items-center gap-2 border border-yoink-orange/60 px-4 py-2.5 font-mono text-xs font-extrabold uppercase text-white transition hover:-translate-y-0.5 hover:border-yoink-orange hover:bg-yoink-orange hover:text-yoink-black"
          >
            GitHub
            <ArrowIcon className="h-4 w-4" />
          </a>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10">
          <div className="relative max-w-6xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs font-extrabold uppercase text-white">
                <span className="h-2 w-2 rounded-full bg-yoink-orange" />
                by ReplayRyan
              </span>
              <span className="-rotate-2 bg-white px-3 py-2 font-mono text-xs font-extrabold uppercase text-yoink-black shadow-brutal">
                Yoink v1.0
              </span>
            </div>

            <h1 className="font-display text-6xl font-black leading-[0.9] text-white sm:text-7xl lg:text-[92px] xl:text-[112px]">
              The missing layer between YouTube and your{" "}
              <span className="marker-underline text-yoink-orange">AI.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-yoink-ash sm:text-2xl sm:leading-10">
              Yoink any YouTube video into Claude and ChatGPT - full transcript,
              screenshots, and metadata in one structured doc.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={chromeWebStoreUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 bg-yoink-orange px-6 py-4 font-mono text-sm font-extrabold uppercase text-yoink-black shadow-brutalWhite transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#FFFFFF]"
              >
                Install Yoink Free
                <ArrowIcon className="h-5 w-5" />
              </a>
              <a
                href={githubUrl}
                className="focus-ring inline-flex items-center justify-center border border-yoink-orange/60 px-6 py-4 font-mono text-sm font-extrabold uppercase text-white transition hover:-translate-y-1 hover:border-yoink-orange hover:bg-yoink-orange hover:text-yoink-black"
              >
                Open source
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl -rotate-1 border-2 border-yoink-orange bg-neutral-950 p-3 shadow-brutal sm:p-4">
            <div className="absolute -right-4 -top-4 z-10 bg-yoink-orange px-3 py-2 font-mono text-xs font-extrabold uppercase text-yoink-black shadow-[4px_4px_0_#FFFFFF]">
              30 sec
            </div>
            <div className="aspect-video overflow-hidden border border-white/10">
              <iframe
                className="h-full w-full"
                srcDoc={youtubePlaceholder}
                title="Yoink demo placeholder"
                loading="lazy"
                sandbox="allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-[84px]">
              From YouTube to your AI in one click.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-yoink-ash">
              No copy-pasting. No tab switching. No lost context.
            </p>
          </div>

          <div className="relative mt-14 lg:mt-20">
            <div className="absolute left-8 right-8 top-[84px] hidden h-px bg-yoink-orange/55 lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {journeySteps.map((step) => (
                <article
                  key={step.number}
                  className="relative border border-yoink-orange/45 bg-white/[0.035] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-baseline gap-4 lg:block">
                    <p className="font-mono text-5xl font-extrabold leading-none text-yoink-orange">
                      {step.number}
                    </p>
                    <h3 className="font-display text-2xl font-black text-white lg:mt-5">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 min-h-12 text-base leading-6 text-yoink-ash">
                    {step.description}
                  </p>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={820}
                    height={560}
                    loading="eager"
                    className="mt-6 h-auto w-full border border-white/10"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-yoink-orange/80 px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-[76px]">
            Your research stays on your machine.
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-lg leading-8 text-yoink-ash sm:text-xl">
            Yoink runs locally on your computer. No cloud uploads. No accounts.
            No tracking. Your videos, transcripts, and analyses never leave your
            hardware unless you choose to send them somewhere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap">
            <p className="inline-flex items-center gap-2 font-mono text-sm font-extrabold uppercase text-white">
              <LockIcon className="h-5 w-5 text-yoink-orange" />
              No accounts required
            </p>
            <p className="inline-flex items-center gap-2 font-mono text-sm font-extrabold uppercase text-white">
              <ComputerIcon className="h-5 w-5 text-yoink-orange" />
              Runs entirely on your computer
            </p>
            <a
              href={githubUrl}
              className="focus-ring inline-flex items-center gap-2 font-mono text-sm font-extrabold uppercase text-white transition hover:text-yoink-orange"
            >
              <GitHubIcon className="h-5 w-5 text-yoink-orange" />
              Open source on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <h2 className="font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-[76px]">
              Built for deep research.
            </h2>
            <p className="mt-6 text-lg leading-8 text-yoink-ash sm:text-xl">
              Yoink was built for the people who actually work with YouTube
              content all day - content strategists decoding what&apos;s working
              in their niche, founders researching competitors, AI builders
              prototyping with real source material, creators studying patterns
              in their space.
            </p>
            <p className="mt-8 text-lg leading-8 text-white">
              A creator studying how others in their niche structure videos can
              yoink an entire channel in minutes. The corpus goes straight to
              Claude and ChatGPT, who pull patterns across hooks, pacing, and
              storytelling structure. What used to take hours of manual
              note-taking now happens in one paste.
            </p>
          </div>

          <div className="border border-yoink-orange/45 bg-white/[0.035] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-4">
            <Image
              src="/usecase-research-prompt.png"
              alt="Corpus pasted into Claude and ChatGPT with a visible research prompt."
              width={1440}
              height={920}
              loading="eager"
              className="h-auto w-full border border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Image
          src="/logo-mark-color.png"
          alt=""
          width={180}
          height={180}
          className="pointer-events-none absolute bottom-10 right-8 h-28 w-28 rotate-12 opacity-20 sm:h-44 sm:w-44"
        />
        <div className="mx-auto grid max-w-6xl gap-10 border border-yoink-orange/45 bg-white/[0.035] p-6 sm:p-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="font-mono text-xs font-extrabold uppercase text-yoink-orange">
              Built by ReplayRyan
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
              AI-native tools for creator-operators.
            </h2>
          </div>
          <p className="text-lg leading-8 text-yoink-ash">
            I&apos;m Ryan. ReplayRyan is my portfolio of AI-native tools for
            creators and marketers. Yoink is the first. It is built for the
            moment when a video is useful, but the URL is not enough.{" "}
            <a
              href="https://ryanbiddy.com"
              className="focus-ring font-bold text-yoink-orange underline decoration-white decoration-2 underline-offset-4"
            >
              Visit ryanbiddy.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-yoink-orange px-5 py-20 text-yoink-black sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs font-extrabold uppercase">
            Stop feeding your AI starving links
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="font-display text-5xl font-black leading-none sm:text-6xl lg:text-[88px]">
              Turn the next great video into usable AI context.
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <a
                href={chromeWebStoreUrl}
                className="focus-ring inline-flex items-center justify-center gap-2 bg-yoink-black px-6 py-4 font-mono text-sm font-extrabold uppercase text-white shadow-[6px_6px_0_#FFFFFF] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_#FFFFFF]"
              >
                Install Yoink Free
                <ArrowIcon className="h-5 w-5" />
              </a>
              <a
                href={githubUrl}
                className="focus-ring inline-flex items-center justify-center border-2 border-yoink-black px-6 py-4 font-mono text-sm font-extrabold uppercase transition hover:-translate-y-1 hover:bg-white"
              >
                Open source on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-yoink-ash sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
            <BrandLockup small />
          </Link>
          <nav
            aria-label="Footer links"
            className="flex flex-wrap gap-4 font-mono text-xs uppercase"
          >
            <Link className="focus-ring hover:text-yoink-orange" href="/privacy">
              Privacy
            </Link>
            <a className="focus-ring hover:text-yoink-orange" href={githubUrl}>
              GitHub
            </a>
            <a className="focus-ring hover:text-yoink-orange" href="https://x.com/ryanbiddy">
              X
            </a>
            <a className="focus-ring hover:text-yoink-orange" href="mailto:ryan@ryanbiddy.com">
              Email
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
