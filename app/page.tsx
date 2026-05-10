import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/yoink/placeholder";

const githubUrl = "https://github.com/ryanbiddy/yoink";

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
              Yoink any YouTube video into Claude or ChatGPT - full transcript,
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

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 font-mono text-xs font-extrabold uppercase text-yoink-orange">
              Show, don&apos;t tell
            </p>
            <h2 className="font-display text-5xl font-black leading-none text-white sm:text-6xl lg:text-[84px]">
              Look at what Claude sees.
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-6xl border border-yoink-orange/50 bg-white/[0.035] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-4 lg:mt-20">
            <Image
              src="/yoink-corpus-output.png"
              alt="Placeholder rendering of a structured yoink.md markdown corpus."
              width={1440}
              height={960}
              className="h-auto w-full border border-white/10"
            />
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-yoink-ash sm:text-xl">
            Every yoink: transcript, screenshots, comments, channel context,
            metadata. Already structured.
          </p>
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
