// components/Post.tsx
import React from "react";
import Header from "@/app/components/Header";

// Define the type for the props
interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="pruthvil  ">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Section title */}
        <div className="text-center text-lg font-black mb-2   w-full md:max-w-lg">
          {title}
        </div>

        {/* Content */}
        <ul className="flex flex-col    w-full md:max-w-3xl">
          <li>{content}</li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
