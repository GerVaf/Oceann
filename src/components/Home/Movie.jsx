import React from "react";
import Marquee from "react-fast-marquee";
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
import { motion } from "framer-motion";
const Movie = () => {
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
    { image: f13 },
  ];
  return (
    <div className=" ">
      <Marquee>
        {data.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={item?.image}
              className=" w-32 h-48 mx-1"
            >
              <img
                className="w-full h-full object-cover"
                src={item?.image}
                alt=""
              />
            </motion.div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Movie;
