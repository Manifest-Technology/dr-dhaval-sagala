import {
  faBone,
  faPersonRunning,
  faRulerCombined,
  faPersonWalking,
  faWheelchairMove,
  faHand,
  faDumbbell,
  faArrowsToCircle,
} from "@fortawesome/free-solid-svg-icons";

import jointReplacementImg from "@/assets/img/home/treatments/joint-replacement.jpeg";
import sportsMedicineImg from "@/assets/img/home/treatments/sports-medicine.jpg";
import limbLengtheningImg from "@/assets/img/home/treatments/limb-lengthening.jpeg";
import hipCareImg from "@/assets/img/home/treatments/hip-care.jpeg";
import kneeCareImg from "@/assets/img/home/treatments/knee-care.jpg";
import shoulderCareImg from "@/assets/img/home/treatments/shoulder-care.jpeg";
import elbowCareImg from "@/assets/img/home/treatments/elbow-care.jpg";
import wristHandCareImg from "@/assets/img/home/treatments/wrist-hand-care.jpeg";

export const treatments = [
  {
    title: "Joint Replacement",
    slug: "/specialities/joint-replacement",
    icon: faBone,
    image: jointReplacementImg,
    description:
      "Advanced hip and knee replacement procedures focused on restoring mobility and reducing chronic joint pain.",
  },
  {
    title: "Sports Medicine",
    slug: "/specialities/sports-medicine",
    icon: faDumbbell,
    image: sportsMedicineImg,
    description:
      "Comprehensive care for ligament injuries, tendon disorders, muscle strains, and return-to-sport rehabilitation.",
  },
  {
    title: "Limb Lengthening & Reconstruction",
    slug: "/specialities/limb-lengthening-reconstruction",
    icon: faRulerCombined,
    image: limbLengtheningImg,
    description:
      "Modern reconstructive solutions for deformity correction, limb discrepancies, and complex trauma cases.",
  },
  {
    title: "Hip Care",
    slug: "/specialities/hip-care",
    icon: faWheelchairMove,
    image: hipCareImg,
    description:
      "Personalised treatment for arthritis, labral injuries, stiffness, and degenerative hip conditions.",
  },
  {
    title: "Knee Care",
    slug: "/specialities/knee-care",
    icon: faPersonWalking,
    image: kneeCareImg,
    description:
      "Expert management of ACL tears, meniscus injuries, arthritis, instability, and cartilage damage.",
  },
  {
    title: "Shoulder Care",
    slug: "/specialities/shoulder-care",
    icon: faArrowsToCircle,
    image: shoulderCareImg,
    description:
      "Specialised shoulder arthroscopy and treatment for rotator cuff tears, instability, and frozen shoulder.",
  },
  {
    title: "Elbow Care",
    slug: "/specialities/elbow-care",
    icon: faPersonRunning,
    image: elbowCareImg,
    description:
      "Targeted solutions for tennis elbow, ligament injuries, fractures, and minimally invasive procedures.",
  },
  {
    title: "Wrist & Hand Care",
    slug: "/specialities/wrist-hand-care",
    icon: faHand,
    image: wristHandCareImg,
    description:
      "Precision treatment for carpal tunnel syndrome, hand injuries, fractures, and nerve compression disorders.",
  },
  {
    title: "Sports Medicine",
    slug: "/specialities/sports-medicine",
    icon: faDumbbell,
    image: sportsMedicineImg,
    description:
      "Comprehensive care for ligament injuries, tendon disorders, muscle strains, and return-to-sport rehabilitation.",
  },
];