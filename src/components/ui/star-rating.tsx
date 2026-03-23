import { Star } from "lucide-react";

/**
 * StarRating — renders filled, half, and empty stars for a given rating.
 */
export function StarRating({
  rating,
  size = 16,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star
          key={i}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      );
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block">
          <Star size={size} className="text-muted" />
          <span className="absolute inset-0 overflow-hidden w-[50%]">
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </span>
        </span>
      );
    } else {
      stars.push(<Star key={i} size={size} className="text-muted" />);
    }
  }

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>{stars}</div>
  );
}
