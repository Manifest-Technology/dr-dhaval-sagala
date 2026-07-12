import {
  faClipboardList,
  faDumbbell,
  faHandHoldingMedical,
  faPersonRunning,
  faShield,
  faStethoscope,
  faSyringe,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const ElbowCareJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery & Rehabilitation",

  description:
    "Successful elbow treatment combines accurate diagnosis, personalized care, advanced surgical expertise when needed, and structured rehabilitation to restore movement, strength, and long-term joint health.",

  items: [
    {
      id: "assessment",

      label: "Step 01",

      title: "Clinical Assessment & Diagnosis",

      description:
        "A detailed examination evaluates elbow movement, stability, grip strength, and identifies the exact cause of pain or injury.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Joint Examination",
        "Movement Analysis",
        "Patient Consultation",
      ],
    },

    {
      id: "imaging",

      label: "Step 02",

      title: "Advanced Imaging & Evaluation",

      description:
        "Digital X-rays, MRI, CT scans, or ultrasound provide a comprehensive assessment of bones, tendons, ligaments, cartilage, and nerves.",

      icon: faXRay,

      tags: [
        "Digital X-Ray",
        "MRI",
        "Ultrasound",
        "CT Scan",
      ],
    },

    {
      id: "planning",

      label: "Step 03",

      title: "Personalized Treatment Planning",

      description:
        "Treatment begins with conservative options including medications, physiotherapy, bracing, activity modification, and guided injections before surgery is considered.",

      icon: faClipboardList,

      tags: [
        "Pain Management",
        "Physiotherapy",
        "Bracing",
        "Injection Therapy",
      ],
    },

    {
      id: "surgery",

      label: "Step 04",

      title: "Advanced Surgical Care",

      description:
        "When surgery is required, minimally invasive arthroscopy, fracture fixation, tendon repair, nerve decompression, or joint replacement restores elbow function.",

      icon: faSyringe,

      tags: [
        "Arthroscopy",
        "Fracture Surgery",
        "Ligament Repair",
        "Joint Replacement",
      ],
    },

    {
      id: "phase-1",

      label: "Phase 01 • 0–2 Weeks",

      title: "Protection & Pain Management",

      description:
        "Pain and swelling are controlled while protecting the elbow. Gentle finger, wrist, and shoulder movement helps maintain mobility during early healing.",

      icon: faShield,

      tags: [
        "Pain Control",
        "Swelling Reduction",
        "Immobilization",
        "Early Healing",
      ],
    },

    {
      id: "phase-2",

      label: "Phase 02 • 2–6 Weeks",

      title: "Mobility Restoration",

      description:
        "Controlled range-of-motion exercises gradually improve flexibility while protecting healing bones, tendons, and ligaments.",

      icon: faHandHoldingMedical,

      tags: [
        "Joint Mobility",
        "Flexibility",
        "Range of Motion",
        "Early Exercise",
      ],
    },

    {
      id: "phase-3",

      label: "Phase 03 • 6–12 Weeks",

      title: "Strength & Functional Recovery",

      description:
        "Progressive strengthening exercises restore grip strength, elbow stability, muscle endurance, and arm function for everyday activities.",

      icon: faDumbbell,

      tags: [
        "Strength Training",
        "Grip Strength",
        "Functional Recovery",
        "Joint Stability",
      ],
    },

    {
      id: "phase-4",

      label: "Phase 04 • 3–6 Months",

      title: "Return to Work & Sports",

      description:
        "Patients gradually return to work, sports, lifting, and recreational activities through guided rehabilitation and continued strengthening.",

      icon: faPersonRunning,

      tags: [
        "Sports Rehabilitation",
        "Return to Work",
        "Functional Independence",
        "Long-Term Recovery",
      ],
    },
  ],
};