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
              <p className="mb-4 "> 
Am I fooling myself if yes where 
What am I not accepting
Why am I not bold enough
Do I really want what I want
If you were to find a box filled with everything you have ever lost in your life, what are the things you would look for?
What are the experiences you can have only at this age?
If you were to enter a room filled with every person you have ever known, who would be the first person you look for?
What would you do if you knew you couldn’t fail?
What characteristics do you wish you had?
              </p>
              <p className="mb-4 "> </p>

              

              <p className="mb-4 "> </p>
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
