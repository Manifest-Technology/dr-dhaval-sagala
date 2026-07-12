import type { StaticImageData } from "next/image";

import {
  faArrowRotateLeft,
  faBone,
  faPersonRunning,
  faRulerCombined,
  faShieldHeart,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

import SportsMedicine from "@/assets/img/home/treatments/sports-medicine.jpg";
import ShoulderCare from "@/assets/img/home/treatments/shoulder-care.jpeg";
import JointReplacement from "@/assets/img/home/treatments/joint-replacement.jpeg";
import HipCare from "@/assets/img/home/treatments/hip-care.jpeg";
import KneeCare from "@/assets/img/home/treatments/knee-care.jpg";
import LimbLengthening from "@/assets/img/home/treatments/limb-lengthening.jpeg";

export interface ExpertiseItem {
  id: number;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  icon: any;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    number: "01",
    title: "Sports Injury Management",
    icon: faPersonRunning,
    image: SportsMedicine,
    description:
      "Specialized care for sports injuries using minimally invasive techniques and structured rehabilitation.",
    highlights: [
      "ACL Reconstruction",
      "Meniscus Repair",
      "Return to Sports",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Shoulder Arthroscopy",
    icon: faBone,
    image: ShoulderCare,
    description:
      "Advanced arthroscopic procedures for rotator cuff tears, instability and frozen shoulder.",
    highlights: [
      "Rotator Cuff",
      "Instability",
      "Frozen Shoulder",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Joint Replacement",
    icon: faDumbbell,
    image: JointReplacement,
    description:
      "Modern hip and knee replacement focused on restoring pain-free movement.",
    highlights: [
      "Hip",
      "Knee",
      "Arthritis",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Hip Preservation",
    icon: faShieldHeart,
    image: HipCare,
    description:
      "Comprehensive treatment for hip arthritis, labral tears and degenerative conditions.",
    highlights: [
      "Labral Tear",
      "Hip Arthritis",
      "Mobility",
    ],
  },

  {
    id: 5,
    number: "05",
    title: "Knee Reconstruction",
    icon: faArrowRotateLeft,
    image: KneeCare,
    description:
      "Treatment for ligament injuries, cartilage damage and complex knee instability.",
    highlights: [
      "ACL",
      "Meniscus",
      "Cartilage",
    ],
  },

  {
    id: 6,
    number: "06",
    title: "Deformity Correction",
    icon: faRulerCombined,
    image: LimbLengthening,
    description:
      "Precision correction for limb discrepancies and complex orthopaedic deformities.",
    highlights: [
      "Alignment",
      "Reconstruction",
      "Limb Lengthening",
    ],
  },
];