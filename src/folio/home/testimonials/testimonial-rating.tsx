"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  rating: number;
}

export function TestimonialRating({ rating }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FontAwesomeIcon
          key={`full-${index}`}
          icon={faStar}
          className="h-3.5 w-3.5 text-amber-400"
        />
      ))}

      {hasHalfStar && (
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          className="h-3.5 w-3.5 text-amber-400"
        />
      )}
    </div>
  );
}