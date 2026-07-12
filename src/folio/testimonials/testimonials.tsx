"use client";

import { motion } from "framer-motion";

import {
  faQuoteRight,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { ReviewSummary } from "./review-summary";
import { TestimonialMarquee } from "./testimonial-marquee";

export function TestimonialsClient() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12">
      {/* ---------------------------------------------------------------- */}
      {/* Background */}
      {/* ---------------------------------------------------------------- */}

      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Grid */}

      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.035]
          dark:opacity-[0.025]
          [background-image:linear-gradient(to_right,hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.08)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Center Glow */}

      <div
        className="
          absolute
          left-1/2
          top-20
          -z-20
          h-[42rem]
          w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-[#D4A017]/10
          blur-[150px]
          dark:bg-[#D4A017]/6
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-40
          top-1/3
          -z-20
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-primary/8
          blur-[120px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-40
          bottom-0
          -z-20
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-primary/6
          blur-[140px]
        "
      />

      {/* Decorative Quote */}

      <FontAwesomeIcon
        icon={faQuoteRight}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-32
          -z-10
          hidden
          text-[18rem]
          text-[#D4A017]/5
          blur-[1px]
          lg:block
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Header */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          px-6
          text-center
          lg:px-10
        "
      >
        {/* Badge */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            relative
            mb-10
            inline-flex
            items-center
            gap-2.5
            overflow-hidden
            rounded-full
            border
            border-[#D4A017]/20
            bg-[#D4A017]/10
            px-5
            py-2
            backdrop-blur-xl
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#D4A017]/15
              text-[#D4A017]
              shadow-[0_0_20px_rgba(212,160,23,0.18)]
            "
          >
            <FontAwesomeIcon
              icon={faShieldHeart}
              className="h-3.5 w-3.5"
            />
          </div>

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#D4A017]
            "
          >
            Real Recovery Stories
          </span>
        </motion.div>

        {/* Heading */}

        <div className="relative max-w-5xl">
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="
              absolute
              -right-5
              -top-10
              hidden
              text-8xl
              text-primary/5
              md:block
            "
          />

          <h2
            className="
              text-balance
              text-4xl
              font-bold
              tracking-[-0.03em]
              sm:text-5xl
              xl:text-6xl
            "
          >
            What Our Patients Say

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-[#D4A017]
                via-[#E2BB48]
                to-[#C89211]
                bg-clip-text
                text-transparent
              "
            >
              About Their Recovery Journey
            </span>
          </h2>
        </div>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-3xl
            text-balance
            text-base
            leading-8
            tracking-[0.01em]
            text-muted-foreground
            md:text-lg
            md:leading-9
          "
        >
          Patients across the UAE and India trust Dr. Dhaval Sagala
          for advanced orthopaedic care, compassionate guidance,
          personalized treatment, and exceptional recovery outcomes.
        </p>

        {/* Summary */}
        <div className="mt-16 w-full max-w-5xl">
          <ReviewSummary />
        </div>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Testimonials */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative mt-24">
        <TestimonialMarquee />
      </div>
      
    </section>
  );
}