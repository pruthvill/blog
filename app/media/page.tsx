import Header from "../components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center text-lg font-bold mb-2">Media</div>
      <div className="flex flex-col  max-w-60 mx-auto ">
        <ul className="flex flex-col gap-4">
          <li>
            <h3 className="text-base font-bold mb-2 ">Youtube</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://www.youtube.com/playlist?list=PL4A-P6Ov1Tu36Iq3c3aT6ocPuQ8I3JyPh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Primereh
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2">Books</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://goodreads.com/pruthvil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Goodreads
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2">Libraries</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="/libraries/bret"
                  className="text-black hover:underline"
                >
                  Bret Victor
                </Link>
              </li>
              <li>
                <Link
                  href="/libraries/patrick"
                  className="text-black hover:underline"
                >
                  Patrck Collison
                </Link>
              </li>
              <li>
                <Link
                  href="/libraries/a16z"
                  className="text-black hover:underline"
                >
                  A16Z
                </Link>
              </li>
              <li>
                <Link
                  href="/libraries/wolfram"
                  className="text-black hover:underline"
                >
                  Stephen Wolfram
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2">Music</h3>
            <ul className="list-disc list-inside ">
              <li>
                <Link
                  href="https://open.spotify.com/user/2z8vz76kx7mgxy6q2cfwia45f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Spotify
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/playlist?list=PL4A-P6Ov1Tu35O0cLw1GrPniRxqLLK1oE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 transition-colors underline"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2">Podcasts</h3>
            <ul className="list-disc list-inside">
              <li>Tim Ferris Show</li>
              <li>The Portal</li>
              <li>Conversations with Tyler</li>
              <li>JRE</li>
              <li>Hardcore History</li>
              <li>The Knowledge Project</li>
              <li>Naval</li>
              <li>Philosophize This</li>
              <li>Origins</li>
              <li>How to take over the world</li>
              <li>Eternalised</li>
              <li>Lifespan</li>
              <li>Masters of Scale</li>
              <li>American Optimist</li>
              <li>Founders</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Media;
