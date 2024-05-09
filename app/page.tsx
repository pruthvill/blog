import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className=" text-center text-lg font-bold">
        <Link
          href="https://twitter.com/pruthvill"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white hover:text-[#0000FF] transition-colors    font-bold "style={{ fontSize: '16px' }}
        >
          Worldsmith
        </Link>
      </div>
    </div>
  );
}
