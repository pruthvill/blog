import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="w-full max-w-screen-sm px-4">
        <div className="text-center text-lg font-bold">
          <Link
            href="https://twitter.com/pruthvill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#0000FF] transition-colors font-bold"
            style={{ fontSize: '16px' }}
          >
            Worldsmith
          </Link>
        </div>
      </main>
    </div>
  );
}
