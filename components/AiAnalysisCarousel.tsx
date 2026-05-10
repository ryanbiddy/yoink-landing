"use client";

import { useEffect, useState } from "react";

const analysisPairs = [
  {
    label: "CREATOR BENCHMARKING",
    question:
      "What hooks does this creator use in the first 30 seconds, and which ones drive engagement based on the comments?",
    response:
      "Karpathy opens with a concrete claim about scale, then introduces a tension between intuition and the math. The highest comment engagement clusters around the 0:47 mark, where he frames LLMs as 'compression of the internet.' Three other hooks drive shorter spikes: the 'parameters as knowledge' framing at 2:13, the analogy to 'next-token prediction as understanding' at 4:22, and the contrarian take on emergent abilities at 8:51.",
  },
  {
    label: "DEVELOPER LEARNING",
    question:
      "Walk me through the transformer attention section so I can implement it from scratch.",
    response:
      "Karpathy explains attention in three phases. First, the query/key/value setup at 12:33 - each token projects into three different vector spaces. Second, the attention computation at 14:18 - query and key dot products, scaled and softmaxed into weights. Third, the multi-head structure at 16:45 - running multiple attention heads in parallel and concatenating. Implementation order matters: build single-head first, verify with a tiny example, then scale to multi-head.",
  },
  {
    label: "RESEARCHER TRIAGE",
    question:
      "I don't have time to watch the full hour. What are the 3 most important sections for understanding modern LLM training?",
    response:
      "Skip to these timestamps: 8:15 covers the data pipeline and curation tradeoffs. 24:30 explains the loss landscape and why scaling laws emerge. 45:12 discusses RLHF and the alignment phase. The middle 20 minutes on tokenization can be skimmed unless you're implementing - that section is well-explained but not novel relative to existing tutorials.",
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
          &ldquo;{activePair.question}&rdquo;
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
        From YouTube URL to working AI analysis in one click. Centered around
        our Karpathy demo above.
      </p>
    </div>
  );
}
