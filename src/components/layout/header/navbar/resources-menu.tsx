"use client";

import DropdownMenu from "./dropdown-menu";

interface Props {
  scrolled: boolean;
}

export default function ResourcesMenu({
  scrolled,
}: Props) {
  return (
    <DropdownMenu
      label="Resources"
      href="#"
      scrolled={scrolled}
      items={[
        {
          label: "FAQs",
          href: "/resources/faqs",
        },
        {
          label: "Testimonials",
          href: "/resources/testimonials",
        },
      ]}
    />
  );
}