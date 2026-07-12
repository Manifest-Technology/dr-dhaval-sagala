"use client";

import { motion } from "framer-motion";

import ContactTabs from "./contact-tabs";
import ContactInfo from "./contact-info";

export default function ContactSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-background to-background" />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      {/* Content */}
      <div className="relative px-2 lg:px-6 space-y-8">
        {/* Tabs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <ContactTabs />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </section>
  );
}