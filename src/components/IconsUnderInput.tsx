

export default function IconsUnderInput() {
  return (
    <div className="flex justify-around items-center border-t border-gray-700 mt-2 pt-2">
      {/* Vidéo en direct */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/profil/video icon red.png"
          alt="video icon" 
          className="w-5 h-5"
        />
        <h3 className="text-sm text-gray-300">Vidéo en direct</h3>
      </div>

      {/* Photo/Vidéo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/profil/photo icon.png"
          alt="photo icon" 
          className="w-5 h-5"
        />
        <h3 className="text-sm text-gray-300">Photo/Vidéo</h3>
      </div>

      {/* Humeur/Activité */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img 
          src="/profil/emoji.png"
          alt="emoji icon" 
          className="w-5 h-5"
        />
        <h3 className="text-sm text-gray-300">Humeur/Activité</h3>
      </div>
    </div>
  );
}
