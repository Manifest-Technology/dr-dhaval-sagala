"use client";

import MobileAccordion from "./mobile-accordion";

interface Props {
  onClose: () => void;
}

export default function SpecialitiesAccordion({
  onClose,
}: Props) {
  return (
    <MobileAccordion
      title="Specialities"
      onClose={onClose}
      items={[
        {
          label: "Joint Replacement",
          href: "/specialities/joint-replacement",
        },
        {
          label: "Sports Medicine",
          href: "/specialities/sports-medicine",
        },
        {
          label: "Limb Lengthening & Reconstruction",
          href: "/specialities/limb-lengthening-reconstruction",
        },
        {
          label: "Hip Care",
          href: "/specialities/hip-care",
        },
        {
          label: "Knee Care",
          href: "/specialities/knee-care",
        },
        {
          label: "Shoulder Care",
          href: "/specialities/shoulder-care",
        },
        {
          label: "Elbow Care",
          href: "/specialities/elbow-care",
        },
        {
          label: "Wrist & Hand Care",
          href: "/specialities/wrist-hand-care",
        },
      ]}
    />
  );
}