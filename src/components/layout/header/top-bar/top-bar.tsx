"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  contactItems,
  socialLinks,
} from "@/data/header/content";

export function TopBar() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="
        hidden lg:block

        border-b border-slate-200/70
        bg-white/80
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-950/80
      "
    >
      <div
        className="
          mx-auto flex h-12 max-w-screen-2xl
          items-center justify-between px-6
        "
      >
        {/* Contact Information */}

        <div
          className="
            flex items-center text-sm
            text-slate-600

            dark:text-slate-300
          "
        >
          {contactItems.map((item, index) => {
            const content = (
              <>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: item.color }}
                  className="
                    !h-5 !w-5 shrink-0
                  "
                />

                <span
                  className={
                    item.href
                      ? "whitespace-nowrap"
                      : "max-w-md truncate"
                  }
                >
                  {item.label}
                </span>
              </>
            );

            return (
              <div
                key={item.label}
                className="flex items-center"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="
                      flex items-center gap-2 px-4

                      transition-all duration-300

                      hover:text-slate-900
                      dark:hover:text-white
                    "
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="flex items-center gap-2 px-4">
                    {content}
                  </div>
                )}

                {index !== contactItems.length - 1 && (
                  <div
                    className="
                      h-5 w-px

                      bg-slate-200
                      dark:bg-white/10
                    "
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Social Media */}

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => {
            const socialColor = isDark
              ? social.darkColor
              : social.lightColor;

            return (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  {
                    "--social-color": socialColor,
                  } as React.CSSProperties
                }
                className="
                  flex h-9 w-9 items-center justify-center

                  rounded-full

                  border border-slate-200/80
                  bg-white/80

                  text-[var(--social-color)]

                  shadow-sm
                  backdrop-blur-xl

                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:scale-105
                  hover:border-[var(--social-color)]
                  hover:bg-[var(--social-color)]
                  hover:text-white
                  hover:shadow-lg

                  dark:border-white/10
                  dark:bg-white/[0.04]
                "
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="h-4 w-4"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}