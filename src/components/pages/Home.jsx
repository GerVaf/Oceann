import React from "react";
import Hero from "../Home/Hero";
import Marquee from "../Home/Marquee";
import BackMarquee from "../Home/BackMarquee";
import CardComponent from "../Home/CardComponent";

const Home = () => {
  return (
    <div className="w-full ">
      <Marquee />
      {/* text  */}
      <CardComponent/>
      {/* for showing video section  */}
      <Hero />
      {/* movie slide  */}
      <div className="flex flex-col my-5">
        <BackMarquee />
      </div>
    </div>
  );
};

export default Home;
