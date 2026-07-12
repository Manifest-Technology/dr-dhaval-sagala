"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* ================= TYPES ================= */

export type Country = {
  name: string;
  code: string;
  iso: string;
  continent?: string;
  utcTime?: string[];
};

type CountrySelectorProps = {
  countries: Country[];
  value: Country;
  onChange: (country: Country) => void;
};

type LabelItem = {
  type: "label";
  label: string;
};

type CountryItem = Country & {
  type: "item";
};

type FlatItem = LabelItem | CountryItem;

type ItemProps = {
  id: string;
  c: Country;
  value: Country;
  isActive: boolean;
  onSelect: (country: Country) => void;
};

/* ================= MAIN ================= */

export default function CountrySelector({
  countries,
  value,
  onChange,
}: CountrySelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [recent, setRecent] = useState<Country[]>([]);
  const [scrollProgress, setScrollProgress] =
    useState(0);

  const listRef =
    useRef<HTMLDivElement | null>(null);

  /* ================= FILTER ================= */

  const filtered = useMemo<Country[]>(() => {
    const q = search.toLowerCase().trim();

    if (!q) {
      return countries;
    }

    return countries.filter((c) => {
      const name =
        c.name?.toLowerCase() ?? "";

      const iso =
        c.iso?.toLowerCase() ?? "";

      const dial =
        c.code?.replace("+", "") ?? "";

      return (
        name.startsWith(q) ||
        name.includes(q) ||
        iso.startsWith(q) ||
        dial.includes(q.replace("+", ""))
      );
    });
  }, [search, countries]);

  /* ================= GROUP ================= */

  const grouped = useMemo<
    Record<string, Country[]>
  >(() => {
    const map: Record<
      string,
      Country[]
    > = {};

    filtered.forEach((country) => {
      const key =
        country.continent || "Other";

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(country);
    });

    return map;
  }, [filtered]);

  /* ================= FLATTEN ================= */

  const flatList = useMemo<FlatItem[]>(
    () => {
      const list: FlatItem[] = [];

      if (!search && recent.length) {
        list.push({
          type: "label",
          label: "Recent",
        });

        recent.forEach((country) => {
          list.push({
            ...country,
            type: "item",
          });
        });
      }

      if (!search) {
        list.push({
          type: "label",
          label: "Popular",
        });

        countries
          .slice(0, 5)
          .forEach((country) => {
            list.push({
              ...country,
              type: "item",
            });
          });
      }

      Object.entries(grouped).forEach(
        ([group, items]) => {
          if (!items.length) {
            return;
          }

          list.push({
            type: "label",
            label: group,
          });

          items.forEach((country) => {
            list.push({
              ...country,
              type: "item",
            });
          });
        }
      );

      return list;
    },
    [grouped, recent, search, countries]
  );

  const selectableItems =
    flatList.filter(
      (
        item
      ): item is CountryItem =>
        item.type === "item"
    );

  /* ================= AUTO SELECT ================= */

  useEffect(() => {
    const saved =
      localStorage.getItem("country");

    if (saved) {
      const found =
        countries.find(
          (c) => c.iso === saved
        );

      if (found) {
        onChange(found);
        return;
      }
    }

    try {
      const locale =
        navigator.language
          .split("-")[1]
          ?.toLowerCase();

      if (!locale) {
        return;
      }

      const found =
        countries.find(
          (c) => c.iso === locale
        );

      if (found) {
        onChange(found);
      }
    } catch {}
  }, [countries, onChange]);

  /* ================= RECENT ================= */

  useEffect(() => {
    const stored: Country[] =
      JSON.parse(
        localStorage.getItem(
          "recentCountries"
        ) || "[]"
      );

    setRecent(stored);
  }, []);

  const updateRecent = (
    country: Country
  ) => {
    const updated = [
      country,
      ...recent.filter(
        (c) => c.iso !== country.iso
      ),
    ].slice(0, 5);

    setRecent(updated);

    localStorage.setItem(
      "recentCountries",
      JSON.stringify(updated)
    );
  };

  /* ================= SCROLL ================= */

  const handleScroll = () => {
    const el = listRef.current;

    if (!el) {
      return;
    }

    const progress =
      el.scrollTop /
      (el.scrollHeight -
        el.clientHeight);

    setScrollProgress(
      Math.min(
        1,
        Math.max(0, progress)
      )
    );
  };

  /* ================= KEYBOARD ================= */

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!selectableItems.length) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setActiveIndex((prev) =>
        Math.min(
          prev + 1,
          selectableItems.length - 1
        )
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setActiveIndex((prev) =>
        Math.max(prev - 1, 0)
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();

      const selected =
        selectableItems[activeIndex];

      if (!selected) {
        return;
      }

      onChange(selected);
      updateRecent(selected);

      localStorage.setItem(
        "country",
        selected.iso
      );

      setOpen(false);
    }
  };

  /* ================= ACTIVE ITEM SCROLL ================= */

  useEffect(() => {
    const el =
      document.getElementById(
        `item-${activeIndex}`
      );

    el?.scrollIntoView({
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger className="w-full">
        <div className="flex h-12 items-center justify-between rounded-2xl border border-border/60 bg-card px-4 shadow-sm transition-all duration-300 hover:border-[#D4A017]/40 hover:shadow-md">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={`https://flagcdn.com/w40/${value.iso}.png`}
              width={24}
              height={16}
              loading="lazy"
              className="h-4 w-6 rounded-sm"
            />

            <span className="w-6 text-sm font-medium">
              {value.iso.toUpperCase()}
            </span>

            <span className="opacity-40">
              |
            </span>

            <div className="flex items-center gap-2 overflow-hidden">
              <span className="truncate text-sm font-medium text-slate-700">
                {value.name}
              </span>

              <span className="text-xs text-muted-foreground">
                {value.code}
              </span>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[11px] text-muted-foreground"
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-[24px] border border-border/60 bg-card/95 p-0 shadow-2xl backdrop-blur-xl"
      >
        <Command shouldFilter={false}>
          <div className="border-b border-border/50 px-3 py-3">
            <CommandInput
              placeholder="Search country or code (India, IN, +91)"
              value={search}
              onValueChange={setSearch}
              onKeyDown={
                handleKeyDown
              }
            />
          </div>

          <div className="relative">
            <CommandList
              ref={listRef}
              onScroll={
                handleScroll
              }
              className="max-h-[320px] overflow-y-auto pr-4"
            >
              {flatList.map(
                (item, index) => {
                  if (
                    item.type ===
                    "label"
                  ) {
                    return (
                      <p
                        key={`${item.label}-${index}`}
                        className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4A017]"
                      >
                        {item.label}
                      </p>
                    );
                  }

                  return (
                    <Item
                      key={`${item.iso}-${item.code}-${index}`}
                      id={`item-${index}`}
                      c={item}
                      value={value}
                      isActive={
                        selectableItems[
                          activeIndex
                        ]?.iso ===
                        item.iso
                      }
                      onSelect={(
                        country
                      ) => {
                        onChange(
                          country
                        );

                        updateRecent(
                          country
                        );

                        localStorage.setItem(
                          "country",
                          country.iso
                        );

                        setOpen(
                          false
                        );
                      }}
                    />
                  );
                }
              )}
            </CommandList>

            <div className="absolute right-1 top-2 h-[calc(100%-16px)] w-[3px] rounded-full bg-[#D4A017]/10">
              <div
                className="w-full rounded-full bg-[#D4A017]"
                style={{
                  height: `${Math.max(
                    scrollProgress *
                      100,
                    8
                  )}%`,
                  transform: `translateY(${scrollProgress * 100}%)`,
                }}
              />
            </div>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ================= ITEM ================= */

function Item({
  id,
  c,
  value,
  onSelect,
  isActive,
}: ItemProps) {
  return (
    <CommandItem
      id={id}
      onSelect={() =>
        onSelect(c)
      }
      className={`mx-3 flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
        isActive
          ? "bg-[#D4A017]/10 text-[#1E293B]"
          : "hover:bg-muted/60"
      }`}
    >
      <img
        src={`https://flagcdn.com/w40/${c.iso}.png`}
        width={24}
        height={16}
        loading="lazy"
        className="h-4 w-6 rounded-sm"
      />

      <span className="w-6 text-sm font-medium">
        {c.iso.toUpperCase()}
      </span>

      <span className="opacity-40">
        |
      </span>

      <span className="flex-1 text-sm">
        {c.name} ({c.code})
      </span>

      {value.iso === c.iso && (
        <div className="h-2 w-2 rounded-full bg-[#D4A017] shadow-[0_0_12px_rgba(212,160,23,0.45)]" />
      )}
    </CommandItem>
  );
}