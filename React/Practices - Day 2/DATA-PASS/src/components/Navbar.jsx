import React, { useEffect, useState } from "react";
import Page from "./Page";
function Navbar() {

  const [theme, setTheme] = useState("dark");

  useEffect (function () {
    
  })

  function changeTheme() {

  }

  return (
    <div>
      <button onClick={changeTheme}>Change theme {theme} </button>
      <Page />
    </div>
  );
}

export default Navbar;
