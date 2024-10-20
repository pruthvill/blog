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
    <div className="pruthvil flex flex-col items-center">
      <Header />

      <main className="w-full max-w-screen-sm px-4">
        <div className="text-center text-lg font-black mb-2">
          {title}
        </div>

        <div>
          {content}
        </div>
      </main>
    </div>
  );
};

export default Post;
