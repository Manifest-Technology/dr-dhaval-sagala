import {
  faStethoscope,
  faPersonWalking,
  faShieldHeart,
  faBone,
} from "@fortawesome/free-solid-svg-icons";

import kneeCareImage from "@/assets/img/knee_care/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const KneeCareIntroduction: ServiceIntroductionData = {
  badge: "Knee Care",

  title: {
    first: "Holistic Knee Care for",
    second: "Pain-Free Movement.",
  },

  description: [
    "Knee pain can result from sports injuries, arthritis, ligament tears, cartilage damage, or age-related wear. Every treatment plan is personalized to restore stability, relieve pain, improve mobility, and support long-term joint health.",
  ],

  image: kneeCareImage,

  imageAlt:
    "Dr. Dhaval Sagala discussing knee pain with a patient while reviewing digital knee X-rays and a 3D knee model.",

  highlights: [
    {
      icon: faStethoscope,

      title: {
        first: "Comprehensive Knee",
        second: "Evaluation",
      },

      description:
        "Accurate diagnosis for effective and personalized treatment.",
    },

    {
      icon: faShieldHeart,

      title: {
        first: "Arthroscopy &",
        second: "Ligament Care",
      },

      description:
        "Advanced minimally invasive procedures for sports injuries.",
    },

    {
      icon: faBone,

      title: {
        first: "Cartilage & Knee",
        second: "Replacement",
      },

      description:
        "Modern surgical solutions for advanced joint conditions.",
    },

    {
      icon: faPersonWalking,

      title: {
        first: "Personalized",
        second: "Rehabilitation",
      },

      description:
        "Structured recovery programs to restore strength and mobility.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};