import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

type StoryCreateProps = {
  src: string
  alt?: string
  label?: string
  className?: string
}

export default function StoryCreate({
  src,
  alt = "Créer une story",
  label = "Créer une story",
}: StoryCreateProps) {
  return (
    <div className="relative w-40 h-52 rounded-xl overflow-hidden bg-[#252728] cursor-pointer hover:scale-105 transition">
      {/* Image de fond */}
      <img src={src} alt={alt} 
        className="w-full h-3/4 object-cover" 
      />
      
      {/* Bouton + */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#0866FF] rounded-full p-2 border-4 border-[#252728]">
        <Link to="/createStory">
          <Plus size={20} 
              className="text-white" 
          />
        </Link>
      </div>

      {/* Label */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm font-semibold">
        {label}
      </div>
    </div>
  )
}
