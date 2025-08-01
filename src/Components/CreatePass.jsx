import { Link } from "react-router";

const CreatePass = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">
        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            SkayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">Singup</h2>
          <p className="text-black font-normal">
            to continue your skayShare account
          </p>
        </div>

        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Email"
            type="email"
          />

          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Password"
            type="password"
          />

          <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer">
            Continue with email
          </button>
        </div>

        <div className="text-center">
          <Link to="#" className="text-gray-600 hover:text-gray-800 underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePass;
