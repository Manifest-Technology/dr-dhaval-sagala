"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { ExperienceTimelineItem } from "@/data/doctor's_profile/experience";
import { timelineThemes } from "./timeline-theme";

interface TimelineCardProps {
  item: ExperienceTimelineItem;
}

export function TimelineCard({
  item,
}: TimelineCardProps) {
  const theme = timelineThemes[item.theme];

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative"
    >
      {/* Animated Gradient Border */}

      <div
        className={`
          absolute
          -inset-[1px]
          rounded-3xl
          bg-gradient-to-br
          ${theme.gradient}
          opacity-0
          blur-sm
          transition-all
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* Card */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-3xl
          border
          bg-background/85
          p-7
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-500

          ${theme.border}

          group-hover:shadow-2xl
          group-hover:${theme.glow}
        `}
      >
        {/* Decorative Glow */}

        <div
          className={`
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            blur-3xl
            opacity-20
            transition-all
            duration-500

            ${theme.softBg}

            group-hover:scale-125
          `}
        />

        {/* Header */}

        <div className="relative flex items-start justify-between gap-5">
          <span
            className={`
              inline-flex
              rounded-full
              border
              px-3
              py-1
              text-xs
              font-semibold
              tracking-wide

              ${theme.border}
              ${theme.softBg}
              ${theme.text}
            `}
          >
            {item.category}
          </span>

          <span
            className="
              text-sm
              font-medium
              text-muted-foreground
            "
          >
            {item.location}
          </span>
        </div>

        {/* Title */}

        <motion.h3
          whileHover={{
            x: 4,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            relative
            mt-6
            text-2xl
            font-semibold
            tracking-tight
            text-foreground
          "
        >
          {item.title}
        </motion.h3>

        {/* Description */}

        <p
          className="
            relative
            mt-4
            text-[15px]
            leading-7
            text-muted-foreground
          "
        >
          {item.description}
        </p>

        {/* Divider */}

        <div
          className="
            my-6
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-border
            to-transparent
          "
        />

        {/* Footer */}

        <div
          className="
            relative
            flex
            items-center
            gap-3
            text-sm
            text-muted-foreground
          "
        >
          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full

              ${theme.softBg}
            `}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className={theme.icon}
            />
          </div>

          <span className="leading-relaxed">
            {item.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
}