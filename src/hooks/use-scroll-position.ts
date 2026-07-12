"use client";

import { useEffect, useState } from "react";

export function useScrollPosition(offset = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);

  return scrolled;
}