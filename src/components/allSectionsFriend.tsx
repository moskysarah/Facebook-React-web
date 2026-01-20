
// import React from 'react';

interface FriendCardProps {
    image: string;
    name: string;
    followers: string;
}

function FriendCard({ image, name, followers }: FriendCardProps) {
    return (
        <div className="shadow-lg p-4 bg-[#242526] rounded-lg w-full max-w-65 h-[26rem] border-1 border-gray-500 ">
            <img src={image} alt={name} className="rounded-t-lg w-full h-60 object-cover" />
            <h3 className="text-center mt-3 font-semibold text-white">{name}</h3>
            <p className="text-center text-gray-400">Suivie par {followers}</p>
            <div className="flex flex-col gap-2">
                <button className="bg-blue-900 w-full h-8 rounded-lg mt-2 cursor-pointer hover:bg-blue-800"><span className="text-blue-200 font-semibold text-sm">Ajouter </span></button>
            </div>
        </div>
    );
}

function AllSectionFriend() {
    const friends: FriendCardProps[] = [
        { image: "https://i.pinimg.com/736x/c2/3f/3f/c23f3fcc2cf90c4999877390be1d23a5.jpg", name: "Jonathan Gray", followers: "1 M" },
        { image: "https://i.pinimg.com/736x/20/d0/7c/20d07c7cb2623be3a9bc542f097eb47e.jpg", name: "Damson Idriss", followers: "20 M" },
        { image: "https://i.pinimg.com/736x/a8/de/f3/a8def35042e8ba7d0e3c024b4c4aef9a.jpg", name: "Blaise Miguel", followers: "10 K" },
        { image: "https://i.pinimg.com/1200x/99/88/18/998818c88c562213348721eb7836abce.jpg", name: "Maria Gruss", followers: "50 K" },
        { image: "https://i.pinimg.com/1200x/ca/12/26/ca1226a72850d83532dff1dacd6042ae.jpg", name: "Vanessa Milan", followers: "20 K" },
        { image: "https://i.pinimg.com/736x/df/43/43/df43432eb483028cb51c7e21e887af95.jpg", name: "Sarah Jonhson", followers: "30 K" },
        { image: "https://i.pinimg.com/736x/e3/38/34/e33834e34862a35a055990b39ddc81d1.jpg", name: "Rihanna Cosmetic", followers: "40 M" },
        { image: "https://i.pinimg.com/1200x/d2/9e/76/d29e761eeebb812186f02f5b16b8b0f1.jpg", name: "Carmel Lee", followers: "80 K" },
    ];

    return (
        <div className="grid grid-cols-4 gap-2 shadow-lg p-4  rounded-lg   justify-center">
            {friends.map((friend, index) => (
                <FriendCard key={index} image={friend.image} name={friend.name} followers={friend.followers} />
            ))}
        </div>
    );
}

export default AllSectionFriend;