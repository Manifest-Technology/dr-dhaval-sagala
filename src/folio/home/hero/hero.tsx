import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        pt-24 lg:pt-10
        pb-12
        lg:py-20
      "
    >
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#D4A017]/5 blur-3xl" />

      <div className="absolute right-0 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-16 xl:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}