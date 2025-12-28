import StoryCard from "./storyCard";
import StoryCreate from "./storyCreate";

export default function Stories() {
  return (
    <div className="flex gap-3  w-[28rem] bg-[#1C1C1D] rounded-xl  mt-12 ">
      {/* Story spéciale pour créer */}
      <StoryCreate 
        src="/profil/IMG_20250416_085619.jpg" 
        alt="Photo de profil" 
        label="Créer une story"
      />

      {/* Autres stories */}
      <StoryCard 
        src="https://i.pinimg.com/736x/2c/8d/98/2c8d982cce4a06689db0b051c3f33521.jpg" 
        avatar="https://i.pinimg.com/1200x/3a/22/05/3a22056b21a438656fb092309fe39449.jpg"
        alt="Story de Bruce willis"
        label="Bruce Willis" 
      />
      <StoryCard 
        src="https://i.pinimg.com/736x/f2/81/ac/f281acfb077e5e821e2619e2b7f61e33.jpg" 
        avatar="https://i.pinimg.com/736x/f9/92/bf/f992bf0af6cc357debd10190d745c8e2.jpg"
        alt="Story de Denzel washington"
        label="Denzel Washington" 
      />
      <StoryCard 
        src="https://i.pinimg.com/1200x/54/cc/10/54cc10658c3d1aa181095d473ed43ed0.jpg" 
        avatar="https://i.pinimg.com/736x/5b/80/ff/5b80ff30e935280046cc8a04d634918e.jpg"
        alt="Story de micheal jackson"
        label="Micheal Jackson" 
      />
    </div>
  );
}
