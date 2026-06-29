"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function HamburgerButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      aria-expanded={open}
      onClick={onClick}
      className="
        flex h-10 w-10 items-center justify-center rounded-full
        border border-slate-200/70 bg-white/70

        backdrop-blur-xl transition-all duration-300 dark:bg-white/[0.03]
        hover:border-[#D4A017]/40 hover:bg-[#D4A017]/10
        
        hover:text-[#D4A017] dark:border-white/10
        
      "
    >
      <FontAwesomeIcon
        icon={open ? faXmark : faBars}
        className="
          text-sm text-slate-700
          dark:text-slate-200
        "
      />
    </button>
  );
}