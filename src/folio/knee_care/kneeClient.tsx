"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { KneeCareIntroduction } from "@/data/knee_care/introduction";
import { KneeCareProcedures } from "@/data/knee_care/procedures";
import { KneeCareJourney } from "@/data/knee_care/treatment-journey";



export function KneeCareClient() {
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
              top: "Every step forward",
              highlight: "should be pain free.",
              bottom: "Movement restores confidence.",
            }}
            description="Every knee condition is different. Through precise diagnosis, personalised treatment, and evidence-based care, the focus is on relieving pain, restoring stability, and helping patients return to an active lifestyle with confidence."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={KneeCareIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={KneeCareProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={KneeCareJourney}
          />
        </section>
      </div>
    </main>
  );
}