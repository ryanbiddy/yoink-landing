export const audienceRoutes = [
  {
    href: "/creators",
    title: "I want to analyze YouTube videos with Claude or ChatGPT",
    body: "One-click capture for creators, operators, and anyone tired of taking notes at 2x.",
  },
  {
    href: "/agents",
    title: "I'm building an AI agent that needs YouTube context",
    body: "Local MCP tools, config snippets, and a portable Operator Skill for agent workflows.",
  },
  {
    href: "/research",
    title: "I do research, competitive intel, or content strategy",
    body: "Build a private video corpus, search it like text, and ask your AI what matters.",
  },
];

export const starterPrompts = [
  "Decode the hook",
  "Outline the structure",
  "Find the strongest claims",
  "Extract the repeatable framework",
  "Turn this into a Twitter thread",
  "Summarize for a founder",
  "Pull tactical takeaways",
  "Compare comments to the transcript",
  "Find products and tools mentioned",
  "Write follow-up questions",
  "Build an implementation checklist",
];

export const mcpTools = [
  ["yoink_video", "extract a single YouTube video"],
  ["yoink_playlist", "extract up to 10 videos from a playlist"],
  ["get_job_status", "poll a running yoink job"],
  ["cancel_job", "cancel a running yoink job"],
  ["list_recent_yoinks", "latest N yoinks from the library"],
  ["search_yoinks", "full-text search across the library"],
  ["get_yoink_corpus", "fetch a specific yoink's full markdown"],
  ["analyze_comments", "cluster themes, products, disagreements"],
  ["classify_hook", "classify opening across 9 hook types"],
  ["get_taxonomy", "return the Hook Type taxonomy"],
  ["get_citation_map", "slug-to-URL map for citing in agents"],
  ["get_yoink_health", "helper status and diagnostics"],
  ["find_mentions", "cross-corpus entity lookup"],
] as const;

export const hookTypes = [
  {
    slug: "curiosity_gap",
    definition:
      "Teases an answer or outcome without revealing it, opening an information gap the viewer wants closed.",
    why: "It gives the viewer an unfinished loop and makes the next minute feel like the only way to close it.",
    fails:
      "It fails when the payoff is vague, delayed too long, or smaller than the tension created.",
    pair: "Pair with stakes when the hidden answer changes what the viewer gains or loses.",
    prompt:
      "Classify the opening. If it is curiosity_gap, name the unanswered question and judge whether the payoff arrives fast enough.",
  },
  {
    slug: "question",
    definition: "Opens by directly asking the viewer a question.",
    why: "It pulls the viewer into an active answer state instead of passive watching.",
    fails:
      "It fails when the question is generic, rhetorical, or not specific to the viewer's real problem.",
    pair: "Pair with demo when the answer becomes visible immediately.",
    prompt:
      "Find every question in the first 30 seconds and explain which one is strongest as a retention hook.",
  },
  {
    slug: "contrarian",
    definition: "Leads with a claim that challenges a common belief or consensus.",
    why: "It creates productive friction and gives the viewer a reason to test their assumptions.",
    fails:
      "It fails when the claim is edgy without proof or when it attacks a strawman nobody believes.",
    pair: "Pair with authority so the challenge feels earned instead of cheap.",
    prompt:
      "Identify the contrarian claim, the belief it pushes against, and the evidence used to make it credible.",
  },
  {
    slug: "story_open",
    definition: "Opens with a personal anecdote or a narrative scene.",
    why: "It gives the viewer a human situation before asking them to care about the lesson.",
    fails:
      "It fails when the story setup is too long or disconnected from the promised value.",
    pair: "Pair with promise_list when the story leads into concrete takeaways.",
    prompt:
      "Map the opening story beat by beat and explain where it turns into the video's main lesson.",
  },
  {
    slug: "promise_list",
    definition: "Promises a specific list or count of takeaways.",
    why: "It makes the value concrete and gives the viewer a visible progress bar.",
    fails:
      "It fails when the list is padded, obvious, or not meaningfully different from similar videos.",
    pair: "Pair with curiosity_gap by hiding the most surprising item until later.",
    prompt:
      "Evaluate the promised list: count the items, rate specificity, and flag anything that sounds padded.",
  },
  {
    slug: "demo",
    definition: "Opens by showing the thing in action through a visual or live demonstration.",
    why: "It proves value before explanation and lets the viewer inspect the result directly.",
    fails:
      "It fails when the demo is too polished to feel real or when the setup is unclear.",
    pair: "Pair with question when the demo answers an obvious viewer objection.",
    prompt:
      "Describe what the demo proves in the first 30 seconds and what skepticism it removes.",
  },
  {
    slug: "authority",
    definition: "Opens by establishing credentials, results, or proof of expertise.",
    why: "It gives the viewer a reason to trust the source before the advice starts.",
    fails:
      "It fails when credentials become autobiography or when proof replaces the actual idea.",
    pair: "Pair with contrarian when the creator is challenging consensus.",
    prompt:
      "Extract every authority signal in the opening and say whether it supports the video's core claim.",
  },
  {
    slug: "stakes",
    definition: "Opens by emphasizing what the viewer stands to gain or lose.",
    why: "It makes the cost of ignoring the video feel concrete.",
    fails:
      "It fails when the stakes are inflated, fear-based, or unrelated to the viewer's decision.",
    pair: "Pair with curiosity_gap when the missing answer affects the outcome.",
    prompt:
      "Identify the stakes in the opening, who they apply to, and whether they are credible.",
  },
  {
    slug: "other",
    definition: "None of the above, or no identifiable hook pattern.",
    why: "It catches openings that are transitional, ambient, or too weakly structured to classify.",
    fails:
      "It fails as a strategy when the opening has no clear reason to keep watching.",
    pair: "Pair with question or promise_list when rewriting the opening for clarity.",
    prompt:
      "If this is other, explain what is missing and rewrite the opening using the strongest fitting hook type.",
  },
];
