import React from "react";

function Notes() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-black to-neutral-900 flex">
      {/* Left Side Glass Background */}
      <div className="w-1/3 backdrop-blur-xl bg-white/5 border-r border-white/10 p-12 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Create New Note
        </h2>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full bg-black text-white placeholder-neutral-400 border border-neutral-600 rounded-2xl px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400 transition-all duration-300"
        />

        <textarea
          placeholder="Write Details..."
          rows="6"
          className="w-full bg-white/5 text-white placeholder-neutral-400 border border-white/20 rounded-2xl px-6 py-4 text-lg outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-300 resize-none"
        ></textarea>

        <button className="w-full bg-white text-black font-semibold py-4 rounded-2xl text-lg hover:bg-neutral-200 active:scale-95 transition-all duration-200 shadow-lg">
          Add Note
        </button>
      </div>

      {/* Right Side (Empty for now) */}
      <div className="w-1/3"></div>
    </div>
  );
}

export default Notes;
