import {
  faHand,
  faBone,
  faHandDots,
  faHandFist,
  faCircleNodes,
  faJoint,
} from "@fortawesome/free-solid-svg-icons";

import wristArthroscopyImage from "@/assets/img/wrist_hand_care/wrist-arthroscopy.png";
import fractureManagementImage from "@/assets/img/wrist_hand_care/fracture-trauma-management.png";
import carpalTunnelImage from "@/assets/img/wrist_hand_care/carpal-tunnel-release.png";
import triggerFingerImage from "@/assets/img/wrist_hand_care/trigger-finger-tendon-surgery.png";
import ganglionCystImage from "@/assets/img/wrist_hand_care/ganglion-cyst-excision.png";
import wristArthritisImage from "@/assets/img/wrist_hand_care/wrist-arthritis-care.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const WristHandCareProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Precision Wrist",
  headingSecond: "& Hand Care",
  headingHighlight: "For Everyday Function.",

  description:
    "Comprehensive wrist and hand procedures focused on restoring movement, relieving pain, preserving function, and helping patients return confidently to work, sports, and daily life.",

  items: [
    {
      id: "wrist-arthroscopy",

      order: 1,

      title: "Wrist Arthroscopy",

      subtitle: "Minimally Invasive Diagnosis & Treatment",

      description:
        "Advanced keyhole arthroscopy enables accurate diagnosis and treatment of wrist conditions with smaller incisions, reduced pain, and faster recovery.",

      image: wristArthroscopyImage,

      icon: faHand,

      conditions: [
        "TFCC Injury",
        "Wrist Ligament Tear",
        "Cartilage Damage",
        "Chronic Wrist Pain",
      ],

      procedures: [
        "Diagnostic Wrist Arthroscopy",
        "TFCC Repair",
        "Ligament Reconstruction",
        "Debridement & Synovectomy",
      ],
    },

    {
      id: "fracture-management",

      order: 2,

      title: "Fracture & Trauma Management",

      subtitle: "Restoring Alignment & Hand Function",

      description:
        "Timely management of wrist and hand fractures helps restore stability, strength, and function while minimizing long-term stiffness and complications.",

      image: fractureManagementImage,

      icon: faBone,

      conditions: [
        "Distal Radius Fracture",
        "Scaphoid Fracture",
        "Hand Fractures",
        "Wrist Dislocation",
      ],

      procedures: [
        "Fracture Fixation",
        "Plate & Screw Fixation",
        "Percutaneous Pinning",
        "Closed Reduction",
      ],
    },

    {
      id: "carpal-tunnel",

      order: 3,

      title: "Carpal Tunnel Release",

      subtitle: "Relieving Nerve Compression",

      description:
        "Surgical decompression of the median nerve helps relieve numbness, tingling, weakness, and pain while restoring comfortable hand function.",

      image: carpalTunnelImage,

      icon: faHandDots,

      conditions: [
        "Carpal Tunnel Syndrome",
        "Median Nerve Compression",
        "Hand Numbness",
        "Night-Time Hand Pain",
      ],

      procedures: [
        "Open Carpal Tunnel Release",
        "Minimally Invasive Carpal Tunnel Surgery",
        "Nerve Decompression",
      ],
    },

    {
      id: "trigger-finger",

      order: 4,

      title: "Trigger Finger & Tendon Surgery",

      subtitle: "Restoring Smooth Finger Movement",

      description:
        "Specialized tendon procedures relieve painful finger locking and restore normal hand movement with modern surgical techniques.",

      image: triggerFingerImage,

      icon: faHandFist,

      conditions: [
        "Trigger Finger",
        "Tendon Injury",
        "De Quervain's Tenosynovitis",
        "Tendon Rupture",
      ],

      procedures: [
        "Trigger Finger Release",
        "Tendon Repair",
        "Tendon Reconstruction",
        "Tendon Sheath Release",
      ],
    },

    {
      id: "ganglion-cyst",

      order: 5,

      title: "Ganglion Cyst Excision",

      subtitle: "Effective Removal with Lasting Relief",

      description:
        "Treatment focuses on removing painful or recurrent ganglion cysts while preserving wrist mobility, strength, and appearance.",

      image: ganglionCystImage,

      icon: faCircleNodes,

      conditions: [
        "Ganglion Cyst",
        "Wrist Swelling",
        "Painful Lump",
        "Recurrent Cyst",
      ],

      procedures: [
        "Ganglion Cyst Excision",
        "Arthroscopic Cyst Removal",
        "Soft Tissue Reconstruction",
      ],
    },

    {
      id: "arthritis-care",

      order: 6,

      title: "Hand & Wrist Arthritis Care",

      subtitle: "Preserving Joint Function & Mobility",

      description:
        "Comprehensive arthritis care combines joint preservation techniques and advanced reconstructive procedures to relieve pain and maintain long-term hand function.",

      image: wristArthritisImage,

      icon: faJoint,

      conditions: [
        "Osteoarthritis",
        "Rheumatoid Arthritis",
        "Joint Stiffness",
        "Degenerative Wrist Disease",
      ],

      procedures: [
        "Joint Preservation Surgery",
        "Wrist Fusion",
        "Joint Reconstruction",
        "Arthritis Management",
      ],
    },
  ],
};