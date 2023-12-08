import React, { useState } from "react";
import { motion } from "framer-motion";
import pakg from "../../assets/pkg.jpeg";
import ReactPlayer from "react-player";
import pkgV from "../../assets/package.mp4";
import Footer from "../Nav&Footer/Footer";

const Packages = () => {
  // data filter
  const data = [
    {
      id: 1,
      type: "preminum",
      title: "PREMIUM PACKAGES (5000MMK)",
      pack: [
        "▪ +3000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS ",
        "▪ PREMIUM SPORTS CHANNELS",
        "▪ 1500 SPORTS CHANNELS",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION   (ONE USER)",
        "▪ ALL DEVICES SUPPORTED ",
      ],
    },
    {
      id: 2,
      type: "preminum",
      title: "PREMIUM PACKAGES (5000MMK)",
      pack: [
        "▪ +3000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS ",
        "▪ PREMIUM SPORTS CHANNELS",
        "▪ 1500 SPORTS + ( ADULT XXX )",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION   (ONE USER)",
        "▪ ALL DEVICES SUPPORTED ",
      ],
    },
    {
      id: 3,
      type: "vip",
      title: " VIP PACKAGES (7000MMK) ",
      pack: [
        "▪ +5000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA & OTHERS ",
        "▪ VIP SPORTS / BACKUP CHANNELS",
        "▪ 3000 SPORTS + 24/7 MOVIES",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION   (ONE USER)",
        "▪ ALL DEVICES SUPPORTED ",
      ],
    },
    {
      id: 4,
      type: "vip",
      title: " VIP PACKAGES (7000MMK) ",
      pack: [
        "▪ +5000 LIVE TV CHANNELS",
        "▪ SD/HD/FHD/UHD QUALITY",
        "▪ UK, USA, CANADA/24/7 MOVIES",
        "▪ VIP SPORTS / BACKUP CHANNELS",
        "▪ 3000 SPORTS + (ADULT XXX)",
        "▪ MOVIES & SERIES (MM SUB)",
        "▪ BLUE OCEAN PLUS APP*",
        "▪ BLUE OCEAN VPN APP*",
        "▪ 2 CONNECTION   (ONE USER)",
        "▪ ALL DEVICES SUPPORTED ",
      ],
    },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const [cate, setCate] = useState([
    {
      id: 1,
      title: "All",
      name: "all",
      active: true,
    },
    {
      id: 2,
      title: "Preminum",
      name: "preminum",
      active: false,
    },
    {
      id: 3,
      title: "VIP",
      name: "vip",
      active: false,
    },
  ]);

  //for cate animation
  const handleCategoryClick = (categoryId) => {
    const updatedCategories = cate.map((category) => {
      return {
        ...category,
        active: category.id === categoryId,
      };
    });
    setCate(updatedCategories);

    // Filter data based on the selected category
    const activeCategory = cate.find((category) => category.id === categoryId);
    if (activeCategory.title === "All") {
      setFilteredData(data);
    } else {
      const newData = data.filter((item) => item.type === activeCategory.name);
      setFilteredData(newData);
    }
  };

  const getActiveDivRight = () => {
    const activeCategory = cate.find((category) => category.active);
    if (activeCategory.title === "All") {
      return 200;
    } else if (activeCategory.title === "Preminum") {
      return 100;
    } else {
      return 0;
    }
  };
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="flex flex-col py-10 px-5 ">
        {/* title and pkg Type  */}
        <div className="flex lg:flex-row flex-col gap-5 justify-between mb-5">
          {/* title  */}
          <div className="text-3xl font-bold text-[#2A9EB8] flex flex-col">
            <p>SUBSCRIPTION PACKAGES</p>
            <span className="h-1 w-40 bg-[#2A9EB8]"></span>
          </div>

          {/* pkg type  */}
          <div className="bg-violet-100 p-1 rounded-lg lg:self-auto self-center">
            <div className="flex relative">
              {cate.map((el) => {
                return (
                  <div
                    key={el.id}
                    className={`bg-violet-100 w-[100px] py-1 cursor-pointer`}
                    onClick={() => handleCategoryClick(el.id)}
                  >
                    <p className="relative z-20 text-center w-full text-[#2A9EB8] font-bold">
                      {el.title}
                    </p>
                  </div>
                );
              })}
              <motion.div
                className="z-10 absolute w-[100px] h-full rounded-lg bg-white"
                initial={{ right: getActiveDivRight() }}
                animate={{ right: getActiveDivRight() }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>
        </div>

        {/* packages Data  */}
        <div className=" grid xl:grid-cols-6  lg:grid-cols-4 grid-cols-2">
          {filteredData?.map((el) => {
            return (
              <div
                key={el?.id}
                className="my-2 flex flex-col col-span-2 lg:text-base text-[10px] md:m-5 shadow-md border rounded-lg overflow-hidden"
              >
                <div className=" relative flex items-center justify-center">
                  <img
                    src={pakg}
                    className="w-full h-full object-cover object-center"
                    alt=""
                  />
                  {/* <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url={pkgV}
                  playing={true}
                  controls={false}
                  muted={true}
                  loop={true}
                /> */}
                </div>
                {/* pack title  */}
                <div className=" p-2 flex flex-col gap-5">
                  <h1 className="text-lg font-bold text-[#2A9EB8]">
                    {el?.title}
                  </h1>
                  <div className="flex flex-col gap-3 text-base">
                    {el?.pack?.map((pk) => {
                      return <span>{pk}</span>;
                    })}
                    <span>
                      ▪အကောင့်မျှဝေ အသုံးပြုခြင်း၊ ပြန်လည်ထုတ်လွှင့်ခြင်းကို
                      တင်းကြပ်စွာ ခွင့်မပြုပါ။ ထိုကဲ့သို့ တွေ့ရှိပါက
                      ဝန်ဆောင်မှုများကို ချက်ချင်းရပ်ဆိုင်းမည်ဖြစ်ပြီး
                      ပြန်အမ်းငွေပေးမည်မဟုတ်ပါ။ ▪ဝန်ဆောင်မှုသည်
                      အခမဲ့အက်ပ်များအတွက် အကျုံးမဝင်ပါ။
                    </span>
                  </div>
                  <button className=" btn-outline text-base ">BUY NOW</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
