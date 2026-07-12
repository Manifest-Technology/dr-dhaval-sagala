"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { HipCareIntroduction } from "@/data/hip_care/introduction";
import { HipCareProcedures } from "@/data/hip_care/procedures";
import { HipCareJourney } from "@/data/hip_care/treatment-journey";



export function HipCareClient() {
  return (
    <main
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        dark:bg-slate-950
      "
    >
      <BackgroundEffectsServices />

      <div className="relative z-10">
        {/* Philoshophy */}
        <section id="philosophy">
          <Philosophy
            badge="Treatment Philosophy"
            quote={{
              top: "Movement begins",
              highlight: "at the hips.",
              bottom: "Comfort restores confidence.",
            }}
            description="Every hip condition deserves an individual approach. Through accurate diagnosis, advanced treatment, and personalised rehabilitation, the goal is to relieve pain, restore stability, and help patients return to an active, independent life."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={HipCareIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={HipCareProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={HipCareJourney}
          />
        </section>
      </div>
    </main>
  );
}