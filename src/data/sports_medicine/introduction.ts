import {
  faDumbbell,
  faPersonRunning,
  faUserDoctor,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

import sportsMedicineImage from "@/assets/img/sports_medicine/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const SportsMedicineIntroduction: ServiceIntroductionData = {
  badge: "Sports Medicine",

  title: {
    first: "Sports Medicine That",
    second: "Gets You Back in Motion.",
  },

  description:[
    "From sports injuries and overuse conditions to active lifestyle concerns, every treatment plan focuses on restoring strength, improving performance, and helping you return to activity safely through personalized, evidence-based care.",
  ],

  image: sportsMedicineImage,

  imageAlt:
    "Dr. Dhaval Sagala assisting an athlete during sports injury rehabilitation.",

  highlights: [
    {
      icon: faUserDoctor,

      title: {
        first: "Advanced Sports",
        second: "Injury Evaluation",
      },

      description:
        "Accurate diagnosis for effective treatment planning.",
    },

    {
      icon: faDumbbell,

      title: {
        first: "Arthroscopic",
        second: "Keyhole Surgery",
      },

      description:
        "Minimally invasive procedures for faster recovery.",
    },

    {
      icon: faShieldHeart,

      title: {
        first: "Personalized",
        second: "Treatment Care",
      },

      description:
        "Non-surgical and surgical solutions tailored to each patient.",
    },

    {
      icon: faPersonRunning,

      title: {
        first: "Return-to-Sport",
        second: "Rehabilitation",
      },

      description:
        "Structured recovery programs to regain strength and confidence.",
    },
  ],

  button: {
    label: "Book Appointment",
    href: "/contact",
  },
};