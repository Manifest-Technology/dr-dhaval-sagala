import {
  faBed,
  faClipboardList,
  faPersonWalking,
  faShieldHeart,
  faStethoscope,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";

import { TimelineShowcaseData } from "@/folio/specialities/timeline-showcase/types";

export const treatmentJourney: TimelineShowcaseData = {
  badge: "Recovery Journey",

  title: "Treatment Journey & Recovery",

  description:
    "Successful joint replacement extends beyond the operating room. Every stage—from diagnosis to rehabilitation—is carefully planned to ensure a safe recovery and long-term success.",

  items: [
    {
      id: "assessment",

      label: "Step 01",

      title: "Comprehensive Assessment",

      description:
        "A detailed consultation, physical examination, imaging studies, and discussion of your symptoms help determine the most appropriate treatment approach.",

      icon: faStethoscope,

      tags: [
        "Clinical Evaluation",
        "Digital Imaging",
        "Personalized Diagnosis",
      ],
    },

    {
      id: "planning",

      label: "Step 02",

      title: "Personalized Surgical Planning",

      description:
        "A customized treatment plan is developed based on your lifestyle, activity level, medical history, and long-term goals.",

      icon: faClipboardList,

      tags: [
        "Individualized Care",
        "Advanced Planning",
        "Evidence-Based Treatment",
      ],
    },

    {
      id: "procedure",

      label: "Step 03",

      title: "Joint Replacement Procedure",

      description:
        "The damaged joint surfaces are replaced using modern implants and refined surgical techniques designed to improve stability, function, and longevity.",

      icon: faSyringe,

      tags: [
        "Modern Implants",
        "Precision Surgery",
        "Advanced Techniques",
      ],
    },

    {
      id: "recovery",

      label: "Step 04",

      title: "Early Recovery",

      description:
        "Patients begin gentle movement and rehabilitation as early as medically appropriate, promoting faster recovery and reducing complications.",

      icon: faBed,

      tags: [
        "Pain Management",
        "Early Mobilization",
        "Safe Recovery",
      ],
    },

    {
      id: "rehabilitation",

      label: "Step 05",

      title: "Rehabilitation",

      description:
        "A structured physiotherapy program focuses on restoring flexibility, strength, balance, and joint function while helping patients regain confidence in movement.",

      icon: faPersonWalking,

      tags: [
        "Strength Recovery",
        "Mobility Training",
        "Functional Rehabilitation",
      ],
    },

    {
      id: "follow-up",

      label: "Step 06",

      title: "Long-Term Follow-Up",

      description:
        "Regular follow-up appointments help monitor implant performance, assess recovery, and support long-term joint health.",

      icon: faShieldHeart,

      tags: [
        "Routine Monitoring",
        "Long-Term Care",
        "Sustained Results",
      ],
    },
  ],
};