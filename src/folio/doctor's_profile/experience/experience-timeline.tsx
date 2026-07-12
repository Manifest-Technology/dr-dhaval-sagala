"use client";

import { experienceTimeline } from "@/data/doctor's_profile/experience";

import { TimelineLine } from "./timeline-line";
import { TimelineItem } from "./timeline-item";

export function ExperienceTimeline() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[1500px]
      "
    >
      {/* Center Timeline */}
      <TimelineLine />

      {/* Timeline Items */}
      <div className="relative z-10">
        {experienceTimeline.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}