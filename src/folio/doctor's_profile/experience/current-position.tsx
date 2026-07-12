"use client";

import { motion } from "framer-motion";

import {
  faHospital,
  faLocationDot,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CurrentPosition() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[2rem]
          bg-gradient-to-br
          from-sky-500/10
          via-violet-500/10
          to-amber-500/10
          blur-3xl
        "
      />

      {/* Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-border/70
          bg-background/80
          px-8
          py-10
          backdrop-blur-xl

          lg:px-14
          lg:py-14
        "
      >
        {/* Decorative Orb */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-gradient-to-br
            from-sky-500/20
            via-violet-500/20
            to-amber-500/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            grid
            gap-12

            lg:grid-cols-[1.3fr_.7fr]
          "
        >
          {/* Left */}

          <div>
            <span
              className="
                inline-flex
                rounded-full
                border
                border-sky-500/20
                bg-sky-500/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-sky-600
                dark:text-sky-300
              "
            >
              Current Position
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                tracking-tight

                lg:text-5xl
              "
            >
              Belhoul Specialty Hospital
            </h2>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-6
                text-muted-foreground
              "
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faHospital} />

                Specialist Orthopaedic Surgeon
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} />

                Dubai, UAE
              </div>
            </div>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Currently delivering advanced orthopaedic
              care with a special focus on sports medicine,
              shoulder arthroscopy, joint replacement,
              complex trauma, and minimally invasive
              surgical techniques while serving patients
              from across the Middle East and beyond.
            </p>
          </div>

          {/* Right */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            <div className="grid gap-4">
              {[
                "Sports Medicine",
                "Shoulder Arthroscopy",
                "Joint Replacement",
                "Complex Trauma",
                "Revision Surgery",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-border
                    bg-background/70
                    p-4
                    backdrop-blur-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-sky-500
                      via-violet-500
                      to-amber-500
                      text-white
                    "
                  >
                    <FontAwesomeIcon
                      icon={faShieldHeart}
                    />
                  </div>

                  <span
                    className="
                      font-medium
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}