import type { Metadata } from "next";
import {
  InstallCta,
  PageShell,
  Section,
  StripeDivider,
} from "../../components/SitePrimitives";
import { githubUrl, operatorSkillUrl, siteUrl } from "../site";

const canonicalUrl = "https://ryanbiddy.com/yoink/hooks";
const articleTitle =
  "The 9 YouTube Hook Types - Yoink's Taxonomy, Explained";
const articleDescription =
  "Yoink's research-backed taxonomy of YouTube video hooks. The 9 categories that cover 95%+ of viral openings, with real examples, when each works, and when each fails.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url: canonicalUrl,
    siteName: "Yoink",
    type: "article",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Yoink Hook Type taxonomy for YouTube openings.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

const hookTypes = [
  {
    number: "01",
    name: "Curiosity Gap",
    slug: "curiosity_gap",
    definition:
      "The creator names a result, outcome, or payoff but withholds the mechanism for how it happened.",
    example:
      "MrBeast's \"I Stranded 100 People in the Wilderness.\" Within the first nine seconds, you know the setup: 100 people, survival expert versus amateur, 24 bottles of water. The actual question is withheld until the final stretch.",
    placeholder:
      "Placeholder: embed the MrBeast video and opening-frame screenshot at 0:09.",
    why:
      "Curiosity is one of the few attention spells that survives long runtimes. When the gap feels resolvable inside the video, viewers stay because abandoning the watch feels like losing the answer they already invested in.",
    fails:
      "The gap is too wide, too narrow, resolved too late, or the title-hook contract breaks. \"You'll never guess\" followed by an obvious answer creates backlash.",
    pair:
      "Pairs with Stakes and Promise/List. Rarely pairs with Authority, because credentials work against the mystery frame.",
    prompt:
      "Yoink [URL] and tell me: what's the curiosity gap in the first 15 seconds, when is it resolved, and how does the creator hold tension between those two points?",
  },
  {
    number: "02",
    name: "Question",
    slug: "question",
    definition:
      "A direct second-person question, often the video title verbatim, posed to the viewer in the first sentence.",
    example:
      "Fireship's \"What is JavaScript?\" or \"Why is your code so slow?\" The question is the title and the opening line.",
    placeholder:
      "Placeholder: embed a Fireship video and screenshot of the opening title card.",
    why:
      "A direct question activates the viewer's specific pain. It short-circuits the \"is this for me?\" check: if the question lands, the answer is yes.",
    fails:
      "The question is rhetorical, the answer is obvious, or the question does not match the viewer's lived problem. Generic \"have you ever wondered\" questions usually signal weak audience research.",
    pair:
      "Pairs with Authority and Stakes. Less commonly with Demo.",
    prompt:
      "Yoink [URL] and tell me: how soon does the video answer the question in the hook, and does the answer match what a viewer asking that question would actually need?",
  },
  {
    number: "03",
    name: "Contrarian",
    slug: "contrarian",
    definition:
      "A claim that opposes consensus or conventional wisdom in the niche, stated in the first sentence as the video's thesis.",
    example:
      "\"Stop doing X\" videos, or openings like \"Everyone is wrong about [topic].\" The structure is simple: identify consensus, name it, oppose it.",
    placeholder:
      "Placeholder: embed a contrarian-style video and screenshot of the opening claim.",
    why:
      "Contrarian hooks invite both believers and skeptics. Strong engagement can fire in both directions, which gives this type high top-of-funnel reach.",
    fails:
      "The body does not deliver. A contrarian hook writes the strongest possible IOU. If the body is generic, the viewer feels baited.",
    pair:
      "Pairs with Authority and Story Open. Avoid Promise/List when it flattens the thesis into a generic listicle.",
    prompt:
      "Yoink [URL] and tell me: what consensus does the hook oppose, what evidence does the creator actually bring, and does the body deliver on the contrarian promise?",
  },
  {
    number: "04",
    name: "Story Open",
    slug: "story_open",
    definition:
      "In media res. The creator drops the viewer into a scene already in progress before any context is given.",
    example:
      "Fern documentaries and Casey Neistat-style openings often start with a scene: a time, a place, a character, and motion before explanation.",
    placeholder:
      "Placeholder: embed a Fern documentary or Casey Neistat video and screenshot of the in-media-res frame.",
    why:
      "Narrative tension is the cheapest attention spell in media. The brain treats unfinished stories as open loops that need closure.",
    fails:
      "The story does not tie back to the video's promise, lacks concrete details, or feels manufactured. Story opens are the easiest to fake and the easiest to smell.",
    pair:
      "Pairs with Promise/List and Stakes. Strong in long-form, weaker in short-form.",
    prompt:
      "Yoink [URL] and tell me: what specific details ground the story open, how does the story tie back to the video's actual promise, and does the story feel earned or manufactured?",
  },
  {
    number: "05",
    name: "Promise / List",
    slug: "promise_list",
    definition:
      "The hook names a specific deliverable, usually with a number: \"5 ways to X,\" \"3 mistakes,\" or \"Everything you need to know.\"",
    example:
      "Ali Abdaal's \"5 Books That Changed How I Think,\" or any explicit listicle contract where the viewer knows the scope upfront.",
    placeholder:
      "Placeholder: embed an Ali Abdaal listicle and screenshot of the opening title.",
    why:
      "The viewer knows exactly what they are getting and roughly how long it will take. Specificity reduces watch-skip anxiety.",
    fails:
      "The list is padded, the items are obvious, or the contract is violated. Reliable, but rarely the most novel pattern.",
    pair:
      "Pairs with Demo and Story Open. Avoid Question when listing answers flattens both formats.",
    prompt:
      "Yoink [URL] and tell me: how many items does the hook promise vs how many actually get substantive treatment, and which items feel like filler?",
  },
  {
    number: "06",
    name: "Demo",
    slug: "demo",
    definition:
      "The thing in motion. The hook shows the result, product, or technique working before explanation.",
    example:
      "Marques Brownlee opening with the unboxed phone already in hand. Linus Tech Tips opening with the rig already running. A software tutorial showing the output before the explanation.",
    placeholder:
      "Placeholder: embed an MKBHD or LTT video and screenshot of the opening demo frame.",
    why:
      "Visual proof bypasses the verbal-attention check. The viewer sees the result before deciding whether the explanation is worth it.",
    fails:
      "The demo needs context the viewer does not have, is misleadingly cropped, or is too short to register before words start.",
    pair:
      "Pairs with Curiosity Gap and Authority. Less commonly with Stakes.",
    prompt:
      "Yoink [URL] and tell me: what does the demo show in the first 10 seconds, what context does it omit, and would the demo work if I knew nothing about the topic?",
  },
  {
    number: "07",
    name: "Authority",
    slug: "authority",
    definition:
      "The hook establishes the creator's credibility, credential, or unusual position before the content begins.",
    example:
      "Andrew Huberman opening with a neuroscience credential, or \"Senior engineer at Google explains...\" The credential is the hook.",
    placeholder:
      "Placeholder: embed an Andrew Huberman or similar authority-led video and screenshot of the credential statement.",
    why:
      "Authority works when the credential is specific, rare, and relevant to the topic. It changes the hook from \"watch this\" to \"this source is unusually qualified.\"",
    fails:
      "The credential is generic, borrowed, unverifiable, or unrelated to the topic. Authority does not transfer automatically across domains.",
    pair:
      "Pairs with Contrarian and Question. Less commonly with Story Open.",
    prompt:
      "Yoink [URL] and tell me: what credential does the hook establish, is it specific and rare or generic, and does the body actually leverage the credential?",
  },
  {
    number: "08",
    name: "Stakes",
    slug: "stakes",
    definition:
      "The hook names the cost of inaction, the size of the consequence, or the risk of being on the wrong side of the topic.",
    example:
      "\"If you don't fix this in your code, you'll get fired.\" Security, finance, health, and career content often use this pattern because consequences are already believable.",
    placeholder:
      "Placeholder: embed a stakes-led video and screenshot of the opening warning frame.",
    why:
      "Loss-framed urgency activates harder than gain-framed reward. The brain processes \"you may lose X\" with more intensity than \"you may gain X.\"",
    fails:
      "The stakes feel manufactured, do not apply to the viewer, or soften in the body. Overusing stakes burns out the audience's threat detection.",
    pair:
      "Pairs with Question and Promise/List. Less commonly with Story Open.",
    prompt:
      "Yoink [URL] and tell me: what stakes does the hook name, are they real or manufactured, and does the body deliver a way to address them?",
  },
  {
    number: "09",
    name: "Other",
    slug: "other",
    definition:
      "Hooks that do not fit cleanly into any of the eight categories above. Often the most original openings live here.",
    example:
      "Multi-creator collab openings, abstract visual sequences, music-led openings, philosophical koans, or format-breaking openings like silence or a static image.",
    placeholder:
      "Placeholder: collect examples that deserve their own future category.",
    why:
      "Any taxonomy claiming 100% coverage of a creative space is hiding edge cases. Other is the honesty bucket and the incubator for future categories.",
    fails:
      "Other becomes lazy when a hook plausibly fits one of the eight named types but the classifier avoids making the call.",
    pair:
      "Pairs unpredictably. That is part of why these openings end up in Other.",
    prompt:
      "Yoink [URL] and tell me: which named hook type comes closest to fitting this opening, and what specifically prevents it from fitting?",
  },
];

