import React from "react";
import con from "../../assets/con.gif";
import {
  BsFacebook,
  BsMessenger,
  BsSignal,
  BsTelegram,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-5">
        <img className="w-1/4" src={con} alt="" />
        <div className="w-2/4 text-[#2A9EB8] text-lg flex flex-col items-center justify-center gap-5">
          <div className="flex gap-5">
            <BsFacebook />
            <BsMessenger />
            <BsTelegram />
          </div>
          <div className="flex gap-5 text-sm">
            support@blueoceanshop.org
          </div>
        </div>
      </div>
      <div className="w-full bg-[#2A9EB8] text-sm text-white text-center p-2">
        Copyright &copy; BLUE OCEAN X All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
