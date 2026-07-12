"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { headerVariants } from "./animations";
import { TimelineShowcaseData } from "./types";

interface TimelineHeaderProps {
  data: Pick<
    TimelineShowcaseData,
    "badge" | "title" | "description"
  >;
}

export function TimelineHeader({
  data,
}: TimelineHeaderProps) {
  return (
    <motion.header
      variants={headerVariants}
      className="mx-auto max-w-4xl text-center"
    >
      {data.badge && (
        <Badge
          variant="outline"
          className="
            mb-5
            rounded-full
            border-[#D4A017]/25
            bg-[#D4A017]/10
            px-5
            py-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.24em]
            text-[#D4A017]
            backdrop-blur-sm
            dark:border-[#D4A017]/30
            dark:bg-[#D4A017]/10
          "
        >
          {data.badge}
        </Badge>
      )}

      <h2
        className="
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
          md:text-5xl
          xl:text-6xl
        "
      >
        {data.title}
      </h2>

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-base
          leading-8
          text-slate-600
          dark:text-slate-400
          md:text-lg
        "
      >
        {data.description}
      </p>

      {/* Decorative Accent */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 140,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.25,
        }}
        className="mx-auto mt-10 h-px overflow-hidden rounded-full"
      >
        <div
          className="
            h-full
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#D4A017]
            to-transparent
          "
        />
      </motion.div>
    </motion.header>
  );
}