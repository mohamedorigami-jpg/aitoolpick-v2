import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug } from "@/data/tools";
import { StarRating } from "@/components/ui/star-rating";
import { ReviewCard } from "@/components/review-card";
import { ReviewPageClient } from "./client";
import {
  ExternalLink,
  ChevronRight,
  Check,
  X,
  Tag,
} from "lucide-react";

/**
 * Generate static params for all tool slugs.
 */
export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tool = getToolBySlug(params.slug);
  if (!tool) return { title: "Review Not Found" };
  return {
    title: `${tool.name} Review — AIToolPick`,
    description: tool.description,
  };
}

export default function ReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  // Related reviews: other tools excluding current
  const related = tools.filter((t) => t.slug !== tool.slug).slice(0, 3);

  return (
    <ReviewPageClient tool={tool} related={related} />
  );
}
