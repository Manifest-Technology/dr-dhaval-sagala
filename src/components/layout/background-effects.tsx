"use client";

export function BackgroundEffects() {
  return (
    <>
      {/* Gold Blur */}

      <div
        className="
          absolute
          left-[-240px]
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#D4A017]/10
          blur-[150px]
        "
      />

      {/* Blue Blur */}

      <div
        className="
          absolute
          right-[-200px]
          top-1/3
          h-[620px]
          w-[620px]
          rounded-full
          bg-sky-500/10
          blur-[180px]
        "
      />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-slate-100/40
          dark:to-white/[0.02]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.05]
          [background-image:linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* Noise */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          [background-image:radial-gradient(#000_0.6px,transparent_0.6px)]
          [background-size:12px_12px]
        "
      />
    </>
  );
}