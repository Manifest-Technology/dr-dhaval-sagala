import {
  faRulerVertical,
  faBone,
  faScrewdriverWrench,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import limbLengtheningImage from "@/assets/img/limb_lengthening/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const LimbLengtheningIntroduction: ServiceIntroductionData = {
  badge: "Limb Lengthening & Reconstruction",

  title: {
    first: "Restoring Balance,",
    second: "Function & Mobility.",
  },

  description: [
    "Limb length differences and bone deformities can affect movement, balance, and everyday function. Personalized reconstructive treatment focuses on restoring alignment, improving mobility, and helping patients regain confidence through precise surgical planning and rehabilitation.",
  ],

  image: limbLengtheningImage,

  imageAlt:
    "Dr. Dhaval Sagala reviewing standing leg alignment X-rays with a patient.",

  highlights: [
    {
      icon: faRulerVertical,

      title: {
        first: "Limb Length",
        second: "Correction",
      },

      description:
        "Restoring limb symmetry for improved movement and balance.",
    },

    {
      icon: faBone,

      title: {
        first: "Bone Deformity",
        second: "Correction",
      },

      description:
        "Precise reconstruction to restore alignment and function.",
    },

    {
      icon: faScrewdriverWrench,

      title: {
        first: "Minimally Invasive",
        second: "Reconstruction",
      },

      description:
        "Modern surgical techniques designed for safe recovery.",
    },

    {
      icon: faClipboardCheck,

      title: {
        first: "Personalized",
        second: "Treatment Planning",
      },

      description:
        "Individualized care with comprehensive rehabilitation support.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};