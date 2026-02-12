import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="w-full bg-neutral-950 border-b border-neutral-800 flex justify-center">
      <div className="flex gap-12 py-4 text-neutral-400 font-medium">
        <Link to={"/products/girls"}>
          <p className="cursor-pointer hover:text-white transition-colors duration-200 relative group">
            Girls
          </p>
        </Link>

        <p className="cursor-pointer hover:text-white transition-colors duration-200 relative group">
          Boys
        </p>

        <p className="cursor-pointer hover:text-white transition-colors duration-200 relative group">
          Kids
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export default Products;
