import React from "react";

function Button() {
  function clickkardiya() {
    console.log("Bhai sahab we did it !!");
  }

  function chaljaa(e){
    console.log(e.target.value);
  }

  return (
    <>
      <button
        // onClick = {clickkardiya}

        // onDoubleClick={function okok() {
        //   console.log("Hello bhai inline worked !!")
        // }}

        // onMouseEnter={()=> {
        //   console.log("Arrow Worked !!")
        // }}

        className="bg-pink-700 text-white px-4 m-4 py-2 rounded-md font-semibold hover:bg-pink-800 transition duration-300"
      >
        Click Me
      </button>

      <input
        type="text"
        onChange={(e)=> {chaljaa(e)}}
        placeholder="Hello Write Something"
        className="border border-pink-400 px-4 py-2 rounded-md
             focus:outline-none focus:ring-2 focus:ring-pink-500
             transition duration-300"
      />
    </>
  );
}

export default Button;
