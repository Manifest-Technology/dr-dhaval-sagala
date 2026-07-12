"use client";

import { useMemo, useState } from "react";

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faCircle,
  faBone,
  faPersonWalking,
  faWheelchair,
  faHand,
  faDumbbell,
  faMedkit,
} from "@fortawesome/free-solid-svg-icons";

const consultationTypes = [
  {
    group: "Popular",
    label: "Sports Injury",
    icon: faPersonWalking,
  },
  {
    group: "Popular",
    label: "Joint Replacement",
    icon: faWheelchair,
  },
  {
    group: "Popular",
    label: "Fracture Care",
    icon: faBone,
  },
  {
    group: "Specialities",
    label: "Knee Care",
    icon: faBone,
  },
  {
    group: "Specialities",
    label: "Hip Care",
    icon: faBone,
  },
  {
    group: "Specialities",
    label: "Shoulder Care",
    icon: faDumbbell,
  },
  {
    group: "Specialities",
    label: "Elbow Care",
    icon: faBone,
  },
  {
    group: "Specialities",
    label: "Wrist & Hand Care",
    icon: faHand,
  },
  {
    group: "Specialities",
    label: "General Consultation",
    icon: faMedkit,
  },
] as const;

type Consultation =
  (typeof consultationTypes)[number];

interface ConsultationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ConsultationSelector({
  value,
  onChange,
}: ConsultationSelectorProps) {
  const [open, setOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const filtered = useMemo(() => {
    const query =
      search.toLowerCase();

    return consultationTypes.filter(
      (item) =>
        item.label
          .toLowerCase()
          .includes(query)
    );
  }, [search]);

  const groups = useMemo(() => {
    const map: Record<
      string,
      Consultation[]
    > = {};

    filtered.forEach((item) => {
      if (!map[item.group]) {
        map[item.group] = [];
      }

      map[item.group].push(item);
    });

    return map;
  }, [filtered]);

  const selected =
    consultationTypes.find(
      (item) =>
        item.label === value
    );

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          className="
            flex h-12 w-full
            items-center
            justify-between
            rounded-xl
            border
            border-input
            bg-background
            px-4
            transition-all
            duration-200
            hover:border-[#D4A017]/50
            focus:outline-none
            focus:ring-2
            focus:ring-[#D4A017]/20
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-8 w-8
                items-center
                justify-center
                rounded-lg
                bg-[#D4A017]/10
                text-[#D4A017]
              "
            >
              <FontAwesomeIcon
                icon={
                  selected?.icon ??
                  faMedkit
                }
              />
            </div>

            <span
              className={
                value
                  ? "text-sm"
                  : "text-sm text-muted-foreground"
              }
            >
              {value ||
                "Select Consultation Type"}
            </span>
          </div>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="
              text-xs
              text-muted-foreground
            "
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={8}
        className="
          w-[var(--radix-popover-trigger-width)]
          max-w-[520px]
          overflow-hidden
          rounded-[28px]
          border
          border-border/60
          bg-card
          p-0
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <Command>
          <CommandInput
            placeholder="Search consultation..."
            value={search}
            onValueChange={
              setSearch
            }
            className="
              h-12
              border-b
            "
          />

          <CommandList className="max-h-[340px] overflow-y-auto">
            {Object.entries(
              groups
            ).map(
              ([
                group,
                items,
              ]) => (
                <div key={group}>
                  <p
                    className="
                      px-5
                      pb-2
                      pt-5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#D4A017]
                    "
                  >
                    {group}
                  </p>

                  {items.map(
                    (item) => (
                      <CommandItem
                        key={
                          item.label
                        }
                        onSelect={() => {
                          onChange(
                            item.label
                          );

                          setOpen(
                            false
                          );
                        }}
                        className="
                          mx-2
                          mb-2
                          flex
                          cursor-pointer
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-transparent
                          px-4
                          py-3
                          transition-all
                          duration-200
                          hover:bg-[#D4A017]/6
                          data-[selected=true]:border-[#D4A017]/20
                          data-[selected=true]:bg-[#D4A017]/12
                        "
                      >
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#D4A017]/15
                            bg-[#D4A017]/10
                            text-[#D4A017]
                          "
                        >
                          <FontAwesomeIcon
                            icon={
                              item.icon
                            }
                          />
                        </div>

                        <span
                          className="
                            flex-1
                            text-sm
                            font-medium
                          "
                        >
                          {item.label}
                        </span>

                        {value ===
                          item.label && (
                          <FontAwesomeIcon
                            icon={
                              faCircle
                            }
                            className="
                              text-[8px]
                              text-[#D4A017]
                            "
                          />
                        )}
                      </CommandItem>
                    )
                  )}
                </div>
              )
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}