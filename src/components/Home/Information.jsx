import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Questions from "./Questions";
import boxing from "../../assets/almost/boxing.jpg";
import channel from "../../assets/almost/channel.jpg";
import telev from "../../assets/almost/telev.jpg";
const Information = () => {
  const lang = useSelector((state) => state?.language?.eng);
  return (
    <>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 ">
        {/* buy now  */}
        <div className="lg:col-span-1 justify-between flex flex-col text-center gap-5 px-5 shadow-md py-3 rounded-md mx-2">
          <h1 className="text-2xl font-bold text-[#2A9EB8]">
            {lang ? (
              "NEVER MISS A PPV EVENT AGAIN"
            ) : (
              <span>PPV Event များကို လက်လွှတ် မခံလိုက်ပါနဲ့</span>
            )}
          </h1>
          <img
            className=" rounded-md w-full  object-cover"
            src={boxing}
            alt=""
          />
          {lang ? (
            <p>
              If you love watching Boxing, UFC, or any PPV Event.Blue Ocean X
              has them all included with your monthly package.
            </p>
          ) : (
            <span>
              သင်သာ လက်ဝှေ့၊ UFC နှင့် တခြားသော PPV Event များကို နှစ်သက်သူ
              တစ်ယောက် ဖြစ်လျှင် Blue Ocean X တွင် လစဥ်ကြေး ထည့်သွင်း၍
              စိတ်ကြိုက် ကြည့်ရှုနိုင်ပါသည်
            </span>
          )}
          {lang ? (
            <p>
              Don’t pay for a PPV ever again when you have our Premium Tv
              Service
            </p>
          ) : (
            <span>
              သင့်ဆီတွင် ကျွန်တော်တို့ Blue Ocean X သာရှိလျှင် PPV Event များ
              အတွက် နောက်ထပ် တခြား ငွေကြေး တစ်စုံတစ်ရာ ထပ်မံ ပေးဆောင်ရန်
              မလိုတော့ပါ
            </span>
          )}
          {/* buy now btn 2 */}
          <Link to={"/packages"}>
            <button className="btn-outline">
              {lang ? "BUY NOW " : <span>ဝယ်ယူရန်</span>}
            </button>
          </Link>
        </div>
        {/* watch now  */}
        <div className="lg:col-span-1 justify-between flex flex-col text-center gap-5 px-5 shadow-md py-3 rounded-md mx-2">
          <h1 className="text-2xl font-bold text-[#2A9EB8]">
            {lang ? (
              "WATCH ALL THE SPORTS YOU NEED NOW INCLUDED !"
            ) : (
              <span>
                သင်နှစ်သက်သော အားကစား ရုပ်သံလိုင်းများကို ကြည့်ရှုလိုက်ပါ !
              </span>
            )}
          </h1>
          <img
            className=" rounded-md w-full  object-cover"
            src={channel}
            alt=""
          />
          {lang ? (
            <p>
              Stop paying for NBA league pass and more, Blue Ocean has them all
              included!
            </p>
          ) : (
            <span>
              NBA League pass အတွက် ပိုက်ဆံသုံး မနေပါနှင့် Blue Ocean X တွင်
              အခမဲ့ ကြည့်ရှုနိုင်ပါသည် !
            </span>
          )}
          {/* buy now btn 2 */}
          <Link to={"/packages"}>
            <button className="btn-outline">
              {lang ? "BUY NOW " : <span>ဝယ်ယူရန်</span>}
            </button>
          </Link>
        </div>
        {/* service /\ */}
        <div className="lg:col-span-1 justify-between flex flex-col text-center gap-5 px-5 shadow-md py-3 rounded-md mx-2">
          <h1 className="text-2xl font-bold text-[#2A9EB8]">
            {lang ? "IN OUR SERVICE" : <span>ကျွန်တော်တို့၏ ဝန်ဆောင်မှု</span>}
          </h1>
          <img
            className=" rounded-md w-full  object-cover"
            src={telev}
            alt=""
          />
          {lang ? (
            <p>BEST MOVIES AND SERIES APP</p>
          ) : (
            <span>အကောင်းဆုံး ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲ APP</span>
          )}
          {lang ? (
            <p>Frequently Updated Movies, High Quality Movies</p>
          ) : (
            <span>နောက်ဆုံးထွက် အရည်အသွေးမြင့် ရုပ်ရှင်ကားကောင်းများ</span>
          )}
          {/* buy now btn 2 */}
          <Link to={"/packages"}>
            <button className="btn-outline">
              {lang ? "BUY NOW " : <span>ဝယ်ယူရန်</span>}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-10">
        {/* trial  */}
        <div className="justify-between lg:self-center flex flex-col text-center gap-5 px-5 shadow-md py-3 rounded-md mx-2">
          <h1 className="text-2xl font-bold text-[#2A9EB8]">
            {lang ? (
              "STOP WAITING AND GET YOUR TRIAL TODAY!"
            ) : (
              <span>
                ဘာကို စောင့်နေဦးမလဲ ယခုပဲ စမ်းသပ် သုံးစွဲ ကြည့်လိုက်ပါ !
              </span>
            )}
          </h1>
          <Link to={"/download"}>
            <a href="https://m.me/blueoceanx.mm" target="blank">
              <button className="btn-outline">
                {lang ? (
                  "GET YOUR 24HR TRIAL"
                ) : (
                  <span>၁ ရက် အခမဲ့ သုံးစွဲခွင့်</span>
                )}
              </button>
            </a>
          </Link>
        </div>
        <Questions lang={lang} />
      </div>
    </>
  );
};

export default Information;
