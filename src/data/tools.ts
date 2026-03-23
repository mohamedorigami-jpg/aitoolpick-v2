/**
 * Sample AI tool data used across the site.
 * Each tool has a slug for routing, affiliate link placeholder, and full review content.
 */

export interface AITool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  rating: number;
  price: string;
  discountCode?: string;
  affiliateLink: string;
  pros: string[];
  cons: string[];
  whatItIs: string;
  whoItsFor: string;
  keyFeatures: string[];
  pricing: string;
  verdict: string;
  ratingBreakdown: {
    features: number;
    easeOfUse: number;
    value: number;
    support: number;
  };
}

export const tools: AITool[] = [
  {
    slug: "airies",
    name: "Airies",
    tagline: "AI-powered learning platform that adapts to your pace",
    description:
      "Airies uses advanced AI to create personalised learning paths, making education faster and more engaging for professionals and students alike.",
    category: "Productivity",
    rating: 4.5,
    price: "$19/mo",
    discountCode: "AIRIES12AF",
    affiliateLink: "https://airies.io/?ref=aitoolpick",
    pros: [
      "Highly personalised learning paths powered by AI",
      "Beautiful, intuitive interface",
      "Supports 50+ topics from coding to marketing",
      "Progress tracking with detailed analytics",
      "Generous free tier available",
    ],
    cons: [
      "Mobile app still in beta",
      "Limited offline access",
      "Some advanced courses require Pro plan",
    ],
    whatItIs:
      "Airies is an AI-driven learning platform that analyses your knowledge gaps and builds custom curricula in real time. Whether you're picking up Python or brushing up on digital marketing, Airies adjusts difficulty, pacing, and content style to match how you learn best.",
    whoItsFor:
      "Ideal for self-taught professionals, career changers, and students who want structured yet flexible learning without the rigidity of traditional courses.",
    keyFeatures: [
      "Adaptive AI curriculum engine",
      "Interactive coding sandbox",
      "Spaced-repetition flashcards",
      "Peer discussion forums",
      "Certificate of completion",
    ],
    pricing:
      "Free plan with 3 courses. Pro plan at $19/mo unlocks unlimited courses, priority support, and certificates. Team plans available from $49/mo.",
    verdict:
      "Airies is one of the most impressive AI learning platforms we've tested. The adaptive engine genuinely works — it noticed our weak spots in JavaScript and doubled down on exercises there. At $19/mo with code AIRIES12AF for 12% off, it's a steal.",
    ratingBreakdown: {
      features: 4.5,
      easeOfUse: 5,
      value: 4.5,
      support: 4,
    },
  },
  {
    slug: "writerly-ai",
    name: "Writerly AI",
    tagline: "Generate blog posts, ads, and emails in seconds",
    description:
      "Writerly AI is a powerful writing assistant that generates high-quality marketing copy, blog posts, and emails using GPT-4 technology.",
    category: "Writing",
    rating: 4.0,
    price: "$29/mo",
    affiliateLink: "https://writerly.ai/?ref=aitoolpick",
    pros: [
      "Excellent long-form blog post generation",
      "50+ templates for ads, emails, and social posts",
      "Built-in plagiarism checker",
      "Team collaboration features",
    ],
    cons: [
      "Can feel generic without careful prompting",
      "Word limit on Starter plan is tight",
      "No image generation built in",
    ],
    whatItIs:
      "Writerly AI is a content generation platform built for marketers and content teams. It uses GPT-4 under the hood to produce blog posts, ad copy, product descriptions, and email sequences from simple prompts.",
    whoItsFor:
      "Content marketers, freelance writers, e-commerce store owners, and agencies that need to produce high volumes of quality copy quickly.",
    keyFeatures: [
      "Long-form article writer (up to 3,000 words)",
      "50+ copywriting templates",
      "SEO optimisation suggestions",
      "Plagiarism detection",
      "Brand voice training",
    ],
    pricing:
      "Starter at $29/mo (50,000 words). Professional at $59/mo (unlimited words + team seats). Enterprise pricing on request.",
    verdict:
      "Writerly AI delivers solid results for marketers who need volume. The blog post generator is genuinely impressive, though you'll want to edit outputs for brand voice. A strong choice for teams scaling content production.",
    ratingBreakdown: {
      features: 4,
      easeOfUse: 4.5,
      value: 3.5,
      support: 4,
    },
  },
  {
    slug: "pixelcraft",
    name: "PixelCraft",
    tagline: "AI image generation built for designers",
    description:
      "PixelCraft turns text prompts into stunning visuals with fine-grained style controls that designers actually want to use.",
    category: "Images",
    rating: 4.5,
    price: "$15/mo",
    affiliateLink: "https://pixelcraft.design/?ref=aitoolpick",
    pros: [
      "Exceptional image quality and consistency",
      "Style presets for brand consistency",
      "Inpainting and outpainting tools",
      "API access for developers",
      "Fast generation (under 10 seconds)",
    ],
    cons: [
      "Learning curve for advanced controls",
      "Credits system can be confusing",
      "No video generation yet",
    ],
    whatItIs:
      "PixelCraft is an AI image generation tool designed specifically for creative professionals. Unlike generic generators, it offers granular control over style, composition, and colour palette — making it practical for real design workflows.",
    whoItsFor:
      "Graphic designers, social media managers, and creative agencies who need on-brand visuals without stock photo subscriptions.",
    keyFeatures: [
      "Text-to-image with style transfer",
      "Inpainting and outpainting",
      "Brand kit integration",
      "Batch generation",
      "REST API for automation",
    ],
    pricing:
      "Hobby at $15/mo (200 images). Pro at $39/mo (1,000 images + API). Studio at $99/mo (unlimited + priority rendering).",
    verdict:
      "PixelCraft is the image generator we recommend for anyone doing serious design work. The style controls are leagues ahead of competitors, and the quality is consistently excellent. Worth every penny for creative teams.",
    ratingBreakdown: {
      features: 5,
      easeOfUse: 4,
      value: 4.5,
      support: 4.5,
    },
  },
  {
    slug: "seobot",
    name: "SEOBot",
    tagline: "Automated SEO audits and keyword research with AI",
    description:
      "SEOBot crawls your site, identifies issues, and suggests fixes — plus AI-powered keyword research that actually finds gaps your competitors miss.",
    category: "SEO",
    rating: 4.0,
    price: "$39/mo",
    affiliateLink: "https://seobot.tools/?ref=aitoolpick",
    pros: [
      "Comprehensive site audits with clear fix priorities",
      "AI keyword gap analysis",
      "Competitor tracking dashboard",
      "Content brief generator",
    ],
    cons: [
      "UI feels dated compared to newer tools",
      "Crawl speed could be faster on large sites",
      "Rank tracking limited on base plan",
    ],
    whatItIs:
      "SEOBot is an all-in-one SEO platform that combines technical auditing, keyword research, and competitor analysis. Its AI layer analyses search intent and finds keyword opportunities that traditional tools overlook.",
    whoItsFor:
      "SEO professionals, agency teams, and website owners who want actionable insights without juggling multiple SEO tools.",
    keyFeatures: [
      "AI-powered keyword gap finder",
      "Technical SEO site audit",
      "Competitor backlink analysis",
      "Content brief generator",
      "Rank tracking with SERP snapshots",
    ],
    pricing:
      "Starter at $39/mo (1 site, 500 keywords). Growth at $79/mo (5 sites, 2,000 keywords). Agency at $199/mo (25 sites, unlimited keywords).",
    verdict:
      "SEOBot won't win any design awards, but it delivers where it counts — actionable SEO insights. The AI keyword gap feature alone has helped us find dozens of untapped opportunities. Solid value for SEO-focused teams.",
    ratingBreakdown: {
      features: 4.5,
      easeOfUse: 3.5,
      value: 4,
      support: 4,
    },
  },
  {
    slug: "clipwise",
    name: "ClipWise",
    tagline: "Turn long videos into viral short clips with AI",
    description:
      "ClipWise analyses your long-form videos and automatically extracts the most engaging moments as ready-to-post short clips.",
    category: "Video",
    rating: 4.5,
    price: "$25/mo",
    affiliateLink: "https://clipwise.ai/?ref=aitoolpick",
    pros: [
      "Incredibly accurate highlight detection",
      "Auto-captions with custom styling",
      "Direct posting to TikTok, Reels, and Shorts",
      "Batch processing for multiple videos",
      "Clean, modern interface",
    ],
    cons: [
      "Processing time can be slow for 2hr+ videos",
      "Limited music library",
      "No desktop app — browser only",
    ],
    whatItIs:
      "ClipWise is a video repurposing tool that uses AI to analyse long-form content (podcasts, webinars, vlogs) and extract the most engaging segments as vertical short-form clips, complete with captions and branding.",
    whoItsFor:
      "YouTubers, podcasters, social media managers, and anyone who creates long-form video content and wants to maximise its reach across short-form platforms.",
    keyFeatures: [
      "AI highlight detection",
      "Auto-captioning with 20+ styles",
      "Brand overlay templates",
      "Multi-platform direct publishing",
      "Analytics dashboard",
    ],
    pricing:
      "Creator at $25/mo (10 videos). Business at $59/mo (50 videos + team). Agency at $149/mo (unlimited + white-label).",
    verdict:
      "ClipWise is the best video repurposing tool we've tested. The AI genuinely picks out the most engaging moments, and the auto-captions are nearly perfect. If you're creating long-form video, this tool pays for itself in time saved.",
    ratingBreakdown: {
      features: 5,
      easeOfUse: 4.5,
      value: 4.5,
      support: 4,
    },
  },
  {
    slug: "codewhisper",
    name: "CodeWhisper",
    tagline: "AI pair programmer that understands your entire codebase",
    description:
      "CodeWhisper goes beyond autocomplete — it understands your project structure, coding patterns, and documentation to provide context-aware suggestions.",
    category: "Coding",
    rating: 4.0,
    price: "$20/mo",
    affiliateLink: "https://codewhisper.dev/?ref=aitoolpick",
    pros: [
      "Deep codebase understanding across files",
      "Excellent refactoring suggestions",
      "Supports 30+ languages",
      "VS Code and JetBrains plugins",
    ],
    cons: [
      "Can be slow on very large monorepos",
      "Occasional hallucinated API calls",
      "Free tier is quite limited",
    ],
    whatItIs:
      "CodeWhisper is an AI coding assistant that indexes your entire repository to provide context-aware code completions, refactoring suggestions, and bug detection. It goes well beyond simple autocomplete by understanding relationships between files.",
    whoItsFor:
      "Software developers, engineering teams, and freelance programmers who want an AI assistant that truly understands their project — not just the current file.",
    keyFeatures: [
      "Full-repo context awareness",
      "Multi-file refactoring",
      "Bug detection and fix suggestions",
      "Natural language to code",
      "Git-aware change summaries",
    ],
    pricing:
      "Individual at $20/mo. Team at $15/user/mo (min 5 seats). Enterprise with on-prem option on request.",
    verdict:
      "CodeWhisper is a genuine step up from basic AI autocomplete. The codebase-wide context makes a real difference — it suggested a refactor across three files that would have taken us an hour to spot manually. Highly recommended for serious developers.",
    ratingBreakdown: {
      features: 4.5,
      easeOfUse: 4,
      value: 3.5,
      support: 4,
    },
  },
];

/** Get a tool by its slug */
export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((t) => t.slug === slug);
}

/** Get all unique categories */
export function getCategories(): string[] {
  return Array.from(new Set(tools.map((t) => t.category)));
}
