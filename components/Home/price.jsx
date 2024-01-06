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
        title: "ابيض كلاسيكي",
      desc: "لون ابيض كلاسيكي، يجمع بين التوفير و جميع الخدمات الموجودة بالبطائق الاخرى",
      price:"100 ر.س",

      image:'/silver-card.webp'
    },
    {
      title: "ابيض ذهبي",
      desc: "تم طباعة العلامة الخلفية من طبقة لونها ذهبي لامع، ومصنوعة من البلاستيك الفاخر.",
      price:"100 ر.س",
      image:'/golden-card.webp'
    },
    {
      title: "اسود فاخر",
      desc: "مصنوعة من البلاستيك غير اللامع الفاخر، وهذه البطاقة مصممة لتدوم مدى الحياة.",
      price:"100 ر.س",
      image:'/black-card.webp'
    },
 
  ];



  
    const pricesEn= [
      {
        title: "Classic white",
        desc: "Classic white color, combining savings with all the services found on other cards",
        price:"100$",
        image:'/silver-card.webp'
      },
      {
        title: "Golden white",
        desc: "The back tag is printed from a shiny gold tone film and made of premium plastic",
        price:"100$",
        image:'/golden-card.webp'
      },
      {
        title: "Luxurious black",
        desc: "Made of premium matte plastic, this card is designed to last a lifetime.",
        price:"100$",
        image:'/black-card.webp'
      },
      
    ];


    const { locale, asPath } = useRouter();

    console.log("locale", locale);
    const { dir } = useContext(UserContext);
  
    const currentprice = locale === "ar" ? pricesAr : pricesEn;
    



  return (
    <div dir={dir}  className={`${locale ==='ar' && 'arabicfont'} container mb-14 pt-14 mt-12`}>
      <div  variants={textVariant()}>
        <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]   ">
          {fetchWord('priceTitle',locale)}
        </p>
      </div>
      

      <div className="mt-20 fle justify-cente  !pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   flex-ro flex-wra gap-10 overflow-x-hidden container">
        {currentprice.map((price, index) => {
          console.log(price); // Log the service object

          return <PriceCard key={price.title} index={index} {...price} />;
        })}
      </div>
    </div>
  );
}
