import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Treatments } from "./treatments/treatments";
import { Testimonials } from "./testimonials/testimonials";
import { FAQ } from "./faq/faq";
import { PatientEssentials } from "./patient_essentials/patient-essentials";

export function HomeClient() {
  return (
    <>
      <section id="hero" className="pt-8">
        <Hero />
      </section>

      <section id="about" className="py-7">
        <About />
      </section>

      <section id="treatments" className="py-8">
        <Treatments />
      </section>
{/* 
      <section id="testimonials" className="py-8">
        <Testimonials />
      </section>
 */}
      <section id="faq" className="py-8">
        <FAQ />
      </section>

      <section id="patient-essentials" className="py-8">
        <PatientEssentials />
      </section>
    </>
  );
}