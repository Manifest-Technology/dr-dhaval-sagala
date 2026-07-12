import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { footerContent } from "@/data/footer/content";

export function FooterNewsletter() {
  return (
    <section className="mt-8">
      <div
        className="
          rounded-[1.5rem] border border-border/50
          bg-white/5 p-5 md:p-6
        "
      >
        <h3 className="text-lg font-semibold text-white">
          {footerContent.newsletter.title}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
          {footerContent.newsletter.description}
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <Input
            type="email"
            placeholder={footerContent.newsletter.placeholder}
            className="h-11 border-white/10 bg-white/5 text-white placeholder:text-slate-4001"
          />

          <Button className="h-11 px-6">
            {footerContent.newsletter.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}