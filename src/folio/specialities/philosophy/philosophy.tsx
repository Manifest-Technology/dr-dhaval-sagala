"use client";

import { motion } from "framer-motion";

type PhilosophyProps = {
  badge: string;
  quote: {
    top: string;
    highlight: string;
    bottom: string;
  };
  description: string;
  author: string;
  designation: string;
  footerLabel?: string;
};

export function Philosophy({
  badge,
  quote,
  description,
  author,
  designation,
  footerLabel = "Treatment Philosophy",
}: PhilosophyProps) {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        py-24
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          text-center
          lg:px-10
        "
      >
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            {badge}
          </span>

          <div className="mx-auto mt-6 h-px w-20 bg-[#D4A017]" />
        </motion.div>

        {/* Quote */}

        <motion.blockquote
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-7"
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
            <span className="block">
              {quote.top}
            </span>

            <span className="block font-semibold text-[#D4A017]">
              {quote.highlight}
            </span>

            <span className="block">
              {quote.bottom}
            </span>
          </h2>
        </motion.blockquote>

        {/* Description */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-7 max-w-4xl"
        >
          <p
            className="
              text-lg
              leading-9
              text-slate-600
              dark:text-slate-300
            "
          >
            {description}
          </p>
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-7"
        >
          <div className="mx-auto h-px w-28 bg-[#D4A017]" />
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.45em]
              text-[#D4A017]
            "
          >
            {footerLabel}
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
            {author}
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
            {designation}
          </p>
        </motion.div>

        {/* Bottom Accent */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px w-14 bg-[#D4A017]" />

          <div className="h-2 w-2 rounded-full bg-[#D4A017]" />

          <div className="h-px w-14 bg-[#D4A017]" />
        </motion.div>
      </div>
    </section>
  );
}