"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface DropdownItem {
  label: string;
  href: string;
}

interface Props {
  label: string;
  href: string;
  items: DropdownItem[];
  scrolled: boolean;
}

export default function DropdownMenu({
  label,
  href,
  items,
  scrolled,
}: Props) {
  const pathname = usePathname();

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [isOpen, setIsOpen] = useState(false);

  const menuId = useId();

  return (
    <div
      className="relative py-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }}
    >
      <Link
        href={href}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
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
          className={`
            absolute -bottom-1 left-0 h-[2px] w-full
            bg-[#D4A017]

            origin-left transition-transform duration-300

            ${
              isOpen
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
            }
          `}
        />
      </Link>

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        className={`
          absolute left-1/2 top-[calc(100%+10px)]
          z-50 w-[320px]

          -translate-x-1/2

          transition-all duration-200

          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-2 opacity-0"
          }
        `}
      >
        <div
          className="
            overflow-hidden rounded-3xl p-2

            border border-slate-200/80
            bg-white/95

            shadow-[0_24px_80px_rgba(15,23,42,0.16)]

            dark:border-white/10
            dark:bg-slate-900/95
          "
        >
          {items.map((item) => {
            const childActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={childActive ? "page" : undefined}
                className={`
                  flex rounded-2xl px-5 py-3.5
                  text-[15px] font-medium

                  transition-all duration-200
                  focus-visible:outline-none

                  ${
                    childActive
                      ? `
                        bg-[#D4A017]/10
                        text-[#D4A017]
                      `
                      : `
                        text-slate-700
                        hover:bg-slate-100
                        hover:text-[#D4A017]

                        dark:text-slate-200
                        dark:hover:bg-slate-800
                      `
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}