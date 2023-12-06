import React from "react";
import { BsFacebook, BsMailbox, BsMessenger, BsTelegram } from "react-icons/bs";

const Contactus = () => {
  return (
    <div className="flex flex-wrap justify-around">
      <a
        className="con flex flex-col items-center gap-5"
        href="https://www.facebook.com/blueoceanx.mm"
        target="blank"
      >
        <p className="text-base">Facebook</p>
        <BsFacebook />
      </a>
      <a
        className="con flex flex-col items-center gap-5"
        href="https://m.me/blueoceanx.mm"
        target="blank"
      >
        <p className="text-base">Messenger</p>
        <BsMessenger />
      </a>
      <a
        className="con flex flex-col items-center gap-5"
        href="https://t.me/BlueOcean_TV"
        target="blank"
      >
        <p className="text-base">Telegram</p>
        <BsTelegram />
      </a>
      <a
        className="con flex flex-col items-center gap-5"
        href="mailto:support@blueoceanshop.org"
        target="blank"
      >
        <p className="text-base">Mail</p>
        <BsMailbox />
      </a>
    </div>
  );
};

export default Contactus;
