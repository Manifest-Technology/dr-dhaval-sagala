"use client";

import { motion } from "framer-motion";

import {
  sectionVariants,
  lineVariants,
} from "./animations";

import { TimelineShowcaseData } from "./types";

import { TimelineHeader } from "./timeline-header";
import { TimelineItem } from "./timeline-item";
import { TimelineLine } from "./timeline-line";

interface TimelineShowcaseProps {
  data: TimelineShowcaseData;
}

export function TimelineShowcase({
  data,
}: TimelineShowcaseProps) {
  return (
    <section className="relative overflow-hidden py-10 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4A017]/10 blur-[120px] dark:bg-[#D4A017]/15" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto max-w-7xl px-6"
      >
        {/* Header */}
        <TimelineHeader data={data} />

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Vertical Line */}
          <motion.div
            variants={lineVariants}
            className="
              absolute
              left-5
              top-0
              h-full
              origin-top
              lg:left-1/2
              lg:-translate-x-1/2
            "
          >
            <TimelineLine />
          </motion.div>

          {/* Items */}
          <div className="relative flex flex-col gap-14 lg:gap-20">
            {data.items.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                total={data.items.length}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}