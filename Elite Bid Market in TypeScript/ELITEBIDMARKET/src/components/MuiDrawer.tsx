import { useState } from "react";
import { Drawer, Box, Typography } from "@mui/material";
import { menu_icon } from "../assets";
import { Link } from "react-router-dom";
import {
  myacutions_icon,
  sell_icon,
  buy_icon,
  about_us_icon,
  account_icon,
} from "../assets";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div
        className="flex md:mx-10 mx-5 my-2 w-menu md:hidden"
        onClick={() => setIsDrawerOpen(true)}
      >
        <img src={menu_icon} alt="Menu Icon" />
      </div>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#FFD43B",
          },
        }}
      >
        <Box width="300px" textAlign="center" role="presentation">
          <div className="text-mobilemenutitle font-bold py-7">
            <Link
              to={"/"}
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              EMB
            </Link>
          </div>
          <div className="flex flex-col font-semibold text-mobilemenu pt-7">
            <Link
              to="/Buy"
              className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <div className="flex ml-10 items-center gap-16">
                <img
                  src={buy_icon}
                  alt="buy icon"
                  className="w-[25px] h-[25px]"
                />
                Buy
              </div>
            </Link>
            <Link
              to="/Sell"
              className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <div className="flex ml-10 items-center gap-16">
                <img
                  src={sell_icon}
                  alt="sell icon"
                  className="w-[25px] h-[25px]"
                />
                Sell
              </div>
            </Link>
            <Link
              to="/MyAuctions"
              className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <div className="flex ml-10 items-center gap-7">
                <img
                  src={myacutions_icon}
                  alt="my auction icon"
                  className="w-[25px] h-[25px]"
                />
                My Auctions
              </div>
            </Link>
            <Link
              to="/AboutUs"
              className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <div className="flex ml-10 items-center gap-10">
                <img
                  src={about_us_icon}
                  alt="buy icon"
                  className="w-[25px] h-[25px]"
                />
                About Us
              </div>
            </Link>
            <Link
              to="/"
              className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <div className="flex ml-10 items-center gap-11">
                <img
                  src={account_icon}
                  alt="account icon"
                  className="w-[25px] h-[25px]"
                />
                Account
              </div>
            </Link>
            {/* <Link
              to="/SignUp"
              className="hover:text-white p-2 border-t-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              Register
            </Link>
            <Link
              to="/SignIn"
              className="hover:text-white p-2 border-y-[0.1px] border-dimWhite"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              Sing In
            </Link> */}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
