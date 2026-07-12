"use client";

import { motion } from "framer-motion";

import { ServiceFeatureCard } from "./service-feature-card";
import { sectionVariants } from "./animations";
import type { ServiceHighlight } from "./types";

interface ServiceFeatureGridProps {
  features: ServiceHighlight[];
}

export function ServiceFeatureGrid({
  features,
}: ServiceFeatureGridProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        mt-10
        grid
        gap-5

        sm:grid-cols-2

        lg:gap-6
      "
    >
      {features.map((feature, index) => (
        <ServiceFeatureCard
            key={`${feature.title.first}-${index}`}
            feature={feature}
        />
      ))}
    </motion.div>
  );
}