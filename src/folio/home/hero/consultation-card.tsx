"use client";

import Image from "next/image";

import doctorIcon from "@/assets/img/home/hero/doctor-icon.png";

import { FloatingCard } from "./floating-card";

export function ConsultationCard() {
  return (
    <FloatingCard
      duration={4.5}
      className="bottom-20 left-2 lg:-left-3 z-20 p-5"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src={doctorIcon}
          alt="Doctor consultation"
          width={56}
          height={56}
          className="object-contain"
        />

        <h4 className="mt-3 text-2xl font-bold">
          98%
        </h4>

        <p className="max-w-[150px] text-sm leading-relaxed text-muted-foreground">
          Patient Satisfaction
        </p>
      </div>
    </FloatingCard>
  );
}