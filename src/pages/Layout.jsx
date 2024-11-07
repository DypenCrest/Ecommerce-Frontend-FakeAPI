import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-20 min-h-dvh">
        <Outlet />
      </main>
      <footer className="border-t border-gray-line">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
