"use client";

import Image from "next/image";

import patient1 from "@/assets/img/home/hero/patient_1.png";
import patient2 from "@/assets/img/home/hero/patient_2.png";
import patient3 from "@/assets/img/home/hero/patient_3.png";
import patient4 from "@/assets/img/home/hero/patient_4.png";

import { FloatingCard } from "./floating-card";

const patients = [patient1, patient2, patient3, patient4];

export function PatientCard() {
  return (
    <FloatingCard
      duration={4}
      className="left-0 lg:-left-25 top-10 z-20"
    >
      <div className="flex items-center gap-5">
        <div>
          <h4 className="text-xl font-bold">3.5K Plus</h4>

          <p className="text-sm text-muted-foreground">
            Satisfied Patients
          </p>
        </div>

        <div className="flex -space-x-5">
          {patients.map((patient, index) => (
            <Image
              key={index}
              src={patient}
              alt=""
              width={44}
              height={44}
              className="rounded-full border-2 border-background"
            />
          ))}
        </div>
      </div>
    </FloatingCard>
  );
}