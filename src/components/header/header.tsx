"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import HeaderActions from "@/components/header/HeaderActions";
import heroSectionImage from "@/assets/hero-section-image.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-40 mt-8 mx-auto">
      <Logo />
      <NavigationMenu />
      <HeaderActions />
      <Image
        src={heroSectionImage}
        alt="hero section image"
        unoptimized
        className="absolute -z-10 w-full left-1/2 -translate-x-1/2 top-0"
      />
    </header>
  );
};

export default Header;
