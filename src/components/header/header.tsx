"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import NavigationMenu from "@/components/navigation/NavigationMenu";
import HeaderActions from "@/components/header/HeaderActions";
import heroSectionImage from "@/assets/hero-section-image-laptop.png";
import playIcon from "@/assets/play-icon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between">
      <div className="flex flex-row items-center w-full justify-between absolute top-0 left-0 right-0 mx-auto px-20 mt-8 z-10">
        <Logo />
        <NavigationMenu />
        <HeaderActions />
      </div>
      <div className="relative w-full">
        <Image
          src={heroSectionImage}
          alt="hero section image"
          unoptimized
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="flex flex-col items-center text-center justify-center w-5/6 mx-auto -translate-y-24">
        <span className="text-5xl mb-3.5 font-bold">
          The Best Streaming Experience
        </span>
        <span className="text-sm text-[#999999]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </span>
        <button className="bg-[#E50000] rounded-lg px-6 py-4 mt-10 flex flex-row items-center gap-1 cursor-pointer">
          <Image
            src={playIcon}
            alt="play icon"
            unoptimized
            className="size-7"
          />
          <span className="text-sm">Start Watching Now</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
