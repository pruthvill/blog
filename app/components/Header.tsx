import Link from "next/link";

const Header = () => {
  return (
    <div className="mx-auto mt-2 ">
      <header className="mx-auto flex flex-col text-center ">
        <div className="mx-auto flex flex-col justify-center mb-2 ">
          <h1 className="text-2xl font-bold mb-2">
            <Link href="/">pruthvil</Link>

          </h1>
          <nav>
          <ul className="flex justify-center space-x-2 gap-2 ">
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