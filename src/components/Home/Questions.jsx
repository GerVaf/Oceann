import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Questions = ({ lang }) => {
  const [show, setShow] = useState(true);

  const variants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <button className="btn" onClick={() => setShow(!show)}>
        {lang ? (
          "FREQUENTLY ASKED QUESTIONS"
        ) : (
          <span>အမေးအများဆုံး မေးခွန်းများ</span>
        )}
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
              <h1 className="text-2xl font-bold text-[#2A9EB8]">
                {lang ? (
                  "HOW LONG DOES IT TAKE TO ACTIVATE THE SUBSCRIPTION?"
                ) : (
                  <span>SUBSCRIPTION လုပ်ပြီးရင် စသုံးဖို့ ဘယ်လောက် ကြာသလဲ?</span>
                )}
              </h1>
              {lang ? (
                <p>
                  When you ready payment done after 30 min we will sending for
                  you all login info
                </p>
              ) : (
                <span>
                  ငွေချေပြီး ၃၀ မိနစ် အတွင်း login info များကို
                  ရရှိပါမည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl font-bold text-[#2A9EB8]">
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
                <span>
                  ကျွန်တော်တို့ကို SMART TV, PC,MAG, Smartphone,
                  Android TV, Amazon Firestick,SMARTERS app and VLC M3U… Smart TV
                  Amazon Devices Apple Devices PC Laptop Zgemma Satellite Box
                  Dreambox Xbox One PS4 iPad iPhone Android Tablets အစရှိသော
                  device များစွာတွင် အသုံးပြုနိုင်ပါသည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl font-bold text-[#2A9EB8]">
                {lang ? (
                  "WHAT PAYMENT METHODS ARE AVALIABLE?"
                ) : (
                  <span>အသုံးပြုနိုင်သော ငွေပေးချေခြင်း နည်းများ?</span>
                )}
              </h1>
              {lang ? (
                <p>
                  You Can Pay With Paypal. For Credit & Debit card , Cash-app ,
                  Venmo , Zelle , Bank Transfer, Western Union , Bitcoin and
                  Other Payments Methods, Just Contact US .
                </p>
              ) : (
                <span>
                  Paypal, Credit & Debit card , Cash-app , Venmo , Zelle , Bank
                  Transfer, Western Union , Bitcoin စသော payment method
                  များကို သုံး၍ ငွေပေးချေနိုင်ပါသည်။
                </span>
              )}
            </motion.div>
            <motion.div
              variants={variants}
              className="flex flex-col gap-5 border-b shadow-md p-2"
            >
              <h1 className="text-2xl font-bold text-[#2A9EB8]">
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
                <span>
                  ကျွန်တော်တို့၏ IPTV ကို ကမ္ဘာပေါ်က ဘယ်နေရာမှ မဆို
                  ကြည့်ရှုနိုင်ပါသည်။ လိုင်းမထစ်ပဲ ချောချော
                  မွေ့မွေ့ ကြည့်ရှုနိုင်ရန် အင်တာနက် speed အနည်းဆုံး
                  5Mbps လိုအပ်ပါသည်။
                </span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Questions;
