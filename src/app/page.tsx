"use client";

import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ReviewCard } from "@/components/review-card";
import { MockDashboard } from "@/components/mock-dashboard";
import { EmailCapture } from "@/components/email-capture";
import { tools } from "@/data/tools";
import {
  Pen,
  Image,
  Video,
  Search,
  Code2,
  Zap,
  ShieldCheck,
  BarChart3,
  RefreshCw,
} from "lucide-react";

/**
 * Homepage — hero, scroll animation, featured reviews, categories,
 * trust section, email capture.
 */

const categories = [
  { name: "Writing", icon: Pen },
  { name: "Images", icon: Image },
  { name: "Video", icon: Video },
  { name: "SEO", icon: Search },
  { name: "Coding", icon: Code2 },
  { name: "Productivity", icon: Zap },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Tested Personally",
    description:
      "Every tool is tested hands-on by our team. We use them in real projects before writing a single word.",
  },
  {
    icon: BarChart3,
    title: "No Paid Rankings",
    description:
      "Our rankings are based on genuine testing and user feedback. Companies cannot pay for a higher position.",
  },
  {
    icon: RefreshCw,
    title: "Updated Monthly",
    description:
      "AI tools evolve fast. We re-test and update our reviews every month to keep recommendations current.",
  },
];

export default function HomePage() {
  // Show first 6 tools as featured
  const featured = tools.slice(0, 6);

  return (
    <main>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-16 px-4 text-center">
        {/* Gradient glow behind hero */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight max-w-4xl mx-auto">
            Find the Right AI Tool
            <br />
            <span className="text-accent">&mdash; Fast</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Honest reviews. Real testing. No fluff.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/best-tools"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Browse All Tools
            </Link>
            <Link
              href="#featured"
              className="border border-border-color hover:border-accent text-foreground font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Read Reviews
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Container Scroll Animation ─── */}
      <section className="relative -mt-20">
        <ContainerScroll
          titleComponent={
            <p className="text-lg md:text-2xl text-muted mb-4">
              See how we compare AI tools
            </p>
          }
        >
          <MockDashboard />
        </ContainerScroll>
      </section>

      {/* ─── Featured Reviews ─── */}
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Reviews
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">
              Our latest in-depth reviews of the best AI tools on the market.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tool, i) => (
            <ScrollReveal key={tool.slug} delay={i * 0.1}>
              <ReviewCard tool={tool} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Categories Strip ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Browse by Category
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 0.05}>
              <Link
                href="/best-tools"
                className="flex flex-col items-center gap-3 bg-card border border-border-color rounded-xl p-6 hover:border-accent transition-colors group"
              >
                <cat.icon className="w-8 h-8 text-muted group-hover:text-accent transition-colors" />
                <span className="text-sm font-semibold text-foreground">
                  {cat.name}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Why Trust Us ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Trust Us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.1}>
              <div className="bg-card border border-border-color rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Email Capture ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <EmailCapture />
        </ScrollReveal>
      </section>
    </main>
  );
}
