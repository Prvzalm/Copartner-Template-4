import React, { useState } from "react";
import close from "../assets/close.png";
import { Link } from "react-router-dom";
import copartner from "../assets/copartner-black.png";

const Disclaimer = () => {

  const [error, setError] = useState(null)

  const handleClose = () => {
    setError("Click 'I Agree' to continue!")
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-70">
      <div className="bg-white px-6 pt-6 pb-3 rounded shadow-md text-center m-2">
        <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
        <p className="text-gray-700 text-sm">
          Investments in securities market are subject to market risks, read all
          the related documents carefully before investing. For further
          disclosures visit our website.
        </p>
        <a href="https://copartner.in/" target="_blank" rel="noreferrer">
          <img className="w-16 h-6 mb-2 mx-auto" src={copartner} alt="" />
        </a>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          I Agree
        </Link>
      <div className="text-red-500 mx-auto py-2">{error}</div>
      </div>
      <button onClick={handleClose} className="absolute top-1/3 right-4">
        <img className="w-8 h-8" src={close} alt="" />
      </button>
    </div>
  );
};

export default Disclaimer;
