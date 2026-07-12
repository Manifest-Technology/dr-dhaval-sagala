import {
  faClipboardList,
  faDumbbell,
  faPersonRunning,
  faPersonWalking,
  faShield,
  faStethoscope,
  faSyringe,
  faTrophy,
  faXRay,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const KneeCareJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery & Rehabilitation",

  description:
    "Every recovery begins with the right diagnosis. From accurate evaluation to complete rehabilitation, every phase is carefully planned to restore knee function, relieve pain, and safely return patients to daily activities or sports.",

  items: [
    {
      id: "consultation",

      label: "Step 01",

      title: "Consultation & Clinical Evaluation",

      description:
        "A detailed assessment of pain, knee stability, range of motion, walking pattern, and medical history helps identify the underlying cause of the problem.",

      icon: faStethoscope,

      tags: [
        "Clinical Examination",
        "Movement Assessment",
        "Personal Consultation",
      ],
    },

    {
      id: "diagnosis",

      label: "Step 02",

      title: "Imaging & Accurate Diagnosis",

      description:
        "Digital X-rays, MRI, CT scans, or ultrasound evaluate ligaments, cartilage, meniscus, alignment, and overall joint health.",

      icon: faXRay,

      tags: [
        "Digital X-Ray",
        "MRI",
        "CT Scan",
        "Accurate Diagnosis",
      ],
    },

    {
      id: "planning",

      label: "Step 03",

      title: "Personalized Treatment Planning",

      description:
        "Treatment begins with conservative management whenever appropriate. Surgery is recommended only when clinically indicated.",

      icon: faClipboardList,

      tags: [
        "Personalized Care",
        "Evidence-Based",
        "Joint Preservation",
      ],
    },

    {
      id: "procedure",

      label: "Step 04",

      title: "Advanced Knee Procedure",

      description:
        "Arthroscopy, ACL reconstruction, cartilage repair, or knee replacement is performed using modern minimally invasive techniques when required.",

      icon: faSyringe,

      tags: [
        "Arthroscopy",
        "ACL Reconstruction",
        "Joint Replacement",
        "Minimally Invasive",
      ],
    },

    {
      id: "phase-1",

      label: "Phase 01 • 0–2 Weeks",

      title: "Protection & Pain Control",

      description:
        "The initial focus is reducing pain and swelling, protecting the repair, restoring knee extension, and beginning gentle movement.",

      icon: faShield,

      tags: [
        "Pain Control",
        "Swelling Reduction",
        "Early Motion",
        "Walking Support",
      ],
    },

    {
      id: "phase-2",

      label: "Phase 02 • 2–6 Weeks",

      title: "Mobility & Strength Recovery",

      description:
        "Patients gradually regain knee flexibility while improving muscle strength, balance, and walking ability through supervised physiotherapy.",

      icon: faDumbbell,

      tags: [
        "Range of Motion",
        "Quadriceps Strength",
        "Balance Training",
        "Weight Bearing",
      ],
    },

    {
      id: "phase-3",

      label: "Phase 03 • 6–12 Weeks",

      title: "Functional Rehabilitation",

      description:
        "Rehabilitation progresses toward restoring endurance, coordination, and preparing the knee for everyday functional activities.",

      icon: faPersonWalking,

      tags: [
        "Cycling",
        "Strength Building",
        "Functional Training",
        "Improved Stability",
      ],
    },

    {
      id: "phase-4",

      label: "Phase 04 • 3–6 Months",

      title: "Advanced Activity Training",

      description:
        "Patients progress to advanced strengthening, sports-specific exercises, jogging when appropriate, and higher-level functional training.",

      icon: faPersonRunning,

      tags: [
        "Running",
        "Sport Drills",
        "Dynamic Balance",
        "Confidence Building",
      ],
    },

    {
      id: "phase-5",

      label: "Phase 05 • 6–9+ Months",

      title: "Return to Active Lifestyle",

      description:
        "After achieving adequate strength, stability, and functional performance, patients gradually return to work, recreation, and sports with continued follow-up.",

      icon: faTrophy,

      tags: [
        "Return to Sports",
        "Long-Term Mobility",
        "Performance Recovery",
        "Independent Living",
      ],
    },
  ],
};