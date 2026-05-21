"use client";

import { useEffect, useState } from "react";

const analysisPairs = [
  {
    label: "HOOK TYPE OUTPUT",
    question:
      "classify_hook on the Karpathy demo",
    response:
      "Yoink classifies the opening as curiosity_gap. The hook names the payoff - understanding what large language models are doing - while withholding the mechanism until the model predicts, compresses, and recombines internet-scale text. The strongest cited moment is 0:47, where the gap becomes concrete enough for an agent to reason from it.",
  },
  {
    label: "COMMENT INTELLIGENCE",
    question:
      "analyze_comments on the same corpus",
    response:
      "Yoink clusters the audience layer into implementation requests, scaling-law questions, and compression metaphors. Mentioned tools and concepts include transformers, tokenization, RLHF, GPUs, and PyTorch. Notable disagreements center on whether next-token prediction is enough to call the system understanding.",
  },
  {
    label: "ENTITY LOOKUP",
    question:
      "find_mentions(\"RLHF\") across the library",
    response:
      "Yoink returns every saved corpus where RLHF appears, with the video title, topic folder, snippet, and citation map. That is the library effect: each yoink becomes part of a searchable local research base your agent can query later.",
  },
];

export function AiAnalysisCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePair = analysisPairs[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % analysisPairs.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 text-center">
      <p className="mb-5 text-xs font-semibold uppercase text-yoink-orange">
        AI analysis
      </p>

      <div className="mx-auto max-w-4xl border border-white/12 bg-[#0f0f0f] p-6 text-left sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase text-yoink-orange">
          {activePair.label}
        </p>
        <p className="mt-5 font-display text-3xl font-semibold italic leading-tight text-white sm:text-4xl">
          {activePair.question}
        </p>
        <p className="mt-6 text-base leading-8 text-[#a3a3a3] sm:text-lg">
          {activePair.response}
        </p>
      </div>

      <div className="mt-5 flex justify-center gap-2" aria-label="AI analysis examples">
        {analysisPairs.map((pair, index) => (
          <button
            key={pair.label}
            type="button"
            aria-label={`Show ${pair.label.toLowerCase()} example`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className="flex h-6 w-6 items-center justify-center rounded-full"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "bg-yoink-orange" : "bg-white/35"
              }`}
            />
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-[#8a8a8a]">
        From YouTube URL to working AI analysis in one click. Read the{" "}
        <a
          href="/hooks"
          className="text-white underline decoration-yoink-orange underline-offset-4"
        >
          Hook Type taxonomy
        </a>
        .
      </p>
    </div>
  );
}
