"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TestimonialColumnItem {
  content: React.ReactNode;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: TestimonialColumnItem[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 20,
}: TestimonialsColumnProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, duplicateIndex) => (
          <React.Fragment key={duplicateIndex}>
            {testimonials.map(({ content }, index) => (
              <div
                key={`${duplicateIndex}-${index}`}
                className="w-full"
              >
                {content}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}