import Link from "next/link";
import type { Metadata } from "next";
import {
  FeatureCard,
  FilterIcon,
  GridIcon,
  InstallCta,
  LayersIcon,
  PageHero,
  PageShell,
  PrivacyStrip,
  SearchIcon,
  Section,
  SparkIcon,
  StripeDivider,
} from "../../components/SitePrimitives";

export const metadata: Metadata = {
  title: "Yoink for Research",
  description:
    "Use Yoink to build a private searchable corpus of YouTube videos for research, competitive intel, content strategy, and podcast prep.",
  alternates: {
    canonical: "/research",
  },
};

const useCases = [
  {
    title: "Competitive intel",
    body: "Yoink competitor videos and playlists, then ask Claude and ChatGPT what claims, hooks, offers, and objections keep repeating.",
    Icon: SearchIcon,
  },
  {
    title: "Content strategy",
    body: "Study pacing, packaging, comment themes, and hook types across the channels your audience already watches.",
    Icon: SparkIcon,
  },
  {
    title: "Niche research",
    body: "Turn scattered YouTube viewing into a private corpus you can search, cite, and revisit.",
    Icon: GridIcon,
  },
  {
    title: "Podcast prep",
    body: "Build a source pack before the interview so your AI can find claims, names, tools, and unanswered questions.",
    Icon: LayersIcon,
  },
];

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For research"
        title="Build a private corpus of every video that matters in your space. Search it like text."
        body="Yoink plus the Library Index turns YouTube into a queryable knowledge base your AI can actually reason over."
        primaryLabel="Install for Chrome"
      />

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Use cases
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Research starts when the videos become searchable.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {useCases.map(({ title, body, Icon }) => (
            <FeatureCard key={title} title={title} body={body} Icon={Icon} />
          ))}
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Topic folders + Memory"
            body="Yoink sorts videos into topic folders and indexes the library locally. search_yoinks turns that library into a fast recall layer for agents."
            Icon={SearchIcon}
          />
          <FeatureCard
            title="Entity Extraction"
            body="Lead with find_mentions. Ask where a founder, product, tool, company, or topic appears across the corpus, then jump back to the exact video context."
            Icon={FilterIcon}
          />
          <FeatureCard
            title="Comment Intelligence"
            body="Audience research is in the comments. Yoink clusters themes, mentioned products, and disagreements so you can see what the market argues about."
            Icon={SparkIcon}
          />
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeatureCard
            title="Hook Type as strategy"
            body="Classify openings across 9 hook categories, then compare what a creator says they are doing against what the audience rewards."
            Icon={LayersIcon}
          >
            <Link
              href="/hooks"
              className="focus-ring mt-6 inline-flex text-white underline decoration-yoink-orange underline-offset-4"
            >
              Read the Hook Type deep dive.
            </Link>
          </FeatureCard>
          <FeatureCard
            title="Playlist Mode"
            body="Batch up to 10 videos at a time. Build the corpus first, then let Claude and ChatGPT decide what deserves human attention."
            Icon={GridIcon}
          />
        </div>
      </Section>

      <InstallCta
        title="Build the corpus before you build the opinion."
        body="Yoink the videos, search the library, and give Claude and ChatGPT the source material."
      />

      <Section>
        <PrivacyStrip />
      </Section>
    </PageShell>
  );
}
