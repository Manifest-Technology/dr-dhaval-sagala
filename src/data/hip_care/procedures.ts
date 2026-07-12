import {
  faMagnifyingGlass,
  faShieldHeart,
  faBone,
  faHouseMedical,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

import hipArthroscopyImage from "@/assets/img/hip_care/hip-arthroscopy.png";
import hipPreservationImage from "@/assets/img/hip_care/hip-preservation.png";
import totalHipReplacementImage from "@/assets/img/hip_care/total-hip-replacement.png";
import hipFractureImage from "@/assets/img/hip_care/hip-fracture-management.png";
import revisionHipReplacementImage from "@/assets/img/hip_care/revision-hip-replacement.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const HipCareProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Advanced Hip",
  headingSecond: "Care Focused",
  headingHighlight: "On Lasting Mobility.",

  description:
    "Comprehensive hip preservation, arthroscopic, reconstructive, and replacement procedures designed to relieve pain, restore function, and improve long-term joint health.",

  items: [
    {
      id: "hip-arthroscopy",

      order: 1,

      title: "Hip Arthroscopy",

      subtitle: "Minimally Invasive Hip Joint Treatment",

      description:
        "Hip arthroscopy uses advanced keyhole techniques to diagnose and treat conditions inside the hip joint with smaller incisions, reduced tissue damage, and faster recovery.",

      image: hipArthroscopyImage,

      icon: faMagnifyingGlass,

      conditions: [
        "Femoroacetabular Impingement (FAI)",
        "Labral Tears",
        "Cartilage Damage",
        "Loose Bodies",
        "Hip Synovitis",
      ],

      procedures: [
        "Hip Arthroscopy",
        "Labral Repair",
        "FAI Correction",
        "Cartilage Treatment",
        "Hip Preservation Surgery",
      ],
    },

    {
      id: "hip-preservation",

      order: 2,

      title: "Hip Preservation",

      subtitle: "Protecting the Natural Hip Joint",

      description:
        "Hip preservation procedures correct structural abnormalities at an early stage, helping maintain the natural joint and delaying or preventing joint replacement.",

      image: hipPreservationImage,

      icon: faShieldHeart,

      conditions: [
        "Early Hip Arthritis",
        "Femoroacetabular Impingement",
        "Hip Dysplasia",
        "Labral Injury",
      ],

      procedures: [
        "Osteoplasty",
        "Labral Preservation",
        "Corrective Procedures",
        "Hip Joint Preservation",
      ],
    },

    {
      id: "total-hip-replacement",

      order: 3,

      title: "Total Hip Replacement",

      subtitle: "Restoring Comfort & Everyday Mobility",

      description:
        "When severe arthritis or joint damage limits daily activities, total hip replacement restores smooth movement using durable implants and modern surgical techniques.",

      image: totalHipReplacementImage,

      icon: faBone,

      conditions: [
        "Osteoarthritis",
        "Rheumatoid Arthritis",
        "Avascular Necrosis",
        "Advanced Hip Degeneration",
      ],

      procedures: [
        "Primary Hip Replacement",
        "Cemented Replacement",
        "Cementless Replacement",
        "Minimally Invasive Hip Replacement",
      ],
    },

    {
      id: "hip-fracture-management",

      order: 4,

      title: "Hip Fracture Management",

      subtitle: "Early Treatment for Faster Recovery",

      description:
        "Timely surgical treatment for hip fractures helps restore stability, encourage early rehabilitation, and improve functional recovery after injury.",

      image: hipFractureImage,

      icon: faHouseMedical,

      conditions: [
        "Femoral Neck Fracture",
        "Intertrochanteric Fracture",
        "Subtrochanteric Fracture",
        "Trauma-Related Hip Injury",
      ],

      procedures: [
        "Fracture Fixation",
        "Intramedullary Nailing",
        "Dynamic Hip Screw",
        "Hip Replacement for Fractures",
      ],
    },

    {
      id: "revision-hip-replacement",

      order: 5,

      title: "Revision Hip Replacement",

      subtitle: "Advanced Solutions for Failed Hip Implants",

      description:
        "Revision hip replacement addresses worn, loose, infected, or failed implants using advanced reconstructive techniques to restore stability and function.",

      image: revisionHipReplacementImage,

      icon: faArrowsRotate,

      conditions: [
        "Implant Loosening",
        "Implant Wear",
        "Infection",
        "Recurrent Hip Dislocation",
      ],

      procedures: [
        "Revision Total Hip Replacement",
        "Implant Exchange",
        "Bone Reconstruction",
        "Complex Revision Surgery",
      ],
    },
  ],
};