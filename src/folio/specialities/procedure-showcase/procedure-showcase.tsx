"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { fadeUpVariants } from "./animations";
import { ProcedureSidebar } from "./sidebar";
import { ProcedureContent } from "./content";

import type { ProcedureShowcaseProps } from "./types";
import { ProcedureHeader } from "./procedure-header";

export function ProcedureShowcase({
  data,
  defaultIndex = 0,
  className,
}: ProcedureShowcaseProps) {
  const safeIndex = Math.min(
    Math.max(defaultIndex, 0),
    Math.max(data.items.length - 1, 0)
  );

  const [activeIndex, setActiveIndex] = useState(safeIndex);

  const activeItem = useMemo(
    () => data.items[activeIndex],
    [activeIndex, data.items]
  );

  if (!activeItem) {
    return null;
  }

  return (
    <section
      className={cn(
        "relative py-12 lg:py-24 px-1",
        className
      )}
    >
      <div className="px-6 lg:px-10">
        {/* ------------------------------------------------ */}
        {/* Section Header */}
        {/* ------------------------------------------------ */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <ProcedureHeader data={data} />
        </motion.div>

        {/* Top Divider */}

        <div className="mt-10 border-t border-border/50" />

        {/* ------------------------------------------------ */}
        {/* Layout */}
        {/* ------------------------------------------------ */}

        <div
          className="
            grid
            lg:grid-cols-[340px_1px_minmax(0,1fr)]
          "
        >
          {/* Sidebar */}

          <ProcedureSidebar
            items={data.items}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          {/* Vertical Divider */}

          <div
            className="
              hidden
              lg:block
              bg-border/50
            "
          />

          {/* Content */}

          <ProcedureContent
            item={activeItem}
          />
        </div>
      </div>
    </section>
  );
}