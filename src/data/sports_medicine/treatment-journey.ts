import {
  faClipboardList,
  faDumbbell,
  faPersonRunning,
  faStethoscope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const SportsMedicineJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery",

  description:
    "A structured recovery pathway focused on restoring movement, strength, and confidence for a safe return to an active lifestyle.",

  items: [
    {
      id: "assessment",

      label: "Step 01",

      title: "Comprehensive Assessment",

      description:
        "Clinical examination and imaging identify the injury and guide the most appropriate treatment approach.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Sports Evaluation",
        "Accurate Diagnosis",
      ],
    },

    {
      id: "planning",

      label: "Step 02",

      title: "Personalized Treatment Plan",

      description:
        "Treatment is tailored to your injury, activity level, and long-term performance goals.",

      icon: faClipboardList,

      tags: [
        "Individual Care",
        "Evidence-Based",
        "Goal-Oriented",
      ],
    },

    {
      id: "treatment",

      label: "Step 03",

      title: "Advanced Sports Treatment",

      description:
        "Conservative care is preferred whenever possible, with minimally invasive procedures used when required.",

      icon: faScrewdriverWrench,

      tags: [
        "Keyhole Surgery",
        "Minimally Invasive",
        "Precision Treatment",
      ],
    },

    {
      id: "rehabilitation",

      label: "Step 04",

      title: "Rehabilitation & Strength Recovery",

      description:
        "Progressive rehabilitation restores strength, mobility, balance, and joint stability.",

      icon: faDumbbell,

      tags: [
        "Physiotherapy",
        "Strength Recovery",
        "Mobility Training",
      ],
    },

    {
      id: "return",

      label: "Step 05",

      title: "Return to Sport",

      description:
        "Functional assessment ensures you're ready to safely return to sports and daily activities.",

      icon: faPersonRunning,

      tags: [
        "Performance Recovery",
        "Safe Return",
        "Injury Prevention",
      ],
    },
  ],
};