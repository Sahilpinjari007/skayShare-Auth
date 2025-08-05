import { useContext, useEffect, useState } from "react";
import ButtonLoader from "../Components/ButtonLoader";
import { Link } from "react-router";
import { Context } from "../Context/AppContext";
import CountDownTimer from "./CountDownTimer";

const OTPVerfication = ({
  setFormData,
  formData,
  verifyLoading,
  handleOTPSubmit,
  handleOnResendOTP,
  isTimerActive,
  setIsTimerActive,
}) => {
  const { setIsExistingUser, setIsUserCheckd } = useContext(Context);

  const onLinkClick = () => {
    setIsExistingUser(null);
    setIsUserCheckd(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full max-w-md md:max-w-[400px] text-center space-y-8">
        <h1 className="text-[43px] font-bold text-black mb-5 mt-[-20px] font-serif">
          skayShare
        </h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-[18px] font-semibold text-gray-900">
              Check your email for the code
            </h2>

            <div className="text-gray-600 ">
              <p>
                {"We've sent a code to "}
                <span className="font-medium text-black inline">
                  {formData?.email}
                </span>
              </p>

              <p>
                If you don't find the email in your inbox, please check your
                spam folder.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <input
              className="flex w-full border bg-background py-3 px-4 text-[20px] border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s] text-center tracking-widest uppercase"
              type="OTPVerification"
              maxLength={6}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, OTP: e.target.value }));
              }}
            />

            <button
              onClick={(e) => handleOTPSubmit(e)}
              className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 mt-3 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer"
            >
              {verifyLoading ? <ButtonLoader /> : "Verify"}
            </button>
          </div>

          <div className="space-y-3">
            <button
              className={`text-blue-500 ${
                !isTimerActive ? "hover:text-blue-600" : ""
              } font-medium cursor-pointer`}
              onClick={(e) => handleOnResendOTP(e)}
            >
              {isTimerActive ? (
                <>
                  {"Resend OTP In "}
                  <CountDownTimer
                    isTimerActive={isTimerActive}
                    setIsTimerActive={setIsTimerActive}
                  />{" "}
                </>
              ) : (
                "Resend OTP"
              )}
            </button>

            <div>
              <Link
                className="text-gray-600 hover:text-gray-800 underline hover:no-underline font-normal text-sm"
                onClick={onLinkClick}
              >
                Use a different email?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerfication;
