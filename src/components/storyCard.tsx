type StoryCardProps = {
  src: string
  avatar: string
  alt?: string
  label: string
  className?: string
}

export default function StoryCard({ src, avatar, alt = "story", label }: StoryCardProps) {
  return (
    <div className="relative w-38 h-52 rounded-xl overflow-hidden  cursor-pointer hover:scale-105 transition">
      {/* Image de story */}
      <img src={src} alt={alt} 
          className=" object-cover w-52 h-52 "
       />

      {/* Avatar en haut */}
      <img
        src={avatar}
        alt={`${label} avatar`}
        className="absolute top-2 left-2 w-10 h-10 rounded-full border-2 border-[#0866FF] object-cover"
      />

      {/* Label en bas */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm font-semibold">
        {label}
      </div>
    </div>
  )
}
