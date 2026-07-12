"use client";

import { motion } from "framer-motion";

import MagicBento from "@/components/MagicBento";

import { treatments } from "@/data/home/treatments";
import TreatmentCard from "./treatment-card";

export function Treatments() {
  return (
    <section className="relative overflow-hidden py-16 lg:min-h-[90svh] lg:py-24">
      {/* Background */}
      <div className="relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="
            inline-flex items-center gap-2 rounded-full border border-[#D4A017]/20
            bg-[#D4A017]/10
            px-4 py-2
            text-[11px] font-semibold uppercase
            tracking-[0.24em]
            text-[#D4A017]
          "
          >
            Specialised Treatments
          </span>

          <h2 className="mt-8 text-3xl font-bold tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Expert Orthopaedic Care for Every Stage of Recovery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Comprehensive treatment pathways designed to restore mobility,
            reduce pain, and help patients return confidently to everyday life.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mt-14 grid gap-4 lg:mt-16 lg:gap-5
            auto-rows-[320px]
            md:grid-cols-2 md:auto-rows-[340px]
            xl:grid-cols-4
          "
        >
          {treatments.map((item, index) => (
            <motion.div
              key={item.slug}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "h-full",
                index === 0 && "md:col-span-2 xl:row-span-2",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <MagicBento
                enableSpotlight
                enableBorderGlow
                enableTilt={false}
                enableMagnetism={false}
                clickEffect={false}
                spotlightRadius={800}
                particleCount={10}
                glowColor="212, 160, 23"
              >
                <TreatmentCard
                  {...item}
                  featured={index === 0}
                />
              </MagicBento>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}