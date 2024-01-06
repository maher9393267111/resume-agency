import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../src/lib/animateView";
import { ServiceCard } from "./servicesCard";
import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";

export default function Services() {
  const services = [
    {
      title: "Low cost",
      desc: "Low cost compared to printing traditional cards every time.",
      color:'text-primary'
    },
    {
      title: "Pay once!",
      desc: "There are no subscription fees! All you have to do is buy the card and use it immediately",
      color:'text-primary'
    },
    {
      title: "Easy!",
      desc: "After visiting your personal page, a person can save your contact information with the click of a button!",
      color:'text-primary'
    },
    {
      title: "Safety",
      desc: "Adding social media accounts does not require secret numbers! Your information is safe.",
      color:'text-primary'
    },
  ];



  
    const servicesAr = [
      {
        title: " قلة التكلفة",
        desc: " قلة التكلفة مقارنه بطباعة البطاقات التقليدية في كل مره.",
      },
      {
        title: "أدفع مرة!",
        desc: "لا يوجد رسوم اشتراك ! كل ما عليك هو شراء البطاقة و  استعمالها فوراً",
      },
      {
        title: "السهولة!",
        desc: "يمكن للشخص بعد زيارة صفحتك الشخصية حفظ بيانات الاتصال الخاصة بك بضغطة زر!",
      },
      {
        title: "الأمان",
        desc: "اضافة حسابات التواصل الاجتماعي لاتحتاج ارقام سرية! معلوماتك آمنة.",
      },
    ];


    const { locale, asPath } = useRouter();

    console.log("locale", locale);
    const { dir } = useContext(UserContext);
  
    const currentservices = locale === "ar" ? servicesAr : services;
    



  return (
    <div dir={dir}  className={`${locale ==='ar' && 'arabicfont'} container mb-14`}>
      <div  variants={textVariant()}>
        <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] ">
          {fetchWord('servicesTitle',locale)}
        </p>
      </div>
      

      <div className="mt-20 fle justify-cente   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   flex-ro flex-wra gap-10 overflow-x-hidden container">
        {currentservices.map((service, index) => {
          console.log(service); // Log the service object

          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </div>
  );
}
