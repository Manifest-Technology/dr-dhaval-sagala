import {
  faMagnifyingGlass,
  faHandSparkles,
  faHouseMedical,
  faWaveSquare,
  faShieldHeart,
  faBone,
} from "@fortawesome/free-solid-svg-icons";

import elbowArthroscopyImage from "@/assets/img/elbow_care/elbow-arthroscopy.png";
import tennisElbowImage from "@/assets/img/elbow_care/tennis-golfers-elbow-treatment.png";
import elbowTraumaImage from "@/assets/img/elbow_care/elbow-fracture-trauma-care.png";
import cubitalTunnelImage from "@/assets/img/elbow_care/cubital-tunnel-treatment.png";
import ligamentRepairImage from "@/assets/img/elbow_care/elbow-ligament-tendon-repair.png";
import elbowReplacementImage from "@/assets/img/elbow_care/elbow-joint-replacement.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const ElbowCareProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Advanced Elbow",
  headingSecond: "Care Focused",
  headingHighlight: "On Strength & Function.",

  description:
    "Comprehensive elbow care combining minimally invasive arthroscopy, sports injury treatment, trauma reconstruction, nerve decompression, and joint replacement to restore comfortable movement and long-term function.",

  items: [
    {
      id: "elbow-arthroscopy",

      order: 1,

      title: "Elbow Arthroscopy",

      subtitle: "Minimally Invasive Elbow Treatment",

      description:
        "Advanced keyhole arthroscopy enables accurate diagnosis and treatment of elbow conditions with smaller incisions, minimal scarring, and faster recovery.",

      image: elbowArthroscopyImage,

      icon: faMagnifyingGlass,

      conditions: [
        "Elbow Stiffness",
        "Loose Bodies",
        "Cartilage Damage",
        "Chronic Elbow Pain",
      ],

      procedures: [
        "Diagnostic Arthroscopy",
        "Loose Body Removal",
        "Synovectomy",
        "Cartilage Debridement",
      ],
    },

    {
      id: "tennis-golfers-elbow",

      order: 2,

      title: "Tennis & Golfer's Elbow Treatment",

      subtitle: "Relieving Tendon Pain & Restoring Strength",

      description:
        "Personalized treatment for tendon overuse injuries to reduce pain, restore grip strength, and help patients safely return to sports and daily activities.",

      image: tennisElbowImage,

      icon: faHandSparkles,

      conditions: [
        "Tennis Elbow",
        "Golfer's Elbow",
        "Tendinitis",
        "Chronic Elbow Pain",
      ],

      procedures: [
        "Physiotherapy",
        "PRP / Injection Therapy",
        "Tendon Debridement",
        "Tendon Repair Surgery",
      ],
    },

    {
      id: "elbow-trauma",

      order: 3,

      title: "Elbow Fracture & Trauma Care",

      subtitle: "Restoring Stability After Injury",

      description:
        "Comprehensive treatment of elbow fractures and traumatic injuries to restore alignment, stability, and normal upper limb function.",

      image: elbowTraumaImage,

      icon: faHouseMedical,

      conditions: [
        "Distal Humerus Fracture",
        "Radial Head Fracture",
        "Olecranon Fracture",
        "Traumatic Elbow Injury",
      ],

      procedures: [
        "Fracture Fixation",
        "Plate & Screw Fixation",
        "Minimally Invasive Surgery",
        "Trauma Reconstruction",
      ],
    },

    {
      id: "cubital-tunnel",

      order: 4,

      title: "Cubital Tunnel Syndrome Treatment",

      subtitle: "Relieving Ulnar Nerve Compression",

      description:
        "Treatment focuses on relieving pressure on the ulnar nerve to improve hand strength, reduce numbness, and restore comfortable arm function.",

      image: cubitalTunnelImage,

      icon: faWaveSquare,

      conditions: [
        "Cubital Tunnel Syndrome",
        "Ulnar Nerve Compression",
        "Hand Weakness",
        "Numbness in Fingers",
      ],

      procedures: [
        "Nerve Decompression",
        "Ulnar Nerve Transposition",
        "Conservative Management",
        "Rehabilitation Therapy",
      ],
    },

    {
      id: "ligament-tendon-repair",

      order: 5,

      title: "Elbow Ligament & Tendon Repair",

      subtitle: "Restoring Strength & Joint Stability",

      description:
        "Specialized ligament and tendon reconstruction procedures restore elbow stability following sports injuries and tendon ruptures.",

      image: ligamentRepairImage,

      icon: faShieldHeart,

      conditions: [
        "Ligament Injury",
        "Biceps Tendon Rupture",
        "Sports Injury",
        "Elbow Instability",
      ],

      procedures: [
        "Ligament Reconstruction",
        "Tendon Repair",
        "Biceps Repair",
        "Sports Injury Surgery",
      ],
    },

    {
      id: "elbow-joint-replacement",

      order: 6,

      title: "Elbow Joint Replacement",

      subtitle: "Advanced Solutions for Severe Joint Damage",

      description:
        "Modern elbow replacement surgery relieves chronic pain and restores comfortable movement for patients with advanced arthritis or complex joint damage.",

      image: elbowReplacementImage,

      icon: faBone,

      conditions: [
        "Elbow Osteoarthritis",
        "Rheumatoid Arthritis",
        "Severe Joint Damage",
        "Failed Previous Surgery",
      ],

      procedures: [
        "Total Elbow Replacement",
        "Partial Elbow Replacement",
        "Revision Elbow Replacement",
        "Joint Reconstruction",
      ],
    },
  ],
};