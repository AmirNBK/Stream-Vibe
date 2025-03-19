"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/header-logo.svg";
import alert from "@/assets/alert.svg";
import search from "@/assets/search-icon.svg";

interface NavItem {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigationItems: NavItem[] = [
    "Home",
    "Movies & Shows",
    "Support",
    "Subscriptions",
  ].map((title, index) => ({
    title,
    onClick: () => setActiveIndex(index),
    isActive: activeIndex === index,
  }));

  return (
    <header className="flex items-center justify-between px-40 mt-8">
      <Image src={logo} alt="StreamVibe Logo" />

      <nav className="flex items-center gap-8 bg-[#0F0F0F] p-2.5 rounded-xl border-4 border-[#1F1F1F]">
        {navigationItems.map(({ title, onClick, isActive }, index) => (
          <button
            key={index}
            onClick={onClick}
            className={`px-4 py-2 rounded transition-colors duration-300 ease-in-out cursor-pointer
              ${isActive ? "bg-[#1A1A1A]" : ""}`}
          >
            {title}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-8">
        <button>
          <Image
            src={search}
            alt="Search"
            width={34}
            height={34}
            className="hover:opacity-80 transition-opacity"
          />
        </button>
        <button>
          <Image
            src={alert}
            alt="Notifications"
            width={34}
            height={34}
            className="hover:opacity-80 transition-opacity"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
