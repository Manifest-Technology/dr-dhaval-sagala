"use client";

import Image from "next/image";

import doctorImage from "@/assets/img/home/about/doctor-profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faVideo,
  faEllipsisVertical,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatHeader() {
  return (
    <div
      className="
        flex items-start
        justify-between
        gap-3
        bg-[#075E54]
        px-4 py-4
        text-white
      "
    >
      {/* Left */}
      <div
        className="
          flex min-w-0 flex-1
          items-center gap-3
        "
      >
        <div
          className="
            relative
            h-12 w-12
            shrink-0
            overflow-hidden
            rounded-full
            sm:h-14 sm:w-14
          "
        >
          <Image
            src={doctorImage}
            alt="Dr. Dhaval Sagala"
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <h3
              className="
                line-clamp-2
                text-lg
                font-semibold
                leading-tight
                sm:text-xl
              "
            >
              Dr. Dhaval Sagala
            </h3>
          </div>

          <p
            className="
              mt-1
              text-xs
              text-green-300
              sm:text-sm
            "
          >
            ● Online
          </p>
        </div>
      </div>

      {/* Right */}
      <div
        className="
          flex shrink-0
          items-center gap-4
          pt-1
          text-lg
          sm:gap-5
          sm:text-xl
        "
      >
        <button className="transition-opacity hover:opacity-80">
          <FontAwesomeIcon icon={faVideo} />
        </button>

        <button className="transition-opacity hover:opacity-80">
          <FontAwesomeIcon icon={faPhone} />
        </button>

        <button className="transition-opacity hover:opacity-80">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
    </div>
  );
}