import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  arrow,
  copartner,
  copartnerBlack,
  stars,
  telegram,
  userBck,
  verify,
} from "../assets";
import Popup from "./Popup";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Homepage = ({ token }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [experts, setExperts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const apid = searchParams.get("apid");
    const raid = searchParams.get("raid");

    if (apid) {
      sessionStorage.setItem("apid", apid);
    }

    if (raid) {
      sessionStorage.setItem("raid", raid);
    }
  }, [searchParams]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://copartners.in:5132/api/Experts")
      .then((res) => {
        const filteredData = res.data.data.filter((item) => item.isCoPartner);
        setExperts(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const navigate = useNavigate();

  const handleClickLink = (link, event) => {
    event.stopPropagation();
    if (!token) {
      navigate("/login", { state: { link } });
    } else {
      window.open(link);
    }
  };

  const handleCard = (id) => {
    window.open(`https://copartner.in/ra-detail/${id}`);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        {/* <img className="w-12 h-12 mr-4" src={option} alt="logo" /> */}
        {/* <div> */}
        <a href="https://copartner.in" rel="noreferrer" target="_blank">
          <img className="w-32" src={copartnerBlack} alt="" />
        </a>
        {/* <h1 className="font-bold">Copartner.in</h1> */}
        {/* <p className="opacity-50 text-xs">Welcome To The Rich Club</p> */}
        {/* </div> */}
      </div>
      {experts.map((expert, id) => {
        return (
          <section key={expert.id}>
            <div
              onClick={() => handleCard(expert.id)}
              className="content w-full border-2 rounded-2xl"
            >
              <div className="flex justify-between">
                <div className="text-center">
                  <p className=" text-gray-500 text-xs">Followers</p>
                  <p className="text-xs font-bold">
                    {expert.telegramFollower / 1000}k
                  </p>
                </div>
                <div>
                  <p className="flex text-sm font-bold">
                    <img className="w-4 h-4" src={stars} alt="stars" />
                    {expert.rating}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex relative justify-center">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={expert.expertImagePath}
                    alt=""
                  />
                  <img
                    className="absolute w-36 top-[-2rem]"
                    src={userBck}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-bold text-xl">{expert.channelName}</p>
                  <p className="text-gray-500 text-sm font-semibold">
                    SEBI: {expert.sebiRegNo}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <img className="w-5 h-5" src={verify} alt="" />
                    <span className="text-gray-500 text-sm">Verify By</span>
                    <button>
                      <img
                        className="w-16 h-4"
                        src={copartner}
                        alt="copartner"
                      />
                    </button>
                  </div>
                  <button    
                    onClick={(event) => handleClickLink(expert.telegramChannel, event)}
                    className="flex gap-2 bg-[#0081F1] rounded-full text-white justify-center items-center"
                  >
                    <img className="w-4 h-4" src={telegram} alt="" />
                    <span className="py-2">Get Free Calls</span>
                    <img className="w-4 h-4" src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section className="text-center font-bold text-sm">
        <p className="text-sm opacity-80">Don’t Have Demat Account ?</p>
        <button
          onClick={openPopup}
          className="text-white bg-[black] rounded mb-4 px-6 py-1 mt-4"
        >
          <span className="text-sm font-normal">Open Now</span>
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </section>
      <section className="text-center pt-0">
        <p className="text-xl">Disclaimer</p>
        <p className="opacity-80 text-sm">
          Investments in securities market are subject to market risks, read all
          the related documents carefully before investing. For further
          disclosures visit our website
        </p>
      </section>
      <hr />
    </div>
  );
};

export default Homepage;
