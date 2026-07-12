"use client";

import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import { motion } from "framer-motion";

import {
  faBone,
  faDumbbell,
  faHand,
  faPersonWalking,
  faShieldHeart,
  faStethoscope,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

interface FAQCategory {
  id: string;
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface Props {
  categories: FAQCategory[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function getCategoryIcon(
  id: string
): IconDefinition {
  switch (id) {
    case "general":
      return faStethoscope;

    case "joint-replacement":
      return faBone;

    case "sports-medicine":
      return faDumbbell;

    case "hip-care":
      return faBone;

    case "knee-care":
      return faPersonWalking;

    case "shoulder-care":
      return faShieldHeart;

    case "elbow-care":
      return faHand;

    case "wrist-hand-care":
      return faHand;

    case "limb-lengthening":
      return faUpRightAndDownLeftFromCenter;

    default:
      return faStethoscope;
  }
}

function getCategoryLabel(
  total: number
) {
  return `${total} Questions`;
}

export function FAQCategoryMenu({
  categories,
  activeCategory,
  onCategoryChange,
}: Props) {
  const activeRef =
    useRef<HTMLButtonElement>(null);

  /*

  /*
  ----------------------------------------
  Current Category
  ----------------------------------------
  */

  const currentCategory =
    useMemo(
      () =>
        categories.find(
          (item) =>
            item.id ===
            activeCategory
        ),
      [
        categories,
        activeCategory,
      ]
    );

  /*
  ----------------------------------------
  Scroll
  ----------------------------------------
  */

  const scrollToSection = (
    id: string
  ) => {
    onCategoryChange(id);

    const section =
      document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top:
        section.offsetTop - 130,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* -------------------------------------------------------------------------- */}
      {/* Desktop Sidebar */}
      {/* -------------------------------------------------------------------------- */}
      <aside
        className="
            hidden
            lg:block

            sticky
            top-2

            self-start
        "
    >
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .45,
          }}
          className="
            relative
            rounded-[2rem]

            border
            border-primary/10

            bg-card/70

            backdrop-blur-2xl

            shadow-[0_25px_80px_-35px_rgba(212,160,23,.08)]

            dark:shadow-[0_25px_80px_-35px_rgba(0,0,0,.35)]
          "
        >
          {/* Decorative Glow */}

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              top-0

              h-40

              bg-gradient-to-b
              from-primary/[0.08]
              to-transparent
            "
          />

          {/* Top Border */}

          <div
            className="
              absolute
              left-0
              top-0

              h-1
              w-full

              bg-gradient-to-r
              from-primary
              via-yellow-500
              to-primary
            "
          />

          <div className="relative z-10 p-6">
            {/* Navigation */}

            <nav
              className="
                space-y-0.5
              "
            >
              {categories.map((category) => {
                const active =
                  category.id === activeCategory;

                return (
                  <motion.button
                    key={category.id}
                    ref={
                      active
                        ? activeRef
                        : null
                    }
                    layout
                    whileHover={{
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    onClick={() =>
                      scrollToSection(category.id)
                    }
                    className={cn(
                      `
                      group
                      relative

                      flex
                      w-full
                      items-center
                      gap-4

                      overflow-hidden

                      rounded-2xl

                      border

                      px-4
                      py-4

                      text-left

                      transition-all
                      duration-300
                      `,
                      active
                        ? "border-primary/15 bg-primary/[0.06]"
                        : "border-transparent hover:border-border hover:bg-muted/40"
                    )}
                  >
                    {/* Active Background */}

                    {active && (
                      <motion.div
                        layoutId="faq-category-active"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 34,
                        }}
                        className="
                          absolute
                          inset-0

                          rounded-2xl

                          border
                          border-primary/15

                          bg-gradient-to-r
                          from-primary/[0.10]
                          via-primary/[0.04]
                          to-transparent
                        "
                      />
                    )}

                    {/* Gold Indicator */}

                    <motion.div
                      layout
                      className={cn(
                        `
                        absolute
                        left-0
                        top-3
                        bottom-3

                        w-1

                        rounded-r-full

                        transition-all
                        duration-300
                        `,
                        active
                          ? "bg-primary"
                          : "bg-transparent"
                      )}
                    />

                    {/* Icon */}

                    <div
                      className={cn(
                        `
                        relative
                        z-10

                        flex
                        h-12
                        w-12
                        shrink-0

                        items-center
                        justify-center

                        rounded-2xl

                        border

                        transition-all
                        duration-300
                        `,
                        active
                          ? `
                            border-primary/20
                            bg-primary
                            text-primary-foreground

                            shadow-lg
                            shadow-primary/20
                          `
                          : `
                            border-primary/10
                            bg-primary/[0.06]
                            text-primary

                            group-hover:bg-primary/[0.10]
                          `
                      )}
                    >
                      <FontAwesomeIcon
                        icon={getCategoryIcon(
                          category.id
                        )}
                        className="text-sm"
                      />
                    </div>

                    {/* Content */}

                    <div
                      className="
                        relative
                        z-10

                        min-w-0
                        flex-1
                      "
                    >
                      <div className="flex items-center justify-between gap-3">

                        <p
                          className={cn(
                            `
                            truncate

                            text-[15px]
                            font-semibold

                            transition-colors
                            `,
                            active
                              ? "text-foreground"
                              : "text-foreground/90"
                          )}
                        >
                          {category.title}
                        </p>

                        <motion.div
                          layout
                          className={cn(
                            `
                            flex
                            h-7
                            min-w-7

                            items-center
                            justify-center

                            rounded-full

                            px-2

                            text-[11px]
                            font-semibold
                            `,
                            active
                              ? `
                                bg-primary
                                text-primary-foreground
                              `
                              : `
                                bg-muted
                                text-muted-foreground
                              `
                          )}
                        >
                          {category.faqs.length}
                        </motion.div>

                      </div>

                      <p
                        className="
                          mt-1

                          text-xs

                          text-muted-foreground
                        "
                      >
                        {category.faqs.length === 1
                          ? "Question"
                          : "Questions Available"}
                      </p>

                    </div>

                  </motion.button>
                );
              })}

            </nav>

          </div>

        </motion.div>

      </aside>

      {/* -------------------------------------------------------------------------- */}
      {/* Mobile */}
      {/* -------------------------------------------------------------------------- */}
      <div className="lg:hidden overflow-hidden">

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
            duration: .4,
          }}
        >

          <div
            className="
              overflow-hidden

              rounded-[1.75rem]

              border
              border-primary/10

              bg-card/75

              backdrop-blur-2xl

              shadow-[0_20px_70px_-35px_rgba(212,160,23,.08)]
            "
          >

            {/* Select */}

            <div className="p-5">

              <Select
                value={activeCategory}
                onValueChange={scrollToSection}
              >

                <SelectTrigger
                  className="
                    h-16

                    rounded-2xl

                    border-primary/10

                    bg-background/60

                    px-5

                    text-left

                    shadow-none

                    transition-all

                    hover:border-primary/20

                    focus:ring-4
                    focus:ring-primary/10
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-2xl

                        bg-primary

                        text-primary-foreground

                        shadow-lg
                        shadow-primary/20
                      "
                    >

                      <FontAwesomeIcon
                        icon={getCategoryIcon(
                          activeCategory
                        )}
                      />

                    </div>

                    <div className="flex flex-col items-start">

                      <span
                        className="
                          text-[11px]

                          uppercase

                          tracking-[0.2em]

                          text-muted-foreground
                        "
                      >
                        Current Category
                      </span>

                      <SelectValue />

                    </div>

                  </div>

                </SelectTrigger>

                <SelectContent
                  className="
                    rounded-2xl

                    border-primary/10

                    p-2
                  "
                >

                  {categories.map(
                    (category) => (

                      <SelectItem
                        key={category.id}
                        value={category.id}
                        className="
                          rounded-xl

                          py-3
                        "
                      >

                        <div className="flex w-full items-center gap-4">

                          <div
                            className="
                              flex
                              h-10
                              w-10

                              items-center
                              justify-center

                              rounded-xl

                              bg-primary/10

                              text-primary
                            "
                          >

                            <FontAwesomeIcon
                              icon={getCategoryIcon(
                                category.id
                              )}
                            />

                          </div>

                          <div className="flex-1">

                            <p className="font-medium">
                              {category.title}
                            </p>

                            <p
                              className="
                                text-xs

                                text-muted-foreground
                              "
                            >
                              {category.faqs.length} Questions
                            </p>

                          </div>

                        </div>

                      </SelectItem>

                    )
                  )}

                </SelectContent>

              </Select>

            </div>

          </div>

        </motion.div>

      </div>
    </>
  );
}