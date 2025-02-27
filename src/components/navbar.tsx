import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="container flex items-center justify-between gap-8 mb-4 pt-4">
        <div className="text-4xl font-semibold">
          <b className="text-accent">e</b>Veggy
        </div>

        <div className="relative w-full hidden sm:block">
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="py-2 px-4 outline-none border border-gray-300 rounded-md w-full"
          />

          <button className="absolute top-0 right-0 bg-accent hover:bg-accentDark text-white text-md flex items-center gap-2 px-4 h-full rounded-r-md">
            <p>SEARCH</p>
            <CiSearch className="text-xl" />
          </button>
        </div>

        <div className="flex gap-4 text-2xl text-gray-500">
          <div className="relative cursor-pointer">
            <MdOutlineShoppingCart />
            <div className="bg-accent size-5 text-white text-sm rounded-full grid place-items-center absolute top-[-13px] right-[-12px]">
              0
            </div>
          </div>

          <FaRegHeart />
        </div>
      </div>

      <div className="border-t border-b border-gray-300 mt-8 lg:block hidden">
        <div className="flex items-center justify-between container">
          <div className="flex items-center gap-12">
            <button className="bg-accent text-white flex items-center gap-4 py-4 px-4 rounded-md">
              <CiMenuFries size={24} />
              <p>BROWSE CATEGRY</p>
            </button>

            <ul className="flex items-center gap-6">
              <li>HOME</li>
              <li>SHOP</li>
              <li>VEGS</li>
              <li>VENDORS</li>
              <li>ABOUT US</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <BiSupport size={24} />
            <p>(+62)-857-8147-20</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
