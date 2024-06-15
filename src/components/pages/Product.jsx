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
import Footer from "../Nav&Footer/Footer";

const Product = () => {
  const productData = [
    {
      id: 3,
      img: [googl1, googl2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (HD) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 1080p HDR - Snow",
      model: "Model: GA03131-US SKU: 6517336 Release: 09/22/2022",
      about:
        "Chromecast with Google TV (HD) brings you the entertainment you love, including live TV, in up to 1080p HDR. Get personal recommendations based on your subscriptions, viewing history, and content you own - all in one place. No more jumping between apps to decide what to watch. And use the remote to search with your voice. ",
      note: "2 Easily control with the Chromecast app. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.",
      include: [
        "Chromecast",
        "Voice remote",
        "Power cable",
        "Power adapter",
        "Save",
      ],
    },
    {
      id: 1,
      img: [goog1, goog2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "Chromecast with Google TV (4K) - Streaming Stick Entertainment on Your TV with Voice Search - Watch Movies, Shows, and Live TV in 4K - Snow",
      model: "Model: GA01919-US SKU: 6425976 Release: 09/30/2020",
      about:
        "Chromecast with Google TV brings you the entertainment you love, in up to 4K HDR.* Get personal recommendations from your subscriptions - all in one place. No jumping between apps to decide what to watch. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, Apple TV app, Peacock, HBO Max and many more.**",
      include: ["Chromecast", "Voice remote", "Power cable", "Power adapter"],
    },
    {
      id: 2,
      img: [ftv1, ftv2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀ကျပ် )",
      title:
        "Amazon - Fire TV Stick (3rd Gen) with Alexa Voice Remote (includes TV controls) HD streaming device | 2021 release -Black",
      model: "Model: B08C1W5N87 SKU: 6457959",
      about:
        "Fire TV Stick (3rd Gen) with Alexa Voice Remote (includes TV controls) | HD streaming device | 2021 release",
      include: [
        "Fire TV Stick (3rd Gen)",
        "Alexa Voice Remote 3rd Gen",
        "USB cable and power adapter",
        "HDMI extender",
        "2 AAA batteries",
        "Quick Start Guide",
      ],
    },

    {
      id: 4,
      img: [f4k1, f4k2],
      price: "စျေးနှုန်း ( ၂၅,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon - Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision/Atmos, free & live TV - Black ",
      model: "Model: BOBP9MDCQZ SKU: 6560339 Release: 09/27/2023",
      about:
        "Cinematic experience - Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR10+, and immersive Dolby Atmos audio.",
      include: [
        "Fire TV 4K",
        "Alexa Voice Remote",
        "Power Cable",
        "Power Adapter",
        "HDMI Extender",
        "Quick Start Guide",
      ],
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

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="h-[100vh] overflow-y-scroll">
      <div className=" lg:grid lg:grid-cols-3">
        {productData?.map((el) => {
          return (
            <div
              key={el.id}
              className="flex flex-col m-2 lg:col-span-1 border rounded-md overflow-hidden gap-3  shadow-md"
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
                <h1 className="text-xl font-bold text-[#2A9EB8]">
                  {el?.price}
                </h1>
                <p>{el?.title}</p>
                <p>{el?.model}</p>
                <div className="flex flex-col gap-2 text-gray-700">
                  <p className="text-lg text-black">About this item</p>
                  <p>{el?.about}</p>
                  <p>{el?.note}</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-700">
                  <p className="text-lg text-black">What is include</p>
                  {el?.include?.map((inn) => {
                    return <p key={inn}>{inn}</p>;
                  })}
                </div>
                <span>
                  🔥အရည်အသွေးကောင်းမွန်သောပစ္စည်းများကိုသာရောင်းချပေးခြင်း၊
                  မမှန်သောစက်များမရောင်းချခြင်း၊စက်အသစ်များကိုသာရောင်းချပေးခြင်း
                  !!
                </span>
                <div className=" text-lg font-semibold flex flex-col gap-3 text-[#2A9EB8]">
                  <span>💯% အာမခံချက်ဖြင့်ရောင်းချပေးခြင်း</span>
                  <span>🎁 BLUE OCEAN X ၃လက်ဆောင်</span>
                  <span>⚙️ စက်အာမခံတစ်လပေးပါသည်။</span>
                </div>
              </div>
              <a
                    className=" btn-outline text-base text-center mt-auto "
                    href="https://www.messenger.com/t/106777094682154"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BUY NOW
                  </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
