import {
  faHand,
  faBone,
  faHandHoldingMedical,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

import wristHandCareImage from "@/assets/img/wrist_hand_care/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const WristHandCareIntroduction: ServiceIntroductionData = {
  badge: "Wrist & Hand Care",

  title: {
    first: "Comprehensive Wrist & Hand Care",
    second: "for Precision Movement.",
  },

  description: [
    "Wrist and hand conditions can affect strength, dexterity, and everyday function. From fractures and nerve compression to arthritis and tendon injuries, every treatment plan is personalized to relieve pain, restore movement, and help patients return to work, sports, and daily activities.",
  ],

  image: wristHandCareImage,

  imageAlt:
    "Dr. Dhaval Sagala consulting a patient while reviewing digital wrist X-rays and a 3D anatomical model of the wrist and hand.",

  highlights: [
    {
      icon: faHand,

      title: {
        first: "Comprehensive Wrist",
        second: "& Hand Evaluation",
      },

      description:
        "Accurate diagnosis for both acute injuries and chronic conditions.",
    },

    {
      icon: faBone,

      title: {
        first: "Fracture &",
        second: "Trauma Care",
      },

      description:
        "Advanced treatment for fractures, ligament injuries, and joint conditions.",
    },

    {
      icon: faHandHoldingMedical,

      title: {
        first: "Minimally Invasive",
        second: "Treatment",
      },

      description:
        "Modern surgical and non-surgical techniques focused on faster recovery.",
    },

    {
      icon: faHandSparkles,

      title: {
        first: "Function &",
        second: "Rehabilitation",
      },

      description:
        "Personalized rehabilitation to restore grip strength, mobility, and hand function.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};