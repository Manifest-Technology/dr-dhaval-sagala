"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import {
  faClock,
  faMapLocationDot,
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "./contact-card";

const MAP_URL =
  "https://maps.google.com/maps?q=Medeor%20Hospital%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function HospitalMap() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div
        className="
          grid gap-5
          lg:grid-cols-[2fr_2fr_auto]
          lg:items-center
        "
      >
        <ContactCard
          variant="location"
          icon={faMapLocationDot}
          title="Hospital Location"
          value="Medeor Hospital, Bur Dubai, Dubai, UAE"
          href="https://maps.google.com/maps?q=Medeor%20Hospital%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
          external
        />

        <ContactCard
          variant="hours"
          icon={faClock}
          title="Consultation Hours"
          value={`Mon - Fri • 09:00 AM - 07:00 PM \n Sat - Sun • 09:00 AM - 01:00 PM`}
        />
      </div>

      {/* Map */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          mt-6
          overflow-hidden
          rounded-[28px]
          border
        "
      >
        {/* Skeleton */}
        {loading && (
          <div
            className="
              absolute inset-0 z-10
              animate-pulse
              bg-muted
            "
          />
        )}

        <iframe
          src={MAP_URL}
          loading="lazy"
          className="
            h-[320px]
            w-full
            border-0
            lg:h-[450px]
          "
          onLoad={() => setLoading(false)}
        />
      </motion.div>
    </div>
  );
}