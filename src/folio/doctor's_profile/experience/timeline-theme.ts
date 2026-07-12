import { TimelineTheme } from "@/data/doctor's_profile/experience";

export interface TimelineThemeConfig {
  text: string;
  icon: string;

  bg: string;
  softBg: string;

  border: string;
  ring: string;

  line: string;

  gradient: string;

  glow: string;
}

export const timelineThemes: Record<
  TimelineTheme,
  TimelineThemeConfig
> = {
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    icon: "text-amber-500",

    bg: "bg-amber-500",
    softBg: "bg-amber-500/10",

    border: "border-amber-500/20",
    ring: "ring-amber-500/20",

    line: "bg-amber-500",

    gradient:
      "from-amber-400 via-amber-500 to-yellow-500",

    glow: "shadow-[0_0_45px_rgba(245,158,11,0.25)]",
  },

  blue: {
    text: "text-sky-600 dark:text-sky-400",
    icon: "text-sky-500",

    bg: "bg-sky-500",
    softBg: "bg-sky-500/10",

    border: "border-sky-500/20",
    ring: "ring-sky-500/20",

    line: "bg-sky-500",

    gradient:
      "from-sky-400 via-blue-500 to-indigo-500",

    glow: "shadow-[0_0_45px_rgba(14,165,233,0.25)]",
  },

  violet: {
    text: "text-violet-600 dark:text-violet-400",
    icon: "text-violet-500",

    bg: "bg-violet-500",
    softBg: "bg-violet-500/10",

    border: "border-violet-500/20",
    ring: "ring-violet-500/20",

    line: "bg-violet-500",

    gradient:
      "from-violet-400 via-violet-500 to-fuchsia-500",

    glow: "shadow-[0_0_45px_rgba(139,92,246,0.25)]",
  },

  emerald: {
    text: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500",

    bg: "bg-emerald-500",
    softBg: "bg-emerald-500/10",

    border: "border-emerald-500/20",
    ring: "ring-emerald-500/20",

    line: "bg-emerald-500",

    gradient:
      "from-emerald-400 via-emerald-500 to-green-500",

    glow: "shadow-[0_0_45px_rgba(16,185,129,0.25)]",
  },

  orange: {
    text: "text-orange-600 dark:text-orange-400",
    icon: "text-orange-500",

    bg: "bg-orange-500",
    softBg: "bg-orange-500/10",

    border: "border-orange-500/20",
    ring: "ring-orange-500/20",

    line: "bg-orange-500",

    gradient:
      "from-orange-400 via-orange-500 to-amber-500",

    glow: "shadow-[0_0_45px_rgba(249,115,22,0.25)]",
  },

  cyan: {
    text: "text-cyan-600 dark:text-cyan-400",
    icon: "text-cyan-500",

    bg: "bg-cyan-500",
    softBg: "bg-cyan-500/10",

    border: "border-cyan-500/20",
    ring: "ring-cyan-500/20",

    line: "bg-cyan-500",

    gradient:
      "from-cyan-400 via-cyan-500 to-sky-500",

    glow: "shadow-[0_0_45px_rgba(6,182,212,0.25)]",
  },

  teal: {
    text: "text-teal-600 dark:text-teal-400",
    icon: "text-teal-500",

    bg: "bg-teal-500",
    softBg: "bg-teal-500/10",

    border: "border-teal-500/20",
    ring: "ring-teal-500/20",

    line: "bg-teal-500",

    gradient:
      "from-teal-400 via-teal-500 to-emerald-500",

    glow: "shadow-[0_0_45px_rgba(20,184,166,0.25)]",
  },

  indigo: {
    text: "text-indigo-600 dark:text-indigo-400",
    icon: "text-indigo-500",

    bg: "bg-indigo-500",
    softBg: "bg-indigo-500/10",

    border: "border-indigo-500/20",
    ring: "ring-indigo-500/20",

    line: "bg-indigo-500",

    gradient:
      "from-indigo-400 via-indigo-500 to-violet-500",

    glow: "shadow-[0_0_45px_rgba(99,102,241,0.25)]",
  },

  red: {
    text: "text-rose-600 dark:text-rose-400",
    icon: "text-rose-500",

    bg: "bg-rose-500",
    softBg: "bg-rose-500/10",

    border: "border-rose-500/20",
    ring: "ring-rose-500/20",

    line: "bg-rose-500",

    gradient:
      "from-rose-400 via-red-500 to-rose-600",

    glow: "shadow-[0_0_45px_rgba(244,63,94,0.25)]",
  },

  yellow: {
    text: "text-yellow-600 dark:text-yellow-400",
    icon: "text-yellow-500",

    bg: "bg-yellow-500",
    softBg: "bg-yellow-500/10",

    border: "border-yellow-500/20",
    ring: "ring-yellow-500/20",

    line: "bg-yellow-500",

    gradient:
      "from-yellow-400 via-yellow-500 to-amber-500",

    glow: "shadow-[0_0_45px_rgba(234,179,8,0.25)]",
  },
};