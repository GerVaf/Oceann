import React from "react";
import Hero from "../Home/Hero";
import Marquee from "../Home/Marquee";
import BackMarquee from "../Home/BackMarquee";

const Home = () => {
  return (
    <div className="w-full ">
      {/* for showing video section  */}
      <Hero/>
      {/* movie slide  */}
      <div className="flex flex-col my-5">
        <Marquee />
        <BackMarquee />
      </div>
    </div>
  );
};

export default Home;
