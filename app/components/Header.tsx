'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="mx-auto mt-2 ">
      <header className="mx-auto flex flex-col text-center">
        <div className="mx-auto flex flex-col justify-center mb-2">
          <h1 className=" font-bold mb-2" style={{ fontSize: '18px' }}>
            <span>
              <Link href="/" className="">
                Pruthvil
              </Link>
            </span>
          </h1>
          <nav style={{ fontSize: '16px' }}>
            <ul className="flex justify-center space-x-2 gap-2">
              <span className="">|</span>
              <li>
                <Link
                  href="/writings"
                  className={`${pathname === '/writings' ? "" : ""}`}
                >
                  Writings
                </Link>
              </li>
              <span className="">|</span>
              <li>
                <Link
                  href="/work"
                  className={`${pathname === '/work' ? "" : ""}`}
                >
                  Work
                </Link>
              </li>
              <span className="">|</span>
              <li>
                <Link
                  href="/media"
                  className={`${pathname === '/media' ? "" : ""}`}
                >
                  Media
                </Link>
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