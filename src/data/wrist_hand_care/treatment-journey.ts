import {
  faClipboardList,
  faHandHoldingMedical,
  faHandFist,
  faPersonWalking,
  faShield,
  faStethoscope,
  faSyringe,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const WristHandCareJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery & Rehabilitation",

  description:
    "Successful recovery begins with an accurate diagnosis and continues through personalized treatment, rehabilitation, and a gradual return to daily activities.",

  items: [
    {
      id: "assessment",

      label: "Step 01",

      title: "Clinical Assessment & Diagnosis",

      description:
        "A comprehensive examination evaluates pain, grip strength, nerve function, joint stability, movement, and hand mechanics to identify the underlying condition.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Grip Evaluation",
        "Movement Analysis",
        "Patient Consultation",
      ],
    },

    {
      id: "imaging",

      label: "Step 02",

      title: "Advanced Imaging & Evaluation",

      description:
        "Digital X-rays, MRI, CT scans, ultrasound, or nerve conduction studies provide a detailed assessment of bones, tendons, ligaments, cartilage, and nerves.",

      icon: faXRay,

      tags: [
        "Digital X-Ray",
        "MRI",
        "Ultrasound",
        "Nerve Studies",
      ],
    },

    {
      id: "planning",

      label: "Step 03",

      title: "Personalized Treatment Planning",

      description:
        "Treatment begins with conservative care, including splinting, medications, physiotherapy, activity modification, and injections before considering surgery.",

      icon: faClipboardList,

      tags: [
        "Personalized Care",
        "Conservative Treatment",
        "Evidence-Based",
        "Hand Therapy",
      ],
    },

    {
      id: "surgery",

      label: "Step 04",

      title: "Advanced Surgical Management",

      description:
        "When surgery is required, minimally invasive arthroscopy, fracture fixation, tendon repair, nerve decompression, or reconstructive procedures are performed with precision.",

      icon: faSyringe,

      tags: [
        "Arthroscopy",
        "Fracture Fixation",
        "Nerve Release",
        "Tendon Repair",
      ],
    },

    {
      id: "phase-1",

      label: "Phase 01 • 0–2 Weeks",

      title: "Protection & Healing",

      description:
        "Pain and swelling are controlled while repaired structures are protected with splints or braces. Gentle finger movement begins to prevent stiffness.",

      icon: faShield,

      tags: [
        "Pain Control",
        "Swelling Reduction",
        "Immobilization",
        "Early Finger Motion",
      ],
    },

    {
      id: "phase-2",

      label: "Phase 02 • 2–6 Weeks",

      title: "Restoring Mobility",

      description:
        "Supervised rehabilitation gradually restores wrist and finger movement while protecting healing tissues.",

      icon: faHandHoldingMedical,

      tags: [
        "Range of Motion",
        "Flexibility",
        "Scar Care",
        "Joint Mobility",
      ],
    },

    {
      id: "phase-3",

      label: "Phase 03 • 6–12 Weeks",

      title: "Strength & Functional Recovery",

      description:
        "Grip strength, coordination, dexterity, and hand endurance are progressively restored through targeted rehabilitation exercises.",

      icon: faHandFist,

      tags: [
        "Grip Strength",
        "Dexterity",
        "Coordination",
        "Functional Training",
      ],
    },

    {
      id: "phase-4",

      label: "Phase 04 • 3–6 Months",

      title: "Return to Daily Activities",

      description:
        "Patients gradually resume work, hobbies, sports, and everyday activities while continuing strengthening exercises for long-term hand function.",

      icon: faPersonWalking,

      tags: [
        "Daily Activities",
        "Work Recovery",
        "Sports Return",
        "Independent Function",
      ],
    },
  ],
};