import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { menu_icon } from "../assets";
import { MuiDrawer } from "./";

const Navbar = () => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleAccountHover = () => {
    checkIfUserIsLoggedIn();
    setshowDropdown(!showDropdown);
  };

  const handleDropdownLeave = () => {
    setshowDropdown(false);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/Buy?search=${encodeURIComponent(searchQuery)}`);
  };

  const logoutUser = () => {
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-email");

    setUserLoggedIn(false);
  };

  const checkIfUserIsLoggedIn = () => {
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
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
        <form onSubmit={handleSearchSubmit} className="w-full mr-5">
          {/* Updated input element with value and onChange */}
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="md:w-search w-searchmobile rounded-full px-5 py-2 focus:border-none focus:outline-none"
            placeholder="Search"
          />
        </form>
      </div>

      {/* right side */}
      <div className="md:flex w-full justify-end hidden lg:gap-10 gap-7 items-center font-semibold text-menu px-5">
        <Link
          to="/Buy"
          className={`hover:text-white ${
            location.pathname === "/Buy" && "text-white"
          }`}
        >
          Buy
        </Link>
        <Link
          to="/Sell"
          className={`hover:text-white ${
            location.pathname === "/Sell" && "text-white"
          }`}
        >
          Sell
        </Link>
        <Link
          to="/MyAuctions"
          className={`hover:text-white ${
            location.pathname === "/MyAuctions" && "text-white"
          }`}
        >
          My Auctions
        </Link>
        <Link
          to="/AboutUs"
          className={`hover:text-white ${
            location.pathname === "/AboutUs" && "text-white"
          }`}
        >
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
              {!userLoggedIn && (
                <>
                  <li className="hover:text-white text-black hover:bg-buttonHover w-full bg-button">
                    <Link
                      to="/SignIn"
                      className={`${
                        location.pathname === "/SignIn" && "text-white"
                      }`}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="hover:text-white hover:bg-buttonHover w-full bg-button">
                    <Link
                      to="/SignUp"
                      className={`${
                        location.pathname === "/SignUp" && "text-white"
                      }`}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              {userLoggedIn && (
                <li className="hover:text-white hover:bg-buttonHover w-full bg-button">
                  <Link to="/" onClick={logoutUser}>
                    Log Out
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
