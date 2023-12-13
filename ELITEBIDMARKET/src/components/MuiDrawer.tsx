import { useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import List from "@mui/material/List";
import { menu_icon } from "../assets";
import { Link } from "react-router-dom";
import {
  myacutions_icon,
  sell_icon,
  buy_icon,
  about_us_icon,
  account_icon,
  arrow_icon,
} from "../assets";

const MuiDrawer = () => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const checkIfUserIsLoggedIn = () => {
    if (localStorage.getItem("user-token")) {
      console.log("User is logged in");
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  };

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [accountExpand, setAccountExpand] = useState(false);
  const rotateAccountArrow = accountExpand ? "rotate-0" : "rotate-180";

  const handleAccountExpand = () => {
    checkIfUserIsLoggedIn();
    setAccountExpand(!accountExpand);
  };
  const logoutUser = () => {
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-email");

    setUserLoggedIn(false);
    setAccountExpand(false);
  };
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
            <div
              className="flex ml-10 items-center gap-11 p-3 border-t-[0.1px] border-dimWhite"
              onClick={handleAccountExpand}
            >
              <img
                src={account_icon}
                alt="account icon"
                className="w-[25px] h-[25px]"
              />
              Account
              <img
                src={arrow_icon}
                alt="account icon"
                className={`w-[20px] h-[20px] transform ${rotateAccountArrow}`}
              />
            </div>
            {accountExpand && (
              <>
                {userLoggedIn ? (
                  <Link
                    to="/"
                    className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
                    onClick={() => {
                      setIsDrawerOpen(false);
                      logoutUser();
                    }}
                  >
                    <div className="flex items-center justify-center gap-10">
                      Log Out
                    </div>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/SignIn"
                      className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setAccountExpand(false);
                      }}
                    >
                      <div className="flex items-center justify-center gap-10">
                        Sign In
                      </div>
                    </Link>
                    <Link
                      to="/SignUp"
                      className="hover:text-white p-3 border-t-[0.1px] border-dimWhite"
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setAccountExpand(false);
                      }}
                    >
                      <div className="flex items-center justify-center gap-10">
                        Sign Up
                      </div>
                    </Link>{" "}
                  </>
                )}
              </>
            )}

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
