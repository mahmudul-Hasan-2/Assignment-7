import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitterX from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className=" py-20 text-white bg-[#244D3F] flex text-center  items-center justify-center flex-col">
      <div className="container space-y-6 px-2">
        <div className="space-y-4 flex items-center justify-center flex-col">
          <img src={footerLogo} alt="" />
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <div className="space-y-4 border-b border-b-[#1A8862]">
            <h2 className="text-[20px] font-bold">Social Links</h2>
            <div className="flex items-center justify-center gap-4 pb-10">
              <div>
                <img src={instagram} alt="" />
              </div>
              <div>
                <img src={facebook} alt="" />
              </div>
              <div>
                <img src={twitterX} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-between mt-7.5 text-gray-300">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex items-center gap-3 text-xs justify-center sm:text-base">
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service </a>
              <a href="">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
