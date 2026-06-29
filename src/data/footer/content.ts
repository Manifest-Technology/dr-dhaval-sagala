import {
  contactItems,
  socialLinks,
} from "@/data/header/content";

export const footerContent = {
  cta: {
    title: "Begin Your Journey Towards Better Mobility",

    description:
      "Expert orthopaedic care focused on restoring movement, comfort, and long-term wellbeing.",

    circularText:
      "BOOK CONSULTATION * ",
  },

  brand: {
    description:
      "Delivering advanced orthopaedic care with precision, compassion, and a commitment to restoring confident movement.",
  },

  quickLinks: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Doctor Profile",
      href: "/doctor-profile",
    },
    {
      label: "Specialities",
      href: "/specialities",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Book Appointment",
      href: "/contact",
    },
  ],

  specialities: [
    {
      label: "Knee Replacement",
      href: "/specialities/knee-replacement",
    },
    {
      label: "Hip Replacement",
      href: "/specialities/hip-replacement",
    },
    {
      label: "Arthroscopy",
      href: "/specialities/arthroscopy",
    },
    {
      label: "Sports Injuries",
      href: "/specialities/sports-injuries",
    },
    {
      label: "Arthritis Care",
      href: "/specialities/arthritis-care",
    },
  ],

  newsletter: {
    title: "Stay Updated",

    description:
      "Receive orthopaedic insights, recovery guidance, and treatment updates directly from our team.",

    placeholder: "Enter your email address",

    buttonLabel: "Subscribe",
  },

  bottom: {
    copyright: `&copy; ${new Date().getFullYear()} Dr. Dhaval Sagala. All rights reserved.`,

    credits: {
      href: "https://manifesttechnology.in",
    },
  },

  contactItems,

  socialLinks,
};

export type FooterContent = typeof footerContent;