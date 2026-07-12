import type { TargetAndTransition, Variants } from "framer-motion";

/* ---------------------------------------------
 * Section
 * -------------------------------------------- */

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/* ---------------------------------------------
 * Header
 * -------------------------------------------- */

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------------------------------------
 * Timeline Line
 * -------------------------------------------- */

export const lineVariants: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

/* ---------------------------------------------
 * Timeline Node
 * -------------------------------------------- */

export const nodeVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      delay: 0.15,
    },
  },
};

/* ---------------------------------------------
 * Left Card
 * -------------------------------------------- */

export const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------------------------------------
 * Right Card
 * -------------------------------------------- */

export const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------------------------------------
 * Mobile Card
 * -------------------------------------------- */

export const mobileCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------------------------------------
 * Tags
 * -------------------------------------------- */

export const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
};

/* ---------------------------------------------
 * Icon
 * -------------------------------------------- */

export const iconVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: -8,
    scale: 1.08,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 14,
    },
  },
};

/* ---------------------------------------------
 * Card Hover
 * -------------------------------------------- */

export const cardHover: TargetAndTransition = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

/* ---------------------------------------------
 * CTA
 * -------------------------------------------- */

export const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};