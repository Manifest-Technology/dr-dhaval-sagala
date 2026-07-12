"use client";

import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";

import {
  cardHover,
  iconVariants,
  leftCardVariants,
  mobileCardVariants,
  rightCardVariants,
} from "./animations";

import { TimelineNode } from "./timeline-node";
import { TimelineTags } from "./timeline-tags";
import type { TimelineItem as TimelineItemType } from "./types";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  total: number;
}

export function TimelineItem({
  item,
  index,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* ----------------------------- */}
      {/* Desktop */}
      {/* ----------------------------- */}

      <div
        className="
          relative
          hidden
          lg:grid
          lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
          lg:items-center
        "
      >
        {/* Left Column */}
        <div className="pr-10">
          {isLeft && (
            <TimelineCard
              item={item}
              index={index}
              variants={leftCardVariants}
            />
          )}
        </div>

        {/* Timeline Node */}
        <div className="flex justify-center">
          <TimelineNode />
        </div>

        {/* Right Column */}
        <div className="pl-10">
          {!isLeft && (
            <TimelineCard
              item={item}
              index={index}
              variants={rightCardVariants}
            />
          )}
        </div>
      </div>

      {/* ----------------------------- */}
      {/* Mobile */}
      {/* ----------------------------- */}

      <div className="relative flex gap-6 lg:hidden">
        <div className="flex w-10 shrink-0 justify-center">
          <TimelineNode />
        </div>

        <div className="flex-1 pb-10">
          <TimelineCard
            item={item}
            index={index}
            variants={mobileCardVariants}
          />
        </div>
      </div>
    </>
  );
}

interface TimelineCardProps {
  item: TimelineItemType;
  index: number;
  variants: Variants;
}

function TimelineCard({
  item,
  index,
  variants,
}: TimelineCardProps) {
  return (
    <motion.article
      variants={variants}
      whileHover={cardHover}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200/80
        bg-white/90
        p-8
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-500

        hover:border-[#D4A017]/35
        hover:shadow-[0_20px_60px_rgba(212,160,23,0.12)]

        dark:border-slate-800
        dark:bg-slate-900/70
        dark:hover:border-[#D4A017]/30
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          bg-[#D4A017]/5
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-[#D4A017]/10
        "
      />

      {/* Step Number */}
      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-5
          text-7xl
          font-black
          leading-none
          tracking-tight
          text-[#D4A017]/8
          transition-transform
          duration-500
          group-hover:scale-110
        "
      >
        {(index + 1).toString().padStart(2, "0")}
      </div>

      {/* Icon */}
      <motion.div
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        className="
          relative
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-[#D4A017]/15
          bg-[#D4A017]/10
          text-2xl
          text-[#D4A017]
        "
      >
        <FontAwesomeIcon icon={item.icon} />
      </motion.div>

      {/* Label */}
      {item.label && (
        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.32em]
            text-[#D4A017]
          "
        >
          {item.label}
        </p>
      )}

      {/* Title */}
      <h3
        className="
          text-2xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-5
          text-[15px]
          leading-8
          text-slate-600
          dark:text-slate-400
        "
      >
        {item.description}
      </p>

      {/* Divider */}
      <div
        className="
          my-7
          h-px
          w-full
          bg-gradient-to-r
          from-[#D4A017]/20
          via-slate-200
          to-transparent
          dark:via-slate-800
        "
      />

      {/* Tags */}
      <TimelineTags tags={item.tags} />
    </motion.article>
  );
}