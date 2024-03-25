import Header from "../components/Header";
import Link from "next/link";

const Work = () => {
  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center text-lg font-bold mb-2">Work</div>
      <div className="flex flex-col max-w-60 mx-auto">
        <ul className="flex flex-col gap-4">
          <li>
            <div className=" text-base font-bold mb-2">Design</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="Work\\Mark2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Mark2
                </Link>
              </li>
              <li>
                <Link
                  href="Work\\Mark2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Thesis
                </Link>
              </li>
              {/* <li><Link href="DeepDives\\.html">CourseMax</Link></li> */}
              {/* <li><Link href="DeepDives\\.html">Parley</Link></li> */}
            </ul>
          </li>
          <li>
            <div className=" text-base font-bold mb-2">Content</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://pruthvil.substack.com?utm_source=navbar&utm_medium=web&r=nuc5z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Substack
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/pruthvill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Insta
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@pruthvil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://podcasters.spotify.com/pod/show/ruthveda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Podcast
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className=" text-base font-bold mb-2">Software</div>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://github.com/pruthvill/Mark3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
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
