"use client";

import { BackgroundEffectsServices } from "@/components/layout/background-effects-services";

import { Philosophy } from "../specialities/philosophy/philosophy";
import { ServiceIntroduction } from "../specialities/introduction/service-introduction";
import { ProcedureShowcase } from "../specialities/procedure-showcase/procedure-showcase";
import { TimelineShowcase } from "@/folio/specialities/timeline-showcase/timeline-showcase";

import { jointReplacementIntroduction } from "@/data/joint_replacement/introduction";
import { jointReplacementProcedures } from "@/data/joint_replacement/procedures";
import { treatmentJourney } from "@/data/joint_replacement/treatment-journey";


export function JointReplacementClient() {
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
              top: "Restoring movement",
              highlight: "is important.",
              bottom: "Restoring confidence is essential.",
            }}
            description="Successful joint replacement begins with understanding the individual behind the condition. Every treatment plan is tailored to relieve pain, restore mobility, and help patients return to an active, independent life through evidence-based care and precise surgical techniques."
            author="Dr. Dhaval H. Sagala"
            designation="Specialist Orthopaedic Surgeon"
          />
        </section>

        {/* Introduction */}
        <section id="introduction">
          <ServiceIntroduction
            data={jointReplacementIntroduction}
          />
        </section>

        {/* Future Sections */}
        <section id="services">
          <ProcedureShowcase
            data={jointReplacementProcedures}
          />
        </section>
        
        <section id="timeline">
          <TimelineShowcase
            data={treatmentJourney}
          />
        </section>
      </div>
    </main>
  );
}