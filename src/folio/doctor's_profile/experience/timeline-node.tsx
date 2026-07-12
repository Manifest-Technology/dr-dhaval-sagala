"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ExperienceTimelineItem } from "@/data/doctor's_profile/experience";
import { timelineThemes } from "./timeline-theme";

interface TimelineNodeProps {
  item: ExperienceTimelineItem;
}

export function TimelineNode({
  item,
}: TimelineNodeProps) {
  const theme = timelineThemes[item.theme];

  return (
    <div
      className="
        relative
        z-20
        flex
        flex-col
        items-center
      "
    >
      {/* ---------------- Year Badge ---------------- */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          -top-14
          z-30

          whitespace-nowrap

          rounded-full
          border
          border-border/60

          bg-background/95

          px-3
          py-1.5

          text-xs
          font-semibold
          tracking-wide

          text-muted-foreground

          shadow-xl
          backdrop-blur-xl
        "
      >
        {item.year}
      </motion.div>

      {/* ---------------- Ambient Glow ---------------- */}

      <div
        className={`
          absolute
          h-20
          w-20
          rounded-full
          blur-2xl
          opacity-30
          ${theme.softBg}
        `}
      />

      {/* ---------------- Outer Ring ---------------- */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.25,
        }}
        className={`
          relative
          z-20

          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full
          border

          bg-background/90
          backdrop-blur-xl

          ${theme.border}
          ${theme.glow}
        `}
      >
        <div
          className={`
            absolute
            inset-1
            rounded-full
            bg-gradient-to-br
            ${theme.gradient}
            p-[2px]
          `}
        >
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-full
              bg-background
            "
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`
                  text-lg
                  ${theme.icon}
                `}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ---------------- Bottom Dot ---------------- */}

      <div
        className={`
          relative
          z-20

          mt-3
          h-3
          w-3

          rounded-full

          ${theme.bg}

          ring-2
          ring-background
        `}
      />
    </div>
  );
}