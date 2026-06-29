"use client";

import { useMemo } from "react";

import { TestimonialsColumn } from "@/components/testimonials-columns-1";

import {
  testimonials,
  type Testimonial,
} from "@/data/home/testimonials";

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
        testimonials.slice(0, 8),
        testimonials.slice(8, 16),
        testimonials.slice(16, 24),
      ];
    }, []);

  return (
    <div className="relative mt-16 h-[120vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="flex h-full justify-center gap-6 overflow-hidden">
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