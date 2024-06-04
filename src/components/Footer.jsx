import React from "react";
import logo from "../assets/copartner-black.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import danger from "../assets/Danger Triangle.png";

const Footer = () => {
  return (
    <>
      <div className="md:w-[1440px] w-[393px] border-t border-solid border-white border-opacity-10 flex flex-col items-center footer-bg">
        <div className="flex flex-col md:gap-[0.5rem] gap-[1rem] md:justify-center md:items-center">
          <img src={logo} alt="" className="md:w-56 w-40" />
          <span className="md:w-[796px] w-[359px] md:h-[84px] h-[88px] font-normal md:text-[14px] text-[14px] md:leading-[28px] leading-[22px] md:text-center text-dimWhite">
            The Copartner Portal offers traders a seamless experience, providing
            easy access to essential tools, resources and community support,
            empowering them to navigate the markets with confidence and ease.
          </span>
          <div className="flex gap-7 rounded-full">
            <a href="https://in.linkedin.com/company/copartnerindia">
              <img src={linkedin} alt="LinkeDin" className="w-8" />
            </a>
            <a href="https://www.instagram.com/copartner.in">
              <img src={instagram} alt="Instagram" className="w-8" />
            </a>
          </div>
        </div>
        <span className="text-dimWhite flex justify-center md:w-full mx-auto items-center text-center font-[400] text-[12px] leading-[15px] md:mb-0 my-2 md:mt-[11rem]">
          @Copyright 2024. All rights reserved
        </span>
        <div
          style={{
            backgroundImage:
              "linear-gradient(94.34deg, #FFFFFF 0%, #9BD0F5 100%)",
          }}
          className="md:mt-[2rem] w-full justify-around flex md:flex-row flex-col items-center"
        >
          <div className="border-[1px] p-2 md:px-[50px] rounded-md">
            <span className="flex gap-2 md:text-[16px] text-[15px] text-[##18181B] md:my-[10px] marquee">
              <img src={danger} className="w-5 h-5" alt="" />
              <span>
                Disclaimer: The investment advice, trading tips, strategies,
                courses, webinars, and other information provided by SEBI
                registered research analysts on the COPARTNER platform represent
                their individual views and opinions. COPARTNER does not endorse
                or validate these views, and users are encouraged to conduct
                their own research and exercise caution before acting upon any
                information provided.
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
