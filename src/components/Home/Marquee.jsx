import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { get } from "../../Global/api";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoading,
  stopLoading,
  selectLoading,
} from "../../Global/rtk/LoadingSlice";

const Marquee = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  // for showing data
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Start loading when fetching begins
        dispatch(startLoading());

        const response = await get();
        setData(response?.data?.results);

        // Stop loading when fetching is complete
        dispatch(stopLoading());
      } catch (error) {
        console.log("Error fetching data:", error);
        // Stop loading in case of an error
        dispatch(stopLoading());
      }
    };

    fetchData();
  }, [dispatch]);

  // for animaition
  const containerVariants = {
    animate: {
      x: ["0%", "-40%"],
      transition: {
        x: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  console.log(data);
  return (
    <div
      className="my-5 flex justify-center"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <div className=" relative w-[90%] lg:w-[70%] overflow-hidden">
        {/* bg decoration */}
        {/* <div className="w-full h-full bg-decoration absolute z-20"></div> */}
        {/* data  */}
        <motion.div
          className="bg-white text-[100px] font-bold flex items-center justify-center"
          variants={containerVariants}
          initial="animate"
          animate="animate"
          style={{ display: "inline-block" }}
        >
          {/* inner data  */}
          <div className="flex gap-2">
            {data.map((item) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  key={item?.id}
                  className=" w-32 h-48"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
