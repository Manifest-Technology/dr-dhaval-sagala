"use client";

import { motion } from "framer-motion";

import {
  faCircleCheck,
  faClock,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import type { Testimonial } from "@/data/testimonials";

import { TestimonialHeader } from "./testimonial-header";

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 2,
        rotateY: -2,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group perspective-[1400px]"
    >
      <Card
        className="
          relative
          flex
          min-h-[390px]
          w-full
          max-w-[390px]
          flex-col
          overflow-hidden
          rounded-[32px]
          border
          border-border/50
          bg-background/70
          p-8
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:border-[#D4A017]/25
          hover:shadow-[0_35px_80px_rgba(0,0,0,0.12)]
          dark:bg-card/70
        "
      >
        {/* Animated Border */}

        <div
          className="
            absolute
            inset-0
            rounded-[32px]
            bg-gradient-to-br
            from-[#D4A017]/25
            via-transparent
            to-primary/20
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          className="
            absolute
            inset-px
            rounded-[31px]
            bg-background/80
            dark:bg-card/80
          "
        />

        {/* Top Reflection */}

        <div
          className="
            absolute
            left-8
            right-8
            top-0
            h-20
            rounded-full
            bg-gradient-to-b
            from-white/25
            to-transparent
            blur-xl
            dark:from-white/5
          "
        />

        {/* Gold Glow */}

        <div
          className="
            absolute
            -right-20
            -top-20
            h-44
            w-44
            rounded-full
            bg-[#D4A017]/10
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-125
          "
        />

        {/* Decorative Quote */}

        <FontAwesomeIcon
          icon={faQuoteRight}
          className="
            absolute
            right-6
            top-5
            text-8xl
            text-[#D4A017]/6
            transition-all
            duration-700
            group-hover:rotate-12
            group-hover:scale-110
          "
        />

        <div className="relative flex h-full flex-col gap-7">
          <TestimonialHeader testimonial={testimonial} />

          {/* Review */}
          <div className="relative flex-1">
            <p
              className="
                relative
                text-[15px]
                leading-8
                tracking-[0.01em]
                text-muted-foreground
              "
            >
              {testimonial.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {testimonial.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="
                  rounded-full
                  border
                  border-[#D4A017]/10
                  bg-[#D4A017]/8
                  px-3.5
                  py-1.5
                  text-[11px]
                  font-medium
                  transition-all
                  duration-300
                  hover:border-[#D4A017]/30
                  hover:bg-[#D4A017]/15
                "
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-auto space-y-5">
            <Separator className="opacity-40" />

            <div className="flex items-center justify-between gap-4">
              <div className="flex min-h-6 items-center gap-2">
                {testimonial.verified && (
                  <>
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-500/10
                      "
                    >
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-xs text-emerald-500"
                      />
                    </div>

                    <span
                      className="
                        text-sm
                        font-medium
                        text-emerald-600
                        dark:text-emerald-400
                      "
                    >
                      Verified Patient
                    </span>
                  </>
                )}
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-muted-foreground
                "
              >
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[11px]"
                />

                <span>{testimonial.timeAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}