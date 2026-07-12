"use client";

import { motion } from "framer-motion";

export function SignatureBlock() {
  return (
    <section
      className="
        relative flex min-h-screen items-center
        overflow-hidden pt-8 pb-24
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-[#D4A017]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-120px]
            bottom-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-sky-500/10
            blur-[160px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-8
          text-center
        "
      >

        {/* Section Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D4A017]/25
              bg-[#D4A017]/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D4A017]
            "
          >
            A Message From The Doctor
          </span>

          <div className="mx-auto mt-6 h-px w-20 bg-[#D4A017]" />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .15,
            duration: .7,
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="mt-6"
        >
          <h2
            className="
              max-w-7xl
              text-4xl
              font-light
              leading-[1.15]
              tracking-tight
              text-slate-900
              lg:text-6xl
              dark:text-white
            "
          >
            Movement is more than
            <span className="block font-semibold text-[#D4A017]">
              treating an injury.
            </span>

            <span className="block">
              It is restoring confidence.
            </span>
          </h2>
        </motion.blockquote>

        {/* Message */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .35,
          }}
          className="
            mx-auto
            mt-8
            max-w-4xl
          "
        >
          <p
            className="
              text-lg
              leading-9
              text-slate-600
              dark:text-slate-300
            "
          >
            Every patient deserves an accurate diagnosis,an honest conversation, and a personalised treatment plan designed around their life — not just their condition.
          </p>

        </motion.div>

        {/* Divider */}
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
          }}
          transition={{
            delay: .45,
            duration: .6,
          }}
          className="mt-8"
        >
          <div className="mx-auto h-px w-28 bg-[#D4A017]" />
        </motion.div>

        {/* Doctor Signature */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .55,
            duration: .6,
          }}
          className="mt-12 text-center"

        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.45em]
              text-[#D4A017]
            "
          >
            With Best Wishes
          </p>

          <h3
            className="
              mt-5
              text-4xl
              font-light
              italic
              tracking-tight
              text-slate-900
              lg:text-5xl
              dark:text-white
            "
          >
            Dr. Dhaval H. Sagala
          </h3>

          <p
            className="
              mt-5
              text-sm
              tracking-[0.35em]
              uppercase
              text-slate-500
              dark:text-slate-400
            "
          >
            Specialist Orthopaedic Surgeon
          </p>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .75,
          }}
          className="
            mt-12
            flex
            items-center
            gap-4
          "
        >
          <div className="h-px w-14 bg-[#D4A017]" />
          
          <div
            className="
              h-2
              w-2
              rounded-full
              bg-[#D4A017]
            "
          />
          <div className="h-px w-14 bg-[#D4A017]" />
        </motion.div>
      </div>
    </section>
  );
}