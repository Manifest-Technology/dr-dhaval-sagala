"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import thumbStar from "@/assets/img/home/hero/thumbstar.png";

import { FloatingCard } from "./floating-card";

export function ReviewCard() {
  return (
    <FloatingCard
      duration={5.5}
      className="bottom-24 right-0 lg:-right-10 z-20 w-[250px] p-4"
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <Image
            src={thumbStar}
            alt="Patient review"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}

            <Star className="h-4 w-4 text-muted-foreground" />
          </div>

          <p className="text-sm font-semibold">4.0</p>

          <div>
            <h4 className="text-sm font-semibold">
              Kunjesh Patel
            </h4>

            <p className="text-xs text-muted-foreground">
              Wrist arthroscopy
            </p>
          </div>
        </div>
      </div>
    </FloatingCard>
  );
}