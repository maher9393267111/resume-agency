import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../src/lib/animateView";

import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import SingleFeature from "./singleFeature";

export default function CardFeatures() {
  const pricesAr = [
    {
      title: "بطاقة عمل واحدة",
      desc: "تحتاج  بطاقة واحدة فقط لتتمكن من مشاركة تفاصيل الاتصال الخاصة بك سواء كان ذلك في اجتماعات أو وجهًا لوجه أو عبر الإنترنت.",
      price: "100 ر.س",
image:"/lacicart.png"
   //   image: "/silver-card.webp",
    },
    {
      title: "لمسة واحدة",
      desc: "ليس عليك تثبيت أي شيء. تعمل بطاقة uCard من خلال متصفح الإنترنت الخاص بالهاتف الذكي.",
      price: "100 ر.س",
      image: "/onetouch.webp",
    },
    {
      title: "ملف عمل واحد",
      desc: "يمكن تعديل تفاصيل الاتصال الخاصة بك في أي وقت. كرقم الجوال، وصفحات التواصل الاجتماعي و البريد الالكتروني وما الى ذلك.",
      price: "100 ر.س",
      image: "/oneprofile.webp",
    },
  ];

  const pricesEn = [
    {
      title: "One business card",
      desc: "You only need one card to be able toshare your contact details whether it's in meetings, face to face or online.",
     
      image: "/lacivert.jpg",
      
    },
    {
      title: "One touch",
      desc: "You don't have to install anything. The uCard works through your smartphone's web browser",
      image: "/onetouch.webp",
   
    },
    {
      title: "One working file",
      desc: "Your contact details can be modified at any time. Such as mobile number, social media pages, email, etc",
     
      image: "/oneprofile.webp",
    },
  ];

  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const currentprice = locale === "ar" ? pricesAr : pricesEn;

  return (
    <div
      dir={dir}
      className={`${
        locale === "ar" && "arabicfont"
      } container mb-4  sm:my-4`}
    >
      {/* <div variants={textVariant()}>
        <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer   ">
          {fetchWord("cardFeatureTitle", locale)}
        </p>
      </div> */}

      <div className="mt-20 fle justify-cente  !pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   flex-ro flex-wra gap-10 overflow-x-hidden container">
        {currentprice.map((price, index) => {
          console.log(price); // Log the service object

          return <SingleFeature key={price.title} index={index} {...price} />;
        })}
      </div>
    </div>
  );
}
