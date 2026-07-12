import {
  faHand,
  faPersonRunning,
  faDumbbell,
  faShoePrints,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";

import shoulderImage from "@/assets/img/sports_medicine/shoulder-sports-injury.png";
import kneeImage from "@/assets/img/sports_medicine/knee-sports-injury.png";
import elbowImage from "@/assets/img/sports_medicine/elbow-wrist-hand-injury.png";
import ankleImage from "@/assets/img/sports_medicine/foot-ankle-injury.png";
import muscleImage from "@/assets/img/sports_medicine/muscle-soft-tissue-injury.png";

import type { ProcedureShowcaseData } from "@/folio/specialities/procedure-showcase/types";

export const SportsMedicineProcedures: ProcedureShowcaseData = {
  badge: "Procedures Offered",

  headingFirst: "Every Sports",
  headingSecond: "Injury Deserves",
  headingHighlight: "Expert Recovery.",

  description:
    "Comprehensive sports injury care focused on accurate diagnosis, minimally invasive treatment, and personalized rehabilitation to help patients return to activity with confidence.",

  items: [
    {
      id: "shoulder",

      order: 1,

      title: "Shoulder Sports Injuries",

      subtitle: "Restoring Stability & Overhead Performance",

      description:
        "Specialized treatment for shoulder injuries caused by repetitive overhead activities, trauma, or sports-related instability, helping restore strength, mobility, and confidence.",

      image: shoulderImage,

      icon: faHand,

      conditions: [
        "Rotator Cuff Tears",
        "Shoulder Impingement",
        "Shoulder Instability",
        "SLAP Lesions",
        "Recurrent Shoulder Dislocation",
        "Frozen Shoulder",
        "Labral Injuries",
      ],

      procedures: [
        "Shoulder Arthroscopy",
        "Rotator Cuff Repair",
        "Bankart Repair",
        "Labral Repair",
        "Shoulder Stabilization Surgery",
        "Arthroscopic Debridement",
      ],
    },

    {
      id: "knee",

      order: 2,

      title: "Knee Sports Injuries",

      subtitle: "Helping Athletes Return to Motion",

      description:
        "Advanced management of ligament, cartilage, and meniscal injuries using modern arthroscopic techniques designed to restore stability and athletic performance.",

      image: kneeImage,

      icon: faPersonRunning,

      conditions: [
        "ACL Tear",
        "PCL Injury",
        "Meniscus Tear",
        "Cartilage Injury",
        "Runner's Knee",
        "Patellar Instability",
        "Multi-Ligament Injuries",
      ],

      procedures: [
        "Knee Arthroscopy",
        "ACL Reconstruction",
        "PCL Reconstruction",
        "Meniscus Repair",
        "Cartilage Procedures",
        "Ligament Reconstruction",
      ],
    },

    {
      id: "elbow",

      order: 3,

      title: "Elbow, Wrist & Hand Injuries",

      subtitle: "Precision Care for Upper Limb Injuries",

      description:
        "Comprehensive treatment for overuse injuries and sports-related conditions affecting the elbow, wrist, and hand, restoring function and reducing pain.",

      image: elbowImage,

      icon: faDumbbell,

      conditions: [
        "Tennis Elbow",
        "Golfer's Elbow",
        "Tendon Injuries",
        "Wrist Sprains",
        "Sports Hand Injuries",
      ],

      procedures: [
        "Arthroscopic Elbow Procedures",
        "Tendon Repair",
        "Soft Tissue Reconstruction",
        "Minimally Invasive Surgical Management",
      ],
    },

    {
      id: "ankle",

      order: 4,

      title: "Foot & Ankle Injuries",

      subtitle: "Restoring Balance & Athletic Mobility",

      description:
        "Expert management of foot and ankle injuries commonly seen in running, jumping, and pivoting sports to promote safe recovery and long-term stability.",

      image: ankleImage,

      icon: faShoePrints,

      conditions: [
        "Ankle Sprain",
        "Achilles Tendinitis",
        "Plantar Fasciitis",
        "Shin Splints",
        "Stress Fractures",
      ],

      procedures: [
        "Ligament Reconstruction",
        "Tendon Repair",
        "Arthroscopic Ankle Surgery",
        "Sports Rehabilitation Programs",
      ],
    },

    {
      id: "muscle",

      order: 5,

      title: "Muscle & Soft Tissue Injuries",

      subtitle: "Optimizing Recovery & Performance",

      description:
        "Individualized treatment and rehabilitation for muscle strains and tendon injuries to reduce recovery time and minimize the risk of recurrent injury.",

      image: muscleImage,

      icon: faPersonWalking,

      conditions: [
        "Muscle Tears",
        "Hamstring Injuries",
        "Quadriceps Strain",
        "Neck Strain",
        "Lower Back Sports Injury",
        "Tendon Injuries",
      ],

      procedures: [
        "Non-Surgical Sports Rehabilitation",
        "PRP & Injection Therapy",
        "Guided Physiotherapy",
        "Functional Strength Training",
      ],
    },
  ],
};