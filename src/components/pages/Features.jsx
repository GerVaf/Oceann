import React from "react";
import Cards from "../Home/Card/Cards";
import Footer from "../Nav&Footer/Footer";

const Features = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="h-[100vh] overflow-scroll py-10">
      {/* title  */}
      <div className="text-2xl font-bold text-[#2A9EB8] flex items-center text-center flex-col">
        <h1 className="pb-2 text-center">
          ANY GAMES ANY WHERE
          <br />
          THE WORLD IS IN YOUR HANDS
        </h1>
        <span className="h-1 w-40 bg-[#2A9EB8]"></span>
      </div>

      <div className="w-full flex justify-center items-center ">
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
