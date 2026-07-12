"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function ExperienceHeader() {
  return (
    <header
      className="
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
        text-center
      "
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
        }}
      >
        <Badge
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
          Experience & Education
        </Badge>
      </motion.div>

      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.55,
        }}
        className="
          my-5
          max-w-5xl
          text-4xl
          font-black
          tracking-tight
          text-foreground
          sm:text-5xl
          lg:text-6xl
        "
      >
        A Journey of
        <span
          className="
            block
            bg-gradient-to-r
            from-sky-500
            via-violet-500
            to-amber-500
            bg-clip-text
            text-transparent
          "
        >
          Surgical Excellence
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.55,
        }}
        className="
          mx-auto
          mt-4
          max-w-7xl
          text-base
          leading-7
          text-muted-foreground
          lg:text-lg
          text-slate-600
          dark:text-slate-400
        "
      >
        Every milestone reflects a commitment to advancing
        orthopaedic surgery through continuous learning,
        international fellowships, academic leadership, and
        patient-centered innovation—building a career
        dedicated to restoring movement and improving lives.
      </motion.p>

      {/* Decorative Divider */}

      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        className="
          mt-12
          flex
          items-center
          gap-5
        "
      >
        <span
          className="
            h-px
            w-20
            bg-gradient-to-r
            from-transparent
            to-sky-500
          "
        />

        <span
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-gradient-to-r
            from-sky-500
            to-violet-500
            shadow-[0_0_25px_rgba(59,130,246,.45)]
          "
        />

        <span
          className="
            h-px
            w-20
            bg-gradient-to-l
            from-transparent
            to-violet-500
          "
        />
      </motion.div>
    </header>
  );
}