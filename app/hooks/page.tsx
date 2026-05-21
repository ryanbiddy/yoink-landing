import type { Metadata } from "next";
import {
  FeatureCard,
  InstallCta,
  PageHero,
  PageShell,
  Section,
  SparkIcon,
  StripeDivider,
} from "../../components/SitePrimitives";
import { hookTypes } from "../v2-data";

export const metadata: Metadata = {
  title: "Hook Type Deep Dive",
  description:
    "A practical guide to Yoink's 9 Hook Type categories for analyzing YouTube openings with Claude, ChatGPT, and local agents.",
  alternates: {
    canonical: "/hooks",
  },
};

const agentPrompts = [
  "Run classify_hook on this video and explain the exact line where the hook becomes clear.",
  "Yoink this creator's last 10 videos and give me a Hook Type breakdown with examples.",
  "Analyze this competitor playlist. Which hook types repeat, and which videos underperform the pattern?",
  "Audit my back catalog. Find the openings that should be rewritten as curiosity_gap, demo, or stakes.",
];

export default function HooksPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hook Type"
        title="The first 8 seconds are not vibes."
        body="Yoink classifies YouTube openings into 9 Hook Type categories so creators, researchers, and agents can compare what actually keeps attention."
        primaryLabel="Install for Chrome"
      />

      <StripeDivider />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Intro
            </p>
            <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              Watch-through starts before the video settles in.
            </h2>
          </div>
          <div className="space-y-6 text-xl leading-9 text-[#a3a3a3]">
            <p>
              Most YouTube analysis talks about hooks like taste. This opening
              feels strong. That opening feels slow. The advice is usually true
              enough to sound useful and soft enough to be hard to apply.
            </p>
            <p>
              Yoink treats the first seconds as a structure problem. A video is
              either opening a question, proving a result, creating stakes,
              challenging consensus, telling a story, or doing something else
              identifiable. Once that pattern has a name, Claude and ChatGPT can
              compare videos without inventing a new framework every time.
            </p>
            <p>
              Hook Type is optional and BYO-key. When enabled, Yoink reads the
              title, description, first transcript segment, and comment signal,
              then writes a Hook Analysis block into the corpus. Correct it once
              and Yoink stores the correction locally so future classifications
              can calibrate to the way you think.
            </p>
          </div>
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Taxonomy
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Built from practical creator analysis.
        </h2>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
          The taxonomy was built to classify real YouTube openings, not to win a
          copywriting argument. It favors categories an agent can detect from the
          source material. It is also self-calibrating: user corrections become
          local examples for future Hook Type calls.
        </p>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          The 9 hook types
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          A shared language for openings.
        </h2>
        {/* TODO: Replace these provisional definitions with extension/lib/hook-taxonomy.json if the taxonomy is mirrored into this repo. */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hookTypes.map((hook) => (
            <article key={hook.slug} className="border border-white/12 p-6">
              <p className="font-mono text-sm font-semibold text-yoink-orange">
                {hook.slug}
              </p>
              <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                {hook.definition}
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-[#a3a3a3]">
                <p>
                  <span className="font-semibold text-white">Why it works:</span>{" "}
                  {hook.why}
                </p>
                <p>
                  <span className="font-semibold text-white">When it fails:</span>{" "}
                  {hook.fails}
                </p>
                <p>
                  <span className="font-semibold text-white">Pair with:</span>{" "}
                  {hook.pair}
                </p>
              </div>
              <pre className="mt-6 overflow-x-auto whitespace-pre-wrap bg-black p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
                {hook.prompt}
              </pre>
            </article>
          ))}
        </div>
      </Section>

      <StripeDivider />

      <Section>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
          Use it with Yoink
        </p>
        <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Four agent prompts worth keeping.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {agentPrompts.map((prompt) => (
            <FeatureCard key={prompt} title="Try this prompt" Icon={SparkIcon}>
              <pre className="mt-5 overflow-x-auto whitespace-pre-wrap bg-black p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
                {prompt}
              </pre>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <InstallCta
        title="Install Yoink or drop in the Operator Skill."
        body="Classify one video, compare a playlist, or audit a back catalog with the same local corpus."
      />
    </PageShell>
  );
}
