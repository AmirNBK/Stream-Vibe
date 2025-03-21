import React from "react";
import SliderSwitcher from "../common/slider-switcher";

interface MoviesSectionProps {
  title: string;
  description: string;
  content?: React.ReactNode;
}

const MovieSection = ({ title, description, content }: MoviesSectionProps) => {
  return (
    <div className="flex flex-col px-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <span className="text-3xl font-bold">{title}</span>
          <span className="text-base text-[#999999]">{description}</span>
        </div>

        <SliderSwitcher />
      </div>
    </div>
  );
};

export default MovieSection;
