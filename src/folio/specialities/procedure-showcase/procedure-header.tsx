"use client";

import { motion } from "framer-motion";

import { fadeUpVariants } from "./animations";
import type { ProcedureShowcaseData } from "./types";

interface ProcedureHeaderProps {
  data: Pick<
    ProcedureShowcaseData,
    | "badge"
    | "headingFirst"
    | "headingSecond"
    | "headingHighlight"
    | "description"
  >;
}

export function ProcedureHeader({
  data,
}: ProcedureHeaderProps) {
  return (
    <motion.header
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto max-w-6xl text-center"
    >
      {/* Badge */}

      {data.badge && (
        <motion.div variants={fadeUpVariants}>
          <span
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D4A017]/30
              bg-[#D4A017]/5
              px-6
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#D4A017]
              backdrop-blur-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />

            {data.badge}
          </span>
        </motion.div>
      )}

      {/* Heading */}

      <div className="mt-10 space-y-2">
        <motion.h2
          variants={fadeUpVariants}
          className="
            text-4xl
            font-black
            leading-[0.95]
            tracking-[0.04em]
            text-slate-900
            dark:text-white
            md:text-5xl
            lg:text-6xl
          "
        >
          {data.headingFirst}
        </motion.h2>

        <motion.h2
          variants={fadeUpVariants}
          className="
            text-4xl
            font-black
            leading-[0.95]
            tracking-[0.04em]
            text-slate-900
            dark:text-white
            md:text-5xl
            lg:text-6xl
          "
        >
          {data.headingSecond}
        </motion.h2>

        <motion.h2
          variants={fadeUpVariants}
          className="
            pt-2
            text-4xl
            font-black
            leading-[0.95]
            tracking-[0.04em]
            text-[#D4A017]
            md:text-5xl
            lg:text-6xl
          "
        >
          {data.headingHighlight}
        </motion.h2>
      </div>

      {/* Description */}

      <motion.div
        variants={fadeUpVariants}
        className="mx-auto mt-12 max-w-3xl"
      >
        <p
          className="
            text-lg
            leading-9
            text-slate-600
            dark:text-slate-300
          "
        >
          {data.description}
        </p>
      </motion.div>
    </motion.header>
  );
}