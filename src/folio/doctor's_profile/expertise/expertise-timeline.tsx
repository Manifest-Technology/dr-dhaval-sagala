"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { BackgroundEffects } from "@/components/layout/background-effects";

import { expertiseData } from "@/data/doctor's_profile/expertise";

import { ExpertiseItem } from "./expertise-item";

export function ExpertiseTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 20%", "end 80%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="relative !overflow-hidden py-24 lg:py-36"
    >
      {/* ============================= */}

      {/* TIMELINE */}

      {/* ============================= */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        hidden
        h-full
        w-[2px]
        -translate-x-1/2
        lg:block
      "
      >
        {/* Grey Line */}
        <div className="absolute inset-0 bg-border" />

        {/* Animated Gold Line */}

        <motion.div
          style={{
            scaleY: progress,
            transformOrigin: "top",
          }}
          className="
            absolute
            inset-x-0
            top-0
            h-full
            bg-[#D4A017]
          "
        />
      </div>

      {/* ============================= */}

      {/* MOBILE LINE */}

      {/* ============================= */}

      <div
        className="
        absolute
        left-8
        top-0
        h-full
        w-px
        bg-border
        lg:hidden
      "
      >
        <motion.div
          style={{
            scaleY: progress,
            transformOrigin: "top",
          }}
          className="
            absolute
            inset-x-0
            top-0
            h-full
            bg-[#D4A017]
          "
        />
      </div>

      {/* ============================= */}

      {/* ITEMS */}

      {/* ============================= */}

      <div
        className="
        relative
        mx-auto
        flex
        max-w-7xl
        flex-col
        gap-25
        px-6
        lg:px-10
      "
      >
        {expertiseData.map((item, index) => (
          <ExpertiseItem
            key={item.id}
            {...item}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}