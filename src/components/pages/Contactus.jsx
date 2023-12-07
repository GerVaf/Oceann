import React from "react";
import { BsFacebook, BsMailbox, BsMessenger, BsTelegram } from "react-icons/bs";
import ser from "../../assets/ser.gif";

const Contactus = () => {
  return (
    <div className="flex flex-wrap justify-around scroll-smooth">
      <div className="flex flex-col gap-3 p-5 m-5 text-gray-600 shadow-md border rounded-md">
        <div className="flex justify-around items-center">
          <img className=" w-36 h-36" src={ser} alt="" />
          <p className="text-xl font-bold text-[#2A9EB8] border-b-2 border-[#2A9EB8]">
            Contact Us
          </p>
        </div>
        <p>
          ▪️ အကောက် သက်တမ်းတိုးခြင်း၊ အကောက်သစ်ဝယ်ယူလိုခြင်းများအတွက် မနက် [ ၉ ]
          နာရီမှ၊ ညနေ [ ၇ ] နာရီအထိ ဆောင်ရွက်ပေးပါသည်။
        </p>
        <p>
          ▪️အဆင်မပြေတာ အခက်အခဲတစ်စုံတစ်ရာရှိပါကလည်း Page Messenger
          မှတစ်ဆင့်မေးမြန်းနိုင်ပါကြောင်း ရိုသေလေးစားစွာ အသိပေးအပ်ပါသည်။
        </p>
        <p>
          ▪️ နေ့စဉ်နဲ့အမျှ ထုတ်လွင့်ပြသ နေသော နိူင်ငံတကာ ရုပ်သံ လိုင်းများနဲ့
          အားကစား ပွဲစဉ်များအားလုံးကို Blue Ocean X Service မှာ ၉၀:/: ရာခိုင်
          နူန်း SD,HD,FHD,UHD,ENGLISH အသံထွက် ရုပ်သံလိုင်းများဖြင့်
          ကြည့်ရူ့ခံစားနိူင်ပါသည်။
        </p>
      </div>
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
