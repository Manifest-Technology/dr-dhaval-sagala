"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";


import { WristHandCareIntroduction } from "@/data/wrist_hand_care/introduction";
import { WristHandCareProcedures } from "@/data/wrist_hand_care/procedures";
import { WristHandCareJourney } from "@/data/wrist_hand_care/treatment-journey";



export function WristCareClient() {
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
              top: "Healthy hands",
              highlight: "restore independence.",
              bottom: "Function brings life back.",
            }}
            description="Every hand and wrist condition requires precise care. Through accurate diagnosis, advanced treatment, and personalised rehabilitation, the goal is to restore strength, improve function, and help patients confidently return to work, hobbies, and daily life."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={WristHandCareIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={WristHandCareProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={WristHandCareJourney}
          />
        </section>
      </div>
    </main>
  );
}