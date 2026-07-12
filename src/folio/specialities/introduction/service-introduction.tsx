"use client";

import { motion } from "framer-motion";

import { ServiceContent } from "./service-content";
import { ServiceImage } from "./service-image";
import { ServiceIntroductionProps } from "./types";
import { sectionVariants } from "./animations";

export function ServiceIntroduction({
  data,
}: ServiceIntroductionProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-10
        lg:py-20
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-[0.95fr_1.05fr]

            xl:gap-20
          "
        >
          {/* Image */}

          <ServiceImage
            src={data.image}
            alt={data.imageAlt}
          />

          {/* Content */}

          <ServiceContent
            data={data}
          />
        </motion.div>
      </div>
    </section>
  );
}