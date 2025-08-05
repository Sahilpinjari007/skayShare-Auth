import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, verifyOTP, login, resendOTP } from "../Features/auth/authSlice";
import { toast } from "react-toastify";
import OTPVerfication from "../Components/OTPVerfication";
import { Context } from "../Context/AppContext";
import ButtonLoader from "../Components/ButtonLoader";
import { Link, useSearchParams } from "react-router";

const Login = () => {
  const { data, loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { isExistingUser, setIsExistingUser } = useContext(Context);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    OTP: "",
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setVerifyLoading(true);
    dispatch(verifyOTP(formData));
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
    if (success && data.isOTPSend) {
      setIsExistingUser(true);
    }

    if (success && (data?.isOTPSend || data?.isOTPResend)) {
      localStorage.setItem("otpSentTime", data.OTPExpiresAt.toString());
      setIsTimerActive(true);
    }

    if (success && data.isVerified) {
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
    document.title = "skayShare | Sign in";
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

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">
        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-5 mt-[-20px] font-serif">
            skayShare
          </h1>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Sign In</h2>
          <p className="text-gray-600">
            to continue to your skayShare account.
          </p>
        </div>

        <div className="space-y-4">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <button
            onClick={(e) => handleEmailSubmit(e)}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer"
          >
            {loading ? <ButtonLoader /> : "Continue with email"}
          </button>
        </div>

        <div className="text-center">
          <Link
            to={"/password-recovery"}
            className="text-gray-600 hover:text-gray-800 underline"
          >
            Forgot password?
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

          <button
            onClick={() => toast("This Feature Not Allowed!..")}
            variant="outline"
            className="w-full h-12 outline-1 hover:cursor-pointer  font-medium rounded-2xl flex items-center justify-center gap-3"
          >
            <img
              alt="Slack icon"
              aria-hidden="true"
              loading="lazy"
              width="24"
              height="25"
              decoding="async"
              data-nimg="1"
              src="https://auth-web.wetransfer.com/_next/static/media/slack.e82882b2.svg"
            ></img>
            Continue with Slack
          </button>

          <button
            onClick={() => toast("This Feature Not Allowed!..")}
            variant="outline"
            className="w-full h-12 outline-1 hover:cursor-pointer  font-medium rounded-2xl flex items-center justify-center gap-3"
          >
            <img
              alt="Apple icon"
              aria-hidden="true"
              loading="lazy"
              width="24"
              height="25"
              decoding="async"
              data-nimg="1"
              src="https://auth-web.wetransfer.com/_next/static/media/apple.951afce8.svg"
            ></img>
            Continue with Apple
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-600">{"Don't have an account? "}</span>
          <Link
            to={`/signup?redirect_uri=${
              import.meta.env.VITE_API_CLIENT_REDIRECT_URL
            }`}
            className="text-gray-900 hover:text-gray-700 underline font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
