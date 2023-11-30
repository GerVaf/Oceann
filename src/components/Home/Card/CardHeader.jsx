import React from "react";
import { useSelector } from "react-redux";
{
  /* Import Typed from react-typed */
}
import Typed from "react-typed";

const ComponentHeader = () => {
  const lang = useSelector((state) => state?.language?.eng);

  return (
    <div className="flex flex-col h-[200px] gap-5 items-center w-full shadow-md p-3">
      <p className="comp-description text-lg font-bold">
        <span>မှန်ကန်သော ပရီမီယံ ရုပ်သံဝန်ဆောင်မှု</span>
      </p>
      <span className="text-base">
        {/* Replace Typical with Typed */}
        <Typed
          className="text-sm"
          strings={[
            "",
            "နာမည်ကြီး အားကစာများ, PREMIER LEAGUE, CHAMPION LEAGUE, EUROPA LEAGUE, PPV, CINEMAX, HBO, SHOWTIME, DOCUMENTARY, KIDS TV, MUSIC, WORLD NEWS, MOVIES & SERIES အစရှိသောရုပ်သံလုင်းများကိုတစ်နေရာတည်းမှာကြည့်ရူ့လိုက်ပါ။",
            "",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </span>
    </div>
  );
};

export default ComponentHeader;
