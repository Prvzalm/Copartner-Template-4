import React, { useEffect } from "react";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";

const Main = ({token}) => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const userAgreedToDisclaimer = sessionStorage.getItem('userAgreedToDisclaimer');
    if (!userAgreedToDisclaimer) {
      navigate('/disclaimer');
    }
  }, [navigate]);

  return (
    <>
      <Homepage token={token} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
