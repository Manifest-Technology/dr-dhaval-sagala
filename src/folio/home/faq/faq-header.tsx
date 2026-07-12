"use client";

import {
  faCircleQuestion,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FAQHeader() {
  return (
    <div>
      <div
        className="
          inline-flex items-center gap-2 rounded-full
          border border-[#D4A017]/20
          bg-[#D4A017]/10
          px-4 py-2
          text-[11px] font-semibold uppercase
          tracking-[0.24em]
          text-[#D4A017]
        "
      >
        <FontAwesomeIcon icon={faShieldHeart} />

        <span>Patient Resources</span>
      </div>

      <div className="relative mt-8">
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className="
            absolute -left-4 -top-6
            hidden text-[100px]
            text-primary/5 lg:block
          "
        />

        <h2 className="relative text-4xl font-bold tracking-tight xl:text-5xl">
          Frequently Asked

          <span className="mt-2 block text-primary">
            Questions
          </span>
        </h2>
      </div>

      <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground md:text-lg">
        Find answers about joint replacement, sports injuries,
        arthroscopy, rehabilitation, and orthopaedic care.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm">
          20+ FAQs
        </div>

        <div className="rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm">
          Same-Day Appointments
        </div>
      </div>
    </div>
  );
}