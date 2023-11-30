import React, { useState } from "react";
import { CiMonitor } from "react-icons/ci";
import { PiDeviceMobileSpeakerThin } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiSpeedtest } from "react-icons/si";
import { MdPlaylistPlay } from "react-icons/md";
import { BsCashCoin, BsClock } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";

const Cards = () => {
  const lang = useSelector((state) => state?.language?.eng);

  return (
    <div className="mt-10 flex  flex-wrap gap-10 justify-center max-w-[1200px]">
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <CiMonitor className=" text-[50px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? "High Quality" : <span>အရည်အသွေး မြင့်မားမှု</span>}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
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
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <PiDeviceMobileSpeakerThin className=" text-[50px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? (
                "Devices Support IPTV"
              ) : (
                <span>IPTV ကိုထောက်ပံ့သော စက်များ</span>
              )}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
                "Fire TV Stick 4K streaming device , Android Phone , Android Box , Android TV , Smart TV And, iPhone , iPad , Computer , WebPlayer are the Supported Platforms."
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
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <FaEarthAmericas className=" text-[40px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? "Global provider" : <span>ကမ္ဘာအနှံ့ ဝန်ဆောင်မှု</span>}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
                "We offer our services World-Wide. There are no limits with our service. You can watch any channel you wish and buy subscription from where ever you are located."
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
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <SiSpeedtest className=" text-[40px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? (
                "High speed and stability"
              ) : (
                <span>တည်ငြိမ် သွက်လက်သော အမြန်နှုန်း</span>
              )}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
                "Our infrastructure in regards of servers and bandwidth is one of its kind. We are very proud of our high quality channel list and streaming."
              ) : (
                <span>
                  ကျွန်တော် တို့၏ ဆာဗာများ၊ ကွန်ရက်များမှာ နောက်ဆုံးပေါ်
                  နည်းပညာများကို အသုံးပြုထားသောကြောင့် ကျွန်တော် တို့၏ ရုပ်သံ
                  အရည်အသွေးကို အပြည့်အဝ အာမခံပါသည်။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <MdPlaylistPlay className=" text-[50px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? "Custom playlist" : <span>စိတ်ကြိုက် playlist များ</span>}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
                "You can edit your channel list. The channels are grouped by countries, all you have to do is choose which you want."
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
      <div className=" w-[330px] h-[350px] flex shadow-lg bg-gray-100 rounded-[1rem] px-2 py-5 ">
        <div className="flex flex-col items-center  gap-5">
          <div className="flex-shrink-0 mt-[0.4rem]">
            <div className="icon-container w-[60px] h-[60px] rounded-[0.7rem]  flex justify-center items-center">
              <BsClock className=" text-[50px] card-icon" />
            </div>
          </div>
          <hr className="h-1 bg-[#2A9EB8] w-4/6" />
          <div className=" flex flex-col justify-around items-center h-full px-2">
            <h2 className="card-heading text-xl font-medium">
              {lang ? (
                "Auto and Free Update"
              ) : (
                <span>အရည်အသွေး မြင့်မားမှု</span>
              )}
            </h2>
            <p className=" text-gray-700 text-lg">
              {lang ? (
                "We usually update and add new TV Channels and VODs to the service ."
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
    </div>
  );
};

export default Cards;
