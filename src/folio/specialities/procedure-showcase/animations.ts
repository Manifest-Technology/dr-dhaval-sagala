import type { Variants } from "framer-motion";

/* ---------------------------------------------
 * Section
 * --------------------------------------------*/

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      staggerChildren: 0.08,
    },
  },
};

/* ---------------------------------------------
 * Fade Up
 * --------------------------------------------*/

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * Sidebar Item
 * --------------------------------------------*/

export const sidebarItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * Right Content
 * --------------------------------------------*/

export const contentVariants: Variants = {
  initial: {
    opacity: 0,
    x: 18,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    x: -18,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

/* ---------------------------------------------
 * Image
 * --------------------------------------------*/

export const imageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.97,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

/* ---------------------------------------------
 * Text
 * --------------------------------------------*/

export const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * List Container
 * --------------------------------------------*/

export const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/* ---------------------------------------------
 * List Item
 * --------------------------------------------*/

export const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * Procedure Card
 * --------------------------------------------*/

export const procedureCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * Hover
 * --------------------------------------------*/

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    scale: 0.98,
  },
};