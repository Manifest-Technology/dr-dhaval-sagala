"use client";

import { motion } from "framer-motion";

interface TimelineConnectorProps {
  direction: "left" | "right";
}

export function TimelineConnector({
  direction,
}: TimelineConnectorProps) {
  const isLeft = direction === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      style={{
        transformOrigin: isLeft ? "left" : "right",
      }}
      className={`
        pointer-events-none
        absolute
        top-1/2
        hidden
        h-px
        w-14
        -translate-y-1/2
        lg:block

        ${
          isLeft
            ? "-left-14"
            : "-right-14"
        }
      `}
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-sky-500/40
          via-violet-500/30
          to-transparent
          blur-md
        "
      />

      {/* Main Line */}

      <div
        className={`
          absolute
          inset-0

          ${
            isLeft
              ? "bg-gradient-to-r from-sky-500 via-violet-500 to-transparent"
              : "bg-gradient-to-l from-sky-500 via-violet-500 to-transparent"
          }
        `}
      />

      {/* Endpoint */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className={`
          absolute
          top-1/2
          h-2.5
          w-2.5
          -translate-y-1/2
          rounded-full
          bg-gradient-to-br
          from-sky-500
          via-violet-500
          to-amber-500
          shadow-[0_0_15px_rgba(59,130,246,.5)]

          ${
            isLeft
              ? "-left-1"
              : "-right-1"
          }
        `}
      />
    </motion.div>
  );
}