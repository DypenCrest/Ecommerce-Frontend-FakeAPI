import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-20">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
