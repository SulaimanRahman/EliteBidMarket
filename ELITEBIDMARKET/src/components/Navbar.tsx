import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu_icon } from "../assets";

import { MuiDrawer } from "./";

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false);

  const handleAccountHover = () => {
    setshowDropdown(!showDropdown);
  };

  const handleDropdownLeave = () => {
    setshowDropdown(false);
  };

  return (
    <div className="bg-primary flex md:justify-between fixed w-full">
      {/* left side */}
      <div className="flex items-center w-full md:pt-0 py-2">
        {/* Title */}
        <div className="text-logo font-bold mx-10 md:flex hidden">
          <Link to="/">EBM</Link>
        </div>

        {/* Mobile Menu Icon */}
        <MuiDrawer />
        {/* <div className="flex md:mx-10 mx-5 my-2 w-menu md:hidden">
          <img src={menu_icon} alt="menu icon" />
        </div> */}

        {/* Search */}
        <div className="w-full mr-5 md:mr-0">
          <input
            type="search"
            className="md:w-search w-searchmobile rounded-full px-5 py-2 focus:border-none focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>

      {/* right side */}
      <div className="md:flex w-full justify-end hidden lg:gap-10 gap-7 items-center font-semibold text-menu px-5">
        <Link to="/Buy" className="hover:text-white">
          Buy
        </Link>
        <Link to="/Sell" className="hover:text-white">
          Sell
        </Link>
        <Link to="/MyAuctions" className="hover:text-white">
          My Auctions
        </Link>
        <Link to="/AboutUs" className="hover:text-white">
          About Us
        </Link>
        <div
          className="cursor-pointer hover:text-white"
          onMouseEnter={handleAccountHover}
          onMouseLeave={handleDropdownLeave}
        >
          Account
          {showDropdown && (
            <ul className="absolute text-black bg-primary text-center w-[175px] pt-3 right-0">
              <li className="hover:text-white text-black hover:bg-buttonHover w-full bg-button">
                <Link to="/SignIn">Sign In</Link>
              </li>
              <li className="hover:text-white hover:bg-buttonHover w-full bg-button">
                <Link to="/SignUp">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
