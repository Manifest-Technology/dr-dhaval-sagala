import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TimelineItem {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Step title
   */
  title: string;

  /**
   * Main content
   */
  description: string;

  /**
   * FontAwesome icon
   */
  icon: IconDefinition;

  /**
   * Optional label shown above title
   * Example:
   * Step 01
   * Phase 02
   * Week 03
   */
  label?: string;

  /**
   * Tags shown below description
   */
  tags?: string[];

  /**
   * Optional highlight color.
   * Can be used later for different specialties.
   */
  accentColor?: string;
}

export interface TimelineShowcaseData {
  /**
   * Small pill above title
   */
  badge?: string;

  /**
   * Section title
   */
  title: string;

  /**
   * Section description
   */
  description: string;

  /**
   * Timeline items
   */
  items: TimelineItem[];

  /**
   * Optional bottom CTA
   */
  cta?: {
    title: string;
    description: string;
    button?: {
      text: string;
      href: string;
    };
  };
}