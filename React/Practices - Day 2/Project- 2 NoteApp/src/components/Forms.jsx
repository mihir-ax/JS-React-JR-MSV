import React from "react";

function Forms() {
  function onsumbit (e){
    console.log("hello ");
e.preventDefault();
  }
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-neutral-950 via-black to-neutral-900 flex items-center justify-center p-6">
      <div
        className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10
                  rounded-3xl p-8 space-y-6 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white tracking-tight text-center">
          Create New Note
        </h2>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full bg-black text-white placeholder-neutral-400
             border border-neutral-600
             rounded-2xl
             px-6 py-4
             pl-6

             text-lg
             outline-none
             focus:ring-2 focus:ring-neutral-400
             focus:border-neutral-400
             transition-all duration-300"
        />

        <textarea
          placeholder="Write Details..."
          rows="6"
          className="w-full bg-white/5 text-white placeholder-neutral-400
                 border border-white/20 rounded-2xl
                 px-6 py-4 text-lg
                 outline-none
                 focus:border-white focus:ring-2 focus:ring-white/30
                 transition-all duration-300 resize-none"
        ></textarea>

        <button
          className="w-full bg-white text-black font-semibold py-4
                 rounded-2xl text-lg
                 hover:bg-neutral-200
                 active:scale-95
                 cursor-pointer
                 transition-all duration-200
                 shadow-lg hover:shadow-2xl"
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default Forms;
