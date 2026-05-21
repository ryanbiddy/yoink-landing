import type { Metadata } from "next";
import {
  ArrowIcon,
  DocumentIcon,
  FeatureCard,
  FilterIcon,
  InstallCta,
  PageHero,
  PageShell,
  PrivacyStrip,
  SearchIcon,
  Section,
  SparkIcon,
  StripeDivider,
} from "../../components/SitePrimitives";
import { starterPrompts } from "../v2-data";

export const metadata: Metadata = {
  title: "Yoink for Creators",
  description:
    "Use Yoink to turn YouTube videos into prompt-ready transcripts, screenshots, comments, and channel context for Claude and ChatGPT.",
  alternates: {
    canonical: "/creators",
  },
};

const flow = [
  {
    title: "Find the video",
    body: "Open the YouTube video, channel, or playlist you already care about.",
    Icon: SearchIcon,
  },
  {
    title: "Click Yoink",
    body: "The extension captures transcript, screenshots, comments, metadata, and channel context.",
    Icon: SparkIcon,
  },
  {
    title: "Paste into AI",
    body: "Send the corpus into Claude or ChatGPT and ask the real question.",
    Icon: ArrowIcon,
  },
  {
    title: "Save the useful stuff",
    body: "Keep the corpus in Yoink Memory so future research starts from your library.",
    Icon: DocumentIcon,
  },
];

export default function CreatorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For creators"
        title="Stop watching videos on 2x to take notes."
        body="One click puts the full transcript, screenshots, comments, and channel context on your clipboard. Paste into Claude or ChatGPT. Ask anything."
        primaryLabel="Install for Chrome"
      />

      <StripeDivider />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Problem story
            </p>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              The good video is never the problem.
            </h2>
          </div>
          <p className="text-xl leading-9 text-[#a3a3a3]">
            The problem is turning a video into material you can actually work
            with. Links are too thin. Notes are too slow. Auto summaries miss
            the screenshots, the comment layer, and the channel context. Yoink
            turns the video into a structured corpus so Claude and ChatGPT can
            reason over the source instead of guessing from a URL.
          </p>
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Four-step flow
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          From video to useful context.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {flow.map(({ title, body, Icon }) => (
            <FeatureCard key={title} title={title} body={body} Icon={Icon} />
          ))}
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Starter prompts
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Eleven ways to start the analysis.
        </h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {starterPrompts.map((prompt) => (
            <div key={prompt} className="border border-white/12 p-4 text-white">
              {prompt}
            </div>
          ))}
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard
            title="Playlist Mode"
            body="Yoink up to 10 videos from a playlist in one job. You get per-video corpora on disk and a combined text corpus for faster pattern work."
            Icon={FilterIcon}
          />
          <FeatureCard
            title="Yoink Memory"
            body="Every useful video becomes part of your local library. Search by title, channel, topic, Hook Type, or the exact idea you remember hearing."
            Icon={SearchIcon}
          />
        </div>
      </Section>

      <InstallCta
        title="Start with the next video you were going to watch anyway."
        body="Install the Chrome extension, run the local helper, and paste better context into Claude and ChatGPT."
      />

      <Section>
        <PrivacyStrip />
      </Section>
    </PageShell>
  );
}
