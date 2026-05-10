import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/yoink/placeholder";

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

const problems = [
  "Copy-pasting transcripts is tedious",
  "Screenshots, comments, and metadata get lost",
  "Your AI gets the URL, but can't watch the video",
];

const features = [
  {
    title: "One-click yoink",
    eyebrow: "Capture",
    body: "Capture the useful parts of any YouTube video without building a manual research packet.",
    image: "/screenshot-1.png",
    alt: "Yoink one-click capture interface placeholder.",
  },
  {
    title: "Structured 8-section corpus",
    eyebrow: "Organize",
    body: "Transcript, key frames, comments, metadata, chapters, links, and context arrive cleanly organized.",
    image: "/screenshot-5.png",
    alt: "Structured Yoink corpus placeholder.",
  },
  {
    title: "Send to Claude or ChatGPT",
    eyebrow: "Paste",
    body: "Copy once, paste anywhere, and keep your workflow in the AI tool you already use.",
    image: "/screenshot-2.png",
    alt: "Send to Claude or ChatGPT placeholder.",
  },
];

const comparisons = [
  {
    competitor: "Glasp",
    copy: "structured for paste-into-Claude workflows",
    full: "Like Glasp, but structured for paste-into-Claude workflows",
  },
  {
    competitor: "vidIQ",
    copy: "local and free",
    full: "Like vidIQ, but local and free",
  },
  {
    competitor: "NotebookLM",
    copy: "choose your own AI",
    full: "Like NotebookLM, but choose your own AI",
  },
];

const steps = [
  {
    title: "Install Yoink",
    body: "Free in Chrome.",
    Icon: ChromeIcon,
  },
  {
    title: "Click yoink",
    body: "Run it on any YouTube video.",
    Icon: ClickIcon,
  },
  {
    title: "Paste anywhere",
    body: "Claude or ChatGPT gets the full context.",
    Icon: PasteIcon,
  },
];

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

function ChromeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M21 12a9 9 0 1 1-4.5-7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M3.8 7.2h8.4m8 0h-8L8 14.5m8.2 3.9L12 11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ClickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M8 3v4M3 8h4m9.6-1.6-2.8 2.8M5.2 18.8 8 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m10 10 8.2 3.1-3.4 1.5 3.4 3.4-2.2 2.2-3.4-3.4-1.5 3.4L8 12c-.4-1.2.8-2.4 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PasteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M9 5h6m-5-2h4a2 2 0 0 1 2 2v1H8V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 6H5.8A1.8 1.8 0 0 0 4 7.8v11.4A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8V7.8A1.8 1.8 0 0 0 18.2 6H17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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

function SectionIntro({
  kicker,
  title,
  body,
}: {
  kicker?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="mb-4 font-mono text-xs font-extrabold uppercase text-yoink-orange">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-lg leading-8 text-yoink-ash">{body}</p>
      ) : null}
    </div>
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
            href={chromeWebStoreUrl}
            className="focus-ring inline-flex items-center gap-2 bg-yoink-orange px-4 py-2.5 font-mono text-xs font-extrabold uppercase text-yoink-black shadow-[4px_4px_0_#FFFFFF] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#FFFFFF]"
          >
            Install Free
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
                v1.0
              </span>
            </div>

            <h1 className="font-display text-6xl font-black leading-[0.86] text-white sm:text-7xl lg:text-[96px] xl:text-[116px]">
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
                href="https://github.com/ryanbiddy/yoink"
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

      <div className="orange-rule" />

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title="You found a great YouTube video. Now what?" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((problem, index) => (
              <article
                key={problem}
                className="border border-yoink-orange/55 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-yoink-orange hover:shadow-brutal"
              >
                <div className="mb-10 font-mono text-sm font-extrabold text-white/45">
                  0{index + 1}
                </div>
                <h3 className="font-display text-2xl font-black leading-8 text-yoink-orange">
                  {problem}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="orange-rule" />

      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="No more context janitor work"
            title="One click. Full corpus. Paste anywhere."
            body="Yoink turns a video page into a structured research document that your AI can actually work with."
          />

          <div className="mt-16 space-y-16 lg:space-y-20">
            {features.map((feature, index) => {
              const reverse = index % 2 === 1;

              return (
                <article
                  key={feature.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div
                    className={`border border-yoink-orange/45 bg-white/[0.035] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5)] ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={960}
                      height={620}
                      className="aspect-[48/31] h-auto w-full border border-white/10 object-cover"
                    />
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <p className="font-mono text-xs font-extrabold uppercase text-yoink-orange">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-4 font-display text-4xl font-black leading-none text-white sm:text-5xl">
                      {feature.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-yoink-ash">
                      {feature.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="orange-rule" />

      <section className="bg-white/[0.025] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              kicker="Different from..."
              title="Same video. Sharper workflow."
            />
            <p className="max-w-md text-lg leading-8 text-yoink-ash">
              Yoink is not trying to be your notes app, SEO dashboard, or AI
              walled garden. It just gets the video into the tool you already
              trust.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <article
                key={comparison.competitor}
                className="group min-w-0 border border-white/12 bg-yoink-black p-6 transition hover:-translate-y-1 hover:border-yoink-orange hover:shadow-brutal"
                aria-label={comparison.full}
              >
                <p className="font-mono text-xs font-extrabold uppercase text-white/45">
                  Like {comparison.competitor}
                </p>
                <div className="mt-8 font-display text-3xl font-black leading-none lg:text-4xl">
                  <span className="block break-words text-white/35">
                    {comparison.competitor}
                  </span>
                  <span className="mt-2 block text-yoink-orange">/ Yoink</span>
                </div>
                <p className="mt-8 text-xl font-bold leading-8 text-white">
                  but {comparison.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="orange-rule" />

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="The whole trick"
            title="Three moves from video to prompt-ready context."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(({ title, body, Icon }, index) => (
              <article key={title} className="relative border-t border-white/15 pt-6">
                <div className="font-mono text-[104px] font-extrabold leading-[0.78] text-yoink-orange sm:text-[128px] lg:text-[144px]">
                  0{index + 1}
                </div>
                <div className="mt-8 flex h-12 w-12 items-center justify-center bg-white text-yoink-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-black text-white">
                  {title}
                </h3>
                <p className="mt-3 text-lg leading-8 text-yoink-ash">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="orange-rule" />

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
                href="https://github.com/ryanbiddy/yoink"
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
          <nav aria-label="Footer links" className="flex flex-wrap gap-4 font-mono text-xs uppercase">
            <Link className="focus-ring hover:text-yoink-orange" href="/privacy">
              Privacy
            </Link>
            <a
              className="focus-ring hover:text-yoink-orange"
              href="https://github.com/ryanbiddy/yoink"
            >
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
