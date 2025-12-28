export default function Groupes() {
  return (
    <div className="flex flex-col items-center  justify-center gap-4 p-6 bg-[#242526] w-180 h-60 rounded-lg shadow-md">
      
      <h2 className="text-xl font-bold text-white">Vous êtes à jour</h2>
      <p className="text-gray-400">Revenez plus tard pour du nouveau.</p>
      <button className="bg-blue-600 cursor-pointer hover:bg-blue-500 text-white rounded-lg w-[13rem]  h-9">Découvrir plus de groupes</button>
    </div>
  )
}
