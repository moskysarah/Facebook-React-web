
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MessagesDropdown from "./MessagesDropdown";
import NotificationsDropdown from "./NotificationsDropdown";

export default function IconsHeaderSide() {
  return (
    <div className="flex items-center gap-4">
      <Link to="/menu">
        <Menu
          className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer p-2 rounded-full hover:bg-[#3B3B3B] transition-colors"
          role="Menu"
          size={24}
        />
      </Link>

      <MessagesDropdown />

      <NotificationsDropdown />

      <Link to="/profile">
        <img src="/profil/IMG_20250416_085619.jpg"
          alt="mon profil"
          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-[#0866FF] transition-all"
        />
      </Link>

    </div>
  );
}
