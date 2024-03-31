import Link from "next/link";
import localFont from '@next/font/local'
import { IBM_Plex_Mono


} from "next/font/google";


const chaney = localFont({
  src: "../../public/fonts/chaney.ttf",
});
const scp = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600"
});



const Header = () => {
  return (
    <div className="mx-auto mt-2 ">
      <header className="mx-auto flex flex-col text-center ">
        <div className="mx-auto flex flex-col justify-center mb-2 ">
          <h1 className="text-xl font-bold mb-2 ">
            
            <span >

            <Link href="/">Pruthvil</Link>
                        </span>

          </h1>
          <nav>
          <ul className="flex justify-center space-x-2 text-lg gap-2 ">
            <span className="">|</span>
            <li>
              <Link href="/writings">Writings</Link>
            </li>
        
              <span className="">|</span>
            
            <li>
              <Link href="/work">Work</Link>
            </li>
            
              <span className="">|</span>
            
            <li>
              <Link href="/media">Media</Link>
            </li>
            <span className="">|</span>
          </ul>
        </nav>
        </div>
       
      </header>
    </div>
  );
};

export default Header;