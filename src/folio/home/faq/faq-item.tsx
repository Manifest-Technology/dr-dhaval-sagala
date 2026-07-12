"use client";

import { motion } from "framer-motion";

import {
  faChevronDown,
  faBone,
  faCamera,
  faClipboardCheck,
  faDumbbell,
  faGlobe,
  faHeartPulse,
  faPersonWalking,
  faShieldHeart,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  Accordion,
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

function getFaqIcon(question: string): IconDefinition {
  const text = question.toLowerCase();

  if (text.includes("knee")) {
    return faPersonWalking;
  }

  if (text.includes("hip")) {
    return faBone;
  }

  if (text.includes("arthroscopy")) {
    return faCamera;
  }

  if (text.includes("sports")) {
    return faDumbbell;
  }

  if (
    text.includes("consultation") ||
    text.includes("appointment") ||
    text.includes("referral") ||
    text.includes("bring")
  ) {
    return faClipboardCheck;
  }

  if (
    text.includes("international") ||
    text.includes("uae")
  ) {
    return faGlobe;
  }

  if (
    text.includes("recovery") ||
    text.includes("rehabilitation") ||
    text.includes("walk")
  ) {
    return faHeartPulse;
  }

  return faStethoscope;
}

export function FAQItem({
  faq,
  index,
}: Props) {
  const icon = getFaqIcon(faq.question);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
    >
      <Accordion
        type="single"
        collapsible
      >
        <AccordionItem
          value={faq.question}
          className="
            group overflow-hidden rounded-xl
            border border-border/60
            bg-card/80
            backdrop-blur-xl

            transition-all duration-500 ease-out

            hover:border-primary/20
            hover:shadow-[0_20px_60px_-24px_rgba(212,160,23,0.12)]

            data-[state=open]:border-primary/25
            data-[state=open]:bg-card
            data-[state=open]:shadow-[0_24px_80px_-28px_rgba(212,160,23,0.18)]

            dark:data-[state=open]:shadow-[0_24px_80px_-28px_rgba(212,160,23,0.08)]
          "
        >
          <AccordionTrigger
            className="
              px-6 py-6
              hover:no-underline

              [&>svg:last-child]:hidden [&>svg]:hidden
            "
          >
            <div className="flex w-full items-center gap-5">
              <div
                className="
                  flex h-14 w-14 shrink-0 items-center justify-center
                  rounded-2xl

                  border border-primary/15
                  bg-primary/[0.08]
                  text-primary

                  shadow-sm shadow-primary/5

                  transition-all duration-300

                  group-data-[state=open]:scale-105
                  group-data-[state=open]:border-primary/20
                  group-data-[state=open]:bg-primary
                  group-data-[state=open]:text-primary-foreground
                  group-data-[state=open]:shadow-lg
                  group-data-[state=open]:shadow-primary/20
                "
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="h-4 w-4"
                />
              </div>

              <span
                className="
                  flex-1 text-left
                  text-base font-semibold
                  leading-relaxed tracking-tight

                  md:text-lg

                  transition-colors duration-300

                  group-data-[state=open]:text-primary
                "
              >
                {faq.question}
              </span>

              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-full

                  border border-border
                  bg-background/80

                  transition-all duration-300

                  group-data-[state=open]:rotate-180
                  group-data-[state=open]:border-primary/20
                  group-data-[state=open]:bg-primary/10
                "
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="
                    h-3.5 w-3.5 text-muted-foreground

                    group-data-[state=open]:text-primary
                  "
                />
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="overflow-hidden px-6 pb-6 pt-1">
            <div
              className="
                ml-[1.5rem] px-4

                border-l-4 border-primary/10
                 
              "
            >
              <p
                className="
                  max-w-3xl
                  text-sm leading-7
                  text-muted-foreground

                  md:text-base
                "
              >
                {faq.answer}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}