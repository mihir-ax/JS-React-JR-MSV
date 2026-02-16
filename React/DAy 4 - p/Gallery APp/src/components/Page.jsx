import axios from "axios";
import React, { useState } from "react";

function Page() {
  // let indexOfLastItem = currentPage * itemPerPage
  // let indexOfFirstItem = indexOfLastItem - itemPerPage

  const [userData, setUserData] = useState([]);
  let data = [];
  async function fetchData() {
    data = await axios.get("https://picsum.photos/v2/list?limit=400");
  }

  

  fetchData();
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-950 via-black to-neutral-900 text-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Gallery</h1>
        <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-neutral-200 transition">
          Upload
        </button>
      </div>

      {/* Gallery Grid - Static UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image 1 */}

        <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=1"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div>

        {/* <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=2"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=3"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=4"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=5"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/500/500?random=6"
            alt="gallery"
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
              View
            </button>
          </div>
        </div> */}
      </div>

      {/* Pagination UI */}
      <div className="flex justify-center items-center mt-12 space-x-3">
        <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Prev
        </button>
        <button className="px-4 py-2 rounded-xl border transition bg-white text-black border-white">
          1
        </button>
        <button className="px-4 py-2 rounded-xl border transition bg-white/10 border-white/20 hover:bg-white/20">
          2
        </button>
        <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
          Next
        </button>
      </div>
    </div>
  );
}

export default Page;
