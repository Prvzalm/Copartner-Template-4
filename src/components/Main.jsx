import React from "react";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Stock from "./Stock";

const Main = ({token}) => {

  return (
    <>
      <Homepage token={token} />
      <Outlet />
      <Stock />
      <Footer />
    </>
  );
};

export default Main;
