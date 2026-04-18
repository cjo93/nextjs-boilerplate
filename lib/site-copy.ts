import { routes } from "@/lib/routes";

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
      href: routes.appBaseline,
      title: "Baseline",
      body: "How you tend to work, what pressure does to you, and what helps you return to clarity.",
      cta: "Explore Baseline",
    },
    {
      href: routes.appNow,
      title: "Now",
      body: "A clear read on what may be most active right now and what move fits best.",
      cta: "Explore Now",
    },
    {
      href: routes.appRelationships,
      title: "Relationships",
      body: "A clearer view of what may be happening between you and another person.",
      cta: "Explore Relationships",
    },
  ],
  productPage: {
    heroTitle: "One system. Three ways to find clarity.",
    heroBody:
      "DEFRAG is organized around the three questions people most often need help with: how they work, what is happening right now, and what may be happening between themselves and another person.",
    overviewTitle: "A product organized around real-life needs.",
    overviewBody:
      "Instead of giving you more undifferentiated input, DEFRAG gives you a structured way to understand yourself, read the moment, and make better sense of relationship dynamics.",
    sections: [
      {
        title: "Baseline",
        body: "See how you naturally work, what pressure tends to do to you, and what helps you come back into alignment.",
      },
      {
        title: "Now",
        body: "Get a clearer read on what may be active in this moment so you can choose the response that fits best.",
      },
      {
        title: "Relationships",
        body: "Understand what may be happening in the dynamic between you and another person so you can move with more precision.",
      },
    ],
    closingTitle: "Move into the part of the system that matches the moment.",
    closingBody:
      "Start with the lens that fits your need now, then go deeper as your understanding becomes more precise.",
  },
  howItWorksPage: {
    heroTitle: "How DEFRAG works",
    heroBody:
      "DEFRAG turns complexity into structured, plain-language clarity. It helps you understand your baseline, read what may be active in the moment, and make better sense of relationship dynamics.",
    sections: [
      {
        title: "Baseline",
        body: "Understand how you tend to work, what pressure does to you, and what helps you return to clarity.",
      },
      {
        title: "Now",
        body: "Read what may be active in the moment so you can respond with better timing and less confusion.",
      },
      {
        title: "Relationships",
        body: "Make better sense of what may be happening between you and another person.",
      },
    ],
  },
  useCasesPage: {
    heroTitle: "Where people use DEFRAG",
    heroBody:
      "DEFRAG is designed for the moments when interpretation matters more than more information.",
    items: [
      "Understanding yourself before you repeat a familiar pattern",
      "Getting clearer on what may be shaping a difficult moment",
      "Reading the real dynamic beneath a relationship conflict",
    ],
  },
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
    entryCards: [
      {
        href: routes.appNow,
        title: "Now",
        body: "A clearer read on what may be shaping this moment.",
      },
      {
        href: routes.appBaseline,
        title: "Baseline",
        body: "Understand how you tend to work and what pressure does to you.",
      },
      {
        href: routes.appRelationships,
        title: "Relationships",
        body: "Understand what may be happening between you and another person.",
      },
      {
        href: routes.appLearn,
        title: "Learn",
        body: "Understand how the read was generated and how to use it.",
      },
    ],
  },
} as const;
