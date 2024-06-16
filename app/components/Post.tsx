// components/Post.tsx
import React from "react";
import Header from "@/app/components/Header";

// Define the type for the props
interface PostProps {
  title: string;
  content: React.ReactNode;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="pruthvil">
      {/* Header component */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col items-center">
        {/* Section title */}
        <div className="text-center text-lg font-black mb-2 mx-auto px-4">
          {title}
        </div>

        {/* Content */}
        <div
          className="flex flex-col w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
          style={{ maxWidth: "48rem" }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Post;