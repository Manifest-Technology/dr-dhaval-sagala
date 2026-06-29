"use client";

import {
  faCircleCheck,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import type { Testimonial } from "@/data/home/testimonials";

import { TestimonialHeader } from "./testimonial-header";

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <Card className="group relative flex min-h-[380px] w-full max-w-[380px] flex-col overflow-hidden rounded-[32px] border border-border/60 bg-card/90 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
      <FontAwesomeIcon
        icon={faQuoteRight}
        className="absolute right-8 top-8 text-6xl text-primary/5 transition-transform duration-500 group-hover:scale-110"
      />

      <div className="flex h-full flex-col gap-7">
        <TestimonialHeader testimonial={testimonial} />

        <p className="flex-1 text-base leading-8 text-muted-foreground">
          "{testimonial.review}"
        </p>

        <div className="flex flex-wrap gap-2">
          {testimonial.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full px-3 py-1.5 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto space-y-5">
          <Separator />

          <div className="flex items-center justify-between gap-4">
            <div className="flex min-h-6 items-center gap-2">
              {testimonial.verified && (
                <>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-sm text-emerald-500"
                  />

                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Verified Patient
                  </span>
                </>
              )}
            </div>

            <span className="text-sm text-muted-foreground">
              {testimonial.timeAgo}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}