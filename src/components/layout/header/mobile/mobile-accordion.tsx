"use client";

import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, } from "@fortawesome/free-solid-svg-icons";

interface Item {
  label: string;
  href: string;
}

interface Props {
  title: string;
  items: Item[];
  onClose: () => void;
}

export default function MobileAccordion({
  title,
  items,
  onClose,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200/70 dark:border-white/10">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex w-full items-center justify-between py-5
          text-left text-[18px] font-medium tracking-[-0.02em]

          text-slate-900 transition-colors duration-300
          hover:text-[#D4A017] dark:text-slate-100
        "
      >
        {title}

        <span
          className="
            flex h-8 w-8 items-center justify-center

            rounded-full

            border border-slate-200
            bg-slate-50

            dark:border-white/10
            dark:bg-white/[0.03]
          "
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`
              text-[11px] text-shadow-slate-500 dark:text-slate-300
              transition-transform duration-300

              ${open ? "rotate-180" : ""}
            `}
          />
        </span>
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-out

          ${open ? "max-h-[600px]" : "max-h-0"}
        `}
      >
        <div className="space-y-1 pb-5 pl-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="
                block rounded-2xl px-4 py-3

                text-[15px]
                font-medium

                text-slate-600

                transition-all duration-300

                hover:translate-x-1
                hover:bg-slate-100
                hover:text-[#D4A017]

                dark:text-slate-300
                dark:hover:bg-slate-900
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}