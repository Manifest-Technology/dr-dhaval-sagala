import { AboutDoctor } from "./about/about-doctor";
import { ExperienceSection } from "./experience/experience";

import { ExpertiseSection } from "./expertise/expertise";

export function ProfileClient() {
  return (
    <>
      <section id="hero" className="pt-24">
        <AboutDoctor />
      </section>

      <section id="expertise" className="!overflow-x-hidden hidden lg:block">
        <ExpertiseSection />
      </section>

      <section id="experience" className="!overflow-x-hidden">
        <ExperienceSection />
      </section>
    </>
  );
}