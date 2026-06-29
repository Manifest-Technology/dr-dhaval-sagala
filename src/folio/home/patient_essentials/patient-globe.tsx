"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { GlobePolaroids } from "@/components/ui/cobe-globe-polaroids";

import medeorHospital from "@/assets/img/home/patient_essentials/medeor-hospital.webp";

const markers = [
  {
    id: "medeor-hospital",
    location: [25.2048, 55.2708] as [number, number],
    image: medeorHospital.src,
    caption: "Dubai",
    rotate: -6,
  },
];

export function PatientGlobe() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const globeClassName = useMemo(
    () =>
      [
        "patient-globe-polaroids",
        isDark
          ? "[&_canvas]:brightness-115 [&_canvas]:contrast-110"
          : "[&_canvas]:brightness-[0.96] [&_canvas]:contrast-[1.18]",
      ].join(" "),
    [isDark]
  );

  return (
    <>
      <div
        className={`
          relative mx-auto w-full max-w-[320px] min-[500px]:max-w-[380px]
          md:max-w-[480px] lg:max-w-[540px] xl:max-w-[620px]
        `}
      >
        {/* Gold ambient glow */}
        <div
          className={`
            absolute inset-0 -z-20 rounded-full
            bg-[#D4A017]/15 blur-[80px]
            sm:blur-[100px]
            xl:blur-[120px]
            dark:bg-[#D4A017]/20
          `}
        />

        {/* Secondary glow */}
        <div
          className={`
            absolute inset-10 -z-10 rounded-full
            bg-blue-500/10 blur-[100px]
            dark:bg-blue-500/15
          `}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          <GlobePolaroids
            markers={markers}
            speed={0.0025}
            className={globeClassName}
          />
        </motion.div>
      </div>

      <style jsx global>{`
        .patient-globe-polaroids > div:not(:first-child) {
          overflow: visible !important;

          background: rgba(255, 255, 255, 0.96) !important;
          border: 1px solid rgba(212, 160, 23, 0.16) !important;
          border-radius: clamp(14px, 2vw, 18px) !important;

          padding:
            clamp(5px, 1.2vw, 8px)
            clamp(5px, 1.2vw, 8px)
            clamp(26px, 5vw, 34px) !important;

          backdrop-filter: blur(20px);

          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.12),
            0 10px 24px rgba(15, 23, 42, 0.08) !important;

          z-index: 20;
        }

        .dark .patient-globe-polaroids > div:not(:first-child) {
          background: rgba(2, 6, 23, 0.9) !important;

          border-color: rgba(212, 160, 23, 0.2) !important;

          box-shadow:
            0 28px 70px rgba(0, 0, 0, 0.45),
            0 12px 30px rgba(0, 0, 0, 0.25) !important;
        }

        /* Responsive image */
        .patient-globe-polaroids img {
          width: clamp(56px, 18vw, 92px) !important;
          height: clamp(56px, 18vw, 92px) !important;

          border-radius: clamp(8px, 2vw, 12px) !important;

          object-fit: cover !important;
        }

        /* Responsive canvas */
        .patient-globe-polaroids canvas {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          image-rendering: auto;
        }

        /* Responsive caption */
        .patient-globe-polaroids span {
          position: absolute !important;

          left: 50% !important;
          bottom: clamp(8px, 2vw, 12px) !important;

          transform: translateX(-50%) !important;

          width: calc(100% - 12px) !important;

          color: #d4a017 !important;

          font-size: clamp(9px, 2vw, 11px) !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;

          letter-spacing: clamp(0.06em, 0.2vw, 0.12em) !important;

          text-transform: uppercase !important;
          text-align: center !important;
        }

        /* Hide original marker */
        .patient-globe-polaroids > div:not(:first-child)::before {
          content: "";

          position: absolute;

          left: 50%;
          top: calc(100% + 2px);

          width: clamp(16px, 5vw, 22px);
          height: clamp(16px, 5vw, 22px);

          transform: translateX(-50%);

          border-radius: 9999px;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.96) 0%,
            rgba(255, 255, 255, 0.96) 55%,
            transparent 56%
          );

          z-index: 40;
        }

        .dark .patient-globe-polaroids > div:not(:first-child)::before {
          background: radial-gradient(
            circle,
            rgba(2, 6, 23, 0.95) 0%,
            rgba(2, 6, 23, 0.95) 55%,
            transparent 56%
          );
        }

        /* Custom gold marker */
        .patient-globe-polaroids > div:not(:first-child)::after {
          content: "";

          position: absolute;

          left: 50%;
          top: calc(100% + 7px);

          width: clamp(8px, 2.5vw, 12px);
          height: clamp(8px, 2.5vw, 12px);

          transform: translateX(-50%);

          border-radius: 9999px;

          background: #d4a017;

          border: 2px solid rgba(255, 255, 255, 0.95);

          box-shadow:
            0 0 0 0 rgba(212, 160, 23, 0.5),
            0 0 20px rgba(212, 160, 23, 0.45);

          animation: patient-marker-pulse 2s infinite ease-out;

          z-index: 50;
        }

        .dark .patient-globe-polaroids > div:not(:first-child)::after {
          border-color: rgba(2, 6, 23, 0.95);
        }

        @keyframes patient-marker-pulse {
          0% {
            box-shadow:
              0 0 0 0 rgba(212, 160, 23, 0.5),
              0 0 20px rgba(212, 160, 23, 0.45);
          }

          70% {
            box-shadow:
              0 0 0 12px rgba(212, 160, 23, 0),
              0 0 28px rgba(212, 160, 23, 0.15);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(212, 160, 23, 0),
              0 0 20px rgba(212, 160, 23, 0);
          }
        }
      `}</style>
    </>
  );
}