"use client";

import MobileAccordion from "./mobile-accordion";

interface Props {
  onClose: () => void;
}

export default function ResourcesAccordion({
  onClose,
}: Props) {
  return (
    <MobileAccordion
      title="Resources"
      onClose={onClose}
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