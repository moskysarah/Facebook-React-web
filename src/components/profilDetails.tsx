export default function ProfilDetails() {
  return (
      <div>

     
        <div className="flex flex-col items-center  justify-center gap-4 p-6 bg-black cursor-pointer  hover:bg-[#242526]  w-200 h-80 rounded-lg shadow-md">
          
           <button className="bg-white ml-[32rem] mt-[15rem] cursor-pointer hover:bg-gray-100 text-black rounded-lg w-[14rem]  h-[2rem] font-semibold">Ajouter une photo de profil</button>

        </div>
        <div  className=" mt-6 ">
                <button className="bg-blue-600 ml-[29rem] cursor-pointer hover:bg-blue-500 text-white rounded-lg w-[10rem]  h-9"><span className="font-semibold ">+</span>Ajouter à la story</button>
                <button className="bg-[#242526] ml-2 cursor-pointer hover:bg-gray-700 text-white rounded-lg w-[10rem]  h-9">Modifier le profil</button>

        </div>
        <div className="">

        </div>
      </div>
  )
}

