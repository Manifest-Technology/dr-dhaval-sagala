import {
  faMagnifyingGlass,
  faBandage,
  faShieldHeart,
  faPersonCircleCheck,
  faHouseMedical,
  faBone,
} from "@fortawesome/free-solid-svg-icons";

import shoulderArthroscopyImage from "@/assets/img/shoulder_care/shoulder-arthroscopy.png";
import rotatorCuffRepairImage from "@/assets/img/shoulder_care/rotator-cuff-repair.png";
import shoulderStabilityImage from "@/assets/img/shoulder_care/shoulder-instability-surgery.png";
import frozenShoulderImage from "@/assets/img/shoulder_care/frozen-shoulder-treatment.png";
import shoulderTraumaImage from "@/assets/img/shoulder_care/shoulder-fracture-trauma-care.png";
import shoulderReplacementImage from "@/assets/img/shoulder_care/shoulder-joint-replacement.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const ShoulderCareProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Advanced Shoulder",
  headingSecond: "Care Designed",
  headingHighlight: "For Pain-Free Movement.",

  description:
    "Comprehensive shoulder care combining minimally invasive arthroscopy, sports injury management, trauma reconstruction, and advanced joint replacement to restore strength, stability, and natural movement.",

  items: [
    {
      id: "shoulder-arthroscopy",

      order: 1,

      title: "Shoulder Arthroscopy",

      subtitle: "Minimally Invasive Shoulder Treatment",

      description:
        "Advanced keyhole arthroscopy allows accurate diagnosis and treatment of shoulder conditions with smaller incisions, less pain, and faster recovery.",

      image: shoulderArthroscopyImage,

      icon: faMagnifyingGlass,

      conditions: [
        "Shoulder Impingement",
        "Labral Tear",
        "Shoulder Instability",
        "Chronic Shoulder Pain",
      ],

      procedures: [
        "Diagnostic Arthroscopy",
        "Labral Repair",
        "Bankart Repair",
        "Debridement & Synovectomy",
      ],
    },

    {
      id: "rotator-cuff-repair",

      order: 2,

      title: "Rotator Cuff Repair",

      subtitle: "Restoring Strength & Shoulder Function",

      description:
        "Specialized repair of torn rotator cuff tendons to improve strength, restore overhead movement, and relieve persistent shoulder pain.",

      image: rotatorCuffRepairImage,

      icon: faBandage,

      conditions: [
        "Rotator Cuff Tear",
        "Shoulder Weakness",
        "Tendinitis",
        "Tendon Rupture",
      ],

      procedures: [
        "Arthroscopic Rotator Cuff Repair",
        "Tendon Reconstruction",
        "Tendon Debridement",
        "Partial Tear Repair",
      ],
    },

    {
      id: "shoulder-instability",

      order: 3,

      title: "Shoulder Instability & Dislocation Surgery",

      subtitle: "Restoring Stability with Precision",

      description:
        "Advanced stabilization procedures help prevent recurrent shoulder dislocations while restoring confidence, strength, and joint stability.",

      image: shoulderStabilityImage,

      icon: faShieldHeart,

      conditions: [
        "Recurrent Shoulder Dislocation",
        "Shoulder Subluxation",
        "Bankart Lesion",
        "Shoulder Instability",
      ],

      procedures: [
        "Arthroscopic Bankart Repair",
        "Capsular Shift",
        "Labral Reconstruction",
        "Shoulder Stabilization Surgery",
      ],
    },

    {
      id: "frozen-shoulder",

      order: 4,

      title: "Frozen Shoulder Treatment",

      subtitle: "Improving Motion & Reducing Stiffness",

      description:
        "Personalized treatment focused on relieving stiffness, restoring shoulder mobility, and improving daily function through modern minimally invasive techniques.",

      image: frozenShoulderImage,

      icon: faPersonCircleCheck,

      conditions: [
        "Frozen Shoulder",
        "Shoulder Stiffness",
        "Restricted Motion",
        "Adhesive Capsulitis",
      ],

      procedures: [
        "Manipulation Under Anaesthesia",
        "Arthroscopic Capsular Release",
        "Guided Injection Therapy",
        "Physiotherapy-Based Rehabilitation",
      ],
    },

    {
      id: "shoulder-trauma",

      order: 5,

      title: "Shoulder Fracture & Trauma Care",

      subtitle: "Comprehensive Trauma Reconstruction",

      description:
        "Expert treatment of shoulder fractures and traumatic injuries to restore alignment, stability, and long-term shoulder function.",

      image: shoulderTraumaImage,

      icon: faHouseMedical,

      conditions: [
        "Proximal Humerus Fracture",
        "Clavicle Fracture",
        "Scapular Injury",
        "Traumatic Shoulder Injury",
      ],

      procedures: [
        "Fracture Fixation",
        "Plate & Screw Fixation",
        "Minimally Invasive Surgery",
        "Trauma Reconstruction",
      ],
    },

    {
      id: "shoulder-replacement",

      order: 6,

      title: "Shoulder Joint Replacement",

      subtitle: "Advanced Solutions for Severe Joint Damage",

      description:
        "Modern shoulder replacement procedures relieve chronic pain and restore comfortable, functional shoulder movement using advanced implant technology.",

      image: shoulderReplacementImage,

      icon: faBone,

      conditions: [
        "Shoulder Osteoarthritis",
        "Rheumatoid Arthritis",
        "Cuff Tear Arthropathy",
        "Advanced Joint Degeneration",
      ],

      procedures: [
        "Total Shoulder Replacement",
        "Reverse Shoulder Replacement",
        "Hemiarthroplasty",
        "Revision Shoulder Replacement",
      ],
    },
  ],
};