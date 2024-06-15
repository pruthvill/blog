import Header from "../components/Header";
import Link from "next/link";

const Work = () => {
  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center text-lg font-bold mb-2"  style={{ fontSize: '16px' }}></div>
      <div className="flex flex-col max-w-[220px] mx-auto"  style={{ fontSize: '14px' }}>
        <ul className="flex flex-col gap-4">
          <li>
            <div className="  font-bold mb-2">Design</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://www.figma.com/file/7wcm8knluIM36PKYTUHzx6/Pruthvil---Portfolio?type=design&node-id=21-2265&mode=design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF]  transition-colors underline"
                >
                  Portfolio
                </Link>
              </li>
           
              {/* <li><Link href="DeepDives\\.html">CourseMax</Link></li> */}
              {/* <li><Link href="DeepDives\\.html">Parley</Link></li> */}
            </ul>
          </li>
          <li>
            <div className="  font-bold mb-2">Content</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://pruthvil.substack.com?utm_source=navbar&utm_medium=web&r=nuc5z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF]  transition-colors underline"
                >
                  Substack
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/pruthvill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF]  transition-colors underline"
                >
                  Insta
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@pruthvil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF] transition-colors underline"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://podcasters.spotify.com/pod/show/ruthveda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF]  transition-colors underline"
                >
                  Podcast
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="  font-bold mb-2">Software</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://github.com/pruthvill/Mark3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF] transition-colors underline"
                >
                  Mark2
                </Link>
              </li>
              {/* <li><Link href="DeepDives\\.html">CourseMax</Link></li> */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
