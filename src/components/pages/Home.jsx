import React from "react";
import Hero from "../Home/Hero";
import BackMarquee from "../Home/BackMarquee";
import CardComponent from "../Home/CardComponent";
import Movie from "../Home/Movie";

const Home = () => {
  return (
    <div className="w-full ">
      <Movie />
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
