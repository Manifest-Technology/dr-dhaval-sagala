"use client";

import DesktopNavbar from "./navbar/desktop-navbar";
import MobileNavbar from "./mobile/mobile-navbar";

import { TopBar } from "./top-bar/top-bar";

export default function Header() {
  return (
    <header>
      <TopBar />
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}