"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

interface NavbarActionsProps {
  scrolled: boolean;
}

export default function NavbarActions({
  scrolled,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle scrolled={scrolled} />

      <Button
        asChild
        aria-label="Book Appointment"
        className={`
          rounded-xl px-6 transition-all text-[15px]
          font-semibold text-white duration-300

          bg-[#D4A017] hover:bg-[#B8860B]
          hover:scale-[1.03] active:scale-[0.98]
        `}
      >
        <Link
          href="/contact"
        >
          Book Appointment
        </Link>
      </Button>
    </div>
  );
}