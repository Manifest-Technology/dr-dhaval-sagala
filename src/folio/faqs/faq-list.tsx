"use client";

import { Accordion } from "@/components/ui/accordion";

import { FAQItem } from "./faq-item";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export function FAQList({
  faqs,
}: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-5"
    >
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          index={index}
        />
      ))}
    </Accordion>
  );
}