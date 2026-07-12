"use client";

export function BackgroundEffectsServices() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        overflow-hidden
      "
    >
      {/* Base */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />

      {/* ===================================== */}
      {/* GOLD SPOTLIGHT */}
      {/* ===================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[-18rem]
          h-[58rem]
          w-[58rem]
          -translate-x-1/2
          rounded-full
          bg-[#D4A017]/18
          blur-[190px]
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-52
          top-40
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-[#D4A017]/16
          blur-[170px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-52
          top-1/3
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-sky-500/14
          blur-[180px]
        "
      />

      {/* ===================================== */}
      {/* MAIN GRID */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
          dark:opacity-[0.10]
          [background-image:
          linear-gradient(to_right,rgba(71,85,105,.45)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(71,85,105,.45)_1px,transparent_1px)]
          [background-size:120px_120px]
        "
      />

      {/* ===================================== */}
      {/* SECONDARY GRID */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          dark:opacity-[0.05]
          [background-image:
          linear-gradient(to_right,rgba(148,163,184,.35)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(148,163,184,.35)_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      {/* ===================================== */}
      {/* DOT MATRIX */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.18]
          dark:opacity-[0.12]
          [background-image:radial-gradient(rgba(148,163,184,.9)_0.8px,transparent_0.8px)]
          [background-size:26px_26px]
          [mask-image:radial-gradient(circle_at_center,black_35%,transparent_100%)]
        "
      />

      {/* ===================================== */}
      {/* VIGNETTE */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,.55)_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,23,.55)_100%)]
        "
      />

      {/* ===================================== */}
      {/* BOTTOM FADE */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-slate-100/60
          dark:to-slate-950/70
        "
      />
    </div>
  );
}