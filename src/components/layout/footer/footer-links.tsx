import Link from "next/link";

import { footerContent } from "@/data/footer/content";

interface FooterLinksProps {
  title: string;
  type: "quickLinks" | "specialities";
}

export function FooterLinks({
  title,
  type,
}: FooterLinksProps) {
  const items = footerContent[type];

  return (
    <div>
      <h3 className="text-base font-semibold text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="
                group relative inline-flex w-fit text-sm text-slate-300
                transition-all duration-300 hover:text-[#D4A017]
              "
            >
              <>
                <span>{item.label}</span>

                <span
                  className="
                    absolute -bottom-1 left-0 h-px w-0 group-hover:w-full
                    bg-[#D4A017] transition-all duration-300 ease-out
                  "
                />
              </>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}