import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { footerContent } from "@/data/footer/content";

export function FooterContact() {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">
        Contact
      </h3>

      <div className="mt-4 space-y-4">
        {footerContent.contactItems.map((item) => (
          <Link
            key={item.label}
            href={item.href || "/contact"}
            className="group flex items-center gap-3 transition-all duration-300"
          >
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-full border border-border
              "
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: item.color }}
                className="h-4 w-4"
              />
            </div>

            <span
              className="
                text-sm leading-7 text-slate-300 transition-all 
              group-hover:text-[#D4A017] duration-300
              "
            >
              {item.icon.iconName === "map-location-dot"
                ? "Medeor Hospital Dubai, Consulates Area, Sheikh Khalifa Bin Zayed Road, Bur Dubai - Dubai - United Arab Emirates"
                : item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}