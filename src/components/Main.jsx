import React from "react";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Homepage />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
