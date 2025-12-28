// 📌 Post.jsx
export default function Post({ avatar, name, time, text, image }) {
  return (
    <div className="bg-[#252728] rounded-xl p-3 mt-4">
      {/* Header du post */}
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <span className="text-gray-400 text-sm">{time}</span>
        </div>
      </div>

      {/* Texte */}
      <p className="text-gray-200 text-sm mt-2">{text}</p>

      {/* Image si dispo */}
      {image && (
        <img src={image} alt="post" className="w-full mt-3 rounded-lg" />
      )}
    </div>
  );
}
