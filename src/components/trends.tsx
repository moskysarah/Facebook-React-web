import AddCard from "../components/addCard";
import Trending from "../components/treding";
import CardThree from "./cardThree";
import Post from "../components/post.tsx";
 export default function Trends() {
  return (
    <div className=" flex flex-col w-450px h-10 gap-4 ">
      <Trending />
      <AddCard
        profileName="Keen Games"
        profileImage="https://i.pinimg.com/280x280_RS/22/23/37/222337d6797be9740ffb639e14ffb0ea.jpg"
        text="Shape your world. Enshrouded puts the power in your hands. Build, conquer & leave your mark on history. ⚒️"
        video="/videos/enshrouded.mp4"
        link="enshrouded.com"
        media="/media/enshrouded.jpg"
        linkTitle="ENSHROUDED.COM"
        linkSubtitle="Get your copy today and play now!"
        likes="6,3 K"
        comments="235"
        shares="271"
        views="6,9 M"
      />

      <Post
        avatar="/profil/IMG_20250416_085619.jpg"
        name="Your Name"
        time="Just now"
        text="This is my new post!"
        image="/profil/Gemini_Generated_Image_88o2go88o2go88o2.png"
        likes="0"
        comments="0"
        shares="0"
        views="0"
      />

      <CardThree
        profileName="Keen Games"
        text="Shape your world. Enshrouded puts the power in your hands. Build, conquer & leave your mark on history. ⚒️"
        media="/media/enshrouded.jpg"
        link="enshrouded.com"
        linkTitle="ENSHROUDED.COM"
        linkSubtitle="Get your copy today and play now!"
        likes="6,3 K"
        comments="235"
        shares="271"
        views="6,9 M"
        video="/videos/enshrouded.mp4"
      />

    </div>
  );
}