"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import MobileNavItem from "./mobile-nav-item";
import SpecialitiesAccordion from "./specialities-accordion";
import ResourcesAccordion from "./resources-accordion";

import NavbarLogo from "../navbar/navbar-logo";
import ThemeToggle from "../navbar/theme-toggle";
import HamburgerButton from "./hamburger-button";

import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
            className="
              fixed inset-0 z-40

              bg-slate-950/50
              backdrop-blur-md

              lg:hidden
            "
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"

            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}

            transition={{
              type: "spring",
              stiffness: 280,
              damping: 32,
            }}

            className="
              fixed inset-0 z-50

              flex h-dvh w-full flex-col
              overflow-hidden

              bg-white/95
              backdrop-blur-3xl

              dark:bg-slate-950/95

              lg:hidden
            "
          >
            {/* Header */}

            <div
              className="
                sticky top-0 z-20

                flex items-center justify-between

                border-b border-slate-200/70

                bg-white/90
                px-5 py-5

                backdrop-blur-xl

                dark:border-white/10
                dark:bg-slate-950/90
              "
            >
              <NavbarLogo capsule />

              <div className="flex items-center gap-3">
                <ThemeToggle scrolled />

                <HamburgerButton
                  open={open}
                  onClick={onClose}
                />
              </div>
            </div>

            {/* Navigation */}

            <nav
              className="
                flex-1 overflow-y-auto

                px-6 py-6
              "
            >
              <div className="space-y-1">
                <MobileNavItem
                  href="/doctor-profile"
                  label="Doctor's Profile"
                  onClick={onClose}
                />

                <SpecialitiesAccordion
                  onClose={onClose}
                />

                <ResourcesAccordion
                  onClose={onClose}
                />

                <MobileNavItem
                  href="/gallery"
                  label="Gallery"
                  onClick={onClose}
                />
              </div>
            </nav>

            {/* CTA */}

            <div
              className="
                sticky bottom-0 z-20

                border-t border-slate-200/70

                bg-white/90
                p-5

                backdrop-blur-xl

                dark:border-white/10
                dark:bg-slate-950/90
              "
            >
              <Button
                asChild
                className="
                  h-14 w-full rounded-full

                  bg-[#D4A017]

                  text-sm font-semibold
                  text-white

                  transition-all duration-300

                  hover:bg-[#B8860B]
                  active:scale-[0.98]
                "
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                >
                  Book Appointment
                </Link>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}