"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarDays,
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";

import { consultationDetails } from "@/data/home/patient_essentials";

export function PatientInfoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        w-full max-w-[390px]
        rounded-[32px]
        border border-black/5
        bg-white/90
        p-5
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]

        dark:border-white/10
        dark:bg-slate-950/75
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-2xl bg-[#D4A017]/10
            text-[#D4A017]
          `}
        >
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl font-bold tracking-tight">
            Consultation Schedule
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Medeor Hospital · Bur Dubai
          </p>
        </div>
      </div>

      {/* Schedule */}
      <div className="mt-5 space-y-3">
        {consultationDetails.timings.map((item) => (
          <div
            key={item.day}
            className={`
              flex items-center justify-between gap-4
              rounded-2xl bg-black/[0.03]
              px-4 py-3

              dark:bg-white/[0.04]
            `}
          >
            <div className="flex min-w-0 items-center gap-3">
              <FontAwesomeIcon
                icon={faClock}
                className="shrink-0 text-[#D4A017]"
              />

              <span className="font-medium">
                {item.day}
              </span>
            </div>

            <span className="shrink-0 text-sm text-muted-foreground">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="mt-5 space-y-4 border-t border-black/5 pt-5 dark:border-white/10">
        <div className="flex items-start gap-4">
          <div
            className={`
              mt-1 flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl bg-[#D4A017]/10
            `}
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#D4A017]"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[15px] font-bold tracking-[0.08em] text-primary">
              Hospital Location
            </p>

            <address className="mt-1.5 not-italic text-sm leading-6 text-foreground/80">
              {consultationDetails.hospital}, Dubai, UAE
            </address>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4A017]/10">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#D4A017]"
            />
          </div>

          <div>
            <p className="text-[15px] font-bold tracking-[0.08em] text-primary">
              Contact Number
            </p>

            <a
              href={`tel:${consultationDetails.phone.replace(/\s/g, "")}`}
              className={`
                mt-1 inline-block !text-foreground/80
                text-sm tracking-tight

                transition-all duration-300
                hover:text-[#D4A017]
              `}
            >
              {consultationDetails.phone}
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button
        className={`
          mt-6 h-12 w-full rounded-2xl
          bg-[#D4A017]
          text-sm font-semibold text-black

          transition-all duration-300
          hover:bg-[#BF8F11]
          hover:shadow-lg
          hover:shadow-[#D4A017]/25
        `}
      >
        Book Consultation
      </Button>
    </motion.div>
  );
}