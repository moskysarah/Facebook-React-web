import AddCard from "../components/addCard";
import Trending from "../components/treding";
import Post from "../components/post.tsx";

 export default function Home() {
  return (
    <div className="flex flex-col gap-4 ">
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
        name="Sarah Ngoya"
        time="Just now"
        text="Happy Birthday to my self !"
        image="/profil/Gemini_Generated_Image_88o2go88o2go88o2.png"
        likes="1,2 K"
        comments="235"
        shares="271"
        views="6,9 M"
      />
      <Post
        avatar="/profil/IMG_20250416_085619.jpg"
        name="Sarah Ngoya"
        time="Just now"
        text="Le léopard qualifiée à la coupe du monde
        et le nigeria accuse la RDC de sélectionner les joueurs congolais aux doubles nationalités non légale pour la Fifa !"
        image="/profil/leopard.jpg"
        likes="1,2 K"
        comments="235"
        shares="271"
        views="6,9 M"
      />
      <Post
        avatar="/profil/IMG_20250416_085619.jpg"
        name="Sarah Ngoya"
        time="Just now"
        text="Une comparaison qui se fait entre Micheal jackson et Chris Brown
        en ce que je sache micheal a vendu des milliers d'album dépuis le Jackson 5 alors qu'il n'avait que 10 ans et Chris Brown a du mal à vendre plus de 100 000 albums."
        image="/profil/videoframe_29230.png"
        likes="1,2 K"
        comments="235"
        shares="271"
        views="6,9 M"
      />
      <Post
        avatar="/profil/IMG_20250416_085619.jpg"
        name="Sarah Ngoya"
        time="Just now"
        text="Jujutsu Kaisen Exclusivité 2025 à Showbuzz!"
        image="/profil/jujutsu kaisen.jpg"
        likes="1,2 K"
        comments="235"
        shares="271"
        views="6,9 M"
      />

    </div>
  );
}
