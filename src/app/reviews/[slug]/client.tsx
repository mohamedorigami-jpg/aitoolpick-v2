"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StarRating } from "@/components/ui/star-rating";
import { ReviewCard } from "@/components/review-card";
import type { AITool } from "@/data/tools";
import {
  ExternalLink,
  ChevronRight,
  Check,
  X,
  Tag,
} from "lucide-react";

/**
 * ReviewPageClient — full review layout with sticky sidebar.
 */
export function ReviewPageClient({
  tool,
  related,
}: {
  tool: AITool;
  related: AITool[];
}) {
  const ratingItems = [
    { label: "Features", value: tool.ratingBreakdown.features },
    { label: "Ease of Use", value: tool.ratingBreakdown.easeOfUse },
    { label: "Value for Money", value: tool.ratingBreakdown.value },
    { label: "Support", value: tool.ratingBreakdown.support },
  ];

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <ScrollReveal>
          <nav className="flex items-center gap-2 text-sm text-muted mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/" className="hover:text-foreground transition-colors">
              Reviews
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{tool.name}</span>
          </nav>
        </ScrollReveal>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* ─── Main Content ─── */}
          <div className="lg:col-span-2">
            {/* Tool Header */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent">
                    {tool.category}
                  </span>
                  {tool.discountCode && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-success/20 text-success">
                      <Tag className="w-3 h-3" />
                      {tool.discountCode}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
                  {tool.name}
                </h1>
                <p className="text-lg text-muted mb-4">{tool.tagline}</p>

                <div className="flex items-center gap-4 mb-6">
                  <StarRating rating={tool.rating} size={20} />
                  <span className="text-foreground font-semibold">
                    {tool.rating.toFixed(1)} / 5.0
                  </span>
                </div>

                <a
                  href={tool.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
                >
                  Visit {tool.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            {/* Pros & Cons */}
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Pros */}
                <div className="bg-card border border-border-color rounded-xl p-6">
                  <h3 className="text-lg font-bold text-success mb-4">Pros</h3>
                  <ul className="space-y-3">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-card border border-border-color rounded-xl p-6">
                  <h3 className="text-lg font-bold text-danger mb-4">Cons</h3>
                  <ul className="space-y-3">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Review Sections */}
            {[
              { title: "What It Is", content: tool.whatItIs },
              { title: "Who It's For", content: tool.whoItsFor },
              {
                title: "Key Features",
                content: null,
                list: tool.keyFeatures,
              },
              { title: "Pricing", content: tool.pricing },
              { title: "Our Verdict", content: tool.verdict },
            ].map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.05}>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-muted leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-2 mt-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-muted"
                        >
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ─── Sticky Sidebar ─── */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="bg-card border border-border-color rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Rating Breakdown
                </h3>
                <div className="space-y-4">
                  {ratingItems.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted">{item.label}</span>
                        <span className="text-foreground font-semibold">
                          {item.value.toFixed(1)}
                        </span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2">
                        <div
                          className="bg-accent rounded-full h-2 transition-all duration-500"
                          style={{ width: `${(item.value / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border-color mt-6 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted text-sm">Overall</span>
                    <span className="text-2xl font-bold text-foreground">
                      {tool.rating.toFixed(1)}
                    </span>
                  </div>
                  <StarRating rating={tool.rating} size={18} />
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="bg-card border border-accent/30 rounded-xl p-6 text-center">
                <p className="text-foreground font-semibold mb-2">
                  Ready to try {tool.name}?
                </p>
                <p className="text-muted text-sm mb-4">
                  Starting from {tool.price}
                </p>
                {tool.discountCode && (
                  <div className="bg-success/10 border border-success/30 rounded-lg px-4 py-2 mb-4">
                    <p className="text-success text-sm font-semibold">
                      Use code {tool.discountCode} for a discount
                    </p>
                  </div>
                )}
                <a
                  href={tool.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Visit {tool.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Related Reviews ─── */}
        <section className="mt-20">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              More Reviews
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((t, i) => (
              <ScrollReveal key={t.slug} delay={i * 0.1}>
                <ReviewCard tool={t} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
