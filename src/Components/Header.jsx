import ssLogo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" flex items-center p-[20px]">
      <a
        className="relative text-[16px] font-[400] cursor-pointer gap-[0.5rem]"
        href="https://skayshare.vercel.app"
        title="Back to skayshare.vercel.app"
      >
        <img
          src={ssLogo}
          alt="Skayshare Logo"
          width="40"
          height="20"
          fill="none"
          className="styles_module_logo__8a4eaeaf styles_module_light__8a4eaeaf"
        />
      </a>
    </header>
  );
};

export default Header;
