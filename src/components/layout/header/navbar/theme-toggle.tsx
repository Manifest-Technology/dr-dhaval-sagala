"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  scrolled: boolean;
}

export default function ThemeToggle({
  scrolled,
}: ThemeToggleProps) {
  const {
    theme,
    setTheme,
    resolvedTheme,
  } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-transparent" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className={`
        group flex h-11 w-11 items-center justify-center
        rounded-full border backdrop-blur-xl transition-all duration-300

        ${
          isDark
            ? `
                border-white/10 bg-white/[0.03]
                hover:border-[#D4A017]/40 hover:bg-[#D4A017]/10
              `
            : `
                border-slate-200 bg-white/60
                hover:border-[#D4A017]/40 hover:bg-[#D4A017]/10
              `
        }
      `}
    >
      {isDark ? (
        <FontAwesomeIcon
          icon={faSun}
          className="
            text-slate-300
            text-sm
            transition-all duration-300
            group-hover:text-[#D4A017]
            group-hover:scale-110
          "
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="
            text-slate-600
            text-sm
            transition-all duration-300
            group-hover:text-[#D4A017]
            group-hover:scale-110
          "
        />
      )}
    </button>
  );
}