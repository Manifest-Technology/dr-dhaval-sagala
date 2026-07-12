import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface ServiceHighlight {
  title: {
    first: string;
    second?: string;
  };

  description?: string;

  icon: IconDefinition;
}

export interface ServiceButton {
  label: string;
  href: string;
  external?: boolean;
}

export interface ServiceQuote {
  text: string;
  author?: string;
}

export interface ServiceTitle {
  first: string;
  second: string;
}

export interface ServiceIntroductionData {
  badge: string;

  title: ServiceTitle;

  description: string[];

  image: StaticImageData;
  imageAlt: string;

  highlights: ServiceHighlight[];

  quote?: ServiceQuote;

  button?: ServiceButton;
}

export interface ServiceIntroductionProps {
  data: ServiceIntroductionData;
}