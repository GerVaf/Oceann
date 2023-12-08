import React from "react";
import Hero from "../Home/Hero";
import BackMarquee from "../Home/BackMarquee";
import CardComponent from "../Home/CardComponent";
import Movie from "../Home/Movie";
import Information from "../Home/Information";
import Footer from "../Nav&Footer/Footer";

const Home = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full h-[100vh] overflow-y-scroll">
      <Movie />
      {/* text  */}
      <CardComponent />
      {/* for showing video section  */}
      <Hero />
      {/* movie slide  */}
      <div className="flex flex-col my-5">
        <BackMarquee />
      </div>
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