const agentPrompts = [
  {
    title: "Single video",
    body: "Yoink a video and ask Claude or ChatGPT to classify the hook. You get the category, the reason, and citations back to the opening moment.",
  },
  {
    title: "Single creator, multiple videos",
    body: "Yoink a creator's last 10 videos and ask which hook types the channel uses most. The pattern across the catalog is where the actual lesson lives.",
  },
  {
    title: "Competitor playlist",
    body: "Yoink a competitor's playlist and ask for a hook-type breakdown with view counts, comment themes, and outlier videos.",
  },
  {
    title: "Your back catalog",
    body: "Yoink your own videos and find which hook types you never try. The missing category is often the next experiment.",
  },
];

const relatedIdeas = [
  "How to build a private YouTube research corpus for Claude and ChatGPT",
  "MCP for YouTube research: 13 local tools your agent can call",
  "Comment Intelligence: how to mine YouTube comments for product and content ideas",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: articleTitle,
  description: articleDescription,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  author: {
    "@type": "Person",
    name: "Ryan Biddy",
    url: "https://ryanbiddy.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ReplayRyan",
    url: "https://ryanbiddy.com",
  },
  image: `${siteUrl}/og-image.png`,
  articleSection: "YouTube hooks and AI research",
  keywords: [
    "YouTube hook types",
    "YouTube hooks",
    "Hook taxonomy",
    "Yoink",
    "Claude YouTube analysis",
    "ChatGPT YouTube analysis",
    "AI content research",
  ],
  about: hookTypes.map((hook) => hook.name),
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

function PromptBlock({ prompt }: { prompt: string }) {
  return (
    <details className="group mt-6 border border-white/12 bg-black">
      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
        Try this prompt
      </summary>
      <pre className="overflow-x-auto whitespace-pre-wrap border-t border-white/12 p-4 font-mono text-xs leading-6 text-[#d4d4d4]">
        {prompt}
      </pre>
    </details>
  );
}

export default function HooksPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
      <article>
        <section className="px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Canonical taxonomy
            </p>
            <h1 className="max-w-6xl font-display text-6xl font-bold leading-[1.03] text-white sm:text-7xl md:text-[96px] lg:text-[118px]">
              The 9 YouTube Hook Types - Yoink&apos;s Taxonomy, Explained
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#a3a3a3]">
              The first ten to fifteen seconds of a YouTube video decide whether
              someone watches the rest. Every creator knows this. Very few can
              explain why their hooks work when they do.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["9", "named hook types"],
                ["95%+", "openings covered"],
                ["BYO key", "optional AI analysis"],
                ["MIT", "open-source tool"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/12 p-5">
                  <p className="font-display text-5xl font-bold leading-none text-yoink-orange">
                    {value}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#a3a3a3]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <nav
              aria-label="Hook type jump links"
              className="mt-8 flex flex-wrap gap-3"
            >
              {hookTypes.map((hook) => (
                <a
                  key={hook.slug}
                  href={`#${hook.slug}`}
                  className="focus-ring border border-white/12 px-3 py-2 font-mono text-xs text-white transition hover:border-yoink-orange hover:text-yoink-orange"
                >
                  {hook.slug}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <StripeDivider />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
            <aside className="hidden border border-white/12 p-5 lg:sticky lg:top-6 lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Article map
              </p>
              <nav className="mt-5 space-y-3 text-sm text-[#a3a3a3]">
                <a className="block hover:text-white" href="#how-built">
                  How we built it
                </a>
                <a className="block hover:text-white" href="#hook-types">
                  The 9 hook types
                </a>
                <a className="block hover:text-white" href="#use-with-yoink">
                  Use it with Yoink
                </a>
                <a className="block hover:text-white" href="#related-ideas">
                  Next articles
                </a>
              </nav>
            </aside>

            <div className="min-w-0">
              <section className="border border-white/12 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  Agent-readable summary
                </p>
                <div className="mt-5 grid gap-4 text-base leading-8 text-[#a3a3a3] md:grid-cols-2">
                  <p>
                    Yoink&apos;s Hook Type taxonomy classifies YouTube openings
                    into nine categories: curiosity_gap, question, contrarian,
                    story_open, promise_list, demo, authority, stakes, and other.
                  </p>
                  <p>
                    The taxonomy is useful for creator benchmarking, competitive
                    research, agent workflows, and Claude or ChatGPT analysis of
                    YouTube corpora.
                  </p>
                </div>
              </section>

              <section className="mt-12 space-y-6 text-xl leading-9 text-[#a3a3a3]">
                <p>
                  Most hook advice online is vibes: generic encouragement to
                  grab attention without explaining what makes one hook
                  outperform another in a specific niche, with a specific
                  audience, at a specific runtime.
                </p>
                <p>
                  We built Yoink to make hooks legible. Instead of treating each
                  opening as a one-off, Yoink classifies every hook into one of
                  nine categories: names them, defines them, and surfaces
                  patterns across a creator&apos;s whole catalog. The pattern
                  across the catalog is the part nobody usually gets to see.
                </p>
                <p>
                  This page is the canonical reference for the taxonomy. Each of
                  the nine types includes its definition, a working example, the
                  structural reason it succeeds, the failure modes that kill it,
                  the hooks it pairs with in high-performing videos, and a Claude
                  or ChatGPT prompt you can run with Yoink to test it on a real
                  video.
                </p>
                <p>
                  It is free to use, cite, and reference. The taxonomy is open.
                  The tool that runs it is open-source.
                </p>
              </section>

              <section id="how-built" className="mt-20">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                  Method
                </p>
                <h2 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
                  How we built the taxonomy
                </h2>
                <div className="mt-8 space-y-6 text-xl leading-9 text-[#a3a3a3]">
                  <p>
                    We sampled hooks across eight creator genres: tutorials,
                    vlogs, essays, documentaries, news, gaming, lifestyle, and
                    business. We iterated the category set until nine types
                    covered more than 95% of openings without forcing a fit.
                  </p>
                  <p>
                    The ninth category, Other, is deliberate. Any taxonomy
                    claiming 100% coverage is hiding edge cases. Some of the most
                    original hooks live in Other and eventually graduate into
                    their own type when the pattern becomes common enough to
                    name.
                  </p>
                  <p>
                    The classifier is self-calibrating. When you disagree with
                    how Yoink classifies a hook, you correct it. The correction
                    is stored locally and injected into future classifications as
                    a few-shot anchor, so the classifier learns your taxonomy
                    judgments over time.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <div id="hook-types">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              The taxonomy
            </p>
            <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              The 9 hook types
            </h2>
          </div>

          <div className="mt-14 space-y-8">
            {hookTypes.map((hook) => (
              <section
                key={hook.slug}
                id={hook.slug}
                className="scroll-mt-8 border border-white/12 p-6 sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
                  <div>
                    <p className="font-mono text-sm font-semibold text-yoink-orange">
                      {hook.number} / {hook.slug}
                    </p>
                    <h3 className="mt-5 font-display text-5xl font-bold leading-none text-white sm:text-6xl">
                      {hook.name}
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-[#a3a3a3]">
                      {hook.definition}
                    </p>
                    <div className="mt-8 border border-white/12 bg-[#0f0f0f] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                        Example slot
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#a3a3a3]">
                        {hook.placeholder}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                        Working example
                      </p>
                      <p className="mt-3 text-base leading-8 text-[#a3a3a3]">
                        {hook.example}
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border border-white/12 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                          Why it works
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#a3a3a3]">
                          {hook.why}
                        </p>
                      </div>
                      <div className="border border-white/12 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                          When it fails
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#a3a3a3]">
                          {hook.fails}
                        </p>
                      </div>
                    </div>
                    <div className="border border-white/12 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                        Pair-with
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#a3a3a3]">
                        {hook.pair}
                      </p>
                    </div>
                    <PromptBlock prompt={hook.prompt} />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Section>

        <StripeDivider />

        <Section>
          <div id="use-with-yoink">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
              Run the analysis
            </p>
            <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
              How to use this with Yoink
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {agentPrompts.map((prompt) => (
              <div key={prompt.title} className="border border-white/12 p-6">
                <h3 className="font-display text-4xl font-bold leading-none text-white">
                  {prompt.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#a3a3a3]">
                  {prompt.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <InstallCta
          title="Use Yoink to run hook autopsies yourself."
          body="Install Yoink for the Chrome extension plus local helper on Windows. Mac in v2.1. Or use the Operator Skill and MCP server directly from your AI agent."
        />

        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            <a
              href={githubUrl}
              className="focus-ring border border-white/12 p-6 transition hover:border-yoink-orange"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Open source
              </p>
              <p className="mt-5 text-lg leading-8 text-white">
                Yoink is MIT-licensed. Read, fork, or contribute on GitHub.
              </p>
            </a>
            <a
              href={operatorSkillUrl}
              className="focus-ring border border-white/12 p-6 transition hover:border-yoink-orange"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Operator Skill
              </p>
              <p className="mt-5 text-lg leading-8 text-white">
                Drop SKILL.md into Claude, Cursor, OpenClaw, Hermes, or another
                Agent Skills-compatible client.
              </p>
            </a>
            <div
              id="related-ideas"
              className="border border-white/12 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yoink-orange">
                Next articles
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#a3a3a3]">
                {relatedIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </article>
    </PageShell>
  );
}
