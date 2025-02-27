import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="container flex items-center justify-between gap-8 mb-4 pt-4">
        <div className="text-4xl font-semibold">Logo</div>

        <div className="relative w-full hidden sm:block">
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="py-2 px-4 outline-none border border-gray-300 rounded-md w-full"
          />

          <button className="absolute top-0 right-0 bg-accent hover:bg-accentDark text-white text-md flex items-center gap-2 px-4 h-full rounded-r-md">
            <p>SEARCH</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
