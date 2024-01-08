import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../src/lib/animateView";

import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import PriceCard from "./priceCard";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";








const AccordionSummaryStyles = {
    padding: "15px",
    marginLeft: "10px",
    marginRight: "10px",
    // fontFamily: 'Bahij !important'
    // fontFamily: "DM sans, sans-serif",
  };
  
  const AccordionSummaryTypo = {
    fontWeight: 700,
    fontSize: "18px",
  };
  
  const AccordionDetailsTypo = {
    fontWeight: 300,
    fontSize: "16px",
    // color: "rgba(0,0,0,.741)",
    paddingLeft: "15px",
    paddingRight: "15px",
  };

  const ExpandMoreIcon = () => {
    return (
      <svg
      className=" !text-purple-100 bg-purple-50"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.23332 0.741797L4.99998 3.97513L1.76665 0.741797C1.44165 0.416797 0.91665 0.416797 0.59165 0.741797C0.26665 1.0668 0.26665 1.5918 0.59165 1.9168L4.41665 5.7418C4.74165 6.0668 5.26665 6.0668 5.59165 5.7418L9.41665 1.9168C9.74165 1.5918 9.74165 1.0668 9.41665 0.741797C9.09165 0.42513 8.55832 0.416797 8.23332 0.741797Z"
          fill="black"
        ></path>
      </svg>
    );
  };
  






export default function Questions() {


     const data = [
        {
          id: 1,
          question: "ماهي قائمة الطعام الرقميه؟ ",
          answer:
            "تتيح القوائم الالكترونية امكانية عرض قائمة طعام أو قائمة المنتجات الموجودة في المتجر او المطعم، عن طريق مسح رمز QR على الاجهزة اللوحية",
        },
        {
          id: 2,
          answer: "يجب الإنتباه مليًا للطريقة التي يتم بها كتابة وعرض قائمة الطعام، حيث يتم تقسيم القائمة حسب نوع الطعام المٌقدم من مشويات، وجبات، أطباق للإفطار، ساندويتشات، حلويات، وهكذا. وهذا لتسهيل عملية اختيار الوجبات والطلب وبالتالي سهولة التواصل بين العميل والمطعم.",
          question:
            "كيفية تحقيق الاستفادة القصوى من القائمة الرقمية الخاصة بك؟ ",
        },
        {
          id: 3,
          question: "هل يمكن استخدام اكثر من لغة؟              ",
          answer:
            "نعم, تستطيع انشاء القائمة الرقمية الخاصة بك باكثر من لغة. علاوة على ذالك تستطيع اظافة الاسعار باكثر من عملة.",
        },
        {
          id: 4,
          question: "كيفية الاشتراك في الخدمة ؟              ",
          answer:
            "يمكنك الاشتراك بسهولة لعمل قوائم طعام إلكترونية QR Menu من خلال الدخول للموقع وتعبئة نموذج التسجيل. يمكنك كذالك الاتصال بنا و سيقوم فريق العمل بانشاء حساب جديد.",
        },
        {
          id: 5,
          question: "كيف أقوم بتعديل قائمة QR الخاصة بي؟",
          answer:
            "يمكنك تغيير محتويات قائمة الخاصة بك في جميع الأوقات. قم بتسجيل الدخول إلى لوحة القيادة الخاصة لاجراء اي تعديل على القائة",
        },
      
      ];


      const dataEn = [
        {
          id: 1,
          question: "What is a digital menu?",
          answer:
            "Electronic menus make it possible to display a menu or a list of products in a store or restaurant, by scanning the QR code on tablets.",
        },
        {
          id: 2,
          question: "How to make the most of your digital menu?",
          answer:
            "Careful attention must be paid to the way the menu is written and presented, as the menu is divided according to the type of food served, including grills, meals, breakfast dishes, sandwiches, desserts, and so on. This facilitates the process of choosing meals and ordering and thus facilitating communication between the customer and the restaurant.",
        },
        {
            id: 3,
            question: "Can more than one language be used?",
            answer:
              "Yes, you can create your own digital menu in more than one language. In addition, you can add prices in more than one currency.",
          },    {
            id: 4,
            question: "How to subscribe to the service?",
            answer:
              "You can easily subscribe to create electronic QR Menu by accessing the website and filling out the registration form. You can also contact us and our team will create a new account.",
          },    {
            id: 5,
            question: "How do I edit my QR list?",
            answer:
              "You can change the contents of your list at all times. Log in to your dashboard to make any changes to the list",
          },
     
      ];




    const { locale, asPath } = useRouter();

    console.log("locale", locale);
    const { dir } = useContext(UserContext);
  
    const currentData = locale === "ar" ? data : dataEn;
    



  return (
    <div dir={dir}  className={`${locale ==='ar' && 'arabicfont'} container mb-14 pt-14  sm:my-24`}>
      <div  variants={textVariant()}>
        <p className=" text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer   ">
          {fetchWord('questionsTitle',locale)}
        </p>


<div className=" font-semibold text-center my-4">


<p>{fetchWord('questionsdesc1',locale)}</p>

<p>  {fetchWord('questionsdesc2',locale)}</p>
</div>

      </div>
      

      <div
      
    //   className="box-shadow"
    className={`${locale ==='ar' && 'arabicfont'}`}
      >
          {currentData.map((accordion,index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className=" !text-purple-100"
                //  sx={AccordionSummaryStyles}
              >
                {/* <Typography
                className=" !font-semibold"
                sx={AccordionSummaryTypo}>
                  {accordion.question}
                </Typography> */}
<div 
  className={`${locale ==='ar' && '!arabicfont'} !font-semibold text-xl`}

>{accordion.question}</div>

              </AccordionSummary>
              <AccordionDetails>
                <div
                className={`${locale ==='ar' && '!arabicfont'} !font-semibold text-md`}
                  // className="font-[300] text-[rgba(0,0,0,.741)] text-[16px] leading-[18px]"
                  sx={AccordionDetailsTypo}
                >
                  {accordion.answer}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>



   
    </div>
  );
}
