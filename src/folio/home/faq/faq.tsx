"use client";

import { motion } from "framer-motion";

import { FAQCTA } from "./faq-cta";
import { FAQHeader } from "./faq-header";
import { FAQList } from "./faq-list";

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Effects */}

      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-32 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/5" />

      <div className="absolute left-0 top-1/2 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div
            className="
              grid
              items-start
              gap-14
              lg:grid-cols-[480px_minmax(0,1fr)]
              lg:gap-20
              xl:gap-24
            "
          >
            {/* Left Column */}
            <motion.aside
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                self-start
                lg:sticky
              "
            >
              <div className="space-y-10">
                <FAQHeader />

                {/* <FAQCTA /> */}
              </div>
            </motion.aside>


            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-0"
            >
              <FAQList />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}