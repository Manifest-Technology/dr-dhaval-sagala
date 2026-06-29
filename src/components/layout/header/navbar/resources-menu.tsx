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
      href="/resources"
      scrolled={scrolled}
      items={[
        {
          label: "Blog",
          href: "/resources/blog",
        },
        {
          label: "Patient Education",
          href: "/resources/patient-education",
        },
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