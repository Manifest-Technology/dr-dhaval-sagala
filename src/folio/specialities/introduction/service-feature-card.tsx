"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ServiceHighlight } from "./types";
import { cardVariants } from "./animations";

interface ServiceFeatureCardProps {
  feature: ServiceHighlight;
}

export function ServiceFeatureCard({
  feature,
}: ServiceFeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/70
        bg-white/70
        p-5
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[#D4A017]/40
        hover:shadow-xl
        hover:shadow-[#D4A017]/10
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      <div
        className="
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#D4A017]/10
          text-[#D4A017]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <FontAwesomeIcon
          icon={feature.icon}
          className="text-lg"
        />
      </div>

      <h4
        className="
          text-[15px]
          font-semibold
          leading-6
          text-slate-900
          dark:text-white
        "
      >
        <span className="block">
          {feature.title.first}
        </span>

        {feature.title.second && (
          <span className="block">
            {feature.title.second}
          </span>
        )}
      </h4>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-[#D4A017]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
}