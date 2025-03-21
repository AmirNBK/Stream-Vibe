"use client";
import React, { useState } from "react";
import ArrowContainer from "../arrow-container";

const SliderSwitcher = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const handleLeftClick = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const handleRightClick = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : prevPage
    );
  };

  return (
    <div className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-lg p-3 flex flex-row items-center gap-3">
      <ArrowContainer direction="left" onClick={handleLeftClick} />
      <div className="flex flex-row items-center gap-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-3.5 h-1 rounded-full transition-all duration-300 ease-in-out ${
              index === currentPage ? "bg-[#E50000] w-[18px]" : "bg-[#1F1F1F]"
            }`}
          ></div>
        ))}
      </div>
      <ArrowContainer direction="right" onClick={handleRightClick} />
    </div>
  );
};

export default SliderSwitcher;
