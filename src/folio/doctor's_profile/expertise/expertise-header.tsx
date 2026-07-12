"use client";

import { motion } from "framer-motion";

export function ExpertiseHeader() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-10 pt-6 text-center lg:pb-14 lg:pt-8">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#D4A017]/25
          bg-[#D4A017]/8
          px-5
          py-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D4A017]
        "
      >
        Expertise
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="
          mt-5
          text-4xl
          font-black
          tracking-tight
          text-foreground
          sm:text-5xl
          lg:text-6xl
        "
      >
        Expertise &
        <span className="text-[#D4A017]"> Focus Areas</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-base
          leading-7
          text-muted-foreground
          lg:text-lg
        "
      >
        Advanced orthopaedic care across sports injuries, arthroscopy,
        joint replacement and complex trauma.
      </motion.p>
    </div>
  );
}