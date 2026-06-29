"use client";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ContactCardProps {
  icon: IconDefinition;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
  className?: string;
  variant?:
    | "phone"
    | "whatsapp"
    | "email"
    | "hours"
    | "location";
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
  external = false,
  className = "",
  variant = "location",
}: ContactCardProps) {
  const styles = {
    phone: {
      icon:
        "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
      border:
        "hover:border-blue-500/20 hover:shadow-blue-500/10",
      line:
        "from-blue-500 via-blue-400 to-blue-500",
      glow:
        "bg-blue-500/10",
      action:
        "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
      value:
        "text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-300",
    },

    whatsapp: {
      icon:
        "bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400",
      border:
        "hover:border-green-500/20 hover:shadow-green-500/10",
      line:
        "from-green-500 via-green-400 to-green-500",
      glow:
        "bg-green-500/10",
      action:
        "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
      value:
        "text-slate-800 dark:text-slate-200 group-hover:text-green-700 dark:group-hover:text-green-300",
    },

    email: {
      icon:
        "bg-purple-100 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400",
      border:
        "hover:border-purple-500/20 hover:shadow-purple-500/10",
      line:
        "from-purple-500 via-purple-400 to-purple-500",
      glow:
        "bg-purple-500/10",
      action:
        "border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400",
      value:
        "text-slate-800 dark:text-slate-200 group-hover:text-purple-700 dark:group-hover:text-purple-300",
    },

    hours: {
      icon:
        "bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
      border:
        "hover:border-orange-500/20 hover:shadow-orange-500/10",
      line:
        "from-orange-500 via-orange-400 to-orange-500",
      glow:
        "bg-orange-500/10",
      action:
        "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400",
      value:
        "text-slate-800 dark:text-slate-200 group-hover:text-orange-700 dark:group-hover:text-orange-300",
    },

    location: {
      icon:
        "bg-[#D4A017]/10 text-[#D4A017]",
      border:
        "hover:border-[#D4A017]/20 hover:shadow-[#D4A017]/10",
      line:
        "from-[#D4A017] via-[#E5C564] to-[#D4A017]",
      glow:
        "bg-[#D4A017]/10",
      action:
        "border-[#D4A017]/20 bg-[#D4A017]/10 text-[#D4A017]",
      value:
        "text-slate-800 dark:text-slate-200 group-hover:text-[#B88B14]",
    },
  };

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`
        group relative h-full overflow-hidden
        rounded-[28px]
        border border-border/60
        bg-gradient-to-br
        from-background
        via-background
        to-slate-50/60
        dark:to-slate-900/30
        p-5 lg:p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${styles[variant].border}
        ${className}
      `}
    >
      {/* GOLD TOP ACCENT */}
      <div
        className={`
          absolute inset-x-0 top-0
          h-[3px]
          rounded-t-[28px]
          bg-gradient-to-r
          ${styles[variant].line}
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
        `}
      />

      {/* SOFT GLOW */}
      <div
        className={`
          absolute -right-12 -top-12
          h-32 w-32 rounded-full
          blur-3xl
          opacity-0
          transition-all duration-500
          group-hover:opacity-100
          ${styles[variant].glow}
        `}
      />

      <div className="relative flex items-start gap-4">
        {/* ICON */}
        <div
          className={`
            flex h-14 w-14 shrink-0
            items-center justify-center
            rounded-2xl
            transition-all duration-300
            group-hover:scale-105
            ${styles[variant].icon}
          `}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-lg"
          />
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-slate-500
              dark:text-slate-400
            "
          >
            {title}
          </p>

          <p
            className={`
              mt-2
              whitespace-pre-line
              text-[15px]
              font-semibold
              leading-8
              transition-colors
              duration-300
              ${styles[variant].value}
            `}
          >
            {value}
          </p>
        </div>

        {/* ACTION */}
        {href && (
          <div
            className={`
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              border
              opacity-0
              transition-all duration-300
              group-hover:translate-x-1
              group-hover:opacity-100
              ${styles[variant].action}
            `}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </div>
        )}
      </div>
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="block h-full"
    >
      {content}
    </a>
  );
}