"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import {
  listContainerVariants,
  listItemVariants,
  textVariants,
} from "./animations";

import type { CommonConditionsProps } from "./types";

export function CommonConditions({
  conditions,
}: CommonConditionsProps) {
  return (
    <motion.section
      variants={textVariants}
      className="space-y-8"
    >
      {/* ------------------------------------------------ */}
      {/* Editorial Header */}
      {/* ------------------------------------------------ */}

      <div className="space-y-3">
        <span
          className="
            inline-flex
            items-center
            gap-4

            text-xl
            font-semibold
            uppercase
            tracking-[0.1em]

            text-[#D4A017]
          "
        >
          <span className="h-3 w-3 rounded-full bg-[#D4A017]" />

          Common Conditions
        </span>
      </div>

      {/* ------------------------------------------------ */}
      {/* Grid */}
      {/* ------------------------------------------------ */}

      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="
          grid
          gap-5

          md:grid-cols-2
        "
      >
        {conditions.map((condition) => (
          <motion.div
            key={condition}
            variants={listItemVariants}
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-slate-200/70

              bg-white/80
              backdrop-blur-xl

              shadow-[0_10px_35px_rgba(15,23,42,0.05)]

              transition-all
              duration-300

              hover:border-[#D4A017]/30
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]

              dark:border-slate-800
              dark:bg-slate-950/70
            "
          >
            {/* Gold Accent */}

            <motion.div
              className="
                absolute
                left-0
                top-0

                h-full
                w-[3px]

                bg-[#D4A017]
              "
              initial={{
                scaleY: 0.3,
              }}
              whileHover={{
                scaleY: 1,
              }}
            />

            {/* Background Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-br
                from-[#D4A017]/[0.04]
                via-transparent
                to-[#00A0E4]/[0.03]

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />

            <div
              className="
                relative

                flex
                items-center
                gap-5

                px-7
                py-6
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-2xl

                  bg-[#00A0E4]/10

                  text-[#00A0E4]

                  transition-all
                  duration-300

                  group-hover:bg-[#D4A017]/10
                  group-hover:text-[#D4A017]
                "
              >
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="h-5 w-5"
                />
              </div>

              {/* Content */}

              <div className="min-w-0 flex-1">
                <h4
                  className="
                    text-base
                    font-semibold
                    leading-7

                    text-slate-800
                    transition-colors
                    duration-300
                    group-hover:text-slate-950
                    dark:text-slate-100
                  "
                >
                  {condition}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}