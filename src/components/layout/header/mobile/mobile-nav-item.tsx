"use client";

import Link from "next/link";

interface Props {
  href: string;
  label: string;
  onClick: () => void;
}

export default function MobileNavItem({
  href,
  label,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group flex items-center justify-between
        border-b border-slate-200/70 py-5

        text-[18px] font-medium tracking-[-0.02em]
        text-slate-900 transition-all duration-300

        hover:translate-x-1 hover:text-[#D4A017]
        dark:border-white/10 dark:text-slate-100
      "
    >
      {label}
    </Link>
  );
}