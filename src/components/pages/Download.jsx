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
      <Accordion items={accordionItems} />
      <Footer />
    </div>
  );
};

export default Download;
