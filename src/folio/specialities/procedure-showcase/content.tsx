"use client";

import { AnimatePresence, motion } from "framer-motion";

import { contentVariants } from "./animations";
import { ProcedureImage } from "./procedure-image";
import { CommonConditions } from "./common-conditions";
import { AvailableProcedures } from "./available-procedures";

import type { ProcedureContentProps } from "./types";

export function ProcedureContent({
  item,
}: ProcedureContentProps) {
  return (
    <div className="py-12 lg:px-12 xl:px-16">
      <AnimatePresence mode="wait">
        <motion.article
          key={item.id}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="space-y-14"
        >
          {/* ------------------------------------------------ */}
          {/* Premium Image */}
          {/* ------------------------------------------------ */}

          <ProcedureImage
            image={item.image}
            title={item.title}
          />

          {/* ------------------------------------------------ */}
          {/* Editorial Content */}
          {/* ------------------------------------------------ */}

          <section className="space-y-8">
            {/* Editorial Label */}

            <div className="space-y-3">
              <span
                className="
                  text-4xl
                  font-black
                  uppercase
                  tracking-[0.05em]
                  text-[#D4A017]

                  lg:text-5xl
                "
              >
                {item.title}
              </span>

              <div className="h-px mt-2 w-[50%] bg-[#D4A017]" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p
                className="
                  text-2xl
                  font-bold
                  text-[#00A0E4]
                "
              >
                {item.subtitle}
              </p>
            </div>

            {/* Description */}
            <div className="flex gap-6 pt-2">
              <div
                className="
                  w-[2px]
                  shrink-0
                  rounded-full
                  bg-[#D4A017]
                "
              />

              <p
                className="
                  max-w-4xl
                  text-lg
                  leading-9
                  text-muted-foreground
                "
              >
                {item.description}
              </p>
            </div>
          </section>
          
          {/* ------------------------------------------------ */}
          {/* Conditions */}
          {/* ------------------------------------------------ */}
          <CommonConditions
            conditions={item.conditions}
          />

          {/* Premium Divider */}

          <div className="flex items-center gap-5">
            <div className="h-[2px] flex-1 bg-[#D4A017]/60" />

            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#D4A017]/60">
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
            </div>

            <div className="h-[2px] flex-1 bg-[#D4A017]/60" />
          </div>

          {/* ------------------------------------------------ */}
          {/* Procedures */}
          {/* ------------------------------------------------ */}

          <AvailableProcedures
            procedures={item.procedures}
          />
        </motion.article>
      </AnimatePresence>
    </div>
  );
}