"use client";

import { Button } from "@/components/ui/button";

import {
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FAQCTA() {
  return (
    <div className="mt-12 text-center">
      <p className="text-sm text-muted-foreground">
        Still have questions about your condition or treatment?
      </p>

      <Button
        className="
          mt-5
          h-14
          rounded-full
          bg-gradient-to-r
          from-[#D4A017]
          via-[#E0B437]
          to-[#C89211]
          px-8
          text-white
          shadow-[0_10px_30px_rgba(212,160,23,0.28)]
        "
      >
        <FontAwesomeIcon
          icon={faCalendarDays}
          className="mr-2"
        />

        Book Consultation

        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2"
        />
      </Button>
    </div>
  );
}