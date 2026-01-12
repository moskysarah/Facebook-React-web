import Stories from "./stories";
import Post from "./post";

export default function Feed() {
  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
      <Stories />
      <Post
        avatar="https://i.pinimg.com/736x/2c/8d/98/2c8d982cce4a06689db0b051c3f33521.jpg"
        name="Bruce Willis"
        time="2h"
        text="Hello everyone! Just finished shooting a new movie. Can't wait to share more details soon."
        image="https://i.pinimg.com/736x/f2/81/ac/f281acfb077e5e821e2619e2b7f61e33.jpg"
        likes="1.2K"
        comments="89"
        shares="23"
        views="5.6K"
      />
      <Post
        avatar="https://i.pinimg.com/736x/f9/92/bf/f992bf0af6cc357debd10190d745c8e2.jpg"
        name="Denzel Washington"
        time="4h"
        text="Reflecting on the power of storytelling in cinema. What's your favorite movie quote?"
        likes="2.5K"
        comments="156"
        shares="45"
        views="8.9K"
      />
      <Post
        avatar="https://i.pinimg.com/736x/5b/80/ff/5b80ff30e935280046cc8a04d634918e.jpg"
        name="Michael Jackson"
        time="1d"
        text="Music is my life. What's the song that always brings a smile to your face?"
        image="https://i.pinimg.com/1200x/54/cc/10/54cc10658c3d1aa181095d473ed43ed0.jpg"
        likes="3.7K"
        comments="234"
        shares="67"
        views="12K"
      />
    </div>
  );
}
