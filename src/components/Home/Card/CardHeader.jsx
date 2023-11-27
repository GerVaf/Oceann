import React, { useState } from "react";
import Typical from "react-typical";

const ComponentHeader = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className=" flex justify-center items-center mt-5">
        <div className=" flex flex-col gap-3 items-center">
          <Typical
            steps={
              active
                ? ["", 1000, "PREMIUM TV SERVICE MADE RIGHT", 3000]
                : [
                    "",
                    1000,
                    `မှန်ကန်သော ပရီမီယံ ရုပ်သံဝန်ဆောင်မှု`,
                    3000,
                  ]
            }
            loop={Infinity}
            wrapper="p"
            className=" text-3xl font-medium"
          />
          <div className="">
            <p className="comp-description text-sm font-medium">
              {active ? (
                "WATCH LIVE TV, PPV, SPORTS, MOVIES AND TV SHOWS ON DEMAND TODAY!"
              ) : (
                <span>
                  တိုက်ရိုက် ရုပ်သံလိုင်းများ၊ PPV၊ အားကစား၊ ခေတ်စားနေသော
                  ရုပ်ရှင်များ၊ ဇာတ်လမ်းတွဲများကို ကြည့်ရှုလိုက်ပါ။
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;