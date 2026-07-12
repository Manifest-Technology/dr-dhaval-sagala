"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { fadeUpVariants } from "./animations";

interface ServiceBadgeProps {
  children: string;
}

export function ServiceBadge({
  children,
}: ServiceBadgeProps) {
  return (
    <motion.div variants={fadeUpVariants}>
      <Badge
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#D4A017]/25
          bg-[#D4A017]/10
          px-5
          py-5
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D4A017]
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#D4A017]
          "
        />

        {children}
      </Badge>
    </motion.div>
  );
}