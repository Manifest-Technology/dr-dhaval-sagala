"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { tagVariants } from "./animations";

interface TimelineTagsProps {
  tags?: string[];
  className?: string;
}

export function TimelineTags({
  tags,
  className,
}: TimelineTagsProps) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "mt-6 flex flex-wrap gap-2.5",
        className
      )}
    >
      {tags.map((tag) => (
        <motion.div
          key={tag}
          variants={tagVariants}
        >
          <Badge
            variant="outline"
            className="
              rounded-full
              border-[#D4A017]/20
              bg-[#D4A017]/8
              px-3.5
              py-1.5
              text-xs
              font-medium
              text-[#B8860B]
              transition-all
              duration-300
              hover:border-[#D4A017]/40
              hover:bg-[#D4A017]/15
              dark:border-[#D4A017]/25
              dark:bg-[#D4A017]/10
              dark:text-[#E6C75A]
            "
          >
            {tag}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}