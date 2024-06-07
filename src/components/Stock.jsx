import React from "react";
import Group from "../assets/stocGroup.png";

const Stock = () => {
  return (
    <div className="p-4 mb-8 bg-white">
      <div className="flex flex-col md:flex-row mb-8 md:text-left text-center items-center justify-start">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-black font-bold md:text-6xl text-4xl md:leading-[70px] leading-[40px]">
            Our Stock Market <br />
            Expertise
          </h2>
          <p className="text-gray-700 md:text-xl text-md md:px-1 px-4 md:hidden">
            Guiding traders towards profitable decisions in the dynamic stock
            market landscape.
          </p>
          <p className="text-gray-700 md:text-xl mb-6 md:px-1 px-4 md:block hidden">
            Tap into our stock market expertise and elevate your trading journey
            with informed insights and strategic guidance.
            <br />
            Guiding traders towards profitable decisions in the dynamic stock
            market landscape.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvXlECAFh4J984zNsSwdKC7o0MSf2GKJndd7S1Lrfb4Eu9ew/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              rel="noreferrer"
              className="bg-black cursor-pointer text-white text-base font-medium px-5 py-2.5 rounded-md relative overflow-hidden transition-all duration-400 transform hover:bg-gray-800 hover:scale-105"
            >
              Join Expert Team
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <img
            src={Group}
            alt="Stock"
            className="w-full"
            style={{
              maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
            }}
          />
          {/* <div className="mt-4 md:hidden">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvXlECAFh4J984zNsSwdKC7o0MSf2GKJndd7S1Lrfb4Eu9ew/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              rel="noreferrer"
              className="bg-black cursor-pointer text-white text-base font-medium px-5 py-2.5 rounded-md relative overflow-hidden transition-all duration-400 transform hover:bg-gray-800 hover:scale-105"
            >
              Join Expert Team
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Stock;
