import React from "react";
import Cards from "../Home/Card/Cards";
import Footer from "../Nav&Footer/Footer";

const Features = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="lg:text-4xl text-2xl font-bold text-[#2A9EB8] my-5 px-2">
        <h1 className="pb-2">HOW SET UP BLUE OCEAN X</h1>
        <hr className="h-1 w-2/4 bg-[#2A9EB8]" />
      </div>
      <div className="w-full flex justify-center items-center ">
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
