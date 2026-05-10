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

function AnthropicMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClaudeMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        fill="currentColor"
      />
    </svg>
  );
}

function OpenAIMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654 2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
        fill="currentColor"
      />
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
    <div className="relative h-[92px] w-full max-w-[270px] overflow-hidden border border-white/12 bg-[#111]">
      <Image
        src="/youtube-yoink-controls.png"
        alt="Yoink button inside the YouTube video controls row."
        fill
        sizes="270px"
        className="object-cover"
        style={{ objectPosition: "86% center" }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[106px] top-[39px] h-[41px] w-[104px] rounded-full border border-yoink-orange shadow-[0_0_0_3px_rgba(234,88,12,0.32),0_0_28px_rgba(234,88,12,0.9)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-2 right-8 h-px w-10 bg-yoink-orange shadow-[0_0_12px_rgba(234,88,12,0.9)]"
      >
        <span className="absolute -right-0.5 -top-[3px] h-2 w-2 rotate-45 border-r border-t border-yoink-orange" />
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

function AiLogoMark({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-black/35">
      <span className="flex h-7 w-7 items-center justify-center">
        {children}
      </span>
    </div>
  );
}

function AiLogosVisual() {
  return (
    <div
      className="flex w-full max-w-[260px] items-center justify-center gap-3"
      aria-label="Claude, ChatGPT, Claude Code, and Codex"
    >
      <AiLogoMark>
        <ClaudeMarkIcon className="h-7 w-7 text-[#D97757]" />
      </AiLogoMark>
      <AiLogoMark>
        <OpenAIMarkIcon className="h-7 w-7 text-white" />
      </AiLogoMark>
      <AiLogoMark>
        <AnthropicMarkIcon className="h-7 w-7 text-[#D97757]" />
      </AiLogoMark>
      <AiLogoMark>
        <OpenAIMarkIcon className="h-7 w-7 text-white" />
      </AiLogoMark>
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
