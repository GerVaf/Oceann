import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoo from "../../assets/football/loogo.jpeg";
import { FaLanguage } from "react-icons/fa";
const NavBar = ({languageSelectorVisible,setLanguageSelectorVisible}) => {
  // for mobile
  const [active, setActive] = useState(false);

  // for desktop
  const location = useLocation();
  const links = [
    { path: "/", text: "HOME" },
    { path: "/features", text: "FEATURES" },
    { path: "/packages", text: "PACKAGES" },
    { path: "/channels", text: "CHANNELS" },
    { path: "/product", text: "PRODUCT" },
    { path: "/download", text: "DOWNLOAD" },
    { path: "/contact-us", text: "CONTACT US" },
  ];

  const [mouseInside, setMouseInside] = useState(
    Array(links.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = true;
    setMouseInside(updatedMouseInside);
  };

  const handleMouseLeave = (index) => {
    const updatedMouseInside = [...mouseInside];
    updatedMouseInside[index] = false;
    setMouseInside(updatedMouseInside);
  };

  // console.log(location)

  return (
    <>
      <div
        className={` sticky top-0 z-40 w-full text-[#2A9EB8] shadow-md flex items-center py-3 lg:px-10 md:h-20 sm:py-5 sm:items-center justify-between bg-white/90 backdrop-blur-sm `}
      >
        {/* logo don't extract it cuz it's so fucking long */}

        <NavLink className="" to={"/"}>
          <img className=" w-12 md:w-16 h-12 md:h-16 ml-5" src={logoo} alt="" />
        </NavLink>

        {/* link cate  for Desktop*/}
        <div className="text-md hidden items-center lg:flex lg:gap-20 h-10 ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              !languageSelectorVisible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.3 }}
            className=" z-40 right-16 top-5 gap-5 flex p-1 lg:px-5 text-white bg-[#2A9EB8] rounded-md cursor-pointer"
            onClick={() => setLanguageSelectorVisible(!languageSelectorVisible)}
          >
            <FaLanguage size={25} />
          </motion.div>
          {links.map((link, index) => (
            <NavLink to={link.path} key={index}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="flex flex-col overflow-hidden relative"
              >
                {link.text}
                {/* underline animaiton */}
                {mouseInside[index] ? (
                  <motion.hr
                    initial={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border w-11 border-[#2A9EB8]"
                  />
                ) : (
                  <motion.hr
                    animate={{ x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="border w-11 border-[#2A9EB8]"
                  />
                )}
                {/* active status  */}
                {location.pathname === link?.path && (
                  <hr
                    initial={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border w-11 absolute border-[#2A9EB8] bottom-0"
                  />
                )}
              </div>
            </NavLink>
          ))}
        </div>

        {/* for mobile  */}
        <div
          onClick={() => setActive((prevActive) => !prevActive)}
          className="lg:hidden bg-[#2A9EB8] text-white rounded-full mr-5 w-10 h-10 md:w-10 md:h-10 md:text-lg text-lg flex justify-center items-center z-50 cursor-pointer"
        >
          {active ? <BsX className="text-2xl" /> : <FaBars />}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              key="menu"
              className="w-full h-[100vh] py-10 bg-slate-100 absolute -bottom-[400px] flex flex-col items-center justify-end z-40 gap-6 font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Your links */}
              {links?.map((el) => (
                <NavLink
                  className="flex flex-col text-2xl self-start px-5"
                  key={el.path}
                  onClick={() => setActive(false)}
                  to={el.path}
                >
                  <p>{el.text}</p>
                  {/* <hr className="h-1 bg-[#2A9EB8]" /> */}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
