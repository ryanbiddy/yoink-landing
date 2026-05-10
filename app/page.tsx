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

      .play {
        align-items: center;
        background: #EA580C;
        border-radius: 8px;
        display: flex;
        height: 58px;
        justify-content: center;
        width: 82px;
      }

      .play::before {
        border-bottom: 12px solid transparent;
        border-left: 18px solid #0A0A0A;
        border-top: 12px solid transparent;
        content: "";
        margin-left: 5px;
      }

      .label {
        font-size: 14px;
        font-weight: 800;
        left: 24px;
        position: absolute;
        top: 22px;
      }

      .hint {
        bottom: 22px;
        color: rgba(255, 255, 255, 0.68);
        font-size: 13px;
        left: 24px;
        position: absolute;
      }
    </style>
  </head>
  <body>
    <a href="https://www.youtube.com/watch?v=ScMzIvxBSi4" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube placeholder video">
      <span class="label">30-second demo placeholder</span>
      <span class="play" aria-hidden="true"></span>
      <span class="hint">Demo video drops in here</span>
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
    body: "Capture the useful parts of any YouTube video without building a manual research packet.",
    image: "/screenshot-1.png",
    alt: "Yoink one-click capture interface placeholder.",
  },
  {
    title: "Structured 8-section corpus",
    body: "Transcript, key frames, comments, metadata, chapters, links, and context arrive cleanly organized.",
    image: "/screenshot-5.png",
    alt: "Structured Yoink corpus placeholder.",
  },
  {
    title: "Send to Claude or ChatGPT",
    body: "Copy once, paste anywhere, and keep your workflow in the AI tool you already use.",
    image: "/screenshot-2.png",
    alt: "Send to Claude or ChatGPT placeholder.",
  },
];

const comparisons = [
  "Like Glasp, but structured for paste-into-Claude workflows",
  "Like vidIQ, but local and free",
  "Like NotebookLM, but choose your own AI",
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

function SectionHeading({
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-4 text-sm font-semibold uppercase ${
            isDark ? "text-yoink-orange" : "text-yoink-black"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-white" : "text-yoink-black"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            isDark ? "text-white/70" : "text-neutral-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-yoink-black">
      <section className="surface-grid border-b border-neutral-200">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Yoink home" className="focus-ring rounded-md">
            <Image
              src="/logo-dark.png"
              alt="Yoink"
              width={128}
              height={38}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <a
            href={chromeWebStoreUrl}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-yoink-black px-4 py-2.5 text-sm font-bold text-white transition hover:bg-neutral-800"
          >
            Install Free
            <ArrowIcon className="h-4 w-4" />
          </a>
        </header>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase text-yoink-black">
              Free Chrome extension
            </p>
            <h1 className="text-5xl font-black leading-none text-yoink-black sm:text-6xl lg:text-7xl">
              The missing layer between YouTube and your AI.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-700 sm:text-xl sm:leading-9">
              Yoink any YouTube video into Claude or ChatGPT — full transcript,
              screenshots, and metadata in one structured doc.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg border border-neutral-200 bg-yoink-black shadow-soft">
            <div className="aspect-video">
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

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="You found a great YouTube video. Now what?" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problems.map((problem, index) => (
              <article
                key={problem}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-neutral-100 text-sm font-black text-yoink-black">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-black leading-7 text-yoink-black">
                  {problem}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The solution"
            title="One click. Full corpus. Paste anywhere."
            body="Yoink turns a video page into a structured research document that your AI can actually work with."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
              >
                <div className="border-b border-neutral-200 bg-neutral-100">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={960}
                    height={620}
                    className="aspect-[48/31] h-auto w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-yoink-black">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Different from..." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <article
                key={comparison}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xl font-black leading-8 text-yoink-black">
                  {comparison}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-yoink-black px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="Three moves from video to prompt-ready context."
            tone="dark"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map(({ title, body, Icon }, index) => (
              <article
                key={title}
                className="rounded-lg border border-white/15 bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-yoink-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-black text-white/55">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 border-y border-neutral-200 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-yoink-black">
              Built by ReplayRyan
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-yoink-black sm:text-4xl">
              AI-native tools for creator-operators.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600">
            ReplayRyan is a portfolio of practical AI-native tools for people
            who make, publish, research, and operate in public. Yoink is built
            for the moment when a video is useful, but the URL is not enough.{" "}
            <a
              href="https://ryanbiddy.com"
              className="focus-ring rounded-sm font-bold text-yoink-black underline decoration-yoink-orange decoration-2 underline-offset-4"
            >
              Visit ryanbiddy.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black leading-tight text-yoink-black sm:text-5xl">
            Turn the next great video into usable AI context.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={chromeWebStoreUrl}
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-md bg-yoink-orange px-6 py-3.5 text-base font-black text-yoink-black transition hover:bg-orange-500 sm:w-auto"
            >
              Install Yoink Free
              <ArrowIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ryanbiddy/yoink"
              className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-neutral-300 px-6 py-3.5 text-base font-black text-yoink-black transition hover:border-neutral-500 sm:w-auto"
            >
              Open source on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/logo-dark.png"
            alt="Yoink"
            width={104}
            height={31}
            className="h-8 w-auto self-start"
          />
          <nav aria-label="Footer links" className="flex flex-wrap gap-4">
            <Link className="focus-ring rounded-sm hover:text-yoink-black" href="/privacy">
              Privacy
            </Link>
            <a
              className="focus-ring rounded-sm hover:text-yoink-black"
              href="https://github.com/ryanbiddy/yoink"
            >
              GitHub
            </a>
            <a
              className="focus-ring rounded-sm hover:text-yoink-black"
              href="https://x.com/ryanbiddy"
            >
              X
            </a>
            <a
              className="focus-ring rounded-sm hover:text-yoink-black"
              href="mailto:ryan@ryanbiddy.com"
            >
              Email
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
