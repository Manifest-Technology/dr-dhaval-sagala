"use client";

import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";

import { FooterBottom } from "./footer-bottom";
import { FooterBrand } from "./footer-brand";
import { FooterContact } from "./footer-contact";
import { FooterCTA } from "./footer-cta";
import { FooterLinks } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            overflow-hidden border border-white/10 bg-[#071B2E]/95
           dark:bg-[#071B2E]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.18)]
          "
        >
          <FooterCTA />

          <Separator className="bg-white/10" />

          <div className="px-4 py-10 md:px-6 md:py-12 xl:px-8">
            <div
              className="
                grid grid-cols-1 gap-10 sm:grid-cols-2
                xl:grid-cols-[1.75fr_1fr_1fr_1.45fr]
              "
            >
              <FooterBrand />

              <FooterLinks
                title="Quick Links"
                type="quickLinks"
              />

              <FooterLinks
                title="Specialities"
                type="specialities"
              />

              <FooterContact />
            </div>

            <FooterNewsletter />
          </div>

          <Separator className="bg-white/10" />

          <div className="px-4 md:px-6 xl:px-8">
            <FooterBottom />
          </div>

          <div className="px-4" />

        </motion.div>
      </div>
    </footer>
  );
}