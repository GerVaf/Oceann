import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { get } from "../../Global/api";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoading,
  stopLoading,
  selectLoading,
} from "../../Global/rtk/LoadingSlice";

import f1 from "../../assets/football/f1.jpg";
import f2 from "../../assets/football/f2.jpg";
import f3 from "../../assets/football/f3.jpg";
import f4 from "../../assets/football/f4.jpg";
import f5 from "../../assets/football/f5.jpg";
import f6 from "../../assets/football/f6.jpg";
import f7 from "../../assets/football/f7.jpg";
import f8 from "../../assets/football/f8.jpg";
import f9 from "../../assets/football/f9.jpg";
import f10 from "../../assets/football/f10.jpg";
import f11 from "../../assets/football/f11.jpg";
import f12 from "../../assets/football/f12.jpg";
import f13 from "../../assets/football/f13.jpg";
import f14 from "../../assets/football/f14.jpg";
import f15 from "../../assets/football/f15.jpg";
import f16 from "../../assets/football/f16.jpg";

const Marquee = () => {
  const loading = useSelector(selectLoading);

  const data = [
    { image: f1 },
    { image: f2 },
    { image: f3 },
    { image: f4 },
    { image: f5 },
    { image: f6 },
    { image: f7 },
    { image: f8 },
    { image: f9 },
    { image: f10 },
    { image: f11 },
    { image: f12 },
    { image: f14 },
    { image: f15 },
    { image: f16 },
  ];
  // for animaition
  const containerVariants = {
    animate: {
      x: ["0%", "-40%"],
      transition: {
        x: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  // console.log(data);
  return (
    <div
      className="my-5 flex justify-center"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <div className=" relative w-[90%] lg:w-[70%] overflow-hidden">
        {/* bg decoration */}
        {/* <div className="w-full h-full bg-decoration absolute z-20"></div> */}
        {/* data  */}
        <motion.div
          className="bg-white text-[100px] font-bold flex items-center justify-center"
          variants={containerVariants}
          initial="animate"
          animate="animate"
          style={{ display: "inline-block" }}
        >
          {/* inner data  */}
          <div className="flex gap-2">
            {data.map((item) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={item?.image}
                  className=" w-32 h-48"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item?.image}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
