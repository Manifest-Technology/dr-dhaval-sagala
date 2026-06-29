"use client";

import { motion } from "framer-motion";

import { PatientGlobe } from "./patient-globe";
import { PatientInfoCard } from "./patient-info-card";

export function PatientEssentials() {
  return (
    <section className="relative overflow-hidden py-16 lg:min-h-screen lg:py-0">
      <div className="mx-auto flex max-w-7xl flex-col px-4 md:px-6 lg:min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-3xl shrink-0 pt-6 text-center lg:pt-8"
        >
          <span
            className={`
              inline-flex items-center rounded-full
              border border-[#D4A017]/20
              bg-[#D4A017]/10
              px-4 py-1.5
              text-[11px] font-semibold uppercase
              tracking-[0.24em]
              text-[#D4A017]
            `}
          >
            Patient Essentials
          </span>

          <h2
            className={`
              mt-4 text-balance
              text-3xl font-bold tracking-tight
              md:text-4xl xl:text-5xl
            `}
          >
            Everything You Need Before Your Visit
          </h2>

          <p
            className={`
              text-muted-foreground
              mx-auto mt-3 max-w-2xl
              text-sm leading-relaxed
              md:text-base
            `}
          >
            Access consultation timings, hospital location, and
            contact information for a seamless appointment experience.
          </p>
        </motion.div>

        {/* Content */}
        <div
          className={`
            flex flex-col gap-8 pt-8 lg:grid
            lg:grid-cols-[minmax(360px,420px)_minmax(0,1fr)]
            
            lg:items-center lg:gap-12 lg:py-12
          `}
        >
          <div
            className={`
              order-2 mx-auto w-full
              max-w-[420px] lg:order-1 lg:mx-0
            `}
          >
            <PatientInfoCard />
          </div>

          <div
            className={`
              order-1 flex justify-center
              lg:order-2 lg:justify-end
            `}
          >
            <PatientGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}