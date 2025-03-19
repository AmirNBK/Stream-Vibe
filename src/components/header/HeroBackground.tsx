import Image from "next/image";
import heroSectionImage from "@/assets/hero-section-image.png";

const HeroBackground = () => {
  return (
    <Image
      src={heroSectionImage}
      alt="hero section image"
      unoptimized
      className="absolute -z-10 w-full left-1/2 -translate-x-1/2 top-0"
    />
  );
};

export default HeroBackground;
