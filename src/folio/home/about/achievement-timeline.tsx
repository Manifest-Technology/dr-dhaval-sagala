"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeartPulse,
  faRobot,
  faShieldHeart,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import { aboutData } from "@/data/home/about";

const achievements = [
  {
    icon: faRobot,
    title: "Advanced Surgical Techniques",
    description:
      "Precision-driven procedures designed for faster recovery and improved outcomes.",
  },
  {
    icon: faHeartPulse,
    title: "Patient-Centred Care",
    description:
      "Every treatment plan is tailored to each patient's goals, lifestyle, and expectations.",
  },
  {
    icon: faUserDoctor,
    title: "Comprehensive Expertise",
    description:
      "Specialised care across joint replacement, trauma management, and sports injuries.",
  },
  {
    icon: faShieldHeart,
    title: "Long-Term Recovery",
    description:
      "Structured rehabilitation programmes with ongoing follow-up support.",
  },
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

export function AchievementTimeline() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <motion.div
        {...fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <span
          className="
            inline-flex items-center rounded-full
            border border-[#D4A017]/20
            bg-[#D4A017]/10
            px-4 py-1.5
            text-[11px] font-semibold uppercase
            tracking-[0.24em]
            text-[#D4A017]
          "
        >
          {aboutData.label}
        </span>

        <h2
          className="
            mt-5 text-balance
            text-xl font-bold tracking-tight

            sm:text-2xl
            lg:text-3xl
            xl:text-4xl
          "
        >
          {aboutData.title}
        </h2>

        <p
          className="
            mt-6 max-w-2xl
            text-md leading-8
            text-muted-foreground
          "
        >
          {aboutData.description}
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group min-h-[240px]
              rounded-[28px]
              border border-border/60
              bg-card/80
              p-6
              backdrop-blur-xl

              transition-all duration-300

              hover:border-primary/20
              hover:shadow-2xl
            "
          >
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl

                bg-primary/10
                text-primary

                transition-all duration-300

                group-hover:bg-primary
                group-hover:text-primary-foreground
              "
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="!h-7 !w-7"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}