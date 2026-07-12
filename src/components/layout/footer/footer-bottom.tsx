import Link from "next/link";

import { footerContent } from "@/data/footer/content";

export function FooterBottom() {
  const copyrightHtml = footerContent.bottom.copyright.replace(
    "Dr. Dhaval Sagala",
    `<span class="font-medium text-[#D4A017]">Dr. Dhaval Sagala</span>`
  );

  return (
    <div
      className="
        flex flex-col gap-4 border-t border-white/10
        px-5 py-5 text-center text-sm text-slate-400

        md:flex-row md:items-center md:justify-between
      "
    >
      <span
        dangerouslySetInnerHTML={{
          __html: copyrightHtml,
        }}
      />

      <p className="text-center md:text-right">
       Conceived and crafted by{" "}

        <Link
          href={footerContent.bottom.credits.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative inline-block
            font-medium text-[#D4A017]
            transition-colors duration-300
          "
        >
          Manifest Technology

          <span
            className="
              absolute -bottom-0.5 left-0
              h-px w-0 bg-[#D4A017]
              transition-all duration-300
              group-hover:w-full
            "
          />
        </Link>
      </p>
    </div>
  );
}