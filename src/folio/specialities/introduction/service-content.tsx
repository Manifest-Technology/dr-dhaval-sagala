"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";

import { fadeUpVariants } from "./animations";
import { ServiceBadge } from "./service-badge";
import { ServiceFeatureGrid } from "./service-feature-grid";
import type { ServiceIntroductionData } from "./types";

interface ServiceContentProps {
  data: ServiceIntroductionData;
}

export function ServiceContent({
  data,
}: ServiceContentProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="
        flex
        flex-col
        justify-center
      "
    >
      {/* Badge */}

      <ServiceBadge>
        {data.badge}
      </ServiceBadge>

      {/* Heading */}

      <motion.div
        variants={fadeUpVariants}
        className="mt-6"
      >
        <h2
          className="
            mt-5
            text-3xl
            font-black
            leading-[1.1]
            tracking-wide
            text-slate-900
            lg:text-5xl
            dark:text-white
          "
        >
          <span className="block text-slate-900 dark:text-white">
            {data.title.first}
          </span>

          <span className="mt-2 block text-[#D4A017]">
            {data.title.second}
          </span>
        </h2>
      </motion.div>

      {/* Description */}

      <motion.div
        variants={fadeUpVariants}
        className="
          mt-8
          max-w-[600px]
          border-l-[3px]
          border-[#D4A017]
          pl-6
        "
      >
        {data.description.map((paragraph) => (
          <p
            key={paragraph}
            className="
            text-lg
            leading-9
            text-slate-600
            dark:text-slate-300
            "
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Features */}

      <motion.div variants={fadeUpVariants}>
        <ServiceFeatureGrid
          features={data.highlights}
        />
      </motion.div>

      {/* Bottom */}

      <motion.div
        variants={fadeUpVariants}
        className="
          mt-10
          flex
          flex-col
          gap-6

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Button */}
        {data.button && (
          <Button
            asChild
            size="lg"
            className="
              group
              h-14
              rounded-full
              px-8
              text-sm
              font-semibold
              shadow-lg
              transition-all
              duration-300

              hover:scale-[1.02]
            "
          >
            <Link href={data.button.href}>
              {data.button.label}
            </Link>
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
}