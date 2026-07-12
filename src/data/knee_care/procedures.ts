import {
  faPersonRunning,
  faBandage,
  faMagnifyingGlass,
  faBone,
  faArrowsRotate,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import aclReconstructionImage from "@/assets/img/knee_care/acl-reconstruction.png";
import meniscusRepairImage from "@/assets/img/knee_care/meniscus-repair.png";
import kneeArthroscopyImage from "@/assets/img/knee_care/knee-arthroscopy.png";
import totalKneeReplacementImage from "@/assets/img/knee_care/total-knee-replacement.png";
import revisionKneeReplacementImage from "@/assets/img/knee_care/revision-knee-replacement.png";
import sportsKneeInjuryImage from "@/assets/img/knee_care/sports-knee-injury.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const KneeCareProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Advanced Knee",
  headingSecond: "Care Designed",
  headingHighlight: "For Confident Movement.",

  description:
    "Comprehensive knee preservation, arthroscopic, reconstructive, and replacement procedures focused on relieving pain, restoring stability, and helping patients return to an active lifestyle.",

  items: [
    {
      id: "acl-reconstruction",

      order: 1,

      title: "ACL Reconstruction",

      subtitle: "Restoring Knee Stability & Athletic Performance",

      description:
        "ACL reconstruction uses advanced arthroscopic techniques to restore knee stability following ligament injuries, enabling a safe return to sports and everyday activities.",

      image: aclReconstructionImage,

      icon: faPersonRunning,

      conditions: [
        "ACL Tear",
        "Knee Instability",
        "Sports Injury",
        "Combined Ligament Injury",
      ],

      procedures: [
        "Arthroscopic ACL Reconstruction",
        "Hamstring Tendon Graft",
        "Patellar Tendon Graft",
        "Revision ACL Surgery",
      ],
    },

    {
      id: "meniscus-cartilage",

      order: 2,

      title: "Meniscus Repair & Cartilage Preservation",

      subtitle: "Protecting the Natural Knee Joint",

      description:
        "Whenever possible, preserving the meniscus and cartilage helps maintain joint function, reduce pain, and delay the progression of arthritis.",

      image: meniscusRepairImage,

      icon: faBandage,

      conditions: [
        "Meniscus Tear",
        "Cartilage Injury",
        "Locking Knee",
        "Chondral Defects",
      ],

      procedures: [
        "Meniscus Repair",
        "Partial Meniscectomy",
        "Cartilage Restoration",
        "Microfracture Surgery",
      ],
    },

    {
      id: "knee-arthroscopy",

      order: 3,

      title: "Knee Arthroscopy",

      subtitle: "Minimally Invasive Knee Treatment",

      description:
        "A keyhole procedure used to diagnose and treat a wide range of knee conditions with smaller incisions, reduced tissue damage, and faster recovery.",

      image: kneeArthroscopyImage,

      icon: faMagnifyingGlass,

      conditions: [
        "Loose Bodies",
        "Synovitis",
        "Cartilage Damage",
        "Ligament Injuries",
      ],

      procedures: [
        "Diagnostic Arthroscopy",
        "Synovectomy",
        "Loose Body Removal",
        "Cartilage Debridement",
      ],
    },

    {
      id: "total-knee-replacement",

      order: 4,

      title: "Total Knee Replacement",

      subtitle: "Relieving Pain & Restoring Everyday Mobility",

      description:
        "Advanced knee replacement replaces worn joint surfaces with durable implants, helping restore smooth movement, stability, and long-term comfort.",

      image: totalKneeReplacementImage,

      icon: faBone,

      conditions: [
        "Knee Osteoarthritis",
        "Rheumatoid Arthritis",
        "Severe Joint Degeneration",
        "Chronic Knee Pain",
      ],

      procedures: [
        "Total Knee Replacement",
        "Partial Knee Replacement",
        "Robotic-Assisted Knee Replacement",
        "Personalized Implant Planning",
      ],
    },

    {
      id: "revision-knee-replacement",

      order: 5,

      title: "Revision Knee Replacement",

      subtitle: "Advanced Solutions for Failed Knee Implants",

      description:
        "Revision procedures replace worn or failed implants while restoring alignment, improving stability, and enhancing long-term knee function.",

      image: revisionKneeReplacementImage,

      icon: faArrowsRotate,

      conditions: [
        "Implant Loosening",
        "Implant Wear",
        "Infection",
        "Failed Knee Replacement",
      ],

      procedures: [
        "Revision Knee Replacement",
        "Implant Exchange",
        "Bone Reconstruction",
        "Complex Revision Surgery",
      ],
    },

    {
      id: "sports-knee-management",

      order: 6,

      title: "Sports Knee Injury Management",

      subtitle: "Helping Athletes Return with Confidence",

      description:
        "Comprehensive treatment for ligament, tendon, cartilage, and overuse injuries using modern surgical techniques and personalized rehabilitation programs.",

      image: sportsKneeInjuryImage,

      icon: faDumbbell,

      conditions: [
        "MCL Injury",
        "PCL Injury",
        "Patellar Instability",
        "Patellar Tendinitis",
      ],

      procedures: [
        "Ligament Reconstruction",
        "Tendon Repair",
        "Sports Rehabilitation",
        "Return-to-Sport Programs",
      ],
    },
  ],
};