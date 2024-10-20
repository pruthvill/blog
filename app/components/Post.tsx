// components/Post.tsx
import React from "react";
import Header from "@/app/components/Header";

interface PostProps {
  title: string;
  content: React.ReactNode;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="pruthvil min-h-screen ">
      <div className="fixed top-0 left-0 right-0 bg-white z-50 ">
        <Header />
      </div>
      <main className="w-full flex-grow pt-16 mt-8">
        <div className="max-w-[640px] mx-auto px-4 ">
          <div className="text-sm font-bold mb-4 text-center ">
            {title}
          </div>
          <div className="text-sm mb-4">
            {content}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;