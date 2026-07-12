import {
  faUserDoctor,
  faJoint,
  faShieldHeart,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import shoulderCareImage from "@/assets/img/shoulder_care/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const ShoulderCareIntroduction: ServiceIntroductionData = {
  badge: "Shoulder Care",

  title: {
    first: "Advanced Shoulder Care for",
    second: "Pain-Free Movement.",
  },

  description: [
    "Shoulder conditions can affect strength, stability, and everyday movement. From sports injuries and tendon tears to arthritis and instability, every treatment plan is tailored to relieve pain, restore mobility, and support long-term shoulder function.",
  ],

  image: shoulderCareImage,

  imageAlt:
    "Dr. Dhaval Sagala consulting a patient while reviewing digital shoulder MRI scans alongside a 3D anatomical model of the shoulder joint.",

  highlights: [
    {
      icon: faUserDoctor,

      title: {
        first: "Comprehensive Shoulder",
        second: "Evaluation",
      },

      description:
        "Accurate diagnosis using advanced clinical assessment and imaging.",
    },

    {
      icon: faJoint,

      title: {
        first: "Arthroscopy &",
        second: "Joint Preservation",
      },

      description:
        "Minimally invasive procedures focused on preserving natural joint function.",
    },

    {
      icon: faShieldHeart,

      title: {
        first: "Rotator Cuff &",
        second: "Instability Care",
      },

      description:
        "Specialized treatment for tendon tears, instability, and complex shoulder injuries.",
    },

    {
      icon: faDumbbell,

      title: {
        first: "Strength &",
        second: "Rehabilitation",
      },

      description:
        "Personalized rehabilitation to restore movement, stability, and confidence.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};