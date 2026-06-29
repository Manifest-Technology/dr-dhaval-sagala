"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import NavItem from "./nav-item";
import NavbarLogo from "./navbar-logo";
import NavbarActions from "./navbar-actions";
import SpecialitiesMenu from "./specialities-menu";
import ResourcesMenu from "./resources-menu";

import { useScrollPosition } from "@/hooks/use-scroll-position";

export default function DesktopNavbar() {
  const scrolled = useScrollPosition(25);

  return (
    <motion.header
      initial={false}
      // animate={{
      //   maxWidth: scrolled ? "1180px" : "100%",
      //   top: scrolled ? 10 : 48,
      //   borderRadius: scrolled ? 9999 : 0,
      // }}
      animate={{
        y: scrolled ? -120 : 0,
        opacity: scrolled ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 22,
      }}
      // className={cn(
      //   "fixed left-1/2 z-50 w-full -translate-x-1/2 hidden lg:block",
      //   scrolled
      //     ? `
      //       bg-white/60 dark:bg-slate-900/40
      //       backdrop-blur-xl
      //       border border-white/20
      //       shadow-[0_8px_32px_rgba(15,23,42,0.15)]
      //     `
      //     : `
      //       bg-[#071B2E]/60
      //     `
      // )}

      className="
        fixed left-1/2 z-50 w-full -translate-x-1/2 hidden lg:block
        bg-[#071B2E]/60
      "
    >
      <div
        className={cn(
          "mx-auto grid items-center transition-all duration-75",
          scrolled
            ? "h-[64px] px-10 max-w-[1180px]"
            : "h-[90px] px-8 max-w-full"
        )}
        style={{
          gridTemplateColumns: scrolled
            ? "180px minmax(0,1fr) 260px"
            : "280px minmax(0,1fr) 260px",
        }}
      >
        {/* Logo */}
        <NavbarLogo capsule={scrolled} />

        {/* Navigation */}
        <nav 
          aria-label="Primary Navigation"  
          className="hidden lg:flex items-center justify-center gap-10"
        >
          <NavItem
            href="/doctor-profile"
            label="Doctor's Profile"
            scrolled={scrolled}
          />

          <SpecialitiesMenu scrolled={scrolled} />

          <ResourcesMenu scrolled={scrolled} />

          <NavItem
            href="/gallery"
            label="Gallery"
            scrolled={scrolled}
          />
        </nav>

        {/* Actions */}
        <div className="flex justify-end">
          <NavbarActions scrolled={scrolled} />
        </div>

      </div>
    </motion.header>
  );
}