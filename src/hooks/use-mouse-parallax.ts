"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxPosition {
  x: number;
  y: number;
}

export function useMouseParallax(intensity = 24) {
  const frame = useRef<number | null>(null);

  const [position, setPosition] = useState<ParallaxPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }

      frame.current = requestAnimationFrame(() => {
        const x =
          (event.clientX / window.innerWidth - 0.5) *
          intensity;

        const y =
          (event.clientY / window.innerHeight - 0.5) *
          intensity;

        setPosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [intensity]);

  return position;
}