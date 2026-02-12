import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-neutral-950 border-b border-neutral-800 px-8 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-white tracking-wide">
        MAHI.dev
      </div>

      <div className="flex items-center gap-8">
        <p className="text-neutral-300 hover:text-white cursor-pointer transition-colors duration-200">
          <Link to={"/"}>Home</Link>
        </p>

        <p className="text-neutral-300 hover:text-white cursor-pointer transition-colors duration-200">
          <Link to={"/products"}>Products</Link>
        </p>

        <p className="text-neutral-300 hover:text-white cursor-pointer transition-colors duration-200">
          <Link to={"/about"}>About</Link>
        </p>

        <p className="text-neutral-300 hover:text-white cursor-pointer transition-colors duration-200">
          <Link to={"/contact-us"}>Contact-US</Link>
        </p>

        <p className="text-neutral-300 hover:text-white cursor-pointer transition-colors duration-200">
          <Link to={"/king/mihir"}>MiHiR</Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar
