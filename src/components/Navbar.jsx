import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Drawer, List } from "@mui/material";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <div>
      <div className="fixed h-20 bg-zinc-800 z-10 w-full">
        <div className="flex justify-between items-center w-full px-5 sm:px-12 mt-4">
          <Fade delay={300} duration={200}>
            <h1
              className="head-name border-4 border-orange-300 hover:border-orange-200 shadow-[0px_0px_15px_2px_#f6ad55] hover:shadow-[0px_0px_30px_10px_#f6ad55] duration-300 p-2 rounded-md hover:cursor-pointer text-orange-200 hover:text-orange-100 "
              onClick={() => {
                location.pathname === "/products"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : navigate("/products");
              }}
            >
              Ecommerce Demo
            </h1>
          </Fade>
          <div className="flex justify-center items-center">
            {token ? (
              <ul className="text-white">
                <li>Profile</li>
              </ul>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className=" font-medium text-white border px-4 py-2 rounded-md bg-orange-500 hover:border-orange-500 hover:bg-white hover:text-orange-500 duration-30"
              >
                Login/Register
              </button>
            )}
          </div>
        </div>
      </div>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseSharpIcon
            onClick={handleClose}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <List>asdasd</List>
      </Drawer>
    </div>
  );
};

export default Navbar;
