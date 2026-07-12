"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import doctorImage from "@/assets/img/home/about/doctor-profile.png";

export function DoctorVisual() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[620px]
        items-center
        justify-center
      "
    >

      {/* Ambient Light */}
      <div
        className="
          absolute
          -left-24
          top-20
          h-80
          w-80
          rounded-full
          bg-[#D4A017]/15
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-16
          h-72
          w-72
          rounded-full
          bg-sky-500/10
          blur-[150px]
        "
      />

      {/* Background Panel */}
      <div
        className="
          absolute
          inset-x-6
          top-10
          bottom-10
          rounded-[44px]
          border
          border-[#D4A017]/10
          bg-gradient-to-br
          from-[#D4A017]/5
          via-white/30
          to-sky-500/5
          dark:from-[#D4A017]/5
          dark:via-white/[0.03]
          dark:to-sky-500/[0.03]
          backdrop-blur-xl
        "
      />

      {/* Premium Frame */}
      <motion.div
        whileHover={{
          y: -8,
          rotate: -0.8,
          scale: 1.015,
        }}
        transition={{
          duration: .35,
        }}
        className="
          relative
          z-20
          overflow-hidden
          rounded-[46px]
          border
          border-white/70
          bg-white
          shadow-[0_80px_160px_rgba(15,23,42,.22)]
          dark:border-white/10
          dark:bg-slate-900
        "
      >

        {/* Top Light */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-44
            bg-gradient-to-b
            from-white/50
            via-white/10
            to-transparent
            z-20
          "
        />

        {/* Left Fade */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-20
            bg-gradient-to-r
            from-white/35
            to-transparent
            z-20
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-28
            bg-gradient-to-t
            from-white/20
            to-transparent
            z-20
          "
        />

        {/* Image */}
        <Image
          src={doctorImage}
          alt="Dr. Dhaval H. Sagala"
          priority
          className="
            h-[650px]
            w-[500px]
            object-cover
            object-[58%_35%]
            scale-[1.08]
            transition-transform
            duration-700
            hover:scale-[1.12]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_45%,rgba(15,23,42,.12)_100%)]
            pointer-events-none
            z-20
          "
        />

        {/* Reflection */}
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-28
            -skew-x-12
            bg-white/15
            blur-xl
          "
        />
      </motion.div>

      {/* Fellowship Badge */}
      <motion.div
        initial={{
          opacity: 1,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[-10px]
          top-12
          z-40
          hidden
          lg:block
        "
      >
        <div
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/80
            px-5 py-4
            shadow-[0_25px_60px_rgba(15,23,42,.15)]
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-[#101010]/80
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-10 w-10
                items-center
                justify-center
                rounded-xl
                bg-[#D4A017]/10
                text-[#D4A017]
              "
            >
              <FontAwesomeIcon icon={faGlobe} />
            </div>

            <div>
              <p className="text-sm font-semibold">
                International Fellowship
              </p>

              <p className="mt-1 text-xs text-slate-500">
                India • Singapore • South Korea
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Gold Accent */}
      <div
        className="
          absolute
          -right-3
          top-24
          z-30
          h-52
          w-[5px]
          rounded-full
          bg-gradient-to-b
          from-[#F5C84C]
          via-[#D4A017]
          to-[#B8860B]
          shadow-[0_0_25px_rgba(212,160,23,.45)]
        "
      />

      {/* Bottom Decoration */}
      <div
        className="
          absolute
          bottom-8
          right-8
          z-30
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            absolute
            h-10
            w-10
            rotate-45
            rounded-sm
            border
            border-[#D4A017]/30
          "
        />

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-[#D4A017]
          "
        />
      </div>

      {/* Soft Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          h-28
          w-[85%]
          rounded-full
          bg-[#D4A017]/10
          blur-[70px]
        "
      />

      {/* Image Border Glow */}
      <div
        className="
          absolute
          inset-x-5
          top-5
          bottom-5
          rounded-[46px]
          border
          border-white/30
          pointer-events-none
        "
      />
    </div>
  );
}