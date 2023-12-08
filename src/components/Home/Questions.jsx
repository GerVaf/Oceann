import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import kbz from "../../assets/almost/kbz.png";
import wave from "../../assets/almost/wave.png";
import waveQr from "../../assets/almost/waveQr.jpg";
import kpayQr from "../../assets/almost/kpayQr.jpg";
import { LuMousePointerClick } from "react-icons/lu";

const Questions = ({ lang }) => {
  const [show, setShow] = useState(false);
  const [showTuto, setShowTuto] = useState(false);

  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <button
        className="btn-outline flex items-center gap-5"
        onClick={() => setShow(!show)}
      >
        {lang ? (
          "FREQUENTLY ASKED QUESTIONS"
        ) : (
          <span className="title">အမေးအများဆုံး မေးခွန်းများ</span>
        )}
        <IoIosArrowForward
          className={`text-md transition duration-150 ${show && " rotate-90"} `}
        />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-5 px-5 mb-5"
          >
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl pb-2 border-b-2 border-[#2A9EB8] font-bold text-[#2A9EB8]">
                {lang ? (
                  "HOW LONG DOES IT TAKE TO ACTIVATE THE SUBSCRIPTION?"
                ) : (
                  <span>
                    SUBSCRIPTION လုပ်ပြီးရင် စသုံးဖို့ ဘယ်လောက် ကြာသလဲ?
                  </span>
                )}
              </h1>
              {lang ? (
                <p>
                  When you ready payment done after 30 min we will sending for
                  you all login info
                </p>
              ) : (
                <span className="why-small">
                  ငွေချေပြီး ၃၀ မိနစ် အတွင်း login info များကို ရရှိပါမည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl pb-2 border-b-2 border-[#2A9EB8] font-bold text-[#2A9EB8]">
                {lang ? (
                  "DO YOU SUPPORT MY DEVICE"
                ) : (
                  <span>ဘယ် Device တွေမှာ သုံးလို့ရသလဲ?</span>
                )}
              </h1>
              {lang ? (
                <p>
                  We support all devices: SMART TV, PC,MAG, Smartphone, Android
                  TV, Amazon Firestick,SMARTERS app and VLC M3U… Smart TV Amazon
                  Devices Apple Devices PC Laptop Zgemma Satellite Box Dreambox
                  Xbox One PS4 iPad iPhone Android Tablets and many more devices
                </p>
              ) : (
                <span className="why-small">
                  ကျွန်တော်တို့ကို SMART TV, PC,MAG, Smartphone, Android TV,
                  Amazon Firestick,SMARTERS app and VLC M3U… Smart TV Amazon
                  Devices Apple Devices PC Laptop Zgemma Satellite Box Dreambox
                  Xbox One PS4 iPad iPhone Android Tablets အစရှိသော device
                  များစွာတွင် အသုံးပြုနိုင်ပါသည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl pb-2 border-b-2 border-[#2A9EB8] font-bold text-[#2A9EB8]">
                {lang ? (
                  "CAN I WATCH IPTV ANYWHERE IN THE WORLD?"
                ) : (
                  <span>ကမ္ဘာပေါ်က ဘယ်နေရာက မဆို ကြည့်လို့ရသလား?</span>
                )}
              </h1>
              {lang ? (
                <p>
                  Yes, you can watch IPTV from anywhere in the world but you
                  will need to make sure your internet speed is above 5Mbps to
                  watch the channels without any issues.
                </p>
              ) : (
                <span className="why-small">
                  ကျွန်တော်တို့၏ IPTV ကို ကမ္ဘာပေါ်က ဘယ်နေရာမှ မဆို
                  ကြည့်ရှုနိုင်ပါသည်။ လိုင်းမထစ်ပဲ ချောချော မွေ့မွေ့
                  ကြည့်ရှုနိုင်ရန် အင်တာနက် speed အနည်းဆုံး 20Mbps လိုအပ်ပါသည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl pb-2 border-b-2 border-[#2A9EB8] font-bold text-[#2A9EB8]">
                {lang ? (
                  "Purchase for BLUEOCEAN X member!!"
                ) : (
                  <span>BLUE OCEAN X အတွက် MEMBER ကြေးငွေသွင်းရန် !!</span>
                )}
              </h1>
              {/* payment logo  */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-around">
                  <img
                    className=" w-24 h-24 object-cover rounded-lg"
                    src={kbz}
                    alt=""
                  />
                  <img
                    className=" w-24 h-24 object-cover rounded-lg"
                    src={kpayQr}
                    alt=""
                  />
                </div>
                <div className="flex justify-around">
                  <img
                    className=" w-24 h-24 object-cover rounded-lg"
                    src={wave}
                    alt=""
                  />
                  <img
                    className=" w-24 h-24 object-cover rounded-lg"
                    src={waveQr}
                    alt=""
                  />
                </div>
              </div>
              {lang ? (
                <p>
                  You Can Pay With Paypal. For Credit & Debit card , Cash-app ,
                  Venmo , Zelle , Bank Transfer, Western Union , Bitcoin and
                  Other Payments Methods, Just Contact US .
                </p>
              ) : (
                <span className="why-small">
                  Wave - 09754058873 Kpay - 09754058873 တို့ဖြင့်
                  ငွေပေးချေနိုင်ပါသည်။ ငွေလွဲတဲ့အခါ ကျေးဇူးပြု၍ Note(မှတ်ချက်)
                  မှာ Shop လို့ရေးပေးပါခင်ဗျ။ ငွေလွဲထားသောပြေစာကို MESSENGER
                  သို့ပြပြီး Login info ကို ရယူနိူင်ပါသည်။ မိတ်ဆွေရဲ့
                  အားပေးမှုအတွက် အထူးကိုကျေးဇူးတင်လျှက်ပါ။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              {/* show tuto btn  */}
              <div
                onClick={() => setShowTuto(!showTuto)}
                className="flex items-center rounded-md justify-around py-2 text-[#2A9EB8] bg-slate-100"
              >
                <h1 className="text-xl font-bold   text-center">
                  Tutorial and Installation
                </h1>
                <IoIosArrowForward
                  className={`text-md transition duration-150 ${
                    showTuto && " rotate-90"
                  } `}
                />
              </div>
              {/* tuto and app  */}
              <AnimatePresence>
                {showTuto && (
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col gap-5"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a href="https://youtu.be/NRDo6cKKXMg" target="blank">
                          -How to install BLUE OCEAN APP On Android TV ?
                          <LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a href="https://youtu.be/3S-3qSHyba0" target="blank">
                          -How to install BLUE OCEAN APP On Amzon Firestick
                          Stick ?<LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a
                          className="flex items-center gap-5"
                          href="https://play.google.com/store/apps/details?id=com.nathnetwork.blueoceann"
                          target="blank"
                        >
                          -Download from PlayStore
                          <LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a
                          className="flex items-center gap-5"
                          href="https://apps.apple.com/us/app/smarters-player-lite/id1628995509"
                          target="blank"
                        >
                          -Download from IOS
                          <LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="btn-outline why-small self-start flex items-center w-full">
                        <a
                          className="flex items-center gap-5"
                          href="https://pixeldrain.com/u/BCLkH3fz"
                          target="blank"
                        >
                          -Download from Browser
                          <LuMousePointerClick className=" text-lg" />
                        </a>
                      </h1>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Questions;
