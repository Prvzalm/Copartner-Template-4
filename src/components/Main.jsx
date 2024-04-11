import React from "react";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = ({token}) => {

  return (
    <>
      <Homepage token={token} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
