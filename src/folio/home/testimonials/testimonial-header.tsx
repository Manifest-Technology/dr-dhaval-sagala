"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import type { Testimonial } from "@/data/home/testimonials";

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

export function TestimonialHeader({ testimonial }: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        <Avatar className="h-12 w-12 border border-border/50">
          <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
            {getInitials(testimonial.name)}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-foreground">
            {testimonial.name}
          </h3>

          <p className="truncate text-xs text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </div>

      <TestimonialRating rating={testimonial.rating} />
    </div>
  );
}