import {
  faStethoscope,
  faShieldHeart,
  faUserDoctor,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";

import hipCareImage from "@/assets/img/hip_care/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const HipCareIntroduction: ServiceIntroductionData = {
  badge: "Hip Care",

  title: {
    first: "Expert Hip Care for",
    second: "Every Stage of Life.",
  },

  description: [
    "Hip conditions can affect comfort, mobility, and everyday independence. From joint preservation and arthroscopy to advanced hip replacement, every treatment plan is tailored to restore movement, relieve pain, and support long-term function.",
  ],

  image: hipCareImage,

  imageAlt:
    "Dr. Dhaval Sagala reviewing hip X-rays with a patient alongside a 3D hip joint model.",

  highlights: [
    {
      icon: faStethoscope,

      title: {
        first: "Comprehensive Hip",
        second: "Evaluation",
      },

      description:
        "Accurate diagnosis for personalized treatment planning.",
    },

    {
      icon: faShieldHeart,

      title: {
        first: "Hip Preservation",
        second: "& Arthroscopy",
      },

      description:
        "Advanced minimally invasive procedures whenever appropriate.",
    },

    {
      icon: faUserDoctor,

      title: {
        first: "Hip Replacement",
        second: "& Fracture Care",
      },

      description:
        "Comprehensive surgical solutions for complex hip conditions.",
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