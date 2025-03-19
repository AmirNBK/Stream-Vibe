import Image from "next/image";
import search from "@/assets/search-icon.svg";
import alert from "@/assets/alert.svg";

const HeaderActions = () => {
  return (
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
  );
};

export default HeaderActions;
