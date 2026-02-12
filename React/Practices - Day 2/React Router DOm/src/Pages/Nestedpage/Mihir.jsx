import React from "react";

function Mihir() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#000000,#111827,#000000)] bg-[length:300%_300%] animate-[gradientMove_8s_ease_infinite]"></div>
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[140px] animate-[float_12s_ease-in-out_infinite]"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-[floatReverse_15s_ease-in-out_infinite]"></div>
      <h1
        className="relative z-10 text-[9rem] md:text-[11rem] font-extrabold tracking-[1.5rem] text-white
                   bg-gradient-to-r from-white via-cyan-400 to-purple-500
                   bg-clip-text text-transparent
                   drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]
                   animate-[fadeIn_2s_ease_forwards]"
      >
        MiHiR
      </h1>
    </div>
  );
}

export default Mihir;
