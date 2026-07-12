"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface NavItemProps {
  href: string;
  label: string;
  scrolled: boolean;
}

export default function NavItem({
  href,
  label,
  scrolled,
}: NavItemProps) {
  const pathname = usePathname();

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`
        group relative rounded-md text-[15px] font-semibold
        transition-colors duration-300

        focus-visible:outline-none

        ${
          scrolled
            ? isDark
              ? "text-white hover:text-[#D4A017]"
              : "text-slate-800 hover:text-[#D4A017]"
            : "text-white hover:text-[#D4A017]"
        }
      `}
    >
      {label}

      <span
        className="
          absolute -bottom-1 left-0 h-[2px] w-full
          bg-[#D4A017]

          scale-x-0 origin-left
          transition-transform duration-300

          group-hover:scale-x-100
          group-focus-visible:scale-x-100
        "
      />
    </Link>
  );
}