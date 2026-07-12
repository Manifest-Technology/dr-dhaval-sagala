"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { SportsMedicineIntroduction } from "@/data/sports_medicine/introduction";
import { SportsMedicineProcedures } from "@/data/sports_medicine/procedures";
import { SportsMedicineJourney } from "@/data/sports_medicine/treatment-journey";



export function SportsMedicineClient() {
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
              top: "Returning to sport",
              highlight: "takes more than recovery.",
              bottom: "It requires confidence.",
            }}
            description="Every sports injury is unique. Through accurate diagnosis, personalised treatment, and progressive rehabilitation, the focus is on relieving pain, restoring performance, and helping every athlete return to sport safely and confidently."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={SportsMedicineIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={SportsMedicineProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={SportsMedicineJourney}
          />
        </section>
      </div>
    </main>
  );
}