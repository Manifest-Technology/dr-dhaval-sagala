import {
  faUserDoctor,
  faBone,
  faShieldHeart,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import elbowCareImage from "@/assets/img/elbow_care/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const ElbowCareIntroduction: ServiceIntroductionData = {
  badge: "Elbow Care",

  title: {
    first: "Advanced Elbow Care for",
    second: "Strength, Stability & Pain-Free Motion.",
  },

  description: [
    "Elbow conditions can affect strength, flexibility, and everyday function. From tendon disorders and fractures to arthritis and nerve compression, every treatment plan is personalized to relieve pain, restore mobility, and help patients return to work, sports, and daily activities.",
  ],

  image: elbowCareImage,

  imageAlt:
    "Dr. Dhaval H. Sagala consulting a patient while reviewing digital elbow X-rays alongside a 3D anatomical model of the elbow joint.",

  highlights: [
    {
      icon: faUserDoctor,

      title: {
        first: "Comprehensive Elbow",
        second: "Evaluation",
      },

      description:
        "Accurate diagnosis using advanced clinical assessment and imaging.",
    },

    {
      icon: faBone,

      title: {
        first: "Fracture &",
        second: "Joint Care",
      },

      description:
        "Expert treatment for fractures, arthritis, and complex elbow conditions.",
    },

    {
      icon: faShieldHeart,

      title: {
        first: "Arthroscopy &",
        second: "Minimally Invasive Care",
      },

      description:
        "Modern techniques designed to relieve pain and preserve joint function.",
    },

    {
      icon: faDumbbell,

      title: {
        first: "Strength &",
        second: "Rehabilitation",
      },

      description:
        "Personalized rehabilitation programs to restore movement, strength, and confidence.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};