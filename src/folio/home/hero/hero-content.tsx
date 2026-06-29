"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleCheck,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/home/hero";
import TextType from "@/components/TextType";

export function HeroContent() {
  return (
    <div className="order-2 lg:order-1">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex flex-wrap gap-3">
          {heroData.badges.map((badge) => (
            <span
              key={badge}
              className="
                inline-flex items-center rounded-full
                border border-[#D4A017]/20
                bg-[#D4A017]/10
                px-4 py-1.5
                text-[11px] font-semibold uppercase
                tracking-[0.24em]
                text-[#D4A017]
              "
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mb-8 inline-flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#D4A017]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4A017]">
            {heroData.subtitle}
          </span>
        </div>

        <h1 className="max-w-3xl leading-[0.92] tracking-[-0.05em]">
          <span className="block text-4xl font-bold text-foreground/90 sm:text-5xl xl:text-6xl">
            Official Website of
          </span>

          <div className="mt-4 text-4xl font-black text-[#D4A017] sm:text-5xl xl:text-6xl">
            {"D"}

            <TextType
              as="div"
              text={["r. Dhaval Sagala"]}
              typingSpeed={80}
              pauseDuration={2500}
              deletingSpeed={100}
              loop={true}
              showCursor={false}
            />
          </div>
        </h1>

        <div className="mt-10 border-l-4 border-[#D4A017]/50 pl-5">
          <p className="text-xl font-bold text-foreground">
            {heroData.qualifications}
          </p>

          <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {heroData.designation}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {heroData.features.map((feature) => (
            <div
              key={feature.title}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-border/60
                bg-background/80
                p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#D4A017]/30
                hover:shadow-[0_20px_40px_rgba(212,160,23,0.10)]
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0 items-center justify-center
                    rounded-2xl
                    border border-[#D4A017]/15
                    bg-[#D4A017]/10
                    text-[#D4A017]
                  "
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-base"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-tight text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
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
              href={heroData.primaryButton.href}
              className="flex items-center gap-3"
            >
              {heroData.primaryButton.label}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}