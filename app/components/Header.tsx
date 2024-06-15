'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="mx-auto mt-2 flex flex-col items-center text-center w-fit">
      <div className="flex flex-col items-center mb-2">
        <h1 className="font-bold mb-2" style={{ fontSize: '18px' }}>
          <span>
            <Link href="/">Pruthvil</Link>
            
          </span>
          
        </h1>
        <div className="w-full border-b border-gray-300 mb-2"></div>

        <nav style={{ fontSize: '16px' }}>
          <ul className="flex justify-center space-x-2 gap-8">
            <li className="w-20">
              <Link
                href="/writings"
                className={`${pathname === '/writings' ? 'text-[#0000FF] ' : ''}`}
              >
                Writings
              </Link>
            </li>
            <li className="w-20">
              <Link
                href="/work"
                className={`${pathname === '/work' ? 'text-[#0000FF] ' : ''}`}
              >
                Work
              </Link>
            </li>
            <li className="w-20">
              <Link
                href="/media"
                className={`${pathname === '/media' ? 'text-[#0000FF] ' : ''}`}
              >
                Media
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full border-b border-gray-300"></div>
    </header>
  );
};

export default Header;