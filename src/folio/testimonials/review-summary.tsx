"use client";

import { motion } from "framer-motion";

import {
  faStar,
  faThumbsUp,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stats = [
  {
    value: "4.9",
    title: "Average Rating",
    subtitle: "Based on verified patient experiences",
    icon: faStar,
    accent: "#D4A017",
    stars: true,
  },
  {
    value: "300+",
    title: "Verified Reviews",
    subtitle: "Authentic patient feedback",
    icon: faUsers,
    accent: "#D4A017",
  },
  {
    value: "98%",
    title: "Patient Satisfaction",
    subtitle: "Patients recommend Dr. Dhaval",
    icon: faThumbsUp,
    accent: "#D4A017",
  },
];

export function ReviewSummary() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: index * 0.12,
          }}
          whileHover={{
            y: -6,
          }}
          className="group relative"
        >
          {/* Gold Accent */}

          <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Card */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-border/70
              bg-card
              p-8
              transition-all
              duration-500
              group-hover:border-[#D4A017]/30
              group-hover:shadow-[0_24px_60px_-24px_rgba(212,160,23,0.25)]
            "
          >
            {/* Decorative Glow */}

            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-[#D4A017]/6
                blur-3xl
                transition-transform
                duration-700
                group-hover:scale-125
              "
            />

            {/* Icon */}

            <div className="mb-10 flex items-center justify-between">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4A017]/20
                  bg-[#D4A017]/8
                  text-[#D4A017]
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-lg"
                />
              </div>

              {item.stars && (
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-xs text-[#D4A017]"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Number */}

            <div className="space-y-5">
              <h3
                className="
                  text-5xl
                  font-bold
                  tracking-[-0.04em]
                "
              >
                {item.value}
              </h3>

              <div className="space-y-2">
                <h4
                  className="
                    text-lg
                    font-semibold
                    tracking-tight
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    max-w-[18rem]
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Accent */}

            <div
              className="
                mt-8
                h-px
                w-0
                bg-[#D4A017]
                transition-all
                duration-500
                group-hover:w-24
              "
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}