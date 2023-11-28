import React from "react";
import { useSelector } from "react-redux";
import Typical from "react-typical";

const ComponentHeader = () => {
  const lang = useSelector((state) => state?.language?.eng);

  const getSteps = () => {
    if (lang) {
      return ["", 1000, "PREMIUM TV SERVICE MADE RIGHT", 3000];
    } else {
      return ["", 1000, `မှန်ကန်သော ပရီမီယံ ရုပ်သံဝန်ဆောင်မှု`, 3000];
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-5 shadow-md p-3">
        <div className="flex flex-col gap-5 items-center">
          <Typical
            steps={getSteps()}
            loop={Infinity}
            wrapper="p"
            className="lg:text-3xl font-medium"
          />
          <div className="">
            <p className="comp-description text-sm font-medium">
              {lang ? (
                "WATCH LIVE TV, PPV, SPORTS, MOVIES AND TV SHOWS ON DEMAND TODAY!"
              ) : (
                <span>
                  နာမည်ကြီး အားကစားများ | PPV | CINEMAX | HBO SHOWTIME
                  |DOCUMENTARY | KIDS TV | MUSIC WORLD NEWS | MOVIES & SERIES
                  အစရှိသောရုပ်သံလုင်းများကိုကြည့်ရူ့လိုက်ပါ။
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
