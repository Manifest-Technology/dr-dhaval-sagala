"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";

import ContactForm from "./contact-form";
import CalendarBooking from "./calendar-booking";
import WhatsAppBooking from "./whatsapp/whatsapp-booking";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarCheck,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Tab = "whatsapp" | "form" | "calendar";

export default function ContactTabs() {
  const [activeTab, setActiveTab] =
    useState<Tab>("whatsapp");

  return (
    <Card
      className="
        overflow-hidden
        rounded-[32px]
        border border-[#D4A017]/15
        bg-background
        dark:bg-card
        shadow-[0_24px_80px_rgba(0,0,0,0.06)]
        dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]
        py-0
      "
    >
      {/* Tabs */}
      <div className="border-b border-border/60 p-4 lg:p-5">
        <div
          className="
            grid
            grid-cols-1
            gap-3
            min-[500px]:grid-cols-3
          "
        >
          <TabButton
            active={activeTab === "form"}
            onClick={() =>
              setActiveTab("form")
            }
            icon={faFileLines}
            subtitle="Send Request"
          >
            Appointment Form
          </TabButton>
          
          <TabButton
            active={activeTab === "whatsapp"}
            onClick={() =>
              setActiveTab("whatsapp")
            }
            icon={faWhatsapp}
            subtitle="Quick Chat"
          >
            WhatsApp
          </TabButton>

          <TabButton
            active={activeTab === "calendar"}
            onClick={() =>
              setActiveTab("calendar")
            }
            icon={faCalendarCheck}
            subtitle="Book Online"
          >
            Google Calendar
          </TabButton>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background dark:bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -16,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {activeTab === "whatsapp" && (
              <div className="p-2 lg:p-6">
                <WhatsAppBooking />
              </div>
            )}

            {activeTab === "form" && (
              <div className="p-2 lg:p-6">
                <ContactForm />
              </div>
            )}

            {activeTab === "calendar" && (
              <div className="p-2 lg:p-6">
                <CalendarBooking />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  );
}

type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: IconDefinition;
  subtitle: string;
  children: React.ReactNode;
};

function TabButton({
  active,
  onClick,
  icon,
  subtitle,
  children,
}: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      animate={{ y: active ? -3 : 0 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        p-5
        transition-all
        duration-300

        flex
        items-center
        gap-5
        text-left

        sm:flex-col
        sm:justify-center
        sm:text-center

        min-h-[120px]
        w-full

        ${
          active
            ? `
              border-[#D4A017]/30
              bg-background
              dark:bg-slate-900/90
              shadow-[0_12px_40px_rgba(212,160,23,0.10)]
              dark:shadow-[0_12px_40px_rgba(212,160,23,0.08)]
            `
            : `
              border-border/60
              bg-background
              dark:bg-slate-950
              hover:border-[#D4A017]/20
              hover:bg-accent/40
              dark:hover:bg-slate-900
              hover:shadow-lg
            `
        }
      `}
    >
      {active && (
        <>
          <motion.div
            layoutId="tabGlow"
            className="
              absolute
              inset-0
              rounded-[28px]
              bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.10),transparent_70%)]
              dark:bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.05),transparent_70%)]
            "
          />

          <motion.div
            layoutId="tabBorder"
            className="
              absolute
              left-8
              right-8
              top-0
              h-[3px]
              rounded-b-full
              bg-[#D4A017]
            "
          />
        </>
      )}

      <div
        className={`
          relative z-10
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-[20px]
          transition-all
          duration-300

          ${
            active
              ? `
                bg-[#D4A017]/12
                text-[#D4A017]
                dark:bg-[#D4A017]/15
              `
              : `
                bg-muted
                text-muted-foreground
                dark:bg-slate-800
                group-hover:bg-[#D4A017]/10
                group-hover:text-[#D4A017]
              `
          }
        `}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`
            text-lg
            transition-all
            duration-300
            ${active ? "scale-110" : ""}
          `}
        />
      </div>

      <div className="relative z-10 flex-1">
        <h3
          className={`
            text-[15px]
            font-semibold
            tracking-[-0.01em]
            ${
              active
                ? "text-foreground"
                : "text-muted-foreground"
            }
          `}
        >
          {children}
        </h3>

        <p
          className={`
            mt-1
            text-xs
            ${
              active
                ? "text-[#D4A017]"
                : "text-muted-foreground"
            }
          `}
        >
          {subtitle}
        </p>
      </div>

      {active && (
        <div
          className="
            absolute
            right-3
            top-3
            rounded-full
            border border-[#D4A017]/20
            bg-[#D4A017]/10
            dark:bg-[#D4A017]/15
            px-2 py-1
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#D4A017]
          "
        >
          Active
        </div>
      )}
    </motion.button>
  );
}