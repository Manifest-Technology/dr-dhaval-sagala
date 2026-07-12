"use client";

import { motion } from "framer-motion";

import {
  faBone,
  faCamera,
  faChevronDown,
  faClipboardCheck,
  faDumbbell,
  faGlobe,
  faHand,
  faHeartPulse,
  faPersonWalking,
  faShieldHeart,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faq: FAQ;
  index: number;
}

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

function getFaqIcon(
  question: string
): IconDefinition {
  const text = question.toLowerCase();

  if (
    text.includes("joint") ||
    text.includes("replacement") ||
    text.includes("arthritis") ||
    text.includes("bone") ||
    text.includes("fracture")
  ) {
    return faBone;
  }

  if (
    text.includes("knee") ||
    text.includes("acl") ||
    text.includes("meniscus")
  ) {
    return faPersonWalking;
  }

  if (
    text.includes("shoulder") ||
    text.includes("rotator cuff") ||
    text.includes("instability")
  ) {
    return faShieldHeart;
  }

  if (
    text.includes("elbow") ||
    text.includes("wrist") ||
    text.includes("hand") ||
    text.includes("carpal") ||
    text.includes("trigger")
  ) {
    return faHand;
  }

  if (
    text.includes("arthroscopy") ||
    text.includes("scope")
  ) {
    return faCamera;
  }

  if (
    text.includes("sports") ||
    text.includes("exercise") ||
    text.includes("rehabilitation") ||
    text.includes("physiotherapy")
  ) {
    return faDumbbell;
  }

  if (
    text.includes("recovery") ||
    text.includes("healing") ||
    text.includes("walk")
  ) {
    return faHeartPulse;
  }

  if (
    text.includes("consultation") ||
    text.includes("appointment") ||
    text.includes("prepare") ||
    text.includes("bring")
  ) {
    return faClipboardCheck;
  }

  if (
    text.includes("international") ||
    text.includes("travel")
  ) {
    return faGlobe;
  }

  return faStethoscope;
}

/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export function FAQItem({
  faq,
  index,
}: Props) {
  const icon = getFaqIcon(
    faq.question
  );

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
    >
      <AccordionItem
        value={faq.question}
        className="
          group
          relative

          overflow-hidden

          rounded-[1.75rem]

          border
          border-primary/10

          bg-card/70

          backdrop-blur-2xl

          shadow-[0_20px_70px_-35px_rgba(212,160,23,.08)]

          transition-all
          duration-500

          hover:-translate-y-1
          hover:border-primary/20
          hover:shadow-[0_35px_90px_-35px_rgba(212,160,23,.18)]

          dark:shadow-[0_30px_90px_-35px_rgba(0,0,0,.35)]
        "
      >
        {/* Gold Accent */}

        <motion.div
          layout
          className="
            absolute
            left-0
            top-0
            bottom-0

            w-1

            origin-top

            bg-gradient-to-b
            from-primary
            via-yellow-500
            to-primary

            scale-y-0

            transition-transform
            duration-500

            group-data-[state=open]:scale-y-100
          "
        />

        {/* Glow */}

        <div
          className="
            pointer-events-none

            absolute
            inset-x-0
            top-0

            h-28

            bg-gradient-to-b
            from-primary/[0.06]
            to-transparent

            opacity-0

            transition-opacity
            duration-500

            group-data-[state=open]:opacity-100
          "
        />

        <AccordionTrigger
          className="
            relative

            px-8
            py-7

            hover:no-underline

            [&>svg:last-child]:hidden [&>svg]:hidden
          "
        >
          <div className="flex w-full items-center gap-6">

            {/* Icon */}

            <motion.div
              layout
              className="
                relative
                z-10

                flex
                h-16
                w-16
                shrink-0

                items-center
                justify-center

                rounded-3xl

                border
                border-primary/15

                bg-gradient-to-br
                from-primary/[0.15]
                to-primary/[0.05]

                text-primary

                transition-all
                duration-500

                group-hover:rotate-3
                group-hover:scale-105

                group-data-[state=open]:border-primary/20
                group-data-[state=open]:bg-primary
                group-data-[state=open]:text-primary-foreground

                group-data-[state=open]:shadow-xl
                group-data-[state=open]:shadow-primary/20
              "
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-lg"
              />
            </motion.div>

            {/* Title */}

            <div className="flex-1">
              <h3
                className="
                  mt-2

                  text-lg
                  font-bold

                  leading-relaxed

                  tracking-tight

                  transition-colors
                  duration-300

                  md:text-xl

                  group-data-[state=open]:text-primary
                "
              >
                {faq.question}
              </h3>

            </div>

            {/* Expand */}

            <motion.div
              layout
              className="
                flex
                h-12
                w-12
                shrink-0

                items-center
                justify-center

                rounded-2xl

                border
                border-border

                bg-background/80

                transition-all
                duration-300

                group-hover:border-primary/20

                group-data-[state=open]:rotate-180
                group-data-[state=open]:border-primary/20
                group-data-[state=open]:bg-primary
                group-data-[state=open]:text-primary-foreground
              "
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm"
              />
            </motion.div>

          </div>
        </AccordionTrigger>

              {/* Answer */}

        <AccordionContent className="overflow-hidden px-8 pb-8 pt-0 ">

          <motion.div
            layout
            initial={false}
            className="
              relative

              ml-[2.15rem]

              overflow-hidden

              rounded-[1.75rem]

              border
              border-primary/10

              bg-gradient-to-br
              from-primary/[0.05]
              via-background
              to-background

              shadow-[0_15px_60px_-35px_rgba(212,160,23,.12)]
            "
          >

            {/* Gold Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                bottom-0

                w-1

                bg-gradient-to-b
                from-primary
                via-yellow-500
                to-primary
              "
            />

            {/* Decorative Glow */}

            <div
              className="
                pointer-events-none

                absolute
                right-0
                top-0

                h-40
                w-40

                rounded-full

                bg-primary/[0.08]

                blur-3xl
              "
            />

              <div className="flex items-center gap-3 p-3">
              {/* Answer */}
              <p
                className="
                  text-[15px]
                  leading-8

                  text-muted-foreground

                  md:text-base
                  
                "
              >
                {faq.answer}
              </p>

            </div>

          </motion.div>

        </AccordionContent>

      </AccordionItem>

    </motion.div>
  );
}