import Image from "next/image";
import logo from "@/assets/header-logo.svg";

const Logo = () => {
  return <Image src={logo} alt="StreamVibe Logo" />;
};

export default Logo;
