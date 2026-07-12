"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { imageVariants } from "./animations";
import type { ProcedureImageProps } from "./types";

export function ProcedureImage({
  image,
  title,
}: ProcedureImageProps) {
  return (
    <motion.figure
      variants={imageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Gold Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-6
          -z-20
          rounded-[42px]

          bg-[#D4A017]/20
          blur-[90px]

          opacity-0
        "
        animate={{ opacity: 0 }}
        whileHover={{
          opacity: 0.9,
        }}
        transition={{ duration: 0.45 }}
      />

      {/* Blue Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-14
          -right-14
          -z-20

          h-56
          w-56

          rounded-full
          bg-[#00A0E4]/15

          blur-[100px]

          opacity-0
        "
        animate={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
        }}
        transition={{ duration: 0.45 }}
      />

      {/* Premium Border */}

      <motion.div
        whileHover={{
          boxShadow:
            "0 40px 90px rgba(15,23,42,.22)",
        }}
        transition={{
          duration: .45,
        }}
        className="
          overflow-hidden
          rounded-[28px]

          border
          border-[#D4A017]/25

          bg-white

          dark:bg-slate-950
        "
      >
        {/* Image */}

        <div
          className="
            relative
            aspect-[15/7]
            overflow-hidden
          "
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: .9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-0
            "
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width:1024px)100vw,70vw"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* Editorial Highlight */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-br
              from-white/18
              via-transparent
              to-transparent
            "
          />

          {/* Bottom Fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-44

              bg-gradient-to-t
              from-black/18
              via-transparent
              to-transparent

              dark:from-black/35
            "
          />

          {/* Glass Reflection */}

          <motion.div
            initial={{
              x: "-140%",
            }}
            whileHover={{
              x: "240%",
            }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0

              w-28

              skew-x-[-20deg]

              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
            "
          />

          {/* Inner Ring */}

          <motion.div
            whileHover={{
              boxShadow:
                "inset 0 0 0 2px rgba(212,160,23,.45)",
            }}
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-[34px]

              ring-1
              ring-white/40

              dark:ring-white/10
            "
          />
        </div>
      </motion.div>
    </motion.figure>
  );
}