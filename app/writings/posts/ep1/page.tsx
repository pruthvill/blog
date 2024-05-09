import Header from "@/app/components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil  ">
      <Header />

      <div className="max-w-xl mx-auto sm:px-6">
        <h2 className="text-center text-lg font-bold mb-2 ">
         On Advices
        </h2>

        <div className="flex flex-col mx-auto  ">
          <ul className="flex flex-col gap-4 ">
            <li>
              <p className="mb-4 "> If you want to do better in any domain of life you have two ways to go about it.
              First is to trying to figure out everything by yourself and advice from external sources. 
              </p>
              <p className="mb-4 "> If you try to figure out everhything by yourself it will take </p>

              

              <p className="mb-4 "> If you take someone elses advice to face value </p>
              <p className="mb-4 "> </p>
              <p className="mb-4 "> </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;
