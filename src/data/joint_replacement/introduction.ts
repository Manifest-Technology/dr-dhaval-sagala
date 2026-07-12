import {
  faBone,
  faClipboardCheck,
  faPersonWalking,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import jointReplacementImage from "@/assets/img/joint_replacement/introduction.png";

import { ServiceIntroductionData } from "@/folio/specialities/introduction/types";

export const jointReplacementIntroduction: ServiceIntroductionData = {
  badge: "Joint Replacement Surgery",

  title: {
    first: "Restoring Movement.",
    second: "Rebuilding Confidence.",
  },

  description: [
    "Joint replacement provides lasting relief from advanced arthritis, severe joint damage, and persistent pain.",
    "Every procedure is carefully planned to restore mobility, reduce discomfort, and help patients return to an active lifestyle.",
  ],

  image: jointReplacementImage,

  imageAlt:
    "Dr. Dhaval Sagala consulting a patient while reviewing joint X-rays.",

  highlights: [
    {
      icon: faBone,

      title: {
        first: "Shoulder, Hip & Knee",
        second: "Replacement",
      },

      description:
        "Advanced joint replacement procedures for improved mobility.",
    },

    {
      icon: faClipboardCheck,

      title: {
        first: "Personalized",
        second: "Surgical Planning",
      },

      description:
        "Treatment tailored to your health, lifestyle, and goals.",
    },

    {
      icon: faScrewdriverWrench,

      title: {
        first: "Modern Implant",
        second: "Technology",
      },

      description:
        "High-quality implants designed for durability and performance.",
    },

    {
      icon: faPersonWalking,

      title: {
        first: "Comprehensive",
        second: "Rehabilitation",
      },

      description:
        "Structured recovery programs to restore strength and confidence.",
    },
  ],

  quote: {
    text: "Every successful joint replacement begins with understanding the individual—not just the joint.",
    author: "Dr. Dhaval H. Sagala",
  },

  button: {
    label: "Book an Appointment",
    href: "/contact",
  },
};