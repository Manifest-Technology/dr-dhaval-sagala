"use client";

import DropdownMenu from "./dropdown-menu";

interface Props {
  scrolled: boolean;
}

export default function SpecialitiesMenu({
  scrolled,
}: Props) {
  return (
    <DropdownMenu
      label="Specialities"
      href="/specialities"
      scrolled={scrolled}
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