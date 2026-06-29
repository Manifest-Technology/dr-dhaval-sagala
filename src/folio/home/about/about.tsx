"use client";

import { motion } from "framer-motion";

import { DoctorProfileCard } from "./doctor-profile-card";
import { AchievementTimeline } from "./achievement-timeline";

import { useMouseParallax } from "@/hooks/use-mouse-parallax";

export function About() {
  const { x, y } = useMouseParallax(24);

  return (
    <section className="relative overflow-hidden py-4">
      {/* Ambient background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x, y }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
          }}
          className="
            absolute left-[-10rem] top-[-10rem]
            h-[28rem] w-[28rem]
            rounded-full bg-primary/10 blur-3xl
          "
        />

        <motion.div
          animate={{
            x: -x,
            y: -y,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 20,
          }}
          className="
            absolute bottom-[-12rem] right-[-12rem]
            h-[32rem] w-[32rem]
            rounded-full bg-primary/5 blur-3xl
            dark:bg-primary/10
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div
          className="
            grid gap-10
            lg:grid-cols-[340px_minmax(0,1fr)]
            lg:gap-16
            lg:items-start
          "
        >
          {/* Left sticky column */}

          <aside className="order-1 lg:order-1">
            <div className="lg:sticky lg:top-32">
              <DoctorProfileCard />
            </div>
          </aside>

          {/* Right scrolling content */}

          <div className="order-2 min-w-0 lg:order-2">
            <AchievementTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}