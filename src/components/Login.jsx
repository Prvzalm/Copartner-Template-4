import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import close from "../assets/close.png";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { link } = location.state;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setPhoneNumber(value.replace(/\D/g, ''));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://copartners.in:5181/api/SignIn/GenerateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            countryCode: "IN",
            mobileNumber: phoneNumber,
            otp: "",
          }),
        }
      );

      if (response.ok) {
        navigate("/otp", { state: { phoneNumber, link } });
      } else {
        setError("Enter a 10-digit Number");
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
      setError("Failed to send OTP. Please try again.");
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
            <div className="w-[264px] h-[60px] flex flex-col items-center text-center text-lightWhite mx-auto">
              <button onClick={handleClose} className="ms-auto">
                <img className="w-6 h-6" src={close} alt="close" />
              </button>
              <span className="w-[53px] h-[24px] font-[500] text-[20px] leading-[24px] mb-4">
                Signup/Logon
              </span>
              <span className="w-[264px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
                Access your account by entering your credentials.
              </span>
            </div>

            <div className="w-[290px] flex flex-col justify-between">
              <div className="w-[290px] h-[50px]">
                <input
                  value={phoneNumber}
                  onChange={handleChange}
                  type="number"
                  maxLength={10}
                  placeholder="Enter your Mobile Number"
                  className="bg-[white] rounded-[10px] border border-[#18181B] w-full h-full text-black font-[400] text-[14px] p-2"
                />
              </div>
              <div className="text-red-500 mx-auto py-2">{error}</div>

              <button
                onClick={handleSubmit}
                className="w-[290px] h-[50px] bg-black text-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
