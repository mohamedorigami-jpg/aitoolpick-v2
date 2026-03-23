"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, getCategories } from "@/data/tools";
import { StarRating } from "@/components/ui/star-rating";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ExternalLink } from "lucide-react";

/**
 * BestToolsPage — filterable comparison table of all reviewed AI tools.
 */
export default function BestToolsPage() {
  const categories = getCategories();
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Best AI Tools of 2026
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Compare the top AI tools across every category. All tested and
              rated by our team.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === cat
                    ? "bg-accent text-white"
                    : "bg-card border border-border-color text-muted hover:text-foreground hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-color">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted uppercase tracking-wider">
                    Tool
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted uppercase tracking-wider">
                    Category
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted uppercase tracking-wider">
                    Starting Price
                  </th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-muted uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tool) => (
                  <tr
                    key={tool.slug}
                    className="border-b border-border-color hover:bg-card/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <Link
                        href={`/reviews/${tool.slug}`}
                        className="text-foreground font-semibold hover:text-accent transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <p className="text-xs text-muted mt-0.5 max-w-xs">
                        {tool.tagline}
                      </p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent">
                        {tool.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-foreground font-medium">
                      {tool.price}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <StarRating rating={tool.rating} size={14} />
                        <span className="text-sm text-muted">
                          {tool.rating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href={tool.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                      >
                        Visit
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg">
              No tools found in this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
