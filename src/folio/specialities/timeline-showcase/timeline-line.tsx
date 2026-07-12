"use client";

export function TimelineLine() {
  return (
    <div className="relative h-full w-[3px]">
      {/* Soft Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-[#D4A017]/20
          blur-sm
          dark:bg-[#D4A017]/30
        "
      />

      {/* Main Gradient Line */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-b
          from-[#D4A017]
          via-[#E8C14A]
          to-[#D4A017]
        "
      />

      {/* Highlight */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          rounded-full
          bg-white/40
          dark:bg-white/10
        "
      />
    </div>
  );
}