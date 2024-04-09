import React from "react";
import { useNavigate } from "react-router-dom";
import { expertise_data } from "../constants";
import { arrow, copartner, option, shubham, stars, telegram, verify } from "../assets";

const Homepage = ({ token }) => {
  const navigate = useNavigate();

  const handleClickLink = (link) => {
    if (!token) {
      navigate("/login", { state: { link } });
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="mt-4">
      {expertise_data.map((expert, id) => {
        return (
          <section key={expert.id}>
            <div className="flex">
              <img className="w-12 h-12 mr-4" src={option} alt="logo" />
              <div>
                <h1 className="font-bold">OPTION EMPIRE</h1>
                <p className="opacity-50 text-xs">Welcome To The Rich Club</p>
              </div>
            </div>
            <div className="content mt-8 w-full border-2 rounded-2xl background-bg">
              <div className="flex justify-between">
                <div className="text-center">
                  <p className=" text-gray-500 text-xs">Followers</p>
                  <p className="text-xs font-bold">{expert.totalFollowers}</p>
                </div>
                <div>
                  <p className="flex text-sm font-bold">
                    <img className="w-4 h-4" src={stars} alt="stars" />
                    {expert.rating}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={shubham}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="font-bold text-xl">{expert.name}</p>
                  <p className="text-gray-500 text-sm font-semibold">
                    SEBI: {expert.regNum}
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
                  <button className="flex gap-2 bg-[#0081F1] rounded-full text-white justify-center items-center">
                    <img className="w-4 h-4" src={telegram} alt="" />
                    <span
                      onClick={() =>
                        handleClickLink(expert.link)
                      }
                      className="py-2"
                    >
                      {expert.greet}
                    </span>
                    <img className="w-4 h-4" src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <section className="text-center font-bold text-xl">
              <div>
                Open your demat account with any brokerage platform with
                Copartner and start your trading journey.
              </div>
              <button className="text-white bg-black rounded mb-4 px-6 py-1 mt-4">
                <span className="text-sm font-normal">Open Now</span>
              </button>
            </section>
          </section>
        );
      })}
      <hr />
    </div>
  );
};

export default Homepage;
