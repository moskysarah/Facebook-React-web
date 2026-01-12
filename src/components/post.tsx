type PostProps = {
  avatar: string;
  name: string;
  time: string;
  text: string;
  image?: string;
  likes: string;
  comments: string;
  shares: string;
  views: string;
  color?: string;
};

export default function Post({ avatar, name, time, text, image, likes, comments, shares, views }: PostProps) {
  return (
    <div className="bg-[#252728] w-full max-w-[38rem] md:max-w-[40rem] lg:max-w-[50rem] rounded-xl p-3 mt-4">
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
        <img src={image} alt="post" className="w-full max-w-[38rem] mt-3 rounded-lg" />
      )}

      {/* Stats */}
      <div className="flex justify-between mt-3 text-gray-400 text-sm">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
          </svg>
          {likes}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
          </svg>
          {comments}
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
          {shares}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
          {views}
        </span>
      </div>
    </div>
  );
}
