import React from "react";
import Footer from "../Nav&Footer/Footer";
import Accordion from "../Download/Accordion";

const Download = () => {
  const accordionItems = [
    {
      title: "Section 1",
      content: "Content for section 1...",
    },
    {
      title: "Section 2",
      content: "Content for section 2...",
    },
    // Add more sections as needed
  ];
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className=" h-[100vh] overflow-scroll">

          {/* title  */}
          <div className="text-3xl font-bold text-[#2A9EB8] flex items-center text-center flex-col">
            <p>TUTORIAL AND INSTALLATION</p>
            <span className="h-1 w-40 bg-[#2A9EB8]"></span>
          </div>

 

      <Accordion items={accordionItems} />
      <Footer />
    </div>
  );
};

export default Download;
