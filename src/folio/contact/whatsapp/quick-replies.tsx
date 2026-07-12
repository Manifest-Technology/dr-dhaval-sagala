"use client";

import { OPTIONS } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onSelect: (
    value: string
  ) => void;
}

export default function QuickReplies({
  onSelect,
}: Props) {
  return (
    <div
      className="
        flex flex-wrap gap-2
        pt-2
      "
    >
      {OPTIONS.map((item) => (
        <button
          key={item.title}
          onClick={() =>
            onSelect(item.title)
          }
          className="
            flex items-center
            gap-2
            rounded-full
            border
            border-[#25D366]/20
            bg-white
            dark:bg-[#202c33]
            dark:border-white/10
            px-4 py-2
            text-sm
            font-medium
            text-slate-800
            dark:text-slate-100
            shadow-sm
            transition-all
            hover:border-[#25D366]/50
            hover:bg-[#25D366]/10
          "
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-[#25D366]"
          />

          {item.title}
        </button>
      ))}
    </div>
  );
}