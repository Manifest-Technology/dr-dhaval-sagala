"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  icon: IconDefinition;
  slug: string;
  featured?: boolean;
}

export default function TreatmentCard({
  title,
  description,
  image,
  icon,
  slug,
  featured = false,
}: Props) {
  return (
    <Link
      href={slug}
      aria-label={title}
      className="
        block h-full rounded-[28px]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/30
        focus-visible:ring-offset-4
      "
    >
      <motion.article
        whileTap={{ scale: 0.99 }}
        className={cn(
          "group relative isolate flex h-full flex-col overflow-hidden",

          "rounded-[28px] lg:rounded-[32px]",

          "border border-primary/10",

          "bg-card/90 backdrop-blur-xl",

          "transition-all duration-700 ease-out",

          "shadow-none",

          "md:hover:border-primary/20",

          "min-h-[320px]",

          featured && "xl:min-h-[680px]"
        )}
      >
        {/* Background Image */}
        <motion.div
          initial={false}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            absolute inset-0
            transition-opacity duration-700

            opacity-100

            [@media(any-hover:hover)]:opacity-0
            [@media(any-hover:hover)]:group-hover:opacity-100
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            priority={featured}
            sizes="
              (max-width: 767px) 100vw,
              (max-width: 1279px) 50vw,
              25vw
            "
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/72 to-slate-950/15 dark:from-black/95 dark:via-black/75 dark:to-black/20" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
          
          {/* Icon */}
          <div className="shrink-0">
            <div
              className={cn(
                "flex items-center justify-center",

                "h-14 w-14 md:h-16 md:w-16",

                "rounded-2xl",

                "border",

                "border-white/10",
                "bg-white/10",

                "text-white",

                "[@media(any-hover:hover)]:border-primary/10",
                "[@media(any-hover:hover)]:bg-primary/5",
                "[@media(any-hover:hover)]:text-primary",

                "[@media(any-hover:hover)]:group-hover:border-white/10",
                "[@media(any-hover:hover)]:group-hover:bg-white/10",
                "[@media(any-hover:hover)]:group-hover:text-white",

                "backdrop-blur-xl",

                "transition-all duration-500"
              )}
            >
              <FontAwesomeIcon
                icon={icon}
                className="text-xl md:text-2xl"
              />
            </div>

            <div
              className={cn(
                "mt-6 h-[2px] w-14 rounded-full",
                "transition-colors duration-500", "bg-white",

                "[@media(any-hover:hover)]:bg-primary/80",
                "[@media(any-hover:hover)]:group-hover:bg-white",
              )}
            />
          </div>

          <div
            className={cn(
              "hidden md:block",

              featured ? "flex-[0.65]" : "flex-1"
            )}
          />

          {/* Content */}
          <motion.div
            transition={{ duration: 0.3 }}
            className={cn(
              "mt-8",

              !featured && "md:mt-0",

              featured && "md:mt-auto"
            )}
          >
            <h3
              className={cn(
                "font-semibold",

                featured
                  ? "text-[2rem] md:text-[2.5rem]"
                  : "text-[1.5rem] md:text-[1.75rem]",

                "leading-[1.1]", "tracking-[-0.03em]", "text-white",
                "[@media(any-hover:hover)]:text-foreground",

                "[@media(any-hover:hover)]:group-hover:text-white",
                "transition-colors duration-500"
              )}
            >
              {title}
            </h3>

            <p
              className={cn(
                "mt-4", "max-w-[28ch]",
                "text-sm md:text-[15px]",

                "leading-7", "text-white/80",
                "[@media(any-hover:hover)]:text-muted-foreground",

                "[@media(any-hover:hover)]:group-hover:text-white/80",
                "transition-colors duration-500"
              )}
            >
              {description}
            </p>
          </motion.div>
        </div>

        <div
          className="
            opacity-0 absolute inset-x-0 bottom-0 h-px
            bg-gradient-to-r from-transparent via-primary/70 to-transparent

            transition-opacity duration-500
            [@media(any-hover:hover)]:group-hover:opacity-100
          "
        />
      </motion.article>
    </Link>
  );
}