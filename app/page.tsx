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
          className="text-black hover:text-[#0000FF] transition-colors "
        >
          <h1>Worldsmith</h1>
        </Link>
      </div>
    </div>
  );
}
