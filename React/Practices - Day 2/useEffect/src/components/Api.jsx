import React from "react";
import Axios from "axios";


function Api() {
  // async function fetchingapi() {
  //   const dataa = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(dataa);
  // }

  // const getData = async () => {
  //   const respomceFromApi = await fetch(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   const data = await respomceFromApi.json();

  //   console.log(data);
  // };

const getData = async () => {
  const respomceFromApi = await Axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );

  console.log(respomceFromApi);

}

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-neutral-950 via-black to-neutral-900 flex items-center justify-center p-6">
      <button
        onClick={getData}
        className="w-50 bg-white text-black font-semibold py-4
                 rounded-2xl text-lg
                 hover:bg-neutral-200
                 active:scale-95
                 cursor-pointer
                 transition-all duration-200
                 shadow-lg hover:shadow-2xl"
      >
        Fetch Data
      </button>
    </div>
  );
}

export default Api;
