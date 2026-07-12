"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { nodeVariants } from "./animations";

interface TimelineNodeProps {
  active?: boolean;
  className?: string;
}

export function TimelineNode({
  active = false,
  className,
}: TimelineNodeProps) {
  return (
    <motion.div
      variants={nodeVariants}
      whileHover={{
        scale: 1.12,
      }}
      className={cn(
        "relative flex h-12 w-12 items-center justify-center",
        className
      )}
    >
      {/* Glow */}
      <span
        className={cn(
          "absolute inset-0 rounded-full blur-md transition-all duration-300",
          active
            ? "bg-[#D4A017]/35 dark:bg-[#D4A017]/45"
            : "bg-[#D4A017]/15 dark:bg-[#D4A017]/20"
        )}
      />

      {/* Pulse Ring */}
      <motion.span
        animate={{
          scale: [1, 1.45, 1],
          opacity: [0.45, 0, 0.45],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border border-[#D4A017]/40"
      />

      {/* Outer Ring */}
      <span
        className={cn(
          "absolute inset-[5px] rounded-full border-2 transition-colors duration-300",
          active
            ? "border-[#D4A017]"
            : "border-[#D4A017]/80"
        )}
      />

      {/* Inner Circle */}
      <span
        className="
          relative
          z-10
          h-4
          w-4
          rounded-full
          bg-[#D4A017]
          shadow-[0_0_14px_rgba(212,160,23,0.45)]
        "
      >
        <span
          className="
            absolute
            inset-[3px]
            rounded-full
            bg-white
            dark:bg-slate-950
          "
        />
      </span>
    </motion.div>
  );
}