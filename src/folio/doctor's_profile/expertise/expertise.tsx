"use client";

import { BackgroundEffects } from "@/components/layout/background-effects";

import { ExpertiseHeader } from "./expertise-header";
import { ExpertiseTimeline } from "./expertise-timeline";

export function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <BackgroundEffects />

      <ExpertiseHeader />

      <ExpertiseTimeline />
    </section>
  );
}