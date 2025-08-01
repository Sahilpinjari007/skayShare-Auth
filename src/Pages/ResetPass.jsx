import { useState } from "react";

const ResetPass = () => {
    const [isLogOutAll, setIsLogOutAll] = useState(false);
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">

        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            SkayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">
            Set a new password
          </h2>
          <p className="text-gray-600 font-normal">
            Set a new password that's long, strong and memorable. Like a good
            superhero movie
          </p>

          <h3 className=" text-[17px] text-black my-5 font-medium">
            {"sahilpinjari@gmail.com"}
          </h3>
        </div>


        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="New Password"
            type="password"
          />

          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Confirm New Password"
            type="password"
          />

          <div className="flex items-center py-[10px] text-[14px] font-[400]">
            <div className=" rounded-[8px] overflow-hidden flex items-center justify-center border border-solid border-[#0003]">
              <input
                className={`w-[24px] h-[24px] border-none pointer bg-clip-padding ${isLogOutAll ? "appearance-non" : "appearance-none"}`}
                type="checkbox"
                onChange={(e)=>setIsLogOutAll(e.target.checked)}
              />
            </div>

            <label className=" ml-[12px]" for="logout">
              Log out from all devices
            </label>
          </div>

          <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer">
            Save new password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
