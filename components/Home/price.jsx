import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../src/lib/animateView";

import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import Link from 'next/link'
import { fetchWord } from "@/src/lib/lang/fetchWord";
import PriceCard from "./priceCard";

export default function Services() {
  const pricesAr = [
    {
      title: "ابتدائي  350 ش.ج",
      desc: "لون ابيض كلاسيكي، يجمع بين التوفير و جميع الخدمات الموجودة بالبطائق الاخرى",
      price: "350 شيكل",
      color: "#EE2658",

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
      price: "500 شيكل",
      list: [
        " لون كرت اختياري ",
        "اسود, ابيض ذهبي, ابيض كلاسيكي",
        "مصنوع من البلاستيك غير اللامع الفاخر",
        "تصميم الكرت من الجهتين ",
        "تصميم خاص بك حسب الطلب",
        "يشمل موقع تعريفي متقدم",
      ],
      color: "#00B7B3",

      // image: "/silvercartahmad.png",
      image: "/ahmadcartwhite.jpg",
    },
    {
      title: "برو ماكس 700 ش.ج",
      desc: "مصنوعة من البلاستيك غير اللامع الفاخر، وهذه البطاقة مصممة لتدوم مدى الحياة.",
      price: "700 شيكل",
      list: [
        " لون كرت اختياري ",
        "اسود, ابيض ذهبي, ابيض كلاسيكي",
        "مصنوع من البلاستيك غير اللامع الفاخر",
        "تصميم الكرت من الجهتين ",
        "تصميم خاص بك حسب الطلب",
        "يشمل موقع تعريفي متقدم دائم",
      ],
      image: "/lacivert.jpg",
      color: "#FEBE10",
    },
  ];

  const pricesEn = [
    {
      title: "Primary 350 ILS ",
      desc: "Classic white color, combining savings with all the services found on other cards",
      price: "350 ILS",
      image: "/ahmadcartwhite.jpg",
      color: "#EE2658",

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
      title: "Go for 500 ILS",
      desc: "The back tag is printed from a shiny gold tone film and made of premium plastic",
      price: "500 ILS",
      // image: "/silvercartahmad.png",
      image: "/ahmadcartwhite.jpg",
      color: "#00B7B3",
      list: [
        "Optional card color ",
        "black, golden white, classic white",
        "Made of premium matte plastic",
        "Design one side of the card your own design upon request",
        "Includes advanced introductory website",
      ],
    },
    {
      title: "Pro Max 700 ILS ",
      desc: "Made of premium matte plastic,this card is designed to last a lifetime.",
      price: "700 ILS",

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
      color: "#FEBE10",
    },
  ];

  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const currentprice = locale === "ar" ? pricesAr : pricesEn;

  return (
//     <div
//       dir={dir}
  

//     >
//       <div variants={textVariant()}>
//         <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer   ">
//           {fetchWord("priceTitle", locale)}
//         </p>
//       </div>
      



// <div className="mx-auto grid max-w-screen-lg gap-5 my-12 container bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
//         {currentprice.map((offer) => (
//           <div
//             className="relative  flex flex-col overflow-hidden rounded-xl border-2 shadow-2xl border-gray-50"
//             key={offer.title}
//           >
//             <div
//               style={{ backgroundColor:offer.color }}
//               className={`min-h-[150px] bg-[${offer.color}] items-start space-y-4   p-6`}
//             >
//               <p className="flex font-urban text-white text-center  text-xl font-bold uppercase tracking-wider text-muted-foreground">
//                 {offer.title}
//               </p>

//               <div className="flex flex-row">
//                 <div className="flex items-end">
//                   <div className="flex text-center text-lef text-white text-3xl font-semibold leading-6">
//                     {/* {isYearly && offer.prices.monthly > 0 ? (
//                       <>
//                         <span className="mr-2 text-muted-foreground line-through">${offer.prices.monthly}</span>
//                         <span>${offer.prices.yearly / 12}</span>
//                       </>
//                     ) : `$${offer.prices.monthly}`} */}
//                     {offer.price}
//                   </div>
//                   <div className="-mb-1 ml-2 text-white text-left text-3xl font-medium">
//                     <div>/{locale === "ar" ? "شهريا" : "monthly"}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

// {/* --image-- */}

// <div className=" h-[200px] w-[84%] mx-auto my-[22px]">
//   <img className=" w-full h-full object-cover  shadow-md rounded-md    " src={offer?.image} alt="" />
// </div>



//             <div className="flex h-full flex-col justify-between gap-16 p-6">
//               <ul className="space-y-2 text-left text-lg font-medium leading-normal">
//                 {offer.list.map((feature) => (
//                   <li  className="flex items-start" key={feature}>
//                     {/* <Icons.check className="mr-3 h-5 w-5 shrink-0" /> */}

//                     <svg
//                       className="mx-2 w-[10%]"
//                       width="16"
//                       height="17"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="m2.668 8.973 4 4 6.667-8"
//                         stroke="#1127E3"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"

//                       ></path>
//                     </svg>

//                     <p className="  pl-4">{feature}</p>
//                   </li>
//                 ))}
//               </ul>

            
//             </div>
//           </div>
//         ))}
//       </div>



//     </div>

<div>
{/* ---title--- */}

<div>
  <h2 className="text-[32px] leading-[42px] mt-6 font-bold text-center md:text-5xl md:leading-[62px] shimmer ">
    {fetchWord("cardFeatureTitle", locale)}
  </h2>
</div>

<div className="mx-auto grid max-w-screen-lg gap-5 my-12 container bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
  {currentprice.map((offer) => (
    <div
      className="relative  flex flex-col overflow-hidden rounded-xl border-2 shadow-2xl border-gray-50"
      key={offer.title}
    >
      <div
        style={{ backgroundColor: offer.color }}
        className={`min-h-[150px] bg-[${offer.color}] items-start space-y-4   p-6`}
      >
        <p className="flex font-urban text-white text-center  text-xl font-bold uppercase tracking-wider text-muted-foreground">
          {offer.title}
        </p>

        <div className="flex flex-row">
          <div className="flex items-end">
            <div className="flex text-center text-lef text-white text-3xl font-semibold leading-6">
              {/* {isYearly && offer.prices.monthly > 0 ? (
                <>
                  <span className="mr-2 text-muted-foreground line-through">${offer.prices.monthly}</span>
                  <span>${offer.prices.yearly / 12}</span>
                </>
              ) : `$${offer.prices.monthly}`} */}
              {offer.price}
            </div>
            <div className="-mb-1 ml-2 text-white text-left text-3xl font-medium">
              <div>/{locale === "ar" ? "شهريا" : "monthly"}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between gap-16 p-6">

<div className=" h-[177px]  w-[85%] my-3 mx-auto   ">
  <img className="w-full h-full object-cover rounded-md shadow-lg" src={offer.image} alt="" />
</div>



        <ul className="space-y-2 text-lef text-md md:text-lg font-medium leading-normal">
          {offer.list.map((feature) => (
            <li className="flex items-start" key={feature}>
              {/* <Icons.check className="mr-3 h-5 w-5 shrink-0" /> */}

              <svg
                className="mx-2"
                width="16"
                height="17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2.668 8.973 4 4 6.667-8"
                  stroke="#1127E3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <p className="  pl-4">{feature}</p>
            </li>
          ))}
        </ul>

        <Link href='/login' className="bg-purple-100 text-center  text-white font-semibold  block  px-4 py-2 rounded-2xl ">
        <button className=" ">
                {locale === "ar" ? "اشتراك" : " Sign in"}
              </button>
              </Link>
            

      </div>
    </div>
  ))}
</div>
</div>



  );
}
