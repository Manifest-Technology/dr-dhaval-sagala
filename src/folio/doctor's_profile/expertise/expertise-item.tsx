"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExpertiseItem as ExpertiseItemType } from "@/data/doctor's_profile/expertise";

interface Props extends ExpertiseItemType {
  reverse?: boolean;
}

export function ExpertiseItem({
  number,
  title,
  description,
  highlights,
  image,
  icon,
  reverse = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative",
        "grid items-center gap-16",
        "lg:grid-cols-2"
      )}
    >
      {/* IMAGE */}

      <div className={cn(reverse && "lg:order-2")}>
        <motion.div whileHover={{ y: -8 }}>
          <Card className="overflow-hidden rounded-[36px] border-0 shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-[#D4A017] px-4 py-2 text-xs font-bold tracking-[0.3em] text-white">
                  {number}
                </span>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  {title}
                </h3>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* CONTENT */}

      <div className={cn(reverse && "lg:order-1")}>
        <motion.div whileHover={{ y: -6 }}>
          <Card className="rounded-[36px] p-10 shadow-xl">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A017]/10">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-xl text-[#D4A017]"
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#D4A017]">
                  Focus Area
                </span>

                <h3 className="mt-2 text-4xl font-bold">
                  {title}
                </h3>
              </div>
            </div>

            <p className="mt-8 text-lg leading-9 text-muted-foreground">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D4A017]/30 bg-[#D4A017]/5 px-4 py-2 text-sm font-medium text-[#D4A017]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* CONNECTOR */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          hidden
          h-px
          w-20
          -translate-x-1/2
          bg-[#D4A017]/40
          lg:block
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          hidden
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-4
          border-background
          bg-[#D4A017]
          shadow-lg
          lg:block
        "
      />
    </motion.article>
  );
}