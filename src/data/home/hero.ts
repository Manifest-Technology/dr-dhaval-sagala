import {
  faAward,
  faUserDoctor,
  // faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

export const heroData = {
  badges: ["17+ Years Experience", "500+ Successful Surgeries"],

  subtitle: "WELCOME TO",

  qualifications: "MBBS, MS (Orthopaedics)",

  designation:
    "Senior Orthopaedic & Joint Replacement Surgeon.",

  features: [
    {
      title: "High Success Rates",
      description: "Trusted surgical outcomes",
      icon: faAward,
    },
    {
      title: "Expert Specialists",
      description: "Advanced orthopaedic care",
      icon: faUserDoctor,
    },
    // {
    //   title: "Experienced Surgeon",
    //   description: "17+ years of expertise",
    //   icon: faShieldHeart,
    // },
  ],

  primaryButton: {
    label: "Book a Consultation",
    href: "/appointment",
  },
};