import {
  faAward,
  faBookMedical,
  faBriefcaseMedical,
  faCertificate,
  faChalkboardTeacher,
  faEarthAsia,
  faGraduationCap,
  faHospital,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type TimelineTheme =
  | "amber"
  | "blue"
  | "violet"
  | "emerald"
  | "orange"
  | "cyan"
  | "teal"
  | "indigo"
  | "red"
  | "yellow";

export interface ExperienceTimelineItem {
  id: number;
  year: string;
  category: string;
  title: string;
  location: string;
  description: string;
  icon: IconDefinition;
  theme: TimelineTheme;
}

export const experienceTimeline: ExperienceTimelineItem[] = [
  {
    id: 1,
    year: "2002",
    category: "Medical Education",
    title: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    location: "B.J. Medical College, Ahmedabad",
    icon: faGraduationCap,
    theme: "indigo",
    description:
      "Graduated in Medicine, establishing a strong academic and clinical foundation for a career in orthopaedic surgery.",
  },

  {
    id: 2,
    year: "2003",
    category: "Academic Achievement",
    title: "Academic Excellence",
    location: "Gujarat, India",
    icon: faAward,
    theme: "amber",
    description:
      "Recognized for outstanding academic performance, securing the 15th rank in the Gujarat Higher Secondary Board Examination.",
  },

  {
    id: 3,
    year: "2006",
    category: "Postgraduate Education",
    title: "Master of Surgery (M.S.) – Orthopaedic Surgery",
    location: "KM Sheth School of PG Studies & Research, Ahmedabad",
    icon: faGraduationCap,
    theme: "violet",
    description:
      "Completed specialist postgraduate training in Orthopaedic Surgery with comprehensive exposure to trauma, reconstruction and sports medicine.",
  },

  {
    id: 4,
    year: "2006 – 2008",
    category: "Clinical Practice",
    title: "Consultant Orthopaedic Surgeon & Hospital Superintendent",
    location: "Lion M.C. Shah Orthopaedic Hospital",
    icon: faHospital,
    theme: "blue",
    description:
      "Began independent orthopaedic practice, managing trauma, fracture fixation and complex musculoskeletal conditions while overseeing hospital operations.",
  },

  {
    id: 5,
    year: "2008 – 2012",
    category: "Clinical Practice",
    title: "Consultant Orthopaedic Surgeon",
    location: "Chetan Orthopaedic Hospital",
    icon: faUserDoctor,
    theme: "teal",
    description:
      "Expanded expertise in arthroscopy, trauma surgery and sports injury management while providing comprehensive orthopaedic care across diverse patient populations.",
  },

  {
    id: 6,
    year: "2009",
    category: "International Fellowship",
    title: "Knee Arthroscopy & Adult Joint Reconstruction",
    location: "Sancheti Institute of Orthopaedics, Pune",
    icon: faCertificate,
    theme: "emerald",
    description:
      "Completed advanced fellowship under Dr. Parag Sancheti and Dr. Kantilal Sancheti, focusing on knee arthroscopy and adult joint reconstruction.",
  },

  {
    id: 7,
    year: "2011 – 2012",
    category: "Academic Appointment",
    title: "Senior Registrar",
    location: "GMERS Medical College, Ahmedabad",
    icon: faChalkboardTeacher,
    theme: "orange",
    description:
      "Combined clinical responsibilities with teaching while actively mentoring young doctors and promoting sports injury prevention.",
  },

  {
    id: 8,
    year: "2011",
    category: "Community Outreach",
    title: "Public Health Education",
    location: "Rotary Club of Ahmedabad Elite",
    icon: faBookMedical,
    theme: "cyan",
    description:
      "Conducted public awareness programmes on knee and shoulder health, encouraging early diagnosis, prevention and active lifestyles.",
  },

  {
    id: 9,
    year: "2012",
    category: "International Fellowship",
    title: "Shoulder & Elbow Arthroscopy and Sports Medicine",
    location: "Konkuk University Hospital, Seoul, South Korea",
    icon: faEarthAsia,
    theme: "cyan",
    description:
      "Completed advanced international fellowship under Dr. Jin Young Park, gaining expertise in shoulder arthroscopy, sports medicine and minimally invasive techniques.",
  },

  {
    id: 10,
    year: "2012 – 2015",
    category: "Consultant Practice",
    title: "Consultant Orthopaedic Surgeon & Sports Medicine Specialist",
    location: "Shalby Hospital, Ahmedabad",
    icon: faHospital,
    theme: "blue",
    description:
      "Specialized in shoulder surgery, ligament reconstruction, revision arthroscopy, sports injuries and advanced joint preservation procedures.",
  },

  {
    id: 11,
    year: "2013",
    category: "Clinical Achievement",
    title: "Landmark Minimally Invasive Surgery",
    location: "Ahmedabad, India",
    icon: faAward,
    theme: "yellow",
    description:
      "Successfully performed a highly complex minimally invasive procedure on a 17-year-old international basketball player from Tanzania, one of the first surgeries of its kind in Gujarat.",
  },

  {
    id: 12,
    year: "2013 – 2015",
    category: "Sports Medicine",
    title: "Elite Athlete Education",
    location: "Sports Authority of Gujarat",
    icon: faChalkboardTeacher,
    theme: "orange",
    description:
      "Delivered educational programmes for elite athletes on sports injury prevention, rehabilitation and safe return-to-play strategies.",
  },

  {
    id: 13,
    year: "2015",
    category: "International Observership",
    title: "Advanced Shoulder & Knee Arthroscopy",
    location: "Singapore",
    icon: faEarthAsia,
    theme: "teal",
    description:
      "Completed advanced observerships at Singapore General Hospital and Khoo Teck Puat Hospital, enhancing expertise in shoulder and knee arthroscopy.",
  },

  {
    id: 14,
    year: "2015 – 2016",
    category: "Consultant Practice",
    title: "Freelance Consultant Orthopaedic Surgeon",
    location: "SAL, CIMS, Sterling, HCG Medisurge & Shalby Hospitals",
    icon: faBriefcaseMedical,
    theme: "indigo",
    description:
      "Provided specialist orthopaedic consultations across leading tertiary care hospitals with emphasis on sports medicine and shoulder surgery.",
  },

  {
    id: 15,
    year: "2016",
    category: "Academic Appointment",
    title: "Assistant Professor",
    location: "Gujarat Cancer Society Medical College",
    icon: faChalkboardTeacher,
    theme: "orange",
    description:
      "Mentored undergraduate and postgraduate medical students while continuing advanced orthopaedic surgical practice.",
  },

  {
    id: 16,
    year: "2016 – Present",
    category: "Current Practice",
    title: "Specialist Orthopaedic Surgeon",
    location: "Belhoul Specialty Hospital, Dubai",
    icon: faHospital,
    theme: "red",
    description:
      "Providing comprehensive orthopaedic care with special expertise in sports medicine, shoulder arthroscopy, joint replacement, complex trauma and minimally invasive surgery.",
  },

  {
    id: 17,
    year: "2022",
    category: "International Recognition",
    title: "AO International Travelling Fellowship",
    location: "Davos, Switzerland",
    icon: faAward,
    theme: "amber",
    description:
      "Awarded the prestigious AO International Travelling Fellowship after being selected as the Grand Prize Winner among 760 orthopaedic surgeons representing 101 countries worldwide.",
  },
];