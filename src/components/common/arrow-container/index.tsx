import Image from "next/image";
import arrow from "@/assets/arrow.svg";

interface ArrowContainerProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

const ArrowContainer = ({
  direction,
  onClick,
  className = "",
}: ArrowContainerProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center size-11 rounded-md bg-[#1F1F1F] ${className}`}
    >
      <Image
        src={arrow}
        alt={`${direction} arrow`}
        className={`${direction === "right" ? "rotate-180" : ""}`}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ArrowContainer;
