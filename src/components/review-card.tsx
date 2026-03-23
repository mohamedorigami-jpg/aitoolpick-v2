"use client";

import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StarRating } from "@/components/ui/star-rating";
import type { AITool } from "@/data/tools";

/**
 * ReviewCard — displays a tool summary with glowing border effect.
 * Used on the homepage featured grid and related reviews sections.
 */
export function ReviewCard({ tool }: { tool: AITool }) {
  return (
    <div className="relative rounded-2xl group">
      {/* Glowing border effect */}
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <div className="relative bg-card border border-border-color rounded-2xl p-6 h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
        {/* Category badge */}
        <span className="inline-block self-start text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent mb-4">
          {tool.category}
        </span>

        {/* Tool name */}
        <h3 className="text-xl font-bold text-foreground mb-2">{tool.name}</h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {tool.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={tool.rating} />
          <span className="text-sm text-muted">{tool.rating.toFixed(1)}</span>
        </div>

        {/* CTA */}
        <Link
          href={`/reviews/${tool.slug}`}
          className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
        >
          Read Review
        </Link>
      </div>
    </div>
  );
}
