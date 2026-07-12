"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const credentials = [
  "Sports Medicine & Arthroscopy",
  "Joint Reconstruction",
  "International Clinical Training",
  "Patient-First Care",
];

export function EditorialContent() {
  return (
    <div className="max-w-[700px] py-6">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
          inline-flex
          rounded-full
          border
          border-[#D4A017]/25
          bg-[#D4A017]/10
          px-5
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D4A017]
        "
      >
        Dr. Dhaval Sagala
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
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
        Committed to Restoring
        <br />
        Movement, Function,
        <span className="block text-[#D4A017]">
          and Confidence.
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="
          mt-8
          max-w-[600px]
          text-lg
          leading-9
          text-slate-600
          dark:text-slate-300
        "
      >
        Dr. Dhaval H. Sagala is a Specialist Orthopaedic Surgeon with
        advanced training across India, Singapore, and South Korea,
        delivering evidence-based care for sports injuries, complex
        trauma, and joint reconstruction.
      </motion.p>

      {/* Credentials */}
      <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5">
        {credentials.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + index * 0.08,
            }}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#D4A017]/10
                text-[#D4A017]
              "
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>

            <span
              className="
                text-base
                font-medium
                text-slate-800
                dark:text-slate-200
              "
            >
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <Button
          asChild
          size="lg"
          className="
            h-14 rounded-full
            bg-foreground px-8
            text-sm font-semibold text-background
            transition-all duration-300
            hover:scale-[1.02]
            hover:bg-[#D4A017]
          "
        >
          <Link 
            href="/contact"
            className="flex items-center gap-3"
          >
            Book an Appointment
          </Link>
          
        </Button>
      </motion.div>
    </div>
  );
}