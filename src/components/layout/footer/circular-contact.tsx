"use client";

import Image from "next/image";
import Link from "next/link";

import logo2 from "@/assets/img/logo/logo_2.png";
import CircularText from "@/components/CircularText";
import { footerContent } from "@/data/footer/content";

export function CircularContact() {
  return (
    <Link
      href="/contact"
      aria-label="Book consultation"
      className="group relative mx-auto block"
    >
      <div className="relative flex items-center justify-center">
        <CircularText
          text={footerContent.cta.circularText}
          spinDuration={24}
          onHover="slowDown"
          className="!h-44 !w-44 sm:!h-48 sm:!w-48 lg:!h-56 lg:!w-56 text-black"
        />

        <div
          className="
            absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2
            -translate-y-1/2 items-center justify-center rounded-full

            border border-border bg-background/90 backdrop-blur-md
            shadow-lg transition-transform duration-300

            group-hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28
          "
        >
          <Image
            src={logo2}
            alt="Dr. Dhaval Sagala"
            className="h-auto w-12 sm:w-14 lg:w-16"
          />
        </div>
      </div>
    </Link>
  );
}