"use client";

import { motion } from "framer-motion";

import {
  faArrowUpRightFromSquare,
  faQuoteRight,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";

import { ReviewSummary } from "./review-summary";
import { TestimonialMarquee } from "./testimonial-marquee";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden">
{/*   
      Background Effects
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-24 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />

      <div className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />  
*/}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center px-6 text-center lg:px-12"
      >
        {/* Badge */}

        <div 
          className="
            mb-8 inline-flex items-center rounded-full
            border border-[#D4A017]/20
            bg-[#D4A017]/10
            px-4 py-1.5 gap-2
            text-[11px] font-semibold uppercase
            tracking-[0.24em]
            text-[#D4A017] backdrop-blur-sm
          "
        >
          <FontAwesomeIcon
            icon={faShieldHeart}
            className="h-3.5 w-3.5"
          />

          <span>Real Recovery Stories</span>
        </div>

        {/* Heading */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="absolute -right-4 -top-4 hidden text-8xl text-primary/5 md:block"
          />

          <h2 className="max-w-5xl text-balance text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
            What Our Patients Say

            <span className="mt-2 block text-primary">
              About Their Recovery Journey
            </span>
          </h2>
        </div>

        {/* Description */}

        <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          Patients across the UAE and India trust Dr. Dhaval Sagala
          for advanced orthopaedic care, compassionate guidance,
          and exceptional treatment outcomes.
        </p>

        {/* Statistics */}

        <div className="mt-12">
          <ReviewSummary />
        </div>
      </motion.div>

      {/* Marquee */}

      <div className="mt-20">
        <TestimonialMarquee />
      </div>

      {/* CTA 

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex justify-center px-6"
      >
        <Button
          size="lg"
          className="
            group
            h-14
            rounded-full
            border-0
            bg-gradient-to-r
            from-[#D4A017]
            via-[#E0B437]
            to-[#C89211]
            px-8
            text-[15px]
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(212,160,23,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_18px_40px_rgba(212,160,23,0.4)]
          "
        >
          <span>View All Reviews</span>

          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="
              ml-3
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Button>
      </motion.div>
    */}
      </section>
  );
}