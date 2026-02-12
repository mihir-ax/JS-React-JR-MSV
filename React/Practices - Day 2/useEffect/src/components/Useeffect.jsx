import React, { useEffect, useState } from "react";

function Useeffect() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(50);

  function numm1function() {
    setNum1(num1 + 1);
  }

  function numm2function() {
    setNum2(num2 + 5);
  }

  useEffect(() => {
    console.log("Num1 CLicked");
  }, [num1]);

  useEffect(() => {
    console.log("Num2 Is  clicked");
  }, [num2]);

  return (
    <div className="diiv">
      <h1>NuM-1 --- {num1}</h1>
      <h1>NuM-2 --- {num2}</h1>
      <br></br>
      <button onClick={numm1function}>BTN 1</button>
      <button onClick={numm2function}>BTN 2</button>
    </div>
  );
}

export default Useeffect;
