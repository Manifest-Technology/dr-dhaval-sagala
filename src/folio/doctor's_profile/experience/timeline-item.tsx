"use client";

import { motion } from "framer-motion";

import { ExperienceTimelineItem } from "@/data/doctor's_profile/experience";

import { TimelineCard } from "./timeline-card";
import { TimelineConnector } from "./timeline-connector";
import { TimelineNode } from "./timeline-node";

interface TimelineItemProps {
  item: ExperienceTimelineItem;
  index: number;
  align: "left" | "right";
}

export function TimelineItem({
  item,
  index,
  align,
}: TimelineItemProps) {
  const isLeft = align === "left";

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: isLeft ? -70 : 70,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="
        relative
        mb-20
        lg:mb-28
      "
    >
      {/* ========================================================= */}
      {/* Mobile */}
      {/* ========================================================= */}

      <div
        className="
          flex
          gap-6
          lg:hidden
        "
      >
        {/* Timeline Column */}

        <div
          className="
            relative
            flex
            w-16
            shrink-0
            justify-center
            self-stretch
          "
        >
          {/* Continue Line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-[3px]
              -translate-x-1/2
              rounded-full
              bg-gradient-to-b
              from-sky-500
              via-violet-500
              to-amber-500
            "
          />

          <TimelineNode item={item} />
        </div>

        {/* Card */}

        <div className="flex-1 pb-4">
          <TimelineCard item={item} />
        </div>
      </div>

      {/* ========================================================= */}
      {/* Desktop */}
      {/* ========================================================= */}

      <div
        className="
          hidden
          lg:grid
          lg:grid-cols-[1fr_auto_1fr]
          lg:items-center
          lg:gap-10
        "
      >
        {/* LEFT */}

        <div className={isLeft ? "flex justify-end" : ""}>
          {isLeft && (
            <div className="relative w-full max-w-[560px]">
              <TimelineCard item={item} />

              <TimelineConnector direction="right" />

              {/* Decorative Year */}

              <span
                className="
                  absolute
                  left-full
                  top-10
                  ml-30

                  text-[110px]
                  font-black
                  leading-none
                  tracking-[-0.08em]

                  text-foreground/[0.05]

                  pointer-events-none
                  select-none
                  whitespace-nowrap
                  z-0
                "
              >
                {item.year}
              </span>
            </div>
          )}
        </div>

        {/* CENTER */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            justify-center
          "
        >
          <TimelineNode item={item} />
        </div>

        {/* RIGHT */}

        <div className={!isLeft ? "flex justify-start" : ""}>
          {!isLeft && (
            <div className="relative w-full max-w-[560px]">
              <TimelineConnector direction="left" />

              <TimelineCard item={item} />

              {/* Decorative Year */}

              <span
                className="
                  absolute
                  right-full
                  top-10
                  mr-30

                  text-[110px]
                  font-black
                  leading-none
                  tracking-[-0.08em]

                  text-foreground/[0.05]

                  pointer-events-none
                  select-none
                  whitespace-nowrap
                  z-0
                "
              >
                {item.year}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}