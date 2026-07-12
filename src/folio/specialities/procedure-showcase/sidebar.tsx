"use client";

import { motion } from "framer-motion";

import { ProcedureItem } from "./procedure-item";
import { fadeUpVariants } from "./animations";
import type { ProcedureSidebarProps } from "./types";

export function ProcedureSidebar({
  items,
  activeIndex,
  onSelect,
}: ProcedureSidebarProps) {
  return (
    <>
      {/* ---------------- Desktop ---------------- */}

      <aside className="hidden lg:block">
        <div className="sticky top-28 px-6 py-10">
          <div className="space-y-6">
            {items.map((item, index) => (
              <ProcedureItem
                key={item.id}
                item={item}
                active={activeIndex === index}
                onClick={() => onSelect(index)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* ---------------- Mobile ---------------- */}

      <div className="mb-10 lg:hidden">
        <div
          className="
            flex
            gap-3
            overflow-x-auto
            pb-2
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item, index) => {
            const active = activeIndex === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(index)}
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-5
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "border-[#D4A017] bg-[#D4A017]/10 text-[#D4A017]"
                      : "border-border bg-background text-muted-foreground hover:border-[#D4A017]/40"
                  }
                `}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}