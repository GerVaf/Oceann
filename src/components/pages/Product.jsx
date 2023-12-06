import React from "react";
import goog1 from "../../assets/prod/prod/goog1.png";
import goog2 from "../../assets/prod/prod/goog2.png";
import googl1 from "../../assets/prod/prod/googl1.jpeg";
import googl2 from "../../assets/prod/prod/googl2.jpeg";
import ftv1 from "../../assets/prod/prod/re1.jpeg";
import ftv2 from "../../assets/prod/prod/ftv2.png";
import f4k1 from "../../assets/prod/prod/re2.jpeg";
import f4k2 from "../../assets/prod/prod/f4k2.png";
import { motion } from "framer-motion";

const Product = () => {
  const productData = [
    {
      id: 3,
      img: [googl1, googl2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision",
    },
    {
      id: 1,
      img: [goog1, goog2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HD - Snow",
    },
    {
      id: 2,
      img: [ftv1, ftv2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HD - Snow",
    },

    {
      id: 4,
      img: [f4k1, f4k2],
      price: "စျေးနှုန်း ( ၂၅,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision",
    },
  ];
  const containerVariants = {
    animate: {
      x: ["-40%", "0%"],
      transition: {
        x: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };
  return (
    <div className=" lg:grid lg:grid-cols-3">
      {productData?.map((el) => {
        return (
          <div
            key={el.id}
            className="flex flex-col m-2 lg:col-span-1 border rounded-md overflow-hidden gap-3 shadow-md"
          >
            {/* product img  */}
            <div
              className="my-5 flex justify-center"
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              <div className=" relative w-[100%] overflow-hidden">
                <motion.div
                  className="bg-white text-[100px] font-bold flex items-center justify-center"
                  variants={containerVariants}
                  initial="animate"
                  animate="animate"
                  style={{ display: "inline-block" }}
                >
                  {/* inner data  */}
                  <div className="flex gap-2 w-[1500px] h-[200px]">
                    {el?.img.map((item) => {
                      return (
                        <motion.div key={item} className=" w-[300px] h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item}
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                    {el?.img.map((item) => {
                      return (
                        <motion.div key={item} className=" w-full h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item}
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                    {el?.img.map((item) => {
                      return (
                        <motion.div key={item} className=" w-full h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item}
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                    {el?.img.map((item) => {
                      return (
                        <motion.div key={item} className=" w-full h-full">
                          <img
                            className="w-full h-full object-cover"
                            src={item}
                            alt=""
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
            {/* description  */}
            <div className="flex flex-col text-base gap-5 p-2">
              <h1 className="text-xl font-bold text-[#2A9EB8]">{el?.price}</h1>
              <p>{el?.title}</p>
              <span>
                🔥အရည်အသွေးကောင်းမွန်သောပစ္စည်းများကိုသာရောင်းချပေးခြင်း၊
                မမှန်သောစက်များမရောင်းချခြင်း၊စက်အသစ်များကိုသာရောင်းချပေးခြင်း
                !!
              </span>
              <div className=" text-sm font-semibold flex flex-col gap-3 text-[#2A9EB8]">
                <span>💯% အာမခံချက်ဖြင့်ရောင်းချပေးခြင်း</span>
                <span>🎁 BLUE OCEAN X ၃လက်ဆောင်</span>
                <span>⚙️ စက်အာမခံတစ်လပေးပါသည်။</span>
              </div>
            </div>
            <button className=" btn-outline text-base ">BUY NOW</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

