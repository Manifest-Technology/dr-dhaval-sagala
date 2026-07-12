"use client";

import { motion } from "framer-motion";

import { EditorialContent } from "./editorial-content";
import { DoctorVisual } from "./doctor-visual";
import { SignatureBlock } from "./signature-block";
import { BackgroundEffects } from "@/components/layout/background-effects";

export function AboutDoctor() {
  return (
    <section className="relative overflow-hidden pb-12">
      <BackgroundEffects />

      <SignatureBlock />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10 xl:px-20">
        <div
          className="
            grid min-h-[calc(100vh-140px)] items-center gap-12
            lg:grid-cols-[minmax(0,1fr)_500px] xl:grid-cols-[minmax(0,1fr)_540px]
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
              ease: "easeOut",
            }}
          >
            <EditorialContent />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
              delay: .15,
            }}
          >
            <DoctorVisual />
          </motion.div>

        </div>



      </div>
    </section>
  );
}