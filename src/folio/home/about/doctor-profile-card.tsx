"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { aboutData } from "@/data/home/about";

export function DoctorProfileCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -24,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        overflow-hidden rounded-[28px]
        border border-border/60
        bg-card/80 p-4
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(15,23,42,0.08)]

        dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      <div className="overflow-hidden rounded-[22px]">
        <Image
          src={aboutData.image}
          alt="Dr. Dhaval Sagala"
          priority
          className="
            aspect-[4/4.5]
            w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold tracking-tight">
          Dr. Dhaval Sagala
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Orthopaedic Surgeon
        </p>
      </div>

      <Button className="mt-6 h-11 w-full rounded-2xl">
        Schedule Consultation
      </Button>
    </motion.div>
  );
}