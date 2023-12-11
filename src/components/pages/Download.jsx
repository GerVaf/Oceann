import React from "react";
import Footer from "../Nav&Footer/Footer";
import Accordion from "../Download/Accordion";
import { LuMemoryStick } from "react-icons/lu";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import downl from "../../assets/downl.jpg";
const Download = () => {
  const accordionItems = [
    {
      id: 1,
      MyanTitle: "BLUE OCEAN APP ကို Android TV ပေါ်တွင် ဘယ်လိုသွင်းမလဲ?",
      EngTitle: "How to install BLUE OCEAB APP on Android TV",
      MyanContent: [
        {
          title: `Blue Ocean TV Channel များကို Samsung TV [ Tizen OS ] နှင့် LG TV [ Web OS ] Smart TV များမှာ ဘယ်လိုကြည့်ရှုနိုင်မလဲ ? ${(
            <br />
          )} APPS ဆိုတဲ့နေရာကိုဝင်ပြီးရင် IPTV SMARTERS PRO ကိုရိုက်ရှာပါ ပြီးရင် APP ကို  INSTALL လုပ်ပါ။ `,
          img: "https://lh6.googleusercontent.com/KPejKHKNgogzKQLllASkGbCWnqLlTuYcUJYRbISH3qik0N3u1EKgVc1A4Z_5c8o9sIMsbuM1zfTkI88AR18tJAk7tOXdKlJqBdVO55_s-dLXO7PHayk-cUogC5RvlgY1uQ=w1280",
        },
        {
          title:
            "IPTV SMARTER  ကို INSTALL လုပ်လိုက်ပါ။ ပြီးရင် APP ကိုဖွင့်ပြီး အောက်ကအတိုင်းဖြည့်ပါ။",
          img: "https://lh4.googleusercontent.com/i7n3-dDki65sUFog6I_tvZtyfyPSqWuZc5S-zRTBgzLkkaGlEhwHjBbWAQ-7WOMw3P9gi-hQrSf9Dg5eDi-mhE25ELEHJTE4DnDg45Iy1kk61bqtIeVYmW69WhmTV3wouw=w1280",
        },
        {
          title: ` အပေါ် မှာ ပြထားတဲ့အတိုင်း Username/Password & URL တွေကို ထည့်ပြီး Login ဝင်ပါ။
${(<br />)}
          URLထည့်ရန်  - http://mdy.one`,
        },
        {
          title:
            "မဝယ်ယူခင် မိမိအင်တာနက်ဖြင့် VPN လို/မလို Test Account ယူပြီးစမ်းလို့ရပါတယ်။",
          img: "https://lh4.googleusercontent.com/z7VIEzG_JPTBzRbljl8nu2rIWNPldkcn6JO98K8RId40BIrtLTKK3gZZu8xz77DmcJqGbquryOTUcCsrDjhuehVL1EFihiuHvk29RB90gvrE7uO0AOpC-V64AhxQgFn6HA=w1280",
          img1: "https://lh4.googleusercontent.com/z7VIEzG_JPTBzRbljl8nu2rIWNPldkcn6JO98K8RId40BIrtLTKK3gZZu8xz77DmcJqGbquryOTUcCsrDjhuehVL1EFihiuHvk29RB90gvrE7uO0AOpC-V64AhxQgFn6HA=w1280",
        },
      ],
    },
    {
      id: 2,
      MyanTitle: "Download Link",
      MyanContent: [
        {
          dow: "-How to install BLUE OCEAN APP On Amzon Firestick Stick ?",
          link: "https://youtu.be/3S-3qSHyba0",
        },
        {
          dow: "-Download from PlayStore",
          link: "https://play.google.com/store/apps/details?id=com.nathnetwork.blueoceann",
        },
        {
          dow: "-Download from IOS",
          link: "https://apps.apple.com/us/app/smarters-player-lite/id1628995509",
        },
        {
          dow: "-Download from Browser",
          link: "https://pixeldrain.com/u/BCLkH3fz",
        },
      ],
    },
    {
      id: 3,
      MyanTitle: "Download Link",
      MyanContent: [
        {
          dowIc: <LuMemoryStick />,
          link: "https://youtu.be/3S-3qSHyba0",
        },
        {
          dowIc: <BiLogoPlayStore />,
          link: "https://play.google.com/store/apps/details?id=com.nathnetwork.blueoceann",
        },
        {
          dowIc: <FaApple />,
          link: "https://apps.apple.com/us/app/smarters-player-lite/id1628995509",
        },
        {
          dowIc: <BsBrowserChrome />,
          link: "https://pixeldrain.com/u/BCLkH3fz",
        },
      ],
    },
    {
      id: 4,
      MyanTitle: "Buffering ဖြစ်တာကို ဘယ်လို ပြင်ဆင်မလဲ",
      EngTitle: "How To Fix Buffering",
      MyanContent: [
        {
          title:
            "Hulu, Netflix စသော app များ သည် ကျွန်တော်တို့ ဝန်ဆောင်မှု သို့မဟုတ် သင်၏ အင်တာနက် နှင့် မသက်ဆိုင်ပါ။",
          text: "High speed အင်တာနက် ဝယ်ယူသော်လည်း ဝယ်သည့် အတိုင်း speed ရရှိမည် မဟုတ်ပါ။ ထို့ကြောင့် အနည်းဆုံး 25 mbs download speed တပ်ဆင်ဖို့ အကြံပေးပါသည်။",
        },
        {
          title:
            "100mbs ဝယ်ယူ သော်လည်း 25mbs သာ ရရှိခြင်းသည် ကျွန်တော် တို့ ပြဿနာ မဟုတ်ပဲ သင်ဝယ်ယူသည့် ISP နှင့်သာ သက်ဆိုင်ပါသည်။",
          text: "Analiti ကို အသုံးပြု၍ မိမိ TV ပေါ်တွင် internet speed မည်မျှ ရှိသည်ကို စမ်းသပ် ကြည့်နိုင်ပါသည်။",
        },
        {
          title:
            "Modem Router ကို အသုံးပြုပါကမူ အကောင်းဆုံး အရည်အသွေးကို ရရှိနိုင်မည် မဟုတ်ပါ။",
          text: "Router ကို အသုံးပြုပါက robust router ကို သုံးရန် အကြံပြုပါသည်။",
        },
        {
          title:
            "2.4ghz နှင့် 5ghz router များကို နှိုင်းယှဥ် ခြင်း။ 5ghz က ပိုမြန်ပေမယ့် 2.4ghz က stable ပိုဖြစ်ပါသည်။",
          text: "နှစ်ခုလုံးကို စမ်းသုံးကြည့်၍ မိမိနှင့် အဆင်ပြေမည့် တစ်ခု ကို ရွေးချယ်ပါ။ Router က dual bands မဟုတ်လျှင် အဆင့်မြှင့်တင်မှု ပြုလုပ်ပါ။ Modem သို့မဟုတ် router တစ်ခုတည်းတွင် စက်အကုန်ပြုံ မချိတ်ပါနှင့်။ တစ်ခုဆီ ထားပါ။ Router ၊ modem များကို တစ်ပတ်တစ်ခါ reboot ပြုလုပ်ပေးပါ။ Reboot ပြုလုပ်ရန် plug ဖြုတ်၍ 2မိနစ်၊ 3 မိနစ် မျှ စောင့်ဆိုင်းကာ plug ပြန်တပ်ပေးလိုက်ပါ။ထိုသို့ ပြုလုပ်ပေးခြင်းသည် buffering ကို အထောက်အကူ ပြုပါသည်။ ဖြစ်နိုင်လျှင် router နှင့် သုံးမည့် device ကို ကြိုးနှင့် ချိတ်ဆက်သုံးပါ။ ထိုသို့ ချိတ်ဆက်သုံးခြင်းဖြင့် wifi မဟုတ်ပဲ အင်တာနက် ကို တိုက်ရိုက် ချိတ် အသုံးပြုနိုင်ပါသည်။ ထိုအခါ wifi နှင့် ပတ်သက်သော ပြဿနာ များကို အလိုလို ဖြေရှင်းပြီးသား ဖြစ်သွားပါသည်။ Amazon သည်လည်း wifi ပြဿနာ များကို ဖြေရှင်းရန် ethernet adapter ကို ထုတ်လုပ်ပေး ထားပါသည်။ Model နိမ့်သော စက်ပစ္စည်းများက buffering ကို ဖြစ်စေပါသည်။ Video player ရွေးချယ်ခြင်းက လည်း buffering အပေါ် သက်ရောက်မှု ရှိပါသည်။ Mx player နှင့် vlc player သည် buffering မဖြစ်ရန် ကူညီ ပေးပါသည်။ နှစ်ခုလုံးကို အခမဲ့ download နိုင်ပါသည်။ Setting ထဲတွင် software decoder အစား hardware decoder ကိုသုံးခြင်းသည် ရုပ်သံများကို ပိုမို ကြည်လင် စေပါသည်။ Firestick သုံး၍ ကြည့်ပါက hdmi extender ကို အသုံးပြုပါ။ Firestick ကို ပူသော၊ လျှပ်စစ် ပစ္စည်းများနှင့် နီးသော နေရာတွင် မထားပါနှင့်။ အထဲက chip ပျက်စီး စေတတ်ပါသည်။ အသုံးမပြုသော app များကို ဖျက်လိုက်ပါ။ Cache ရှင်းရန် မမေ့ပါနှင့်။ Memory ပြည့်နေသော device သည် အသုံးပြုရ နှေးကွေးသွားပါသည်။ Firestick တွင် setting ဆီသွား၍ application ထဲမှ installed app ထဲမှာ မသုံးသော app များဖျက်လိုက်ပါ။ clear cache လုပ်လိုက်ပါ။ Buffering ပြဿနာ အများစုသည် ကျွန်တော်တို့ထက် သုံးစွဲသူများ ၏ အင်တာနက်၊ စက်ပစ္စည်း များနှင့် သက်ဆိုင်လေ့ရှိပါသည်။",
        },
      ],
      EngContent: [
        {
          title:
            "Having other apps like hulu or netflix work does not mean the issue is with our service and not your equipment/internet.",
          text: "Paying for high speed internet and actually testing to see what your device is getting are 2 different things. You want to be sure you are actually getting 25+ download speeds for each device thats connected to your internet.",
        },
        {
          title:
            "Even if you are but your paying for say 100 and only getting 25, there is a problem and you should contact your internet service provider.",
          text: "Analiti is a speed test app you can download directly from the firestick search icon and run a speed test to see wht your getting.",
        },
        {
          title:
            "If your using the modem/router given to you by your internet provider then you for sure are not getting the best results.",
          text: "Routers themselves can make a big difference. You want to make sure you get/have a robust router.",
        },
        {
          title:
            "Choosing between the 2.4 and 5 ghz bands on your wireless router can make a difference. 5 is generally faster but 2.4 is generally more stable.",
          text: "Try them both and see what works for you. If your on 5 and having issues, switch to 2.4 and vice versa. If your router doesnt have dual bands then it may be time to upgrade. Please never use an all in one device that is a modem and wireless router. Make sure you have a seperate modem and router. The all in ones are generally junk. You should be rebooting your modem/router weekly to keep it in good working order. Reboot by unplugging them from the wayy and wait 2-3 minutes before plugging them back in. This reset can help with the buffering. If possible, hardwire your device to the router. That is, connect it directly to your modem or router with an ethernet cable so it is directly connected to the internet and doesnt use wifi. This will eliminate any/all issues related to wifi. Even amazon makes an ethernet adapter for firesticks because they know wifi can have/cause issues. Having an older device means processing power and chips are outdated and can be causing buffering. Things get better and require more to work efficiently. You wouldnt use that laptop from the 90’s to run a brand new video game. What video player you use can have an effect as well. Using a different player such as mx player or vlc can help with buffering. Both of those players are available for download from out filelinked store. ( filelink info is on the how to install pages ) Changing the setting within the app to use the hardware decoder instead of the software decoder can help give a better picture if your device has good processor and chips. If your using a firestick, make sure your using the hdmi extender. Having the stick hidden by the tv or furniture not only will cause interference with the wifi but can overheat the device ( especially since they never turn off ) and damage the wifi chips inside. Other devices near your firestick like security cameras can cause interference as well. Regularly delete apps not used and clear cache on apps you keep. A device that is near full on its resources will bog down and run slow. On a firestick, goto settings, applications, manage installed apps and then go down the list and delete ones you dont need and the ones you dont delete, click on them and go down and select clear cache. I know our service isnt perfect BUT the majority ( if not all ) of buffering you experience on live tv is not due to the service itself.",
        },
      ],
    },
  ];
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className=" h-[100vh] overflow-scroll py-10">
      {/* title  */}
      <div className="text-2xl font-bold text-[#2A9EB8] flex items-center text-center flex-col">
        <p>TUTORIAL AND INSTALLATION</p>
        <span className="h-1 w-40 bg-[#2A9EB8]"></span>
      </div>

      <Accordion items={accordionItems} />

      <img className="py-10" src={downl} alt="" />
      <Footer />
    </div>
  );
};

export default Download;
