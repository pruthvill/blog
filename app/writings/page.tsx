import Header from "../components/Header";
import Link from "next/link";

const Writings = () => {
  const writingItems = [
    { title: "Desires", href: "/writings/posts/desires" },
    {
      title: "Thinking is easy, Information architecture is hard.",
      href: "/writings/Thinking.html",
    },
    { title: "Building life bottom up.", href: "/writings/Building.html" },
    { title: "Emotions are about emotions.", href: "/writings/Emotions.html" },
    { title: "How to get FOMO?", href: "/writings/FOMO.html" },
    { title: "People's people.", href: "/writings/People.html" },
    {
      title: "What it means for a day to pass.",
      href: "/writings/Passing-Days.html",
    },
    {
      title: "Environmental Design.",
      href: "/writings/Environmental-Design.html",
    },
    {
      title: "What are you optimizing for?",
      href: "/writings/Optimization.html",
    },
    { title: "On epiphanies.", href: "/writings/Epiphanies.html" },
    {
      title: "Questions I like to think about.",
      href: "/writings/Questions.html",
    },
    {
      title: "Get drowned in stories, experiences and people.",
      href: "/writings/Get-drowned.html",
    },
    {
      title: "Experiments Ep-1: No electricity.",
      href: "/writings/Experiments-Ep-3.html",
    },
    {
      title: "Solitude, Reflection and losing yourself.",
      href: "/writings/Solitude.html",
    },
    { title: "Don't play lost games.", href: "/writings/Lost-games.html" },
  ];

  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center text-lg font-bold mb-2">Writings</div>
      <div className="flex flex-col max-w-60  mx-auto">
        <ul className="flex flex-col gap-4">
          {writingItems.map(({ title, href }, index) => (
            <li key={index}>
              <div className="flex">
                <span className="list-disc list-inside text-blue-500 mr-2">
                </span>
                <Link
                  href={href}
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
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
