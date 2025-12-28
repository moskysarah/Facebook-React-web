export default function Souvenirs() {
  return (
    <div className="flex flex-col items-center  justify-center gap-4 p-6 bg-[#242526] w-180 rounded-lg shadow-md">
      <img src="public/profil/tetra_home_header-2x.png" alt="souvenir" className="w-160 h-30 rounded-lg" />
      <h2 className="text-xl font-bold text-white">Aucun souvenir aujourd’hui</h2>
      <p className="text-gray-400 leading-[1.1] ">Il n’y a aucun souvenir à voir ou à partager pour aujourd’hui,mais nous vous </p>
      <p className="text-gray-400 leading-[1.1] ">avertirons quand vous aurez des souvenirs à revoir.</p>
    </div>
  )
}

