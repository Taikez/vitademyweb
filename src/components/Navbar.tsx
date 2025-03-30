"use client";

import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from "./ui/UseMediaQuery";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div className="px-12 py-5 border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <DesktopNavbar />
    </div>
  ) : (
    <div className="px-12 py-5 border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <MobileNavbar />
    </div>
  );
}
