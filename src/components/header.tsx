
import SearchInputHeader from "./seachInputHeader"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

interface HeaderProps {
  onToggleSidebar: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  return (
     <div className="fixed top-0 left-0 right-0 z-60 bg-[#252728] border-1  border-[#3B3B3B] dark:bg-gray-800 m-0 p-0 flex items-center">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 text-white hover:bg-[#3C3F43] dark:hover:bg-gray-700 rounded"
        >
          <Menu size={24} />
        </button>
          <SearchInputHeader />
          <button
            onClick={toggleTheme}
            className="p-2 text-white hover:bg-[#3C3F43] dark:hover:bg-gray-700 rounded ml-auto"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
       </div>
      )
    }
