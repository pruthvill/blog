import Header from "../components/Header";
import Link from "next/link";

const Writings = () => {
  const writingItems = [
    { title: "Desires", href: "/writings/posts/desires" },
    { title: "Thinking is easy, Information architecture is hard.", href: "/writings/posts/thinking" },
    { title: "Building life bottom up.", href: "/writings/posts/bottom-up" },
    { title: "Emotions are about emotions.", href: "/writings/posts/emotions" },
    { title: "How to get FOMO?", href: "/writings/posts/fomo" },
    { title: "People's people.", href: "/writings/posts/people" },
    { title: "What it means for a day to pass.", href: "/writings/posts/day" },
    { title: "Environmental Design.", href: "/writings/posts/env-design" },
    { title: "What are you optimizing for?", href: "/writings/posts/optimizing" },
    { title: "On epiphanies.", href: "/writings/posts/epiphanies" },
    { title: "Questions I like to think about.", href: "/writings/posts/questions" },
    { title: "Get drowned in stories, experiences and people.", href: "/writings/posts/drowned" },
    { title: "Experiments Ep-1: No electricity.", href: "/writings/posts/eep1" },
    { title: "Solitude, Reflection and losing yourself.", href: "/writings/posts/srl" },
    { title: "Don't play lost games.", href: "/writings/posts/games" },
    { title: "On Advices", href: "/writings/posts/advices" },
  ];

  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center text-lg font-bold mb-2 ">Writings</div>
      <div className="flex flex-col max-w-60 mx-auto ">
        <ul className="flex flex-col gap-4 ">
          {writingItems.map(({ title, href }, index) => (
            <li key={index}>
              <div className="flex items-center ">
                <span className="text-black   font-bold text-base mr-2">&#8226;</span>
                <Link href={href} className="text-black hover:text-[#0000FF] transition-colors underline">
                  {title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Writings;