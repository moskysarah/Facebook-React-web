import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Profil from "../components/profil"
import { Users, Clock, Bookmark, Video, Store, Newspaper, Calendar, X, ChevronUp, ChevronDown, Settings, HelpCircle } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const location = useLocation();

  const shortcuts = [
    { name: "React Developers", color: "#61DAFB" },
    { name: "Design Community", color: "#FF6B6B" },
    { name: "Tech News", color: "#4ECDC4" },
    { name: "Photography", color: "#45B7D1" }
  ];

  const menuItems = [
    { icon: <Users size={22} className="text-[#0866FF]" />, label: "Amis", path: "/amis" },
    { icon: <Clock size={22} className="text-[#0866FF]" />, label: "Souvenirs", path: "/souvenirs" },
    { icon: <Bookmark size={22} className="text-[#0866FF]" />, label: "Enregistrements", path: "/enregistrements" },
    { icon: <Users size={22} className="text-[#0866FF]" />, label: "Groupes", path: "/groupes" },
    { icon: <Video size={22} className="text-[#0866FF]" />, label: "Vidéo", path: "/video" },
    { icon: <Store size={22} className="text-[#0866FF]" />, label: "Marketplace", path: "/marketplace" },
    { icon: <Newspaper size={22} className="text-[#0866FF]" />, label: "Fils", path: "/fils" },
    { icon: <Calendar size={22} className="text-[#0866FF]" />, label: "Événements", path: "/evenements" },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`w-70 bg-[#1C1C1D] dark:bg-gray-800 border-l-none p-4 flex flex-col fixed w-100 md:fixed top-16 md:top-16 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex`}>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden self-end p-2 text-white hover:bg-[#2C2F33] dark:hover:bg-gray-700 rounded mb-4"
        >
          <X size={24} />
        </button>

        <Link to="/profilDetails" onClick={onClose}>
          <Profil />
        </Link>

        {/* Main menu items */}
        <div className="flex flex-col gap-1 mt-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0866FF] text-white'
                    : 'text-[#B0B3B8] dark:text-gray-300 hover:bg-[#2C2F33] dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span className={`font-medium ${isActive ? 'text-white' : ''}`}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Shortcuts section */}
        <div className="mt-6 border-t border-[#3B3B3B] pt-4">
          <button
            onClick={() => setShowShortcuts(!showShortcuts)}
            className="flex items-center justify-between w-full px-3 py-2 text-[#B0B3B8] hover:text-[#E2E5E9] transition-colors"
          >
            <span className="font-medium">Your Shortcuts</span>
            {showShortcuts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showShortcuts && (
            <div className="mt-2 space-y-2">
              {shortcuts.map((shortcut, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#2C2F33] dark:hover:bg-gray-700 transition-colors"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: shortcut.color }}
                  ></div>
                  <span className="text-[#B0B3B8] dark:text-gray-300 text-sm">{shortcut.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer links */}
        <div className="mt-auto border-t border-[#3B3B3B] pt-4 space-y-2">
          <Link
            to="/setting"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#B0B3B8] hover:bg-[#2C2F33] dark:hover:bg-gray-700 transition-colors"
          >
            <Settings size={20} className="text-[#0866FF]" />
            <span>Settings</span>
          </Link>
          <Link
            to="/help"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#B0B3B8] hover:bg-[#2C2F33] dark:hover:bg-gray-700 transition-colors"
          >
            <HelpCircle size={20} className="text-[#0866FF]" />
            <span>Help & Support</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
