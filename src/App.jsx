import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FaLanguage } from "react-icons/fa";
import NavBar from "./components/Nav&Footer/NavBar";
import Features from "./components/pages/Features";
import Packages from "./components/pages/Packages";
import Channels from "./components/pages/Channels";
import Product from "./components/pages/Product";
import Download from "./components/pages/Download";
import Contactus from "./components/pages/Contactus";
import Home from "./components/pages/Home";
import Loading from "./components/Loading/Loading";
import { selectLoading } from "./Global/rtk/LoadingSlice";
import { langChange } from "./Global/rtk/LanguageSlice";

const App = () => {
  const [languageSelectorVisible, setLanguageSelectorVisible] = useState(false);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const route = [
    { id: 7, path: "/", com: <Home /> },
    { id: 1, path: "/features", com: <Features /> },
    { id: 2, path: "/packages", com: <Packages /> },
    { id: 3, path: "/channels", com: <Channels /> },
    { id: 4, path: "/product", com: <Product /> },
    { id: 5, path: "/download", com: <Download /> },
    { id: 6, path: "/contact-us", com: <Contactus /> },
  ];

  return (
    <div className="flex flex-col overflow-y-scroll scrollbar-none scrollbar-thumb-[#2A9EB8] h-[100vh]">
      {!loading && <NavBar />}
      {loading && <Loading />}
      {/* choose language */}
      <div className="absolute z-50 right-3 top-40 overflow-hidden ">
        <motion.div
          className="bg-[#2A9EB8] p-2 text-white text-[13px] rounded-md"
          initial={{ opacity: 0, x: 50 }}
          animate={
            languageSelectorVisible
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 50 }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-5 cursor-pointer">
            <div
              onClick={() => {
                dispatch(langChange(true)),
                  setLanguageSelectorVisible(!languageSelectorVisible);
              }}
            >
              English
            </div>
            <div
              onClick={() => {
                dispatch(langChange(false)),
                  setLanguageSelectorVisible(!languageSelectorVisible);
              }}
            >
              Myanmar
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={
          !languageSelectorVisible
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 50 }
        }
        transition={{ duration: 0.3 }}
        className="absolute z-50 right-5 top-40 text-2xl text-white bg-[#2A9EB8] px-3 cursor-pointer"
        onClick={() => setLanguageSelectorVisible(!languageSelectorVisible)}
      >
        <FaLanguage size={30} />
      </motion.div>
      {/* Display loading component if loading is true */}
      <Routes>
        {route.map((el) => (
          <Route key={el.id} path={`${el.path}`} element={el.com} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
