// 📌 Trending.jsx
import ProfilInput from "../components/profilInput";
import IconsUnderInput from "./IconsUnderInput";
import Stories from "../components/stories";

export default function Trending() {
  return (
    <div className="bg-[#252728] rounded-xl w-[39rem] h-[8rem] p-3">
      {/* Champ input */}
      <ProfilInput />

      {/* Icônes en dessous */}
      <IconsUnderInput />
      <Stories />
    </div>
  );
}
