"use client";

import Image from "next/image";

import medicineIcon from "@/assets/img/home/hero/medicine.png";

import { FloatingCard } from "./floating-card";

export function MedicineCard() {
  return (
    <FloatingCard
      duration={5}
      className="right-6 top-20 z-20 p-4"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <Image
          src={medicineIcon}
          alt="Medicine"
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
    </FloatingCard>
  );
}