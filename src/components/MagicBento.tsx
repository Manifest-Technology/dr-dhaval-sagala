"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";

import "./MagicBento.css";

export interface BentoProps {
  children: React.ReactNode;

  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");

  el.className = "particle";

  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;

  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();

  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

interface ParticleCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disableAnimations?: boolean;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const ParticleCard = ({
  children,
  className = "",
  style,
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true,
}: ParticleCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const isHoveredRef = useRef(false);
  const particlesInitialized = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);

  const initializeParticles = useCallback(() => {
    if (!cardRef.current || particlesInitialized.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();

    memoizedParticles.current = Array.from(
      { length: particleCount },
      () =>
        createParticleElement(
          Math.random() * width,
          Math.random() * height,
          glowColor
        )
    );

    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => particle.remove(),
      });
    });

    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeout = setTimeout(() => {
        if (!cardRef.current || !isHoveredRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;

        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
          }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeout);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleEnter = () => {
      isHoveredRef.current = true;

      animateParticles();
    };

    const handleLeave = () => {
      isHoveredRef.current = false;

      clearParticles();

      gsap.to(element, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
      });
    };

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        gsap.to(element, {
          rotateX: ((y - centerY) / centerY) * -10,
          rotateY: ((x - centerX) / centerX) * 10,
          duration: 0.15,
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        magnetismAnimationRef.current = gsap.to(element, {
          x: (x - centerX) * 0.05,
          y: (y - centerY) * 0.05,
          duration: 0.3,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("div");

      ripple.style.cssText = `
        position:absolute;
        width:300px;
        height:300px;
        border-radius:50%;
        background:radial-gradient(circle, rgba(${glowColor},0.35), transparent 70%);
        left:${x - 150}px;
        top:${y - 150}px;
        pointer-events:none;
        z-index:999;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1.5,
          opacity: 0,
          duration: 0.8,
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);
    element.addEventListener("mousemove", handleMove);
    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("click", handleClick);

      clearParticles();
    };
  }, [
    animateParticles,
    clearParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container h-full`}
      style={{
        ...style,
        position: "relative",
        overflow: "visible",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="magic-bento-inner-glow" />

      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  enabled = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  enabled?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}) => {
  useEffect(() => {
    if (
      disableAnimations ||
      !enabled ||
      !gridRef.current
    ) {
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const cards =
        gridRef.current?.querySelectorAll(".magic-bento-card");

      if (!cards?.length) return;

      const proximity = spotlightRadius * 0.35;
      const fadeDistance = spotlightRadius * 1.5; 

      cards.forEach((card) => {
        const element = card as HTMLElement;

        const rect = element.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(
          e.clientX - centerX,
          e.clientY - centerY
        );

        let intensity = 0;

        if (distance <= proximity) {
          intensity = 1;
        } else if (distance <= fadeDistance) {
          intensity =
            (fadeDistance - distance) /
            (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          element,
          e.clientX,
          e.clientY,
          intensity,
          spotlightRadius
        );
      });
    };

    document.addEventListener("mousemove", handleMove);

    return () =>
      document.removeEventListener("mousemove", handleMove);
  }, [
    gridRef,
    enabled,
    disableAnimations,
    spotlightRadius,
    glowColor,
  ]);

  return null;
};

export default function MagicBento({
  children,
  textAutoHide = false,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}: BentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const isMobile = useMobileDetection();

  const shouldDisableAnimations =
    disableAnimations || isMobile;

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          enabled={enableSpotlight}
          disableAnimations={shouldDisableAnimations}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <div ref={gridRef} className="h-full">
        <ParticleCard
          className={[
            "magic-bento-card",
            textAutoHide && "magic-bento-card--text-autohide",
            enableBorderGlow &&
              "magic-bento-card--border-glow",
          ]
            .filter(Boolean)
            .join(" ")}
          style={
            {
              "--glow-color": glowColor,
            } as React.CSSProperties
          }
          disableAnimations={shouldDisableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
        >
          {children}
        </ParticleCard>
      </div>
    </>
  );
}