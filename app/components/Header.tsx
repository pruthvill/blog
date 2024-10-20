"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 ">
      <div className="w-full max-w-[220px] mx-auto mt-2 flex flex-col items-center text-center mb-4">
        <div className="flex flex-col items-center mb-2">
          <h1 className="font-bold mb-1" style={{ fontSize: "16px" }}>
            <span>
              <Link href="/">Pruthvil</Link>
            </span>
          </h1>
        </div>

        <nav style={{ fontSize: "14px" }} className="flex flex-col items-center font-semibold">
          <div className="w-full border-b border-gray-300 mb-2"></div>
          <ul className="flex justify-center space-x-2 gap-8">
            <NavItem href="/writings" currentPath={pathname}>
              Writings
            </NavItem>
            <NavItem href="/work" currentPath={pathname}>
              Work
            </NavItem>
            <NavItem href="/media" currentPath={pathname}>
              Media
            </NavItem>
          </ul>
          <div className="w-full border-b border-gray-300 mt-1 "></div>
        </nav>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, currentPath, children }) => {
  const isActive = currentPath.startsWith(href);

  return (
    <li className="w-20">
      <Link href={href} className={isActive ? "text-[#0000FF]" : ""}>
        {children}
      </Link>
    </li>
  );
};

export default Header;
