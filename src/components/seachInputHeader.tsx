import { Search } from "lucide-react"
import IconsHeaderLink from "./iconsHeaderLink"
import IconsHeaderSide from "./iconsHeaderSide"
import { Link } from "react-router-dom";



export default function SearchInputHeader() {
  return (
    <div className="bg-[#252728] p-4 flex justify-between items-center">

      <div className="flex gap-2 items-center">

        <Link to="/home">
              <img src="/profil/facebook logo 1.png"
                  alt="logo facebook"
                  className="w-10 h-10 rounded-full"
              />
        </Link>
        <div className="flex items-center gap-2 bg-[#333334] p-2 rounded-full w-60 h-10">
          <Search size={22} className="text-[#E2E5E9]" />
          <input  type="text" placeholder="Recherche sur Facebook"
            aria-label="Recherche sur Facebook"
            className="bg-transparent outline-none text-[#E2E5E9] w-full"
          />
        </div>
      </div>

      <IconsHeaderLink />

      <IconsHeaderSide />

      
    </div>
  )
}


