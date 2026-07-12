"use client";

import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ChatComposer() {
  return (
    <Button
      asChild
      className="
        h-12
        w-full
        rounded-full
        bg-[#25D366]
        dark:bg-[#00a884]
        font-semibold
        text-white
        hover:bg-[#20c65a]
        dark:hover:bg-[#06cf88]
      "
    >
      <a
        href="https://wa.me/971553117577"
        target="_blank"
        rel="noopener noreferrer"
      >
        Send a Message
      </a>
    </Button>
  );
}