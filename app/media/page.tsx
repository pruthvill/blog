import Header from "../components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil">
      <Header />
      <div className="text-center  font-bold mb-2" style={{ fontSize: '16px' }}></div>
      <div className="flex flex-col   max-w-[220px]  mx-auto " style={{ fontSize: '14px' }}>
        <ul className="flex flex-col gap-4">
          <li>
            <h3 className="text-base font-bold mb-2 " style={{ fontSize: '14px' }}>Youtube</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://www.youtube.com/playlist?list=PL4A-P6Ov1Tu36Iq3c3aT6ocPuQ8I3JyPh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF] transition-colors underline"
                >
                  Primereh
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2" style={{ fontSize: '14px' }}>Books</h3>
            <ul className="list-disc list-inside">
              <li>
                <Link
                  href="https://goodreads.com/pruthvil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF] transition-colors underline"
                >
                  Goodreads
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <h3 className="text-base font-bold mb-2" style={{ fontSize: '14px' }}>Music</h3>
            <ul className="list-disc list-inside ">
              <li>
                <Link
                  href="https://open.spotify.com/user/2z8vz76kx7mgxy6q2cfwia45f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#0000FF] transition-colors underline"
                >
                  Spotify
                </Link>
              </li>
             
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2" style={{ fontSize: '14px' }}>Podcasts</h3>
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
              <li>Theory of anything</li>
              <li>How to take over the world</li>
              <li>Eternalised</li>
              <li>Lifespan</li>
              <li>Masters of Scale</li>
              <li>American Optimist</li>
              <li>Founders</li>
            </ul>
          </li>
          <li>
            <h3 className="text-base font-bold mb-2" style={{ fontSize: '14px' }}>Performance Enhacement</h3>
            <ul className="list-disc list-inside">
            <li>Decison Making</li>
            <li>Box Breathing</li>
            <li>Temptation bundling</li>
            </ul>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Media;
