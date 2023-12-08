// Accordion.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowBarUp, BsArrowUp } from "react-icons/bs";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionVariants = {
    open: { opacity: 1 },
    closed: { opacity: 1 },
  };

  console.log(activeIndex);

  return (
    <div className="my-5">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="m-1"
          variants={accordionVariants}
          initial="closed"
          animate={activeIndex === index ? "open" : "closed"}
          exit="closed"
          transition={{ duration: 0.3 }}
        >
          <div
            className="flex items-center justify-between p-4 text-white font-bold rounded-md bg-[#2A9EB8] cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div>{item.title}</div>
            <BsArrowUp
              className={`${
                activeIndex === index && "rotate-180"
              } transition duration-150`}
            />
          </div>
          {activeIndex === index && (
            <motion.div
              className="p-4 bg-white border-2 shadow-sm rounded-b-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.content}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;