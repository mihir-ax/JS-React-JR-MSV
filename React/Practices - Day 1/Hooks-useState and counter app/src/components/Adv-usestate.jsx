import React, { useState } from "react";

function Advusestate() {
// useState
  const [num, setNum] = useState([5, 10, 15, 25]);

  function clicked () {

    console.log ([...num]);

    const newNum = [...num, 50];
    console.log([...newNum]);
      console.log ([...num]);

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
        <h1>current Num -  {num}</h1>
        <button onClick={clicked} className="p-5 flex items-center justify-center bg-white/10 backdrop-blur-md text-white rounded-3xl border border-white/20 hover:bg-white/20 active:scale-95 cursor-pointer transition-all duration-200 text-3xl">
          CLick Me
        </button>
      </div>
    </>
  );
}

export default Advusestate;
