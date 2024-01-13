import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../src/lib/animateView";

import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import PriceCard from "./priceCard";

export default function Services() {
  const pricesAr = [
    {
      title: "ابتدائي  350 ش.ج",
      desc: "لون ابيض كلاسيكي، يجمع بين التوفير و جميع الخدمات الموجودة بالبطائق الاخرى",
      price: "100 ر.س",

      list: [
        " لون كرت اختياري ",
        "اسود, ابيض ذهبي, ابيض كلاسيكي",

        "مصنوع من البلاستيك غير اللامع الفاخر",
        "بدون تصميم خارجي للكرت ",
        "يشمل موقع تعريفي ",
      ],

      image: "/ahmadcartwhite.jpg",
    },
    {
      title: "برو 500 ش.ج",
      desc: "تم طباعة العلامة الخلفية من طبقة لونها ذهبي لامع، ومصنوعة من البلاستيك الفاخر.",
      price: "100 ر.س",
      list: [
        " لون كرت اختياري ",
        "اسود, ابيض ذهبي, ابيض كلاسيكي",
        "مصنوع من البلاستيك غير اللامع الفاخر",
        "تصميم جهة واحدة من الكرت (تصميم خاص بك حسب الطلب) ",
        "يشمل موقع تعريفي متقدم",
      ],

      // image: "/silvercartahmad.png",
      image: "/ahmadcartwhite.jpg",
    },
    {
      title: "برو ماكس 700 ش.ج",
      desc: "مصنوعة من البلاستيك غير اللامع الفاخر، وهذه البطاقة مصممة لتدوم مدى الحياة.",
      price: "100 ر.س",
      list: [
        " لون كرت اختياري ",
        "اسود, ابيض ذهبي, ابيض كلاسيكي",
        "مصنوع من البلاستيك غير اللامع الفاخر",
        "تصميم الكرت من الجهتين (تصميم خاص بك حسب الطلب) ",
        "يشمل موقع تعريفي متقدم دائم",
      ],
      image: "/lacivert.jpg",
    },
  ];

  const pricesEn = [
    {
      title: "Primary 350 NIS",
      desc: "Classic white color, combining savings with all the services found on other cards",
      price: "100$",
      image: "/ahmadcartwhite.jpg",

      list: [
        "Optional card color ",
        "black, golden white, classic white",
        "Made of premium matte plastic",
        "Without an external card design",
        "Include an introductory website",
      ],

      // image: "/lacicart.png"
      //"/silver-card.webp",
    },
    {
      title: "Go for 500 Sh.J",
      desc: "The back tag is printed from a shiny gold tone film and made of premium plastic",
      price: "500$",
      // image: "/silvercartahmad.png",
      image: "/ahmadcartwhite.jpg",
      list: [
        "Optional card color ",
        "black, golden white, classic white",
        "Made of premium matte plastic",
        "Design one side of the card your own design upon request",
        "Includes advanced introductory website",
      ],
    },
    {
      title: "Pro Max 700 NIS",
      desc: "Made of premium matte plastic,this card is designed to last a lifetime.",
      price: "700$",

      image: "/lacivert.jpg",
      list: [
        "hello man greaet",
        "Optional card color ",
        "black, golden white, classic white",
        "Made of premium matte plastic",
        "Card design on both sides your own design upon request",
        "Includes permanent  some words "
        // "Includes permanent advanced introductory site",
      ],
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
      } container mb-14  my-16  sm:my-24 englishfont`}
    >
      <div variants={textVariant()}>
        <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer   ">
          {fetchWord("priceTitle", locale)}
        </p>
      </div>
      {dir}
      <div className="mt-20 fle justify-cente  !pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   flex-ro flex-wra gap-10 overflow-x-hidden container">
        {currentprice.map((price, index) => {
          console.log(price); // Log the service object

          return <PriceCard key={price.title} index={index} {...price} />;
        })}
      </div>
    </div>
  );
}
