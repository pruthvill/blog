import Header from "../components/Header";
import Link from "next/link";

const Work = () => {
  return (
    <div className="pruthvil flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex-grow">
        <div className="max-w-[220px] mx-auto">
          <ul className="flex flex-col gap-4">
            <li>
              <div className="text-sm font-bold mb-2">Design</div>
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href="https://www.figma.com/file/7wcm8knluIM36PKYTUHzx6/Pruthvil---Portfolio?type=design&node-id=21-2265&mode=design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="text-sm font-bold mb-2">Content</div>
              <ul className="list-disc list-inside">
                {[
                  { label: "Substack", href: "https://pruthvil.substack.com?utm_source=navbar&utm_medium=web&r=nuc5z" },
                  { label: "Insta", href: "https://www.instagram.com/pruthvill/" },
                  { label: "Youtube", href: "https://www.youtube.com/@pruthvil" },
                  { label: "Podcast", href: "https://podcasters.spotify.com/pod/show/ruthveda" },
                ].map(({ label, href }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-sm font-bold mb-2">Software</div>
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href="https://github.com/pruthvill/Mark3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                  >
                    Mark
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Work;
