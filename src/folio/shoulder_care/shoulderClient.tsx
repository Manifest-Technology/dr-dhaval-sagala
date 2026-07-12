"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { WristHandCareIntroduction } from "@/data/wrist_hand_care/introduction";
import { WristHandCareProcedures } from "@/data/wrist_hand_care/procedures";
import { WristHandCareJourney } from "@/data/wrist_hand_care/treatment-journey";
import { ShoulderCareIntroduction } from "@/data/shoulder_care/introduction";
import { ShoulderCareProcedures } from "@/data/shoulder_care/procedures";
import { ShoulderCareJourney } from "@/data/shoulder_care/treatment-journey";



export function ShoulderCareClient() {
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
              top: "Restoring shoulder movement",
              highlight: "begins with confidence.",
              bottom: "Every movement should feel natural.",
            }}
            description="Every shoulder condition deserves an individual approach. Through precise diagnosis, advanced treatment, and personalised rehabilitation, the goal is to relieve pain, restore mobility, and help patients return to work, sports, and everyday activities with confidence."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={ShoulderCareIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={ShoulderCareProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={ShoulderCareJourney}
          />
        </section>
      </div>
    </main>
  );
}