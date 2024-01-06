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
    heading: "",
    list: [
      "No need to wait for a paper menu or wave to a waiter",
      "Easily add an item, update the price, or remove items from the list",
      "Stop using paper menus. The menu is accessed on the customer's mobile phone, in an interactive and friendly interface",
      "We support menus from multiple languages ​​as per your need. Diners often prefer having menus in the local language.",
      "The system allows you to fully customize the digital menu",
      "Save time for restaurant staff as they do not have to reprint paper menus",
    ],
  },
  img: "feature1.png",
  color: "#fff",
  reverse: true,
};

export const Features_ar = {
   name: "",
  text: {
    heading: "",
    list: [
      "لا داعي لانتظار القائمة الورقية أو التلويح باليد للنادل",
      "سهولة إضافة عنصر أو تحديث السعر أو إزالة العناصر من القائمة",
      "توقف عن استخدام القوائم الورقية. يتم الوصول إلى القائمة على الهاتف المحمول الخاص بالعميل ، في واجهة تفاعلية وودية.",
      "نحن ندعم القوائم من لغات متعددة حسب حاجتك. غالبًا ما يفضل رواد المطعم وجود قوائم باللغة المحلية.",
      "يتيح لك النظام تخصيص القائمة الرقمية بشكل كامل",
      "توفير الوقت لموظفي المطعم حيث لا يتعين عليهم إعادة طباعة القوائم الورقية",
    ],
  },
  img: "feature1.png",
  color: "#fff",
  reverse: true,
};



const feature_twoEn = {
  title: "digital QR menu",


  text: {
    heading: "Its easy to create an interactive digital QR menu",


  list: [
    "Quickly add, edit or update your list from our system. A QR code will be generated for a digital menu. Diners can simply scan the QR code to load the menu into their devices",
    "Are you looking for digital menus to replace printed menus?",
    "Send us your list and we will build one for you.",
  ],


},


  img: "/details-2.png",
  color: "#fff",
};

const feature_twoAr = {
  title: " قائمة QR",


  
  text: {
    heading: "من السهل إنشاء قائمة QR رقمية تفاعلية",

  list: [
    "قم بإضافة أو تعديل أو تحديث قائمتك من نظامنا بسرعة. سيتم إنشاء رمز الاستجابة السريعة لقائمة رقمية. يمكن لداينرز ببساطة مسح رمز الاستجابة السريعة لتحميل القائمة في أجهزتهم.",
    "هل تبحث عن قوائم رقمية لتحل محل القوائم المطبوعة؟",
    "أرسل إلينا قائمتك وسنقوم ببناء واحدة لك.",
    "/details-2.png",
  ],

}
,
  img: "/details-2.png",

  color: "#fff",
};

export default function Features() {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const currentfeature = locale === "ar" ? Features_ar : Features_en;
  const currentfeature2 = locale === "ar" ? feature_twoAr : feature_twoEn;

  //   featurestitle
  return (
    <div dir={dir} className={`${locale === "ar" && "arabicfont"}`}>
      <div className="flex flex-col items-center justify-center">
        <div className=" flex-col gap-4  items-center justify-center container">
          <h1 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]">
            {fetchWord("featuresTitle", locale)}
          </h1>

          <h4 className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 my-4">
            {fetchWord("featuresdesc", locale)}
          </h4>
        </div>

        <div className="gradient pt-[160px] mb-[160px] pb-[10px]">
          <div className="containe text-white">
            <Feature key={currentfeature.name} data={currentfeature} />

            <Feature key={currentfeature2.name} data={currentfeature2} />
          </div>
        </div>
      </div>
    </div>
  );
}
