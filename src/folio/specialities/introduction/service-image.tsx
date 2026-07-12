"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { imageVariants } from "./animations";

interface ServiceImageProps {
  src: StaticImageData | string;
  alt: string;
}

export function ServiceImage({
  src,
  alt,
}: ServiceImageProps) {
  return (
    <motion.div
      variants={imageVariants}
      className="relative mx-auto w-full max-w-[560px]"
    >
      {/* Gold Glow */}
      <div
        className="
          absolute
          -left-8
          top-10
          h-40
          w-40
          rounded-full
          bg-[#D4A017]/20
          blur-3xl
          dark:bg-[#D4A017]/10
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          -bottom-10
          -right-10
          h-48
          w-48
          rounded-full
          bg-sky-500/15
          blur-3xl
          dark:bg-sky-500/10
        "
      />

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/70
          bg-white
          shadow-[0_25px_80px_rgba(15,23,42,0.12)]
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <Image
          src={src}
          alt={alt}
          priority
          className="
            h-[420px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.04]

            md:h-[520px]
            lg:h-[100svh]
          "
        />

        {/* Image Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/15
            via-transparent
            to-transparent
          "
        />

        {/* Decorative Corner */}
        <div
          className="
            absolute
            bottom-5
            right-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/70
            bg-white/80
            backdrop-blur
            dark:border-slate-700
            dark:bg-slate-900/80
          "
        >
          <div
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-[#D4A017]
            "
          />
        </div>
      </motion.div>
    </motion.div>
  );
}