import React from "react";

const Footer = () => {
  return (
    <footer className="p-[20px] justify-between flex text-[12px] font-[400]">
      <div className="text-[#676767]">©2025 WeTransfer</div>
      <div className="flex gap-[12px]">
        <a
          className="styles_module_wtLink__f24f44fb styles_module_wtLink_Navigational__f24f44fb styles_module_wtLink_Neutral__f24f44fb styles_module_wtLink_Light__f24f44fb styles_module_wtBodyXSmall__f24f44fb"
          target="_blank"
          href="https://wetransfer.com/legal/privacy"
        >
          Privacy
        </a>
        <a
          className="styles_module_wtLink__f24f44fb styles_module_wtLink_Navigational__f24f44fb styles_module_wtLink_Neutral__f24f44fb styles_module_wtLink_Light__f24f44fb styles_module_wtBodyXSmall__f24f44fb"
          target="_blank"
          href="https://wetransfer.com/legal/terms"
        >
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;
