import React from "react";
import Cards from "../Home/Card/Cards";
import Footer from "../Nav&Footer/Footer";

const Features = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="w-full flex justify-center items-center ">
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
