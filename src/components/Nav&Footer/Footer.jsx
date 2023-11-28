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
      <div className="flex justify-center mb-5">
        <img className="w-1/4" src={con} alt="" />
        <div className="w-2/4 text-blue-600 text-lg flex flex-col items-center justify-center gap-5">
          <div className="flex gap-5">
            <BsFacebook />
            <BsMessenger />
            <BsTelegram />
          </div>
          <div className="flex gap-5">
            <BsYoutube />
            <BsWhatsapp />
            <BsSignal />
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-600">Footer</div>
    </div>
  );
};

export default Footer;
