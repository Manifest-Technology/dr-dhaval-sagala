"use client";

import { useMemo } from "react";

import { TestimonialsColumn } from "@/components/testimonials-columns-1";

import {
  testimonials,
  type Testimonial,
} from "@/data/testimonials";

import { TestimonialCard } from "./testimonial-card";

interface ColumnItem {
  content: React.ReactNode;
}

function mapTestimonials(
  items: Testimonial[],
): ColumnItem[] {
  return items.map((testimonial) => ({
    content: (
      <TestimonialCard
        key={`${testimonial.name}-${testimonial.timeAgo}`}
        testimonial={testimonial}
      />
    ),
  }));
}

export function TestimonialMarquee() {
  const [firstColumn, secondColumn, thirdColumn] =
    useMemo(() => {
      return [
        testimonials.slice(0, 16),
        testimonials.slice(4, 20),
        testimonials.slice(8, 24),
      ];
    }, []);

  return (
    <div
      className="
        relative
        isolate
        h-[125vh] lg:h-[200vh]
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-20
          h-[46rem]
          w-[46rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4A017]/6
          blur-[170px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-40
          top-1/3
          -z-20
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-primary/8
          blur-[120px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-40
          bottom-20
          -z-20
          h-[26rem]
          w-[26rem]
          rounded-full
          bg-[#D4A017]/8
          blur-[130px]
        "
      />

      {/* Top Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-40
          bg-gradient-to-b
          from-background
          via-background/85
          to-transparent
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-40
          bg-gradient-to-t
          from-background
          via-background/85
          to-transparent
        "
      />

      {/* Side Fade Left */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-20
          w-20
          bg-gradient-to-r
          from-background
          to-transparent
        "
      />

      {/* Side Fade Right */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          top-0
          z-20
          w-20
          bg-gradient-to-l
          from-background
          to-transparent
        "
      />

      {/* Columns */}

      <div
        className="
          relative
          flex
          h-full
          justify-center
          gap-8
          overflow-hidden
          px-4
          lg:gap-10
        "
      >
        <TestimonialsColumn
          testimonials={mapTestimonials(firstColumn)}
          duration={60}
        />

        <TestimonialsColumn
          className="hidden md:block"
          testimonials={mapTestimonials(secondColumn)}
          duration={66}
        />

        <TestimonialsColumn
          className="hidden xl:block"
          testimonials={mapTestimonials(thirdColumn)}
          duration={60}
        />
      </div>
    </div>
  );
}