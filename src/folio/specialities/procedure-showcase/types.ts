import type { StaticImageData } from "next/image";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Individual procedure shown in the left sidebar
 * and detailed on the right content panel.
 */
export interface ProcedureItem {
  /** Unique identifier */
  id: string;

  order?: number;

  /** Sidebar label */
  title: string;

  /** Short headline */
  subtitle: string;

  /** Detailed introduction */
  description: string;

  /** Procedure image */
  image: StaticImageData | string;

  /** FontAwesome icon */
  icon: IconDefinition;

  /** Common patient conditions */
  conditions: string[];

  /** Available surgical procedures / techniques */
  procedures: string[];

  /**
   * Optional highlights displayed as badges.
   * Example:
   * - Minimally Invasive
   * - Same-Day Walking
   * - Advanced Implants
   */
  highlights?: string[];

  /**
   * Optional CTA
   */
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Entire showcase section.
 * Every speciality page supplies one object of this type.
 */
export interface ProcedureShowcaseData {
  /**
   * Small badge
   */
  badge?: string;

  /**
   * First heading line
   * Example:
   * Every Joint
   */
  headingFirst: string;

  /**
   * Second heading line
   * Example:
   * Replacement
   */
  headingSecond: string;

  /**
   * Highlighted word/phrase
   * Example:
   * Begins With Precision.
   */
  headingHighlight: string;

  /**
   * Editorial description
   */
  description: string;

  /**
   * Procedures
   */
  items: ProcedureItem[];
}

/**
 * Main component props
 */
export interface ProcedureShowcaseProps {
  data: ProcedureShowcaseData;

  /**
   * Default active procedure.
   * Defaults to 0.
   */
  defaultIndex?: number;

  /**
   * Optional additional classes
   */
  className?: string;
}

/**
 * Sidebar Props
 */
export interface ProcedureSidebarProps {
  items: ProcedureItem[];

  activeIndex: number;

  onSelect: (index: number) => void;
}

/**
 * Sidebar Item Props
 */
export interface ProcedureItemProps {
  item: ProcedureItem;

  active: boolean;

  onClick: () => void;
}

/**
 * Right Content Props
 */
export interface ProcedureContentProps {
  item: ProcedureItem;
}

/**
 * Image Component
 */
export interface ProcedureImageProps {
  image: StaticImageData | string;

  title: string;
}

/**
 * Header Component
 */
export interface ProcedureHeaderProps {
  title: string;

  subtitle: string;

  description: string;
}

/**
 * Common Conditions Component
 */
export interface CommonConditionsProps {
  conditions: string[];
}

/**
 * Available Procedures Component
 */
export interface AvailableProceduresProps {
  procedures: string[];
}