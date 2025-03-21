"use client";
import React, { useState } from "react";

interface NavItem {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const NavigationMenu = () => {
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
    <nav className="flex items-center gap-8 bg-[#0F0F0F] p-2.5 rounded-xl border-4 border-[#1F1F1F] absolute left-1/2 -translate-x-1/2">
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
  );
};

export default NavigationMenu;
