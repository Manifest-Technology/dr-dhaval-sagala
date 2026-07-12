import {
  faClipboardList,
  faPersonWalking,
  faStethoscope,
  faXRay,
  faScrewdriverWrench,
  faBone,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const LimbLengtheningJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery",

  description:
    "A carefully planned treatment pathway focused on restoring alignment, function, and long-term mobility through precise correction and guided rehabilitation.",

  items: [
    {
      id: "evaluation",

      label: "Step 01",

      title: "Comprehensive Evaluation",

      description:
        "Clinical assessment, alignment analysis, and advanced imaging identify the deformity and guide treatment planning.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Digital Imaging",
        "Alignment Analysis",
      ],
    },

    {
      id: "planning",

      label: "Step 02",

      title: "Personalized Surgical Planning",

      description:
        "Treatment is tailored to age, bone quality, functional needs, and the required amount of correction.",

      icon: faClipboardList,

      tags: [
        "Individualized Care",
        "Precision Planning",
        "Evidence-Based",
      ],
    },

    {
      id: "procedure",

      label: "Step 03",

      title: "Limb Reconstruction Procedure",

      description:
        "Modern techniques gradually correct or lengthen bone while preserving surrounding muscles and soft tissues.",

      icon: faBone,

      tags: [
        "Minimally Invasive",
        "Bone Regeneration",
        "Precision Surgery",
      ],
    },

    {
      id: "monitoring",

      label: "Step 04",

      title: "Guided Healing & Monitoring",

      description:
        "Regular follow-up and imaging monitor bone healing, alignment, and safe progression throughout recovery.",

      icon: faXRay,

      tags: [
        "Bone Healing",
        "Progress Monitoring",
        "Regular Follow-Up",
      ],
    },

    {
      id: "rehabilitation",

      label: "Step 05",

      title: "Rehabilitation & Functional Recovery",

      description:
        "Structured physiotherapy restores movement, strength, balance, walking pattern, and overall mobility.",

      icon: faScrewdriverWrench,

      tags: [
        "Physiotherapy",
        "Strength Recovery",
        "Mobility Training",
      ],
    },

    {
      id: "return",

      label: "Step 06",

      title: "Return to Everyday Life",

      description:
        "Patients gradually return to work, school, sports, and daily activities with improved confidence and function.",

      icon: faPersonWalking,

      tags: [
        "Independent Mobility",
        "Improved Function",
        "Long-Term Success",
      ],
    },
  ],
};