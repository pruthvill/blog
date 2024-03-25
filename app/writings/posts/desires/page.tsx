import Header from "@/app/components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil  ">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="max-w-xl mx-auto ">
        {/* Section title */}
        <h2 className="text-center text-lg font-bold mb-2 ">
          Desires
        </h2>

        {/* Content */}
        <div className="flex flex-col mx-auto  ">
          <ul className="flex flex-col gap-4 ">
            <li>
              <p className="mb-4 ">
                Rene Girard's theory of Mimetic desire (born with no preferences) is one of the most fascinating theories I have ever come across. It suggests that most, if not all, of our desires do not come from ourselves but from others and the situations we are in.
              </p>

              <p className="mb-4 ">
                Over the past 1-1.5 years, I have seen a massive change in how I view life and what I want from it because of that theory. I remember when I was a child, all I wanted to do when I grew up was buy all the DVDs of the cartoons that I used to like and watch them for the rest of my life. I wanted to read all the books I could find, and I would even finish most of them in one sitting. I wanted to become a scientist and spend all my time working with robots and researching about immortality. The 12-year-old me was so ambitious and optimistic. If he could see me somehow, he would despise what I have become.
              </p>

              <p className="mb-4 ">
                But I have realized that our desires do not stay the same over time. I think it's easy to forget that we are not the same people we were 5 years ago; we are not even the same people we were a year ago. As we grow older and become more logical, the world just starts becoming less magical. (Or maybe all of this is just coping to console the 12-year-old me).
              </p>

              <p className="mb-4 ">
                People think that they will work hard in their 20s, make a lot of money, and then retire in their 30s and then pursue their passions, move into a calm place, and just chill for the rest of their lives. But when the time comes, even if they have made enough money, they realize that they don't want to do it now, maybe because they have grown past that desire and now they want to pursue something else, or they have some kind of responsibilities like family or their professional career.
              </p>

              <p className="">
                So, do what you want to do now because then you won't want to. It's okay to have wants that others don't understand.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;