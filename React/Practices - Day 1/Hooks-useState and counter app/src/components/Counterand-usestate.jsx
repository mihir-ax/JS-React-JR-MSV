import React, { useState } from "react";

function Button() {
  // let a = 50;

  // // ye powers deta hai !! set karne keliye ! read and write !!!
  // const [num, setNum] = useState(50);
  // const [name, setName] = useState("Koii NAME Hai tumhe kya !");
  // const [arra, setArra] = useState([50, 5050]);
  // // ye us value ko update kanr keliye hai !!
  // function buttoon() {
  //   setNum(10000);
  //   setName("MAST NAME");
  //   setArra([54, 50, 85]);
  // }
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  function countter(type) {
    // console.log(type);

    if (type === "inc") {
      setCounter(counter + 1);
    } else if (type === "dec") {
      setCounter(counter - 1);
    } else if (type === "zero") {
      setCounter(0);
    }
  }

  return (
    <>
      <div
        className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-12 p-8 relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlr5sim3j/image/upload/v1770885828/image-host/xqpzszr8hkho1jlmkko1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center space-y-4">
          <p className="text-neutral-300 text-sm uppercase tracking-[0.3em] font-medium">
            Counter Value
          </p>
          <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {counter}
          </h1>
        </div>

        <div className="relative z-10 flex items-center gap-6">
          <button
            onClick={() => {
              countter("dec");
            }}
            className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-3xl border border-white/20 hover:bg-white/20 active:scale-95 cursor-pointer transition-all duration-200 text-3xl"
          >
            −
          </button>
          <button
            onClick={() => {
              countter("zero");
            }}
            className="h-16 px-10 bg-white text-black font-semibold rounded-3xl hover:bg-neutral-200 active:scale-95 cursor-pointer transition-all duration-200 text-lg"
          >
            Reset
          </button>
          <button
            onClick={() => {
              countter("inc");
            }}
            className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-3xl border border-white/20 hover:bg-white/20 active:scale-95 cursor-pointer transition-all duration-200 text-3xl"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
