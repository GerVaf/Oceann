import React from "react";
import { BsArrowRight } from "react-icons/bs";
import showCase from "../../assets/blag.gif";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state) => state?.language?.eng);
  // console.log(lang);
  return (
    <div className=" relative ">
      {/* information  */}
      <div className="lg:mt-20 mt-10 lg:px-10 px-2 flex flex-col justify-around gap-5">
        <div className="flex flex-col gap-10 p-3 border shadow-lg rounded-md">
          {/* title  */}
          <div className="lg:text-4xl text-2xl font-bold text-[#2A9EB8]">
            <h1 className="pb-2">
              {lang ? (
                "STOP OVERPAYING CABLE COMPANIES & STREAMING SERVICES"
              ) : (
                <span>
                  Streaming ဝန်ဆောင်မှုလုပ်ငန်းများ၊ ဆက်သွယ်ရေး လုပ်ငန်းများအား
                  ငွေကြေး အဆမတန် ပေးဆောင် နေရခြင်းကို ရပ်တန့်လိုက်ပါ
                </span>
              )}
            </h1>
            <hr className="h-1 w-2/4 bg-[#2A9EB8]" />
          </div>
          {/* informatinon  */}
          <div className="flex flex-col lg:gap-2 gap-3 text-gray-600 text-lg 2xl:text-base lg:text-[13px] font-medium">
            <p className="text-gray-700 text-lg">
              {lang ? (
                "Blue Ocean provides HUGE VALUE and will be the BEST decision in saving money but keeping QUALITY"
              ) : (
                <span className="font-bold">
                  Blue Ocean သည် ရုပ်သံအရည်အသွေး ကောင်းကောင်းကို
                  စျေးနှုန်းချိုသာစွာ ကြည့်ရှုနိုင်ရန် အ​ကောင်းဆုံး
                  ဖန်တီးပေးထားသောကြောင့် ဆုံးဖြတ်ချက်မှန်မှန် ချ၍ ဝယ်ယူလိုက်ပါ{" "}
                </span>
              )}
            </p>

            {lang ? (
              <p>
                • Stream all Local Stations in the USA ABC, NBC, FOX, CBS etc
              </p>
            ) : (
              <span>
                • USA အခြေစိုက် ABC, NBC, FOX, CBS အစရှိသော ရုပ်သံလိုင်းများအား
                တိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Stream Premium Sports Channels & Live Events Hundreds of
                options
              </p>
            ) : (
              <span>
                • ပရီမီယံ အားကစား ရုပ်သံလိုင်းများ၊ တိုက်ရိုက်ထုတ်လွှင့်သော
                အစီအစဥ်များကို ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Stream Premium Movie Channels Included HBO, Showtime, Cinemax,
                Starz etc
              </p>
            ) : (
              <span>
                • HBO, Showtime, BET, OWN အစရှိသော ပရီမီယံရုပ်ရှင်
                ရုပ်သံလိုင်းများကို ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Stream hundreds of Entertainment Channels Discovery, BET, OWN
                etc
              </p>
            ) : (
              <span>
                • ဖျော်ဖြေရေး ရုပ်သံလိုင်းများဖြစ်သော Discovery, BET, OWN
                အစရှိသည့် ရုပ်သံလိုင်းပေါင်း ၁၀၀ ကျော်ကို ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Stream Family & Kids Networks Disney, Cartoon Net, Hallmark
                etc
              </p>
            ) : (
              <span>
                • Disney, Cartoon Network, Hallmark စသော မိသားစု
                ရုပ်သံလိုင်းများကို ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Access thousands of Movies On Demand New & old Content
                Included
              </p>
            ) : (
              <span>
                • ထောင်ပေါင်းများစွာ သော အသစ်၊ အဟောင်း ရုပ်ရှင်များကို
                ကြည့်ရှုခွင့်ရှိခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Access thousands of TV Programs On-Demand New & Old Included
              </p>
            ) : (
              <span>
                • ရုပ်သံ ပရိုဂရမ် ​ပေါင်း ၁၀၀၀ ကျော်ကို ကြည့်ရှုခွင့် ရှိခြင်း
              </span>
            )}

            {lang ? (
              <p>
                • Access Adult Only Content – Live TV & VOD Options 18+ App with
                XXX
              </p>
            ) : (
              <span>
                • ပုရိသ အကြိုက် လူကြီးကားများ၊ လိင်ဖျော်ဖြေရေး ကားများကိုလည်း
                ကြည့်ရှုနိုင်ခြင်း
              </span>
            )}
          </div>
        </div>
        {/* button  */}
        <div className="flex gap-5 text-xl md:flex-row flex-col">
          <Link
            to={"/packages"}
            className="btn-outline flex items-center gap-3 justify-center"
          >
            Get Start <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
