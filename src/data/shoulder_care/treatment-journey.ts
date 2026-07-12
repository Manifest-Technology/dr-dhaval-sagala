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

export const ShoulderCareJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery & Rehabilitation",

  description:
    "Every shoulder condition requires an individualized treatment plan, combining precise diagnosis, evidence-based care, advanced surgery when needed, and structured rehabilitation for optimal recovery.",

  items: [
    {
      id: "assessment",

      label: "Step 01",

      title: "Clinical Assessment & Diagnosis",

      description:
        "A detailed clinical evaluation identifies pain, instability, weakness, and movement limitations through physical examination and functional assessment.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Shoulder Stability",
        "Range of Motion",
        "Patient Consultation",
      ],
    },

    {
      id: "imaging",

      label: "Step 02",

      title: "Advanced Imaging & Evaluation",

      description:
        "Digital X-rays, MRI, CT scans, or ultrasound provide a comprehensive assessment of bones, tendons, cartilage, ligaments, and surrounding soft tissues.",

      icon: faXRay,

      tags: [
        "Digital X-Ray",
        "MRI Scan",
        "Ultrasound",
        "CT Imaging",
      ],
    },

    {
      id: "planning",

      label: "Step 03",

      title: "Personalized Treatment Planning",

      description:
        "Treatment begins with conservative care whenever possible, including medications, physiotherapy, activity modification, injections, and rehabilitation before surgery is considered.",

      icon: faClipboardList,

      tags: [
        "Conservative Care",
        "Physiotherapy",
        "Pain Management",
        "Personalized Plan",
      ],
    },

    {
      id: "surgery",

      label: "Step 04",

      title: "Advanced Surgical Care",

      description:
        "When required, minimally invasive arthroscopy or advanced reconstructive procedures restore shoulder stability, strength, and natural joint function.",

      icon: faSyringe,

      tags: [
        "Arthroscopy",
        "Rotator Cuff Repair",
        "Joint Replacement",
        "Shoulder Reconstruction",
      ],
    },

    {
      id: "phase-1",

      label: "Phase 01 • 0–2 Weeks",

      title: "Protection & Pain Control",

      description:
        "Pain and inflammation are controlled while the shoulder is protected with a sling. Gentle hand, wrist, and elbow movements support healing and prevent stiffness.",

      icon: faShield,

      tags: [
        "Pain Control",
        "Swelling Reduction",
        "Sling Support",
        "Early Healing",
      ],
    },

    {
      id: "phase-2",

      label: "Phase 02 • 2–6 Weeks",

      title: "Gentle Mobility",

      description:
        "Passive and assisted shoulder exercises gradually restore joint mobility while protecting repaired tissues and improving flexibility.",

      icon: faHandHoldingMedical,

      tags: [
        "Range of Motion",
        "Flexibility",
        "Passive Exercise",
        "Joint Mobility",
      ],
    },

    {
      id: "phase-3",

      label: "Phase 03 • 6–12 Weeks",

      title: "Strength Restoration",

      description:
        "Progressive strengthening of the rotator cuff and shoulder stabilizing muscles improves endurance, coordination, and overall shoulder function.",

      icon: faDumbbell,

      tags: [
        "Muscle Strength",
        "Rotator Cuff",
        "Functional Exercise",
        "Shoulder Stability",
      ],
    },

    {
      id: "phase-4",

      label: "Phase 04 • 3–6 Months",

      title: "Return to Daily Activities & Sports",

      description:
        "Patients gradually return to work, driving, sports, and recreational activities through guided rehabilitation, restoring confidence and long-term shoulder function.",

      icon: faPersonRunning,

      tags: [
        "Daily Activities",
        "Sports Recovery",
        "Strength Training",
        "Independent Function",
      ],
    },
  ],
};