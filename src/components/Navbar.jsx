import React from "react";
import { appleImg } from "../utils";
import { bagImg } from "../utils";
import { searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <img src={appleImg} className="cursor-pointer" />
        {/* Navigation items */}
        <div className="flex w-full justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="nav-item text-sm px-5 cursor-pointer text-gray hover:text-white max-sm:hidden transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Search and bag icons */}
        <div className="flex items-baseline gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
