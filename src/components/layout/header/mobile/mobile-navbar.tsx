"use client";

import { useState } from "react";
import Link from "next/link";

import NavbarLogo from "../navbar/navbar-logo";
import ThemeToggle from "../navbar/theme-toggle";

import MobileDrawer from "./mobile-drawer";
import HamburgerButton from "./hamburger-button";

import { Button } from "@/components/ui/button";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 lg:hidden">
        <div
          className={`
            flex h-[72px] items-center justify-between rounded-full
            border border-white/20 bg-white/80 px-3

            backdrop-blur-3xl shadow-[0_10px_40px_rgba(15,23,42,0.12)]
            dark:border-white/10 dark:bg-slate-900/80
          `}
        >
          <div className="shrink-0">
            <NavbarLogo capsule />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle scrolled />

            <Button
              size="sm"
              className={`
                h-10 min-w-[148px] rounded-full px-4 whitespace-nowrap
              bg-[#D4A017] text-[13px] font-semibold text-white
      
                transition-all duration-300 hover:bg-[#B8860B]
                active:scale-[0.98]
              `}
            >
              <Link
                href="/contact"
              >
                Book Appointment
              </Link>
              
            </Button>

            <HamburgerButton
              open={open}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}