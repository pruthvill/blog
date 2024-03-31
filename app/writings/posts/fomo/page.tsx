import Header from "@/app/components/Header";
import Link from "next/link";

const Media = () => {
  return (
    <div className="pruthvil  ">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="max-w-xl mx-auto sm:px-6">
        {/* Section title */}
        <h2 className="text-center text-lg font-bold mb-2 ">
          How to get FOMO?
        </h2>

        {/* Content */}
        <div className="flex flex-col mx-auto  ">
          <ul className="flex flex-col gap-4 ">
            <li>
              <p className="mb-4 ">Why How Onine Offlinne</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;
