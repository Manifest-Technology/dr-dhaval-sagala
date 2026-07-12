"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo1 from "@/assets/img/logo/logo_1.png";
import { footerContent } from "@/data/footer/content";

export function FooterBrand() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div>
      <Link
        href="/"
        aria-label="Dr. Dhaval Sagala"
        className="inline-block"
      >
        <Image
          src={logo1}
          alt="Dr. Dhaval Sagala"
          width={250}
          height={90}
          priority
          className="object-contain"
        />
      </Link>

      <p className="mt-5 max-w-xs text-sm leading-6 text-justify text-slate-300">
        {footerContent.brand.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {footerContent.socialLinks.map((social) => {
          const socialColor = isDark
            ? social.darkColor
            : social.lightColor;

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              style={
                {
                  "--social-color": socialColor,
                } as React.CSSProperties
              }
              className="
                group

                flex h-10 w-10 items-center justify-center

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
                className="h-5 w-5"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}