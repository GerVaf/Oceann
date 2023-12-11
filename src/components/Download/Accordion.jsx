// Accordion.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { LuMousePointerClick } from "react-icons/lu";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionVariants = {
    open: { opacity: 1 },
    closed: { opacity: 1 },
  };

  // console.log(activeIndex);
  console.log(items);

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
            className="flex items-center text-lg justify-between p-4 text-white font-semibold rounded-md bg-[#2A9EB8] cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div>{item.MyanTitle}</div>
            <IoIosArrowUp
              className={`${
                activeIndex === index && "rotate-180"
              } transition duration-300`}
            />
          </div>
          {activeIndex === index && (
            <motion.div
              className={`p-4 bg-white border-2 shadow-sm rounded-b-sm flex ${
                item?.id === 3 ? "flex-row justify-around " : "flex-col"
              }  gap-3`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item?.MyanContent?.map((el) => {
                return (
                  <div
                    className={`flex flex-col gap-2 ${
                      item?.id === 2 && " border-b"
                    }  py-2`}
                  >
                    {item?.id === 1 && (
                      <>
                        <span className="text-lg font-bold">{el?.title}</span>
                        <img src={el?.img} alt="" />
                      </>
                    )}

                    {item?.id === 2 && (
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a href={el?.link} target="balnk">
                          {el?.dow}
                          <LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    )}

                    {item?.id === 3 && (
                      <h1 className="bg-[#2A9EB8] rounded text-white text-xl flex items-center justify-center w-10 h-10">
                        <a href={el?.link} target="balnk">
                          {el?.dowIc}
                        </a>
                      </h1>
                    )}

                    {item?.id === 4 && (
                      <>
                        <span className="text-lg font-bold">{el?.title}</span>
                        <span className="text-base">{el?.text}</span>
                      </>
                    )}

                    {/* <img src={el?.img} alt="" /> */}
                  </div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
