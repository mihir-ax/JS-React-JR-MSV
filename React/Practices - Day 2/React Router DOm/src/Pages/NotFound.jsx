import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white px-6">
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        404
      </h1>

      <p className="text-xl md:text-2xl text-neutral-400 mt-4 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <p className="text-neutral-500 mt-2 text-center max-w-md">
        It might have been removed, renamed, or maybe you typed the wrong URL.
      </p>

      <Link to={"/"}>
        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 active:scale-95 transition-all duration-200 cursor-pointer">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
