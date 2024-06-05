import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import close from "../assets/close.png";

const OTP = () => {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(25);
  const location = useLocation();
  const navigate = useNavigate();

  const { phoneNumber, link } = location.state;
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setOTP(value.replace(/\D/g, ''));
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const apid = sessionStorage.getItem("apid");
  const raid = sessionStorage.getItem("raid");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://copartners.in:5181/api/SignIn/ValidateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            countryCode: "IN",
            mobileNumber: phoneNumber,
            otp: otp,
          }),
        }
      );

      if (response.ok) {
        const userData = {
          mobileNumber: phoneNumber,
          referralMode: "CP",
          affiliatePartnerId: "",
          expertsID: "",
        };

        if (apid) {
          userData.referralMode = "AP";
          userData.affiliatePartnerId = apid;
        } else if (raid) {
          userData.referralMode = "RA";
          userData.expertsID = raid;
        }
        const userResponse = await fetch(
          "https://copartners.in:5131/api/User",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        const data = await userResponse.json();
        if (!userResponse.ok) {
          setError("Failed to create user");
        }
        sessionStorage.setItem("token", data.data.id);
        window.open(link, "_blank");
        navigate("/");
        window.location.reload();
      } else {
        setError("Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Failed to verify OTP");
    }
  };

  const handleResendOTP = async () => {
    setError("");
    const postData = {
      countryCode: "IN",
      mobileNumber: phoneNumber,
      otp: "",
    };
    try {
      const response = await fetch(
        "https://copartners.in:5181/api/SignIn/GenerateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();
      if (!data.isSuccess) {
        setError("Failed to resend OTP. Please try again.");
      } else {
        setTimer(25);
      }
    } catch (error) {
      console.error(
        "There was a problem with the resend OTP operation:",
        error
      );
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="popup-overlay">
      <div className="login-popup">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[340px] h-[300px] bg-[white] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[2rem] justify-around">
            <div className="w-[293px] h-[60px] flex flex-col items-center text-center text-lightWhite mx-auto">
              <button onClick={handleClose} className="ms-auto">
                <img className="w-6 h-6" src={close} alt="close" />
              </button>
              <span className="w-[155px] h-[24px] font-[500] text-[20px] leading-[24px] mb-2">
                OTP Verification
              </span>
              <span className="w-[293px] font-[400] text-[14.4px] leading-[17px]">
                Enter the verification code we just sent on your mobile number
              </span>
            </div>

            <div className="w-[290px] flex flex-col justify-between text-center">
              <div className="w-[290px] h-[50px]">
                <input
                  value={otp}
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter your OTP"
                  className="bg-[white] rounded-[10px] border border-[#18181B] w-full h-full text-black font-[400] text-[14px] p-2"
                />
              </div>
              <div className="text-red-500 mx-auto py-2 text-xs">{error}</div>
              <button
                onClick={handleSubmit}
                className="w-[290px] h-[50px] bg-black text-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]"
              >
                Join!
              </button>
              <button
                type="button"
                className={`mt-2 text-black ${
                  timer > 0 ? "opacity-50" : ""
                } md:text-base text-sm underline`}
                onClick={handleResendOTP}
                disabled={timer > 0}
              >
                {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
