import React, { useState } from "react";
import { motion } from "framer-motion";
import pakg from "../../assets/pkg.jpg";
import ReactPlayer from "react-player";
import pkgV from "../../assets/package.mp4";

const Packages = () => {
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
      if (category.id === categoryId) {
        return { ...category, active: true };
      } else {
        return { ...category, active: false };
      }
    });
    setCate(updatedCategories);
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

  return (
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
                  <p className="relative z-20 text-center w-full">{el.title}</p>
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
        <div className=" flex flex-col col-span-2 lg:text-base text-[10px] md:m-5 shadow-md border rounded-lg overflow-hidden">
          {/* imga */}
          {/* <div className=" w-2/4">
            <ReactPlayer
              url={pkg}
              width="100%"
              height="100%"
              playing={true}
              controls={false}
              loop={true}
              muted={true}
              style={{
                objectFit: "cover",
              }}
            />
          </div> */}
          <div className=" relative flex items-center justify-center">
            {/* <img src={pakg} className="w-full h-full object-cover object-center" alt="" /> */}
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url={pkgV}
              playing={true}
              // controls={false}
              muted={true}
              loop={true}
            />
          </div>
          {/* pack title  */}
          <div className=" p-2 flex flex-col gap-5">
            <h1 className="text-lg font-bold text-[#2A9EB8]">
              PREMIUM PACKAGES (5000MMK)
            </h1>
            <div className="flex flex-col gap-3 text-base">
              <span>▪ +3000 LIVE TV CHANNELS</span>
              <span>▪ SD/HD/FHD/UHD QUALITY</span>
              <span>▪ UK, USA, CANADA & OTHERS </span>
              <span>▪PREMIUM SPORTS CHANNELS</span>
              <span>▪1500 SPORTS CHANNELS</span>
              <span>▪ MOVIES & SERIES (MM SUB)</span>
              <span>▪ BLUE OCEAN PLUS APP*</span>
              <span>▪ BLUE OCEAN VPN APP*</span>
              <span>▪ 2 CONNECTION (ONE USER)</span>
              <span>▪ ALL DEVICES SUPPORTED </span>
            </div>
            <button className=" btn-outline text-base ">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
