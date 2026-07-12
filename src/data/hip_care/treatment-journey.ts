import {
  faClipboardList,
  faPersonWalking,
  faStethoscope,
  faXRay,
  faHospital,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const HipCareJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery",

  description:
    "A personalized treatment pathway focused on relieving pain, restoring mobility, and helping you return to an active lifestyle.",

  items: [
    {
      id: "evaluation",

      label: "Step 01",

      title: "Clinical Evaluation",

      description:
        "A detailed consultation, physical examination, gait assessment, and medical history identify the cause of hip pain.",

      icon: faStethoscope,

      tags: [
        "Clinical Assessment",
        "Medical History",
        "Physical Examination",
      ],
    },

    {
      id: "diagnosis",

      label: "Step 02",

      title: "Imaging & Diagnosis",

      description:
        "Advanced imaging provides a clear understanding of joint health and supports an accurate diagnosis.",

      icon: faXRay,

      tags: [
        "Digital X-ray",
        "MRI",
        "Precise Diagnosis",
      ],
    },

    {
      id: "planning",

      label: "Step 03",

      title: "Personalized Treatment Plan",

      description:
        "Treatment is tailored using conservative care, injections, physiotherapy, or surgery based on your condition.",

      icon: faClipboardList,

      tags: [
        "Individualized Care",
        "Evidence-Based",
        "Patient-Centered",
      ],
    },

    {
      id: "surgery",

      label: "Step 04",

      title: "Advanced Surgical Care",

      description:
        "When surgery is required, modern techniques focus on precision, faster recovery, and long-term joint function.",

      icon: faHospital,

      tags: [
        "Minimally Invasive",
        "Precision Surgery",
        "Modern Implants",
      ],
    },

    {
      id: "rehabilitation",

      label: "Step 05",

      title: "Recovery & Rehabilitation",

      description:
        "Structured rehabilitation restores strength, flexibility, balance, and confident movement.",

      icon: faDumbbell,

      tags: [
        "Muscle Strengthening",
        "Mobility",
        "Physiotherapy",
      ],
    },

    {
      id: "return",

      label: "Step 06",

      title: "Return to Active Living",

      description:
        "Patients gradually return to daily activities, work, travel, and recreation with improved comfort and mobility.",

      icon: faPersonWalking,

      tags: [
        "Pain Relief",
        "Improved Mobility",
        "Long-Term Function",
      ],
    },
  ],
};