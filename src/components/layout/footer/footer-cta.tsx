import { footerContent } from "@/data/footer/content";

import { CircularContact } from "./circular-contact";

export function FooterCTA() {
  return (
    <section className="px-5 py-8 md:px-7 md:py-10 xl:px-8 xl:py-12">
      <div
        className="
          grid justify-items-center gap-8 lg:justify-items-stretch
          lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center
        "
      >
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
            {footerContent.cta.title}
          </h2>

          <p 
            className="
              mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300
              md:text-base lg:mx-0 lg:max-w-xl
            "
          >
            {footerContent.cta.description}
          </p>
        </div>

        <CircularContact />
      </div>
    </section>
  );
}