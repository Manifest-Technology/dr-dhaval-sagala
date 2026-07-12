"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { ElbowCareIntroduction } from "@/data/elbow_care/introduction";
import { ElbowCareProcedures } from "@/data/elbow_care/procedures";
import { ElbowCareJourney } from "@/data/elbow_care/treatment-journey";



export function ElbowCareClient() {
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
              top: "Restoring strength",
              highlight: "begins at the elbow.",
              bottom: "Confidence follows every movement.",
            }}
            description="Every elbow condition requires precise diagnosis and personalised care. Through advanced treatment and focused rehabilitation, the goal is to relieve pain, restore strength, and help patients return to work, sports, and everyday activities with confidence."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={ElbowCareIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={ElbowCareProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={ElbowCareJourney}
          />
        </section>
      </div>
    </main>
  );
}