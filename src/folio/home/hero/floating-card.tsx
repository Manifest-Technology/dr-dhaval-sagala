"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

export function FloatingCard({
  children,
  className,
  duration = 4,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-3xl border border-border/50 bg-background/90 p-4 shadow-xl backdrop-blur-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
}