import { Home, Users, Store, MonitorPlay, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function IconsHeaderLink() {
  return (
    <div className="flex items-center gap-6 ml-6 px-4">
      <Link to="/home">
        <Home className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer " role="Accueil" size={24} />
      </Link>
      <Link to="/amis">
        <Users className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer" role="Amie(s)" size={24} />
      </Link>
      <Link to="/marketplace">
        <Store className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer" role="Marketplace" size={24} />
      </Link>
      <Link to="/video">
        <MonitorPlay className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer" role="Videos" size={24} />
      </Link>
      <Link to="/gaming">
        <Gamepad2 className="text-[#E2E5E9] hover:text-[#0866FF] cursor-pointer" role="Gaming" size={24} />
      </Link>
    </div>
  );
}
