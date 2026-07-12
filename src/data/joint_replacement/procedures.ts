import {
  faHand,
  faPersonWalking,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

import shoulderImage from "@/assets/img/joint_replacement/shoulder_replacment.png";
import kneeImage from "@/assets/img/joint_replacement/knee_replacement.png";
import hipImage from "@/assets/img/joint_replacement/hip_replacement.png";

import type {
  ProcedureShowcaseData,
} from "@/folio/specialities/procedure-showcase/types";

export const jointReplacementProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Every Joint",
  headingSecond: "Replacement Begins",
  headingHighlight: "With Precision.",

  description:
    "Every joint replacement is meticulously planned using advanced implants, precision surgical techniques, and evidence-based care to restore mobility, relieve pain, and help patients return to an active lifestyle.",

  items: [
    {
      id: "shoulder",

      order: 1,

      title: "Shoulder Replacement",

      subtitle: "Restore Comfort and Shoulder Function",

      description:
        "Shoulder replacement is recommended for patients experiencing severe arthritis, complex fractures, rotator cuff arthropathy, or irreversible joint damage. The damaged joint surfaces are replaced with advanced prosthetic components, helping relieve pain and restore smooth, functional movement.",

      image: shoulderImage,

      icon: faHand,

      conditions: [
        "Shoulder Osteoarthritis",
        "Rotator Cuff Arthropathy",
        "Severe Shoulder Fractures",
        "Avascular Necrosis",
        "Failed Previous Shoulder Surgery",
      ],

      procedures: [
        "Total Joint Replacement",
        "Partial Joint Replacement",
        "Revision Joint Replacement",
        "Primary Joint Arthroplasty",
        "Minimally Invasive Joint Replacement",
        "Complex Joint Reconstruction",
      ],
    },

    {
      id: "knee",

      order: 2,

      title: "Knee Replacement",

      subtitle: "Helping You Walk Without Pain Again",

      description:
        "Knee replacement surgery is designed for patients with advanced arthritis or significant cartilage loss that limits walking, climbing stairs, exercising, or daily activities. By replacing worn joint surfaces, the procedure aims to restore stability, mobility, and long-term comfort.",

      image: kneeImage,

      icon: faPersonWalking,

      conditions: [
        "Advanced Osteoarthritis",
        "Rheumatoid Arthritis",
        "Post-Traumatic Arthritis",
        "Knee Deformity",
        "Chronic Joint Degeneration",
      ],

      procedures: [
        "Total Joint Replacement",
        "Partial Joint Replacement",
        "Revision Joint Replacement",
        "Primary Joint Arthroplasty",
        "Minimally Invasive Joint Replacement",
        "Complex Joint Reconstruction",
      ],
    },

    {
      id: "hip",

      order: 3,

      title: "Hip Replacement",

      subtitle: "Regain Mobility with Confidence",

      description:
        "Hip replacement surgery is recommended when pain, stiffness, or joint deterioration significantly affects everyday life. Modern implants and minimally invasive techniques help restore smooth movement while reducing discomfort and improving quality of life.",

      image: hipImage,

      icon: faWheelchair,

      conditions: [
        "Hip Osteoarthritis",
        "Avascular Necrosis",
        "Rheumatoid Arthritis",
        "Hip Fractures",
        "Degenerative Hip Disease",
      ],

      procedures: [
        "Total Joint Replacement",
        "Partial Joint Replacement",
        "Revision Joint Replacement",
        "Primary Joint Arthroplasty",
        "Minimally Invasive Joint Replacement",
        "Complex Joint Reconstruction",
      ],
    },
  ],
};