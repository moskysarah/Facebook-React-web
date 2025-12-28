import { Search } from "lucide-react"

export default function ProfilInput() {
  return (
    <div className="flex flex  ml-4  gap-2 ">
            <img src="/profil/IMG_20250416_085619.jpg"
                alt="Profil"
                className="w-10 h-10 rounded-full object-cover"
            />
              <div className="flex items-center gap-2 bg-[#333334] p-2 rounded-full w-118 h-10">
                  <Search size={22} className="text-[#E2E5E9]" />
                      <input  type="text" placeholder="Quoi de neuf, Sarah ?"  
                          aria-label="Recherche sur Facebook"
                          className="bg-transparent outline-none text-[#E2E5E9] w-full"
                       />

              </div>
              
    </div>
  )
}
