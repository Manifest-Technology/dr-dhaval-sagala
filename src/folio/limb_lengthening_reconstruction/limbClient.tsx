"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { LimbLengtheningIntroduction } from "@/data/limb_lengthening_reconstruction/introduction";
import { LimbLengtheningProcedures } from "@/data/limb_lengthening_reconstruction/procedures";
import { LimbLengtheningJourney } from "@/data/limb_lengthening_reconstruction/treatment-journey";



export function LimbLengtheningClient() {
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
              top: "Restoring alignment",
              highlight: "goes beyond correcting bones.",
              bottom: "It restores confidence and freedom.",
            }}
            description="Every deformity and limb difference is unique. Through precise planning, advanced reconstruction techniques, and personalised rehabilitation, the goal is to improve alignment, restore function, and help patients move with confidence."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={LimbLengtheningIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={LimbLengtheningProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={LimbLengtheningJourney}
          />
        </section>
      </div>
    </main>
  );
}