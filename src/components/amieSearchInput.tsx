import  { Search } from "lucide-react"

function AmieSearchInput() {
    return (
            <div className="flex items-center gap-2 bg-[#333334] p-2 rounded-full w-89 h-10">
                  <Search size={22} className="text-[#E2E5E9]" />
                      <input  type="text" placeholder="Recherche"  
                          aria-label="Recherche sur Facebook"
                          className=" bg-gray-200 outline-none text-[#E2E5E9] w-full"
                       />

                  </div>
        );
    }
    
    export default AmieSearchInput;