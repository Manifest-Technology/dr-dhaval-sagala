"use client";

import { motion } from "framer-motion";

import { BackgroundEffects } from "@/components/layout/background-effects";

import { ExperienceHeader } from "./experience-header";
import { ExperienceTimeline } from "./experience-timeline";
import { CurrentPosition } from "./current-position";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        py-12
        lg:py-20
      "
    >
      {/* Background */}
      <BackgroundEffects />

      {/* Ambient Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* Top Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-sky-500/10
            blur-[140px]
            dark:bg-sky-500/15
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/10
            blur-[160px]
            dark:bg-violet-500/15
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          sm:px-8
          lg:px-16
        "
      >
        <ExperienceHeader />

        <div className="mt-24">
          <ExperienceTimeline />
        </div>

        <div className="mt-32">
          <CurrentPosition />
        </div>
      </motion.div>
    </section>
  );
}