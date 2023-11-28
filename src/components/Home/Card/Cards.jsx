import React, { useState } from "react";
import { CiMonitor } from "react-icons/ci";
import { PiDeviceMobileSpeakerThin } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiSpeedtest } from "react-icons/si";
import { MdPlaylistPlay } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";

const Cards = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="mt-10 flex  flex-wrap gap-10 justify-center max-w-[1200px]">
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <CiMonitor className=" text-[50px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <h2 className="card-heading text-lg font-medium">
              {active ? "High Quality" : <span>အရည်အသွေး မြင့်မားမှု</span>}
            </h2>
            <p className=" text-gray-700">
              {active ? (
                "We offer best in class quality. We have SD, HD 720p and FHD 1080p with FULL BIT RATE support."
              ) : (
                <span>
                  ကျွန်တော်တို့တွင် SD, HD, 720p နှင့် FHD 1080p စသော quality
                  မျိုးစုံကို အကောင်းဆုံး အရည်အသွေးဖြင့် ဝန်ဆောင်မှု
                  ပေးထားပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <PiDeviceMobileSpeakerThin className=" text-[50px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <h2 className="card-heading text-lg font-medium">
              {active ? (
                "Devices Support IPTV"
              ) : (
                <span>IPTV ကိုထောက်ပံ့သော စက်များ</span>
              )}
            </h2>
            <p className=" text-gray-700">
              {active ? (
                `Fire TV Stick 4K streaming device , Android Phone , Android Box ,
              Android TV , Smart TV And, iPhone , iPad , Computer , WebPlayer
              are the Supported Platforms`
              ) : (
                <span>
                  Fire TV Stick 4K streaming device , Android Phone , Android
                  Box , Android TV , Smart TV And, iPhone, iPad, Computer ,
                  WebPlayer များပေါ်တွင် အသုံးပြု၍ ရပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <FaEarthAmericas className=" text-[40px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <h2 className="card-heading text-lg font-medium">
              {active ? "Global provider" : <span>ကမ္ဘာအနှံ့ ဝန်ဆောင်မှု</span>}
            </h2>
            <p className=" text-gray-700">
              {active ? (
                `We offer our services World-Wide. There are no limits with our
              service. You can watch any channel you wish and buy subscription
              from where ever you are located.`
              ) : (
                <span>
                  ကျွန်တော်တို့ဝန်ဆောင်မှုကို ကမ္ဘာအနှံ့မှ အကန့်အသတ်မဲ့
                  ရရှိနိုင်ပါသည်။ကမ္ဘာပေါ်မှ မည်သည့်နေရာတွင်မဆို
                  ကျွန်တော်တို့ဆီမှ ရုပ်သံလိုင်းများ ကို ဝယ်ယူ
                  ကြည့်ရှုနိုင်ပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <SiSpeedtest className=" text-[40px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <h2 className="card-heading text-lg font-medium">
              {active ? (
                "High speed and stability"
              ) : (
                <span>တည်ငြိမ် သွက်လက်သော အမြန်နှုန်း</span>
              )}
            </h2>
            <p className=" text-gray-700">
              {active ? (
                `Our infrastructure in regards of servers and bandwidth is one of
              its kind. We are very proud of our high quality channel list and
              streaming.`
              ) : (
                <span>
                  ကျွန်တော် တို့၏ ဆာဗာများ၊ ကွန်ရက်များမှာ နောက်ဆုံးပေါ်
                  နည်းပညာများကို အသုံးပြုထားသောကြောင့် ကျွန်တော်တို့၏ ရုပ်သံ
                  အရည်အသွေးကို အပြည့်အဝ အာမခံပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <MdPlaylistPlay className=" text-[50px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <h2 className="card-heading text-lg font-medium">
              {active ? (
                "Custom playlist"
              ) : (
                <span>စိတ်ကြိုက် playlist များ</span>
              )}
            </h2>
            <p className=" text-gray-700">
              {active ? (
                `You can edit your channel list. The channels are grouped by
              countries, all you have to do is choose which you want.`
              ) : (
                <span>
                  သင်ကြိုက်နှစ်သက်သော ရုပ်သံလိုင်းများကို သင်ကိုယ်တိုင်
                  ပြုပြင်နိုင်ပါသည်။ ရုပ်သံလိုင်းများကို နိုင်ငံ အလိုက်
                  စုစည်းထားသဖြင့် သင်ကြိုက်နှစ်သက်သည် ကို ရွေးချယ် ကြည့်ရှုရန်သာ
                  လိုပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[310px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-row gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <BsCashCoin className=" text-[40px] card-icon" />
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className="card-heading text-lg font-medium ">
              {active ? (
                "Become A Reseller And Start Earning Money Today"
              ) : (
                <span>
                  Reseller တစ်ယောက် အဖြစ် ပါဝင်ကာ ယနေ့မှ စ၍ ဝင်ငွေရှာလိုက်ပါ
                </span>
              )}
            </h2>
            <p className=" text-gray-700 mt-2">
              {active ? (
                `Becoming a reseller allows you to start selling the same day you
              start your reseller business. A reseller is someone that acquires
              a certain amount of credit to sell IPTV accounts to a third party.`
              ) : (
                <span>
                  Reseller တစ်ယောက်သည် မိမိ ၏ လုပ်ငန်း စတင်သောနေ့ ချက်ချင်း၌ပင်
                  ပိုက်ဆံကို လက်ငင်းရှာဖွေနိုင်သည်။ Reseller ဆိုသည်မှာ ကြားခံ
                  အဖွဲ့အစည်းတစ်ခုခုမှ IPTV အကောင့်များကို credit အရေအတွက်
                  တစ်ခုခုဖြင့် ဝယ်ယူ ၍ တစ်ဆင့်ပြန်လည် ရောင်းချသူကို
                  ခေါ်ဆိုခြင်းဖြစ်သည်။
                </span>
              )}
            </p>
            {/* <HiArrowNarrowRight className=" card-arrow text-4xl  self-end mr-4 cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
