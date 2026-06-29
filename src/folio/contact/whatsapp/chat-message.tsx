"use client";

import Image from "next/image";

import patientImage from "@/assets/img/home/hero/patient_1.png";
import doctorImage from "@/assets/img/home/about/doctor-profile.png";

import { Message } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  message: Message;
}

export default function ChatMessage({
  message,
}: Props) {
  const isBot =
    message.sender === "bot";

  if (isBot) {
    return (
      <div className="flex gap-3">
        <div
          className="
            relative
            h-10 w-10
            shrink-0
            overflow-hidden
            rounded-full
          "
        >
          <Image
            src={doctorImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div
          className="
            max-w-[85%]
            rounded-[22px]
            rounded-tl-md
            px-4 py-3
            bg-white
            dark:bg-[#202c33]
            shadow-sm
            border border-black/5
            dark:border-white/5
          "
        >
          <p
            className="
              text-sm
              font-semibold
              text-[#056b5f]
              dark:text-[#25D366]
            "
          >
            Dr. Dhaval Sagala
          </p>

          <p
            className="
              mt-2
              whitespace-pre-line
              text-sm
              leading-7
              text-slate-800
              dark:text-slate-100
            "
          >
            {message.text}
          </p>

          <p
            className="
              mt-2
              text-right
              text-[11px]
              text-slate-400
              dark:text-slate-500
            "
          >
            {message.time}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        flex
        justify-end
        gap-3
      "
    >
      <div
        className="
          max-w-[80%]
          rounded-[22px]
          rounded-tr-md
          bg-[#DCF8C6]
          dark:bg-[#005c4b]
          px-4 py-3
          shadow-sm
        "
      >
        <p
          className="
            text-sm
            font-semibold
            text-[#056b5f]
            dark:text-[#7ef2aa]
          "
        >
          You
        </p>

        <p
          className="
            mt-2
            text-sm
            text-slate-900
            dark:text-white
          "
        >
          {message.text}
        </p>

        <div
          className="
            mt-2
            flex items-center
            justify-end
            gap-1
            text-[11px]
            text-slate-500
            dark:text-slate-300
          "
        >
          {message.time}

          <FontAwesomeIcon
            icon={faCheckDouble}
            className="text-sky-500"
          />
        </div>
      </div>

      <div
          className="
            relative
            h-10 w-10
            shrink-0
            overflow-hidden
            rounded-full
          "
        >
          <Image
            src={patientImage}
            alt=""
            fill
            className="object-cover"
          />
        </div>
    </div>
  );
}