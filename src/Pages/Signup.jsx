import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  existingUser,
  register,
  resendOTP,
  reset,
  verifyOTP,
} from "../Features/auth/authSlice";
import { toast } from "react-toastify";
import OTPVerfication from "../Components/OTPVerfication";
import CreatePass from "../Components/CreatePass";
import { Context } from "../Context/AppContext";
import ButtonLoader from "../Components/ButtonLoader";
import { Link, useSearchParams } from "react-router";

const Signup = () => {
  const { data, loading, error, success } = useSelector((state) => state.auth);
  const { isExistingUser, setIsExistingUser, isUserCheckd, setIsUserCheckd } =
    useContext(Context);

  const dispatch = useDispatch();
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    OTP: "",
    password: "",
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsUserCheckd(true);
    dispatch(existingUser(formData));
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setVerifyLoading(true);
    dispatch(verifyOTP(formData));
  };
  const handleRegsiterSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  const handleOnResendOTP = (e) => {
    e.preventDefault();
    if (isTimerActive) return toast("Please waith for time!");
    dispatch(resendOTP(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      setVerifyLoading(false);
    }

    if (isUserCheckd && success) {
      setIsExistingUser(data.isExistingUser);
      setIsUserCheckd(false);
    }

    if (success && data?.isOTPSend) {
      setIsExistingUser(true);
    }

    if (success && (data?.isExistingUser || data?.isOTPResend)) {
      localStorage.setItem("otpSentTime", data.OTPExpiresAt.toString());
      setIsTimerActive(true);
    }

    if (success && data?.isVerified) {
      window.location.href = decodeURIComponent(
        `${
          searchParams.get("redirect_uri") ||
          import.meta.env.VITE_API_CLIENT_REDIRECT_URL
        }?token=${data.accessToken}`
      );
    }
    dispatch(reset());
  }, [success, error, dispatch]);

  useEffect(() => {
    document.title = "skayShare | Sign up";
    setIsExistingUser(null);
    setIsUserCheckd(false);
  }, []);

  if (isExistingUser) {
    return (
      <OTPVerfication
        formData={formData}
        setFormData={setFormData}
        handleOTPSubmit={handleOTPSubmit}
        handleOnResendOTP={handleOnResendOTP}
        setIsTimerActive={setIsTimerActive}
        isTimerActive={isTimerActive}
        verifyLoading={verifyLoading}
      />
    );
  }

  if (!isExistingUser && isExistingUser !== null) {
    return (
      <CreatePass
        formData={formData}
        setFormData={setFormData}
        handleRegsiterSubmit={handleRegsiterSubmit}
        loading={loading}
      />
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">
        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            skayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">
            Welcome to skayShare
          </h2>
          <p className="text-black font-normal">
            Sign up and start sending and receiving files.
          </p>
        </div>

        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <button
            onClick={(e) => handleEmailSubmit(e)}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer"
          >
            {loading ? <ButtonLoader /> : "Continue"}
          </button>
        </div>

        <div className="text-center text-[13px]">
          <span className="text-gray-600">
            {"By creating an account, you agree to our "}
          </span>
          <Link
            to="#"
            className="text-gray-900 hover:text-gray-700  font-medium"
          >
            Terms Of Services
          </Link>
          <span className="text-gray-600">{" and "}</span>
          <Link
            to="#"
            className="text-gray-900 hover:text-gray-700 font-medium"
          >
            Privacy & Cookie Statement.
          </Link>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">or</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => toast("This Feature Not Allowed!..")}
            variant="outline"
            className="w-full h-12 outline-1 hover:cursor-pointer  font-medium rounded-2xl flex items-center justify-center gap-3"
          >
            <img
              alt="Google icon"
              aria-hidden="true"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="https://auth-web.wetransfer.com/_next/static/media/google.226bc584.svg"
            ></img>
            Continue with Google
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-600">{"Already have an account? "}</span>
          <Link
            to={`/login?redirect_uri=${
              import.meta.env.VITE_API_CLIENT_REDIRECT_URL
            }`}
            className="text-gray-900 hover:text-gray-700 underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
