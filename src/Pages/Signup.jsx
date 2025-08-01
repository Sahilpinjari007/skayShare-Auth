import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:w-[400px] space-y-8">

        <div className="text-center">
          <h1 className="text-[43px] font-bold text-black mb-8 mt-[-20px] font-serif">
            SkayShare
          </h1>
          <h2 className=" text-[17px] font-bold text-black mb-1">Welcome to skayShare</h2>
          <p className="text-black font-normal">
           Sign up and start sending and receiving files.
          </p>
        </div>


        <div className="space-y-2">
          <input
            className="flex w-full border bg-background py-4 px-4 text-base border-gray-300 rounded-2xl focus:outline-[2px] outline-black transition-[all,.15s]"
            placeholder="Email"
            type="email"
          />

          <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-full h-12 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-2xl hover:cursor-pointer">
            Continue
          </button>
        </div>

   
         <div className="text-center text-[13px]">
          <span className="text-gray-600">{"By creating an account, you agree to our "}</span>
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
          <span className="text-gray-600">{"Don't have an account? "}</span>
          <Link
            to="/login"
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
