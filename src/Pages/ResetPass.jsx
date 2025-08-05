import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, updatePass } from "../Features/auth/authSlice";
import { toast } from "react-toastify";
import ButtonLoader from "../Components/ButtonLoader";
import { useSearchParams } from "react-router";
import { jwtDecode } from "jwt-decode";

const ResetPass = () => {
  const { data, loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
    confirmPass: "",
    token: "",
    isLogOutAll: false,
  });

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePass(formData));
  };

  useEffect(() => {
    if (error) toast.error(error);

    if (success && data?.isPassReset) {
      toast.success("Password Reset Successfuly!");
      window.location.href =
        searchParams.get("redirect_uri") || import.meta.env.VITE_API_APP_URL;
    }
    dispatch(reset());
  }, [success, error, dispatch]);

  useEffect(() => {
    if (searchParams.get("token")) {
      try {
        const decoded = jwtDecode(searchParams.get("token"));
        setFormData((prev) => ({
          ...prev,
          email: decoded.email,
          token: searchParams.get("token"),
        }));
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, [searchParams.get("token")]);

  useEffect(() => {
    document.title = "skayShare | New Password";
  }, []);
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">
        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            skayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">
            Set a new password
          </h2>
          <p className="text-gray-600 font-normal">
            Set a new password that's long, strong and memorable. Like a good
            superhero movie
          </p>

          <h3 className=" text-[17px] text-black my-5 font-medium">
            {formData.email}
          </h3>
        </div>

        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="New Password"
            type="password"
            value={formData.pass}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, pass: e.target.value }));
            }}
          />

          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Confirm New Password"
            type="password"
            value={formData.confirmPass}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, confirmPass: e.target.value }));
            }}
          />

          <div className="flex items-center py-[10px] text-[14px] font-[400]">
            <div className=" rounded-[8px] overflow-hidden flex items-center justify-center border border-solid border-[#0003]">
              <input
                className={`w-[24px] h-[24px] border-none pointer bg-clip-padding ${
                  formData.isLogOutAll ? "appearance-non" : "appearance-none"
                }`}
                type="checkbox"
                value={formData.isLogOutAll}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isLogOutAll: e.target.checked,
                  }))
                }
              />
            </div>

            <label className=" ml-[12px]" htmlFor="logout">
              Log out from all devices
            </label>
          </div>

          <button
            onClick={(e) => handleOnFormSubmit(e)}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer"
          >
            {loading ? <ButtonLoader /> : "Save new password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
