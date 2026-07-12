import {
  faRulerCombined,
  faBone,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import limbLengtheningImage from "@/assets/img/limb_lengthening/limb-lengthening.png";
import deformityCorrectionImage from "@/assets/img/limb_lengthening/deformity-correction.png";
import boneReconstructionImage from "@/assets/img/limb_lengthening/bone-reconstruction.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const LimbLengtheningProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Restoring Limb",
  headingSecond: "Length & Alignment",
  headingHighlight: "With Precision.",

  description:
    "Advanced limb reconstruction techniques focused on correcting limb length differences, restoring alignment, and rebuilding bone to improve function, mobility, and long-term quality of life.",

  items: [
    {
      id: "limb-lengthening",

      order: 1,

      title: "Limb Lengthening",

      subtitle: "Gradual Bone Growth with Precise Reconstruction",

      description:
        "Limb lengthening stimulates natural bone growth through a carefully controlled process, helping improve limb length, alignment, and overall function while preserving joint movement.",

      image: limbLengtheningImage,

      icon: faRulerCombined,

      conditions: [
        "Congenital Limb Length Difference",
        "Fibular Hemimelia",
        "Congenital Short Femur",
        "Growth Plate Injuries",
        "Bone Loss Following Trauma",
        "Bone Defects After Tumor Surgery",
        "Selected Short Stature Cases",
      ],

      procedures: [
        "Internal Limb Lengthening Nail",
        "External Fixator-Assisted Lengthening",
        "Bone Regeneration Techniques",
        "Gradual Distraction Osteogenesis",
        "Deformity Correction",
      ],
    },

    {
      id: "deformity-correction",

      order: 2,

      title: "Deformity Correction",

      subtitle: "Restoring Alignment & Natural Movement",

      description:
        "Corrective procedures address bone deformities affecting posture, gait, and joint mechanics by restoring proper alignment and improving overall limb function.",

      image: deformityCorrectionImage,

      icon: faBone,

      conditions: [
        "Bow Legs (Genu Varum)",
        "Knock Knees (Genu Valgum)",
        "Malunion After Fracture",
        "Rotational Deformities",
        "Angular Deformities",
      ],

      procedures: [
        "Corrective Osteotomy",
        "Limb Realignment Surgery",
        "Computer-Assisted Planning",
        "Internal & External Fixation",
        "Bone Reconstruction",
      ],
    },

    {
      id: "bone-reconstruction",

      order: 3,

      title: "Bone Reconstruction",

      subtitle: "Rebuilding Bone & Preserving Limb Function",

      description:
        "Complex reconstructive procedures restore bone continuity, limb stability, and function following trauma, infection, or significant bone loss.",

      image: boneReconstructionImage,

      icon: faScrewdriverWrench,

      conditions: [
        "Bone Loss",
        "Nonunion",
        "Malunion",
        "Post-Traumatic Bone Defects",
        "Bone Infection Sequelae",
      ],

      procedures: [
        "Bone Transport",
        "Bone Grafting",
        "Internal Fixation",
        "Limb Salvage Reconstruction",
      ],
    },
  ],
};