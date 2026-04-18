export const siteCopy = {
  brand: {
    name: "DEFRAG",
    title: "The clarity layer for real life.",
    description:
      "DEFRAG is a personal and relational clarity platform. It helps you understand yourself, read what may be happening in the moment, and navigate relationships with greater clarity.",
    support: "Most tools give you more input. DEFRAG helps you understand what matters.",
  },
  homepage: {
    microcopy:
      "A clearer way to understand yourself, your relationships, and the moments that matter.",
    valueTitle: "Turn complexity into clarity people can use.",
    valueBody:
      "DEFRAG helps you make better sense of yourself, what may be active right now, and what may be happening in your relationships so you can move with more clarity and less confusion.",
    bullets: [
      "Understand your natural patterns",
      "Recognize what may be shaping the moment",
      "Make better sense of difficult interactions",
      "Notice drift before it becomes conflict or regret",
      "Find the response that fits best",
    ],
    whyTitle: "Most costly mistakes begin as unclear moments.",
    whyBody:
      "A mistimed reaction, a repeated pattern, or a conversation handled from pressure instead of clarity can become a larger consequence. DEFRAG exists to make those moments easier to understand before they harden.",
    useCases: [
      "Before you send the message",
      "When something feels off but you cannot name it",
      "When a conversation keeps repeating the same pattern",
      "When you need a clearer read on yourself",
      "When timing matters as much as what you say",
      "When you want to act with less confusion and more self-possession",
    ],
  },
  productCards: [
    {
      href: "/app/baseline",
      title: "Baseline",
      body: "How you tend to work, what pressure does to you, and what helps you return to clarity.",
      cta: "Explore Baseline",
    },
    {
      href: "/app/now",
      title: "Now",
      body: "A clear read on what may be most active right now and what move fits best.",
      cta: "Explore Now",
    },
    {
      href: "/app/relationships",
      title: "Relationships",
      body: "A clearer view of what may be happening between you and another person.",
      cta: "Explore Relationships",
    },
  ],
  pricing: [
    {
      name: "Baseline",
      tagline: "For people who want a clearer understanding of how they work.",
      features: [
        "Baseline workspace",
        "Pattern summary",
        "Decision style",
        "Pressure tendencies",
        "Restoration guidance",
      ],
      cta: "Start with Baseline",
    },
    {
      name: "Premium",
      tagline: "For people who want ongoing guidance in real time.",
      features: [
        "Everything in Baseline",
        "Now workspace",
        "Live reads",
        "Timing support",
        "Saved reads",
        "History",
      ],
      cta: "Choose Premium",
      badge: "Most Popular",
    },
    {
      name: "Signature",
      tagline: "For people who want deeper relationship and system clarity.",
      features: [
        "Everything in Premium",
        "Relationships workspace",
        "Difficult conversation support",
        "Pattern mapping",
        "Scenario exploration",
        "Priority support",
      ],
      cta: "Choose Signature",
    },
  ],
  app: {
    entryTitle: "Choose the layer of clarity you need.",
    entryBody:
      "Move into the part of the system that matches the moment: your baseline, what is active right now, a relationship dynamic, or the explanation layer behind the read.",
  },
} as const;
