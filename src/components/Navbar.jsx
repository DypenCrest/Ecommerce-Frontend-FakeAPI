import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Drawer, List } from "@mui/material";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownToggler = () => setOpen(!open);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const profile = localStorage.getItem("user");
  let decoded = "";
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      toast(err.message);
    }
  }
  const { sub: userId } = decoded;

  return (
    <div>
      <div className="fixed h-20 bg-zinc-900 z-10 w-full">
        <div className="flex justify-between items-center w-full px-5 sm:px-12 mt-4">
          <Fade delay={300} duration={200}>
            <h1
              className="flex items-center head-name  duration-300 p-2 rounded-md hover:cursor-pointer text-2xl text-white font-bold hover:text-orange-500 "
              onClick={() => {
                location.pathname === "/"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : navigate("/");
              }}
            >
              <StorefrontIcon fontSize="large" />
              <span className="text-purple-400">EStore</span>.
              <span className="text-pink-400">Demo</span>
            </h1>
          </Fade>
          <div className="flex justify-end items-center text-sm md:text-base w-[50%] md:w-full">
            {token ? (
              <button
                type="button"
                className="hover:text-orange-500 cursor-pointer text-white relative"
                id="dropdown"
                data-dropdown-toggle="dropdown-profile"
                onClick={dropdownToggler}
              >
                {profile} <ArrowDropDownSharpIcon />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className=" font-medium text-white border px-4 py-2 rounded-md bg-orange-500 hover:border-orange-500 hover:bg-white hover:text-orange-500 duration-30"
              >
                Login/Register
              </button>
            )}

            {/* <!-- Dropdown menu --> */}
            {open && (
              <div
                id="dropdown-profile"
                class="z-10 absolute top-14 font-normal bg-zinc-800 divide-y divide-gray-100 rounded-lg shadow w-32"
              >
                <ul
                  class="py-2 text-sm text-gray-400 cursor-pointer"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => {
                        dropdownToggler();
                        navigate(`/users/${userId}`);
                      }}
                    >
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-orange-500 hover:text-white"
                      onClick={() => {
                        dropdownToggler();
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        navigate("/");
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
