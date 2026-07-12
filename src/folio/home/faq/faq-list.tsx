"use client";

import { faqs } from "@/data/home/faqs";

import { FAQItem } from "./faq-item";

export function FAQList() {
  const featuredFaqs = faqs.slice(0, 6);

  return (
    <div className="space-y-4">
      {featuredFaqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          index={index}
        />
      ))}
    </div>
  );
}