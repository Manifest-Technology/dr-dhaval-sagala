"use client";

import Image from "next/image";

import doctorImage from "@/assets/img/home/hero/doctor.png";

export function HeroVisual() {
  return (
    <div
      className={`
        relative order-1 mx-auto w-full overflow-hidden rounded-[3rem]

        min-h-[420px]
        sm:min-h-[750px]
        lg:h-[650px]

        lg:max-w-[650px]
        lg:order-2
      `}
    >
      {/* Main blue shape */}
      <div
        className={`          
          absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[45%]
          h-[240px] w-[95%]
          bg-sky-500/25

          sm:h-[300px]

          lg:bottom-4
          lg:h-[430px]
          lg:w-[540px]
        `}
      />

      {/* Yellow blob */}
      <div
        className={`
          absolute left-[12%] top-[10%]
          h-28 w-28 rounded-full
          bg-amber-400/90 blur-xl

          sm:h-36 sm:w-36

          lg:left-12
          lg:top-20
          lg:h-40
          lg:w-40
        `}
      />

      {/* Pink blob */}
      <div
        className="
          absolute right-[14%] top-[16%]
          h-16 w-16 rounded-full
          bg-pink-500

          sm:h-20 sm:w-20

          lg:right-16
          lg:top-28
          lg:h-24
          lg:w-24
        "
      />

      {/* Doctor image */}
      <Image
        src={doctorImage}
        alt="Dr. Dhaval Sagala"
        priority
        className="
          absolute bottom-0 left-1/2 z-10
          h-auto object-contain
          -translate-x-1/2

          w-[72%]

          sm:w-[65%]

          lg:w-[82%]
        "
      />
    </div>
  );
}