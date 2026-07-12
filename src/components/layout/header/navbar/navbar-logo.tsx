"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Logo_1 from "@/assets/img/logo/logo_1.png";
import Logo_2 from "@/assets/img/logo/logo_2.png";

export default function NavbarLogo({
  capsule,
}: {
  capsule: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Dr. Dhaval Sagala Home"
    >
      <AnimatePresence mode="wait">
        {capsule ? (
          <motion.div
            key="capsule-logo"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex h-12 w-12 items-center justify-center backdrop-blur-xl
              rounded-full border border-[#D4A017]/40 bg-white/20 shadow-sm 
            "
          >
            <Image
              src={Logo_2}
              alt="Dr. Dhaval Sagala"
              width={28}
              height={38}
              priority
              className="object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            key="full-logo"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Image
              src={Logo_1}
              alt="Dr. Dhaval Sagala"
              width={210}
              height={80}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}