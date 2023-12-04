import React from "react";
import Marquee from "react-fast-marquee";
import goog1 from "../../assets/prod/goog1.jpg";
import goog2 from "../../assets/prod/goog2.jpg";
import ftv1 from "../../assets/prod/ftv1.jpg";
import ftv2 from "../../assets/prod/ftv2.jpg";
import f4k1 from "../../assets/prod/f4k1.jpg";
import f4k2 from "../../assets/prod/f4k2.jpg";
const Product = () => {
  const productData = [
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
      id: 3,
      img: [goog1, goog2],
      price: "စျေးနှုန်း ( ၂၀,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision",
    },
    {
      id: 4,
      img: [f4k1, f4k2],
      price: "စျေးနှုန်း ( ၂၅,၀၀၀၀ကျပ် )",
      title:
        "All-new Amazon Fire TV Stick 4K streaming device, includes support for Wi-Fi 6, Dolby Vision",
    },
  ];
  return (
    <div className=" lg:grid lg:grid-cols-3">
      {productData?.map((el) => {
        return (
          <div
            key={el.id}
            className="flex flex-col m-2 lg:col-span-1 border rounded-md overflow-hidden gap-3 shadow-md"
          >
            {/* product img  */}
            <div className="">
              <Marquee autoFill={true}>
                {el?.img.map((ig) => {
                  return <img className=" w-full h-48 " key={ig} src={ig} alt="" />;
                })}
              </Marquee>
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
          </div>
        );
      })}
    </div>
  );
};

export default Product;
