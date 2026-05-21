import Image from "next/image";
import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  chromeInstallUrl,
  githubUrl,
  operatorSkillUrl,
  windowsDownloadUrl,
} from "../app/site";
import { audienceRoutes, launchArticles } from "../app/v2-data";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
      {children}
    </p>
  );
}

export function StripeDivider() {
  return <div className="stripe-divider" />;
}

export function BrandLockup({ footer = false }: { footer?: boolean }) {
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
      <span className={`font-serif text-white ${footer ? "text-2xl" : "text-3xl"}`}>
        Yoink
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-10">
      <Link href="/" aria-label="Yoink home" className="focus-ring rounded-sm">
        <BrandLockup />
      </Link>
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 text-sm font-medium text-white"
      >
        {audienceRoutes.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring transition hover:text-yoink-orange"
          >
            {link.href.slice(1)[0].toUpperCase() + link.href.slice(2)}
          </Link>
        ))}
        <Link href="/agent-docs" className="focus-ring transition hover:text-yoink-orange">
          Agent docs
        </Link>
        <Link href="/hooks" className="focus-ring transition hover:text-yoink-orange">
          Hooks
        </Link>
        <a href={githubUrl} className="focus-ring transition hover:text-yoink-orange">
          GitHub
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#8a8a8a] md:grid-cols-[1fr_1.5fr_1fr] md:items-end">
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
  );
}

export function LaunchArticleGrid({
  currentHref,
}: {
  currentHref?: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {launchArticles
        .filter((article) => article.href !== currentHref)
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
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-5 py-20 sm:px-8 sm:py-28 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="bg-yoink-black text-white">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  primaryLabel = "Install for Chrome",
  secondaryLabel = "View on GitHub",
  secondaryHref = githubUrl,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-36 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">{body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={chromeInstallUrl}
            className="focus-ring inline-flex items-center justify-center bg-white px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:opacity-90"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="focus-ring inline-flex items-center justify-center border border-white/15 px-5 py-4 text-sm font-semibold uppercase text-white transition hover:border-yoink-orange hover:text-yoink-orange"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function FeatureCard({
  Icon,
  title,
  body,
  children,
}: {
  Icon?: IconComponent;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <article className="border border-white/12 p-6">
      {Icon ? <Icon className="h-9 w-9 text-yoink-orange" /> : null}
      <h3 className="mt-8 font-display text-4xl font-bold leading-none text-white">
        {title}
      </h3>
      {body ? <p className="mt-5 text-base leading-8 text-[#a3a3a3]">{body}</p> : null}
      {children}
    </article>
  );
}

export function PrivacyStrip() {
  return (
    <div className="border border-white/12 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
        Local first
      </p>
      <p className="mt-4 text-lg leading-8 text-[#a3a3a3]">
        Yoink runs on your machine. AI features are opt-in and use your own
        Anthropic key. No accounts, no cloud upload pipeline, no tracking pixels.
      </p>
    </div>
  );
}

export function InstallCta({
  title = "Turn the next great video into usable AI context.",
  body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-yoink-orange px-5 py-20 text-yoink-black sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-black">
          Install Yoink
        </p>
        <h2 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-[96px]">
          {title}
        </h2>
        {body ? <p className="mt-6 max-w-3xl text-xl leading-9">{body}</p> : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={chromeInstallUrl}
            className="focus-ring inline-flex items-center justify-center bg-yoink-black px-5 py-4 text-sm font-semibold uppercase text-yoink-orange transition hover:opacity-90"
          >
            Install for Chrome
          </a>
          <a
            href={githubUrl}
            className="focus-ring inline-flex items-center justify-center border border-yoink-black px-5 py-4 text-sm font-semibold uppercase text-yoink-black transition hover:bg-yoink-black hover:text-yoink-orange"
          >
            Open source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
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

export function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 5.2 10.8 4v7.5H3V5.2Z" fill="currentColor" />
      <path d="m12.2 3.8 8.8-1.3v9h-8.8V3.8Z" fill="currentColor" />
      <path d="M3 12.8h7.8V20L3 18.8v-6Z" fill="currentColor" />
      <path d="M12.2 12.8H21v8.7l-8.8-1.3v-7.4Z" fill="currentColor" />
    </svg>
  );
}

export function DownloadButtons({ inverse = false }: { inverse?: boolean }) {
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

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
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

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
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

export function FilterIcon(props: SVGProps<SVGSVGElement>) {
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

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 4 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4h6v6H4V4ZM14 4h6v6h-6V4ZM4 14h6v6H4v-6ZM14 14h6v6h-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComputerIcon(props: SVGProps<SVGSVGElement>) {
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

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM16 16l5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
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

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SkillLink() {
  return (
    <a
      href={operatorSkillUrl}
      className="focus-ring text-white underline decoration-yoink-orange underline-offset-4"
    >
      SKILL.md raw view
    </a>
  );
}
