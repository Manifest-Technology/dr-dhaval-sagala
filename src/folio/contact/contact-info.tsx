"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import ContactCard from "./contact-card";
import HospitalMap from "./hospital-map";

import {
  faClock,
  faMapLocationDot,
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactInfo() {
  return (
    <Card
      className="
        overflow-hidden
        rounded-[32px]
        border border-border/60
        bg-card/80
        backdrop-blur-xl
        shadow-2xl
        py-0
      "
    >
      {/* HEADER */}
      <div className="pt-6 px-6 lg:pt-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-[#D4A017]/20
              bg-[#D4A017]/10
              px-3 py-1
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#D4A017]
            "
          >
            Get In Touch
          </span>

          <h2 className="text-2xl font-bold lg:text-3xl">
            Contact Information
          </h2>

          <p className="max-w-2xl text-sm text-muted-foreground lg:text-base">
            Reach our team through your preferred channel or visit us for expert
            orthopaedic care in Dubai.
          </p>
        </motion.div>
      </div>

      {/* CONTACT GRID */}
      <div className="pb-6 px-6 lg:pb-8 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <ContactCard
            variant="phone"
            icon={faPhoneVolume}
            title="Call Us"
            value="+971 52 161 6672"
            href="tel:+971521616672"
          />
  
          <ContactCard
            variant="whatsapp"
            icon={faWhatsapp}
            title="WhatsApp"
            value="+971 55 311 7577"
            href="https://wa.me/971553117577"
            external
          />

          <ContactCard
            variant="email"
            icon={faEnvelopeOpenText}
            title="Email"
            value="sagaladhaval@gmail.com"
            href="mailto:sagaladhaval@gmail.com"
          />
{/* 
          <ContactCard
            variant="location"
            icon={faMapLocationDot}
            title="Hospital Location"
            value="Medeor Hospital, Bur Dubai, Dubai, UAE"
            href="https://maps.google.com"
            external
            className="sm:col-span-2 lg:col-span-2"
          />

          <ContactCard
            variant="hours"
            icon={faClock}
            title="Consultation Hours"
            value={`Mon - Fri • 09:00 AM - 07:00 PM
              Sat - Sun • 09:00 AM - 01:00 PM
            `}
          />
*/}
        </div>
      </div>

      {/* MAP */}
      <div className="border-t">
        <HospitalMap />
      </div>
    </Card>
  );
}