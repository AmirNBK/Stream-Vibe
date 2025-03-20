"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import HeaderActions from "@/components/header/HeaderActions";
import heroSectionImage from "@/assets/hero-section-image.png";
import playIcon from "@/assets/play-icon.svg";
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
      <div className="flex flex-col items-center text-center absolute inset-0 justify-center top-[650px] w-5/6 mx-auto">
        <span className="text-6xl mb-3.5 font-bold">
          The Best Streaming Experience
        </span>
        <span className="text-lg text-[#999999]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </span>
        <button className="bg-[#E50000] rounded-lg px-6 py-4 mt-12 flex flex-row items-center gap-1">
          <Image
            src={playIcon}
            alt="play icon"
            unoptimized
            className="size-7"
          />
          <span>Start Watching Now</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
