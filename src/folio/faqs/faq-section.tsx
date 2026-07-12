"use client";

import { motion } from "framer-motion";

import {
  faBone,
  faDumbbell,
  faHand,
  faPersonWalking,
  faShieldHeart,
  faStethoscope,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { FAQList } from "./faq-list";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

interface Props {
  category: FAQCategory;
}

function getCategoryIcon(id: string): IconDefinition {
  switch (id) {
    case "general":
      return faStethoscope;

    case "joint-replacement":
      return faBone;

    case "sports-medicine":
      return faDumbbell;

    case "hip-care":
      return faBone;

    case "knee-care":
      return faPersonWalking;

    case "shoulder-care":
      return faShieldHeart;

    case "elbow-care":
      return faHand;

    case "wrist-hand-care":
      return faHand;

    case "limb-lengthening":
      return faUpRightAndDownLeftFromCenter;

    default:
      return faStethoscope;
  }
}

function getCategoryDescription(id: string) {
  switch (id) {
    case "general":
      return "General guidance covering orthopaedic consultations, diagnosis, treatment options and recovery.";

    case "joint-replacement":
      return "Everything you should know before, during and after joint replacement surgery.";

    case "sports-medicine":
      return "Answers related to sports injuries, rehabilitation and returning safely to activity.";

    case "hip-care":
      return "Frequently asked questions about hip pain, arthroscopy, arthritis and hip replacement.";

    case "knee-care":
      return "Learn more about knee pain, ligament injuries, arthroscopy and knee replacement.";

    case "shoulder-care":
      return "Common questions regarding shoulder injuries, instability, rotator cuff tears and surgery.";

    case "elbow-care":
      return "Expert answers for elbow pain, tendon injuries, arthritis and minimally invasive procedures.";

    case "wrist-hand-care":
      return "Understand wrist pain, hand conditions, nerve compression and available treatments.";

    case "limb-lengthening":
      return "Frequently asked questions about limb reconstruction, deformity correction and limb lengthening.";

    default:
      return "";
  }
}

export function FAQSection({
  category,
}: Props) {
  return (
    <motion.section
      layout
      id={category.id}
      data-faq-section
      initial={{
        opacity: 0,
        y: 30,
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
      }}
      className="
        relative
        scroll-mt-36
      "
    >
      {/* Header */}

      <div className="mb-10">
        <div className="flex items-start gap-5">

          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center

              rounded-2xl

              border
              border-primary/15

              bg-primary/10

              text-primary

              shadow-sm
              shadow-primary/10
            "
          >
            <FontAwesomeIcon
              icon={getCategoryIcon(category.id)}
              className="h-6 w-6"
            />
          </div>

          <div className="flex-1">

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              FAQ Category
            </span>

            <h2
              className="
                mt-2
                text-3xl
                font-bold
                tracking-tight

                md:text-4xl
              "
            >
              {category.title}
            </h2>

            <p
              className="
                mt-4
                max-w-3xl

                text-base
                leading-7

                text-muted-foreground
              "
            >
              {getCategoryDescription(category.id)}
            </p>
          </div>

          <div
            className="
              hidden
              lg:flex

              h-24
              w-24

              shrink-0

              flex-col
              items-center
              justify-center

              rounded-2xl

              border
              border-primary/10

              bg-primary/5
            "
          >
            <span
              className="
                text-3xl
                font-bold
                text-primary
              "
            >
              {category.faqs.length}
            </span>

            <span
              className="
                mt-1
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Questions
            </span>
          </div>

        </div>
      </div>

      {/* FAQ */}

      <FAQList
        faqs={category.faqs}
      />

      {/* Divider */}

      <div
        className="
          mt-20
          h-px
          w-full

          bg-gradient-to-r

          from-transparent

          via-border

          to-transparent

          last:hidden
        "
      />
    </motion.section>
  );
}