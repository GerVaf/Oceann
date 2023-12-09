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
      <div className="lg:text-4xl flex flex-col text-2xl font-bold text-center justify-center text-[#2A9EB8] my-5 px-2">
        <h1 className="pb-2">TUTORIAL AND INSTALLATION</h1>
        <span className="h-1 w-2/4 bg-[#2A9EB8]"></span>
      </div>
      <Accordion items={accordionItems} />
      <Footer />
    </div>
  );
};

export default Download;
