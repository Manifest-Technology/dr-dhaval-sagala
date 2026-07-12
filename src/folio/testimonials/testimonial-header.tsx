"use client";

import { motion } from "framer-motion";

import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import type { Testimonial } from "@/data/testimonials";

import { TestimonialRating } from "./testimonial-rating";

interface Props {
  testimonial: Testimonial;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialHeader({
  testimonial,
}: Props) {
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="flex min-w-0 items-center gap-4">
        {/* Avatar */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative shrink-0"
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-[#D4A017]/20
              blur-lg
            "
          />

          {/* Outer Ring */}

          <div
            className="
              rounded-full
              bg-gradient-to-br
              from-[#F3D77A]
              via-[#D4A017]
              to-[#B8860B]
              p-[2px]
              shadow-[0_0_24px_rgba(212,160,23,0.18)]
            "
          >
            <Avatar className="h-14 w-14 border border-background bg-background">
              <AvatarFallback
                className="
                  bg-gradient-to-br
                  from-[#D4A017]/20
                  to-primary/10
                  text-sm
                  font-bold
                  tracking-wide
                  text-[#D4A017]
                "
              >
                {getInitials(testimonial.name)}
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        {/* Name */}

        <div className="min-w-0 space-y-1">
          <h3
            className="
              truncate
              text-[15px]
              font-semibold
              tracking-tight
              text-foreground
            "
          >
            {testimonial.name}
          </h3>

          <div
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-muted-foreground
            "
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="
                text-[10px]
                text-[#D4A017]
              "
            />

            <span className="truncate">
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>

      {/* Rating */}

      <div className="shrink-0">
        <TestimonialRating
          rating={testimonial.rating}
        />
      </div>
    </div>
  );
}