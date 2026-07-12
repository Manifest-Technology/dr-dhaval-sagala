"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { cn } from "@/lib/utils";

import {
  hoverScale,
  sidebarItemVariants,
} from "./animations";

import type { ProcedureItemProps } from "./types";

export function ProcedureItem({
  item,
  active,
  onClick,
}: ProcedureItemProps) {
  return (
    <motion.button
      type="button"
      variants={sidebarItemVariants}
      {...hoverScale}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={cn(
        `
        group
        relative
        mx-auto
        block
        w-full
        max-w-[290px]
        overflow-hidden
        rounded-2xl
        border
        bg-background
        px-7
        py-4
        text-left
        transition-all
        duration-500
        `,

        active
          ? `
            border-[#D4A017]/35
            bg-[#D4A017]/[0.035]
            shadow-lg
            shadow-[#D4A017]/5
          `
          : `
            border-border/60
            hover:-translate-y-1
            hover:border-[#D4A017]/20
            hover:bg-background
            hover:shadow-md
            hover:shadow-black/[0.04]
            dark:hover:shadow-black/20
          `
      )}
    >
      {/* Gold Top Accent */}

      <motion.div
        layoutId="procedure-active-line"
        className={cn(
          `
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-[#D4A017]
          `,
          !active && "opacity-0"
        )}
      />

      {/* Glow */}

      {active && (
        <div
          className="
            absolute
            -right-10
            -top-10
            h-28
            w-28
            rounded-full
            bg-[#D4A017]/10
            blur-3xl
          "
        />
      )}

      <div className="relative">
        {/* Icon */}

        <div
          className={cn(
            `
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            transition-all
            duration-300
            `,

            active
              ? `
                bg-[#D4A017]
                text-white
              `
              : `
                bg-[#D4A017]/10
                text-[#D4A017]
                group-hover:bg-[#D4A017]/15
              `
          )}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="h-5 w-5"
          />
        </div>

        {/* Content */}

        <div className="mt-7">
          <h3
            className="
              text-xl
              font-semibold
              leading-snug
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-2
              text-[15px]
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            {item.subtitle}
          </p>
        </div>
      </div>
    </motion.button>
  );
}