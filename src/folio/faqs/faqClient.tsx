"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  faMagnifyingGlass,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faqCategories } from "@/data/faqs";

import { FAQCategoryMenu } from "./faq-category-menu";
import { FAQSection } from "./faq-section";

export function FAQClient() {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState(
      faqCategories[0]?.id ?? ""
    );

  /*
  ------------------------------------------
  Prevent ScrollSpy while smooth scrolling
  ------------------------------------------
  */

  const isClickScrolling =
    useRef(false);

  /*
  ------------------------------------------
  Search Filter
  ------------------------------------------
  */

  const filteredCategories =
    useMemo(() => {
      const keyword = search
        .trim()
        .toLowerCase();

      if (!keyword) {
        return faqCategories;
      }

      return faqCategories
        .map((category) => ({
          ...category,

          faqs: category.faqs.filter(
            (faq) =>
              faq.question
                .toLowerCase()
                .includes(keyword) ||
              faq.answer
                .toLowerCase()
                .includes(keyword)
          ),
        }))
        .filter(
          (category) =>
            category.faqs.length > 0
        );
    }, [search]);

      /*
  ------------------------------------------
  Keep selected category valid
  ------------------------------------------
  */

  useEffect(() => {
    if (!filteredCategories.length)
      return;

    const exists =
      filteredCategories.some(
        (item) =>
          item.id ===
          activeCategory
      );

    if (!exists) {
      setActiveCategory(
        filteredCategories[0].id
      );
    }
  }, [
    filteredCategories,
    activeCategory,
  ]);

  /*
  ------------------------------------------
  Scroll Spy
  ------------------------------------------
  */

  useEffect(() => {
    if (search.trim()) return;

    const sections =
      document.querySelectorAll<HTMLElement>(
        "[data-faq-section]"
      );

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          if (
            isClickScrolling.current
          )
            return;

          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              )
                return;

              setActiveCategory(
                entry.target.id
              );
            }
          );
        },
        {
          root: null,

          rootMargin:
            "-35% 0px -45% 0px",

          threshold: 0,
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(section)
    );

    return () =>
      observer.disconnect();
  }, [search]);

  /*
  ------------------------------------------
  Sidebar Navigation
  ------------------------------------------
  */

  const handleCategoryChange = (
    id: string
  ) => {
    setActiveCategory(id);

    isClickScrolling.current =
      true;

    const element =
      document.getElementById(id);

    if (element) {
      window.scrollTo({
        top:
          element.offsetTop - 130,
        behavior: "smooth",
      });
    }

    window.setTimeout(() => {
      isClickScrolling.current =
        false;
    }, 700);
  };

  return (
    <section className="relative pt-32 pb-24">

      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-10rem]

            h-[900px]
            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-primary/[0.06]

            blur-[180px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            right-[-12rem]
            top-[30%]

            h-[520px]
            w-[520px]

            rounded-full

            bg-primary/[0.05]

            blur-[140px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            left-[-10rem]
            bottom-0

            h-[420px]
            w-[420px]

            rounded-full

            bg-primary/[0.04]

            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)]

            bg-[size:64px_64px]

            opacity-[0.18]
          "
        />

      </div>

      <div className="mx-auto max-w-[1700px] px-6 xl:px-10">

        {/* Hero */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="
            relative
            mb-20
          "
        >

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

               border
              border-[#D4A017]/25
              bg-[#D4A017]/10

              px-5
              py-2.5

              backdrop-blur-xl            
              text-[#D4A017]
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
              "
            >
              <FontAwesomeIcon
                icon={faWandSparkles}
                className="h-3.5 w-3.5"
              />
            </div>

            <span
              className="
                text-sm
                font-semibold
                tracking-wide
              "
            >
              Frequently Asked Questions
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-8

              max-w-6xl

              text-5xl
              font-black
              tracking-tight

              leading-[1.05]

              lg:text-7xl
            "
          >
            Find Answers to Your

            <span
              className="
                block

                bg-gradient-to-r
                from-primary
                via-yellow-500
                to-primary

                bg-clip-text

                text-transparent
              "
            >
              Orthopaedic Questions
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-8

              text-muted-foreground

              lg:text-xl
            "
          >
            Explore expert answers across every speciality—from diagnosis and
            treatment options to surgery, recovery and rehabilitation—helping
            patients make informed decisions with confidence.
          </p>
        </motion.div>

        {filteredCategories.length > 0 && (
          <div
            className="
              relative

              grid
              items-start
              gap-10

              xl:gap-16

              lg:grid-cols-[330px_minmax(0,1fr)]
            "
          >
            {/* Sidebar */}
            <FAQCategoryMenu
              categories={filteredCategories}
              activeCategory={activeCategory}
              onCategoryChange={
                handleCategoryChange
              }
            />

            {/* Right Content */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: .08,
              }}
              className="min-w-0"
            >

              {/* Desktop */}

              <div className="hidden lg:block">
                <div
                  className="
                    space-y-28
                  "
                >
                  {filteredCategories.map(
                    (category) => (
                      <FAQSection
                        key={category.id}
                        category={category}
                      />
                    )
                  )}
                </div>

              </div>

              {/* Mobile */}

              <div className="lg:hidden">

                <motion.div
                  key={activeCategory}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: .3,
                  }}
                >
                  <FAQSection
                    category={
                      filteredCategories.find(
                        (category) =>
                          category.id ===
                          activeCategory
                      ) ??
                      filteredCategories[0]
                    }
                  />
                </motion.div>

              </div>

            </motion.div>

          </div>
        )}
      </div>
    </section>
  );
}