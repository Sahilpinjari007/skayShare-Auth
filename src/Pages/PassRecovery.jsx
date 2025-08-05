import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, reqResetPass } from "../Features/auth/authSlice";
import { toast } from "react-toastify";
import ButtonLoader from "../Components/ButtonLoader";
import { Link } from "react-router";

const PassRecovery = () => {
  const { data, loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(reqResetPass(formData));
  };

  useEffect(() => {
    if (error) toast.error(error);

    if (success && data?.isLinkSend) {
      toast.success("Link send on email!...");
      setFormData({ email: "" });
    }

    dispatch(reset());
  }, [success, error, dispatch]);

  useEffect(() => {
    document.title = "skayShare | Forget Password";
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">
        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            skayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">
            Reset your password
          </h2>
          <p className="text-black font-extralight">
            We'll send you instructions to reset your password and get you back
            on track.
          </p>
        </div>

        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <button
            onClick={(e) => handleEmailSubmit(e)}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer"
          >
            {loading ? <ButtonLoader /> : "Email me"}
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-600 font-extralight text-[15px]">
            No need to reset your password? Go back to{" "}
          </span>
          <Link
            to={`/signup?redirect_uri=${
              import.meta.env.VITE_API_CLIENT_REDIRECT_URL
            }`}
            className="text-gray-900 hover:text-gray-700 underline font-medium"
          >
            Sign up.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PassRecovery;
