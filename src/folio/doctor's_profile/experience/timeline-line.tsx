"use client";

import { motion } from "framer-motion";

export function TimelineLine() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-y-0
        hidden
        lg:block

        lg:left-1/2
        lg:-translate-x-1/2
        z-0
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-8
          -translate-x-1/2
          bg-gradient-to-b
          from-sky-500/20
          via-violet-500/20
          to-amber-500/20
          blur-2xl
        "
      />

      {/* Background Line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-border
          via-border/80
          to-border
        "
      />

      {/* Animated Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "top",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[3px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-sky-500
          via-violet-500
          to-amber-500
        "
      />

      {/* Highlight */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[8px]
          -translate-x-1/2
          rounded-full
          bg-white/20
          blur-md
          dark:bg-white/10
        "
      />
    </div>
  );
}