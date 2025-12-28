import PicturePublic from "./picturePublic"

type AdCardProps = {
  profileName: string
  sponsored?: boolean
  text: string
  media: string
  link: string
  linkTitle: string
  linkSubtitle: string
  likes: string
  comments: string
  shares: string
  views: string
  video: string
}

export default function CardThree({
  profileName,
  sponsored = true,
  text,
  media,
  linkTitle,
  linkSubtitle,
  likes,
  comments,
  shares,
  views,
}: AdCardProps) {
  return (
    <div className="w-[450px] bg-[#242526] rounded-xl shadow-md p-3 text-white">
      {/* Header */}
      <div className="flex items-center gap-3">
        <PicturePublic />
        <div>
          <p className="font-semibold">{profileName}</p>
          {sponsored && <span className="text-gray-400 text-sm">Sponsorisé</span>}
        </div>
      </div>

      {/* Texte */}
      <p className="mt-3">{text}</p>

      {/* Media */}
      <img src={media} alt="media" className="mt-3 rounded-lg w-full" />

      {/* Lien */}
      <div className="mt-3 bg-[#3A3B3C] rounded-lg p-3">
        <p className="text-xs text-gray-400">{linkTitle}</p>
        <p className="font-semibold">{linkSubtitle}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-between mt-3 text-gray-400 text-sm">
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
        <span>↗ {shares}</span>
        <span>👀 {views}</span>
      </div>
    </div>
  )
}
