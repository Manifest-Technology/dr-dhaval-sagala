"use client";

import { motion } from "framer-motion";

import {
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  rating: number;
}

export function TestimonialRating({
  rating,
}: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-[#D4A017]/15
        bg-[#D4A017]/6
        px-3
        py-2
        backdrop-blur-xl
      "
    >
      {/* Soft Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#D4A017]/10
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative flex flex-col items-center gap-1">
        {/* Stars */}

        <div className="flex items-center gap-0.5">
          {Array.from({ length: fullStars }).map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="
                h-3.5
                w-3.5
                text-[#D4A017]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          ))}

          {hasHalfStar && (
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className="
                h-3.5
                w-3.5
                text-[#D4A017]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          )}
        </div>

        {/* Rating */}

        <span
          className="
            text-[11px]
            font-semibold
            tracking-wide
            text-foreground
          "
        >
          {rating.toFixed(1)}
        </span>
      </div>
    </motion.div>
  );
}