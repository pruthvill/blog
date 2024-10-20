import Header from "../components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil flex flex-col items-center min-h-screen">
      <Header />
      <main className="w-full flex-grow">
        <div className="max-w-[220px] mx-auto">
          <ul className="flex flex-col gap-4">
            <li>
              <h3 className="text-sm font-bold mb-2">Youtube</h3>
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href="https://www.youtube.com/playlist?list=PL4A-P6Ov1Tu36Iq3c3aT6ocPuQ8I3JyPh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                  >
                    Primereh
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-sm font-bold mb-2">Books</h3>
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href="https://goodreads.com/pruthvil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                  >
                    Goodreads
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-sm font-bold mb-2">Music</h3>
              <ul className="list-disc list-inside">
                <li>
                  <Link
                    href="https://open.spotify.com/user/2z8vz76kx7mgxy6q2cfwia45f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#0000FF] transition-colors underline text-sm"
                  >
                    Spotify
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-sm font-bold mb-2">Podcasts</h3>
              <ul className="list-disc list-inside text-sm">
                {[
                  "Tim Ferris Show",
                  "The Portal",
                  "Conversations with Tyler",
                  "JRE",
                  "Hardcore History",
                  "The Knowledge Project",
                  "Naval",
                  "Philosophize This",
                  "Origins",
                  "Theory of anything",
                  "How to take over the world",
                  "Eternalised",
                  "Lifespan",
                  "Masters of Scale",
                  "American Optimist",
                  "Founders",
                ].map((podcast, index) => (
                  <li key={index}>{podcast}</li>
                ))}
              </ul>
            </li>
            <li>
              <h3 className="text-sm font-bold mb-2">Performance Enhancement</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Decision Making</li>
                <li>Box Breathing</li>
                <li>Temptation bundling</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Media;