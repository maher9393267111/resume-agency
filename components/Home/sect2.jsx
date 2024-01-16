import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../public/hero-img.png";
import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import Feature from "./feature";

export const Features_en = {
  name: "",
  text: {
    heading: "Innovative digital dining experience",
    list: [
      "At Ultra Tech, we stand on the foundations of technology to provide you with an exceptional and innovative dining experience. We have developed an electronic menu system that enables you to browse foods and order what you want directly from your phone, without the need for a waiter",
      "We believe that technology can enhance the dining experience. Let us take you on a journey of taste and innovation through the electronic menu system"
    ],
  },
  img:"/menusection.jpg", 
  color: "#fff",
  reverse: false,
};


export const Features_ar = {
  name: "",
  text: {
    heading: "تجربة تناول الطعام الرقمية المبتكرة",
    list: [
      "في اولترا تيك نقف على أطلال التقنية لنقدم لك تجربة تناول طعام استثنائية ومبتكرة. قمنا بتطوير نظام مينيو إلكتروني يمكنك من تصفح الأطعمة وطلب ما تريد مباشرةً من هاتفك، دون الحاجة للنادل",
      "نحن نؤمن بأن التقنية يمكن أن تعزز تجربة تناول الطعام. دعنا نأخذك في رحلة من التذوق والابتكار عبر نظام مينيو الكتروني"

    ],
  },
  img:"/menusection.jpg", 
  // "/details-2.png",
  color: "#fff",
  reverse: true,
};







const feature_twoEn = {
  title: "digital QR menu",

  text: {
    heading: "Move away from traditional paper cards, and enjoy modern digital profile and security on an NFC-enabled smart card. You can access your information easily and quickly, saving time and increasing work efficiency.",

    list: [
      "Move away from traditional paper cards, and enjoy modern digital profile and security on an NFC-enabled smart card. You can access your information easily and quickly, saving time and increasing work efficiency.",
      "It is suitable for institutions and companies to manage their employee data",
      "Suitable for educational institutions to document academic records",
      "Suitable for government organizations to improve identity verification processes"
    ],
  },

  // img: "/details-2.png",
  img:"/cardsection.jpg", 
  color: "#fff",
};

const feature_twoAr = {
  title: " قائمة QR",

  text: {
    heading: "ابتعد عن الكروت الورقية التقليدية، واستمتع بالملف الشخصي الرقمي الحديث والأمن على بطاقة ذكية مزودة بتقنية NFC. يمكنك الوصول إلى معلوماتك بسهولة وسرعة، مما يوفر الوقت ويزيد من كفاءة العمل.",

    list: [
      "يصلح للأفراد ذوي المصلحة الشخصية",
      " يصلح للمؤسسات والشركات لإدارة بيانات موظفيها",
      "يصلح للمؤسسات التعليمية لتوثيق السجلات الأكاديمية",
      "يصلح للمؤسسات الحكومية لتحسين عمليات التحقق من الهوية",
     
     
    ],
  },
  img:"/cardsection.jpg",

  color: "#fff",
};

export default function Sec2() {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const currentfeature = locale === "ar" ? Features_ar : Features_en;
  const currentfeature2 = locale === "ar" ? feature_twoAr : feature_twoEn;

  //   featurestitle
  return (
    <div
      dir={dir}
      className={`${locale === "ar" && "arabicfont"}  sm:my-14 `}
    >
      <div className="flex flex-col items-center justify-center">
        {/* <div className=" flex-col gap-4  items-center justify-center container">
          <h1 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer">
            {fetchWord("featuresTitle", locale)}
          </h1>

          <h4 className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 my-4">
            {fetchWord("featuresdesc", locale)}
          </h4>
        </div> */}

        <div className="gradient pt-[160px] mb-[160px] pb-[10px]">
          <div className="containe text-white">
       

            <Feature key={currentfeature2.name} data={currentfeature2} />
          </div>

        </div>

        <div className="gradient mt-12 pt-[160px] mb-[160px] pb-[10px]">
          <div className="containe text-white">
    

            <Feature key={currentfeature.name} data={currentfeature} />
          </div>

        </div>



      </div>
    </div>
  );
}
