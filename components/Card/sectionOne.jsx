import React from "react";
import Link from 'next/link'

export default function SectionOne({ locale }) {
  const textsAr = {
    subText: "مبادرة استراتيجية لتعزيز الأمن الغذائي",
    title: "بطاقة ذكية واحدة",
    text: "بطاقة ذكية واحدة طريقة ذكية وبسيطة وآمنة لمشاركة معلومات الاتصال الخاصة بك. بطاقات Logic قابلة للتخصيص! يمكنك تحديث المعلومات الخاصة بك كما تشاء . تنعكس التغييرات التي تم إجراؤها في نفس اللحظة!",

    text2: "لا تفقد شركاء أو عملاء محتملين .. أطلب الأن",
    btn1: "اعرف المزيد",
    btn2: "اطلب الان",
  };

  const textsEn = {
    subText: "",
    title: "One smart card",
    text: "One Smart Card The smart, simple and secure way to share your contact information. Logic cards are customizable! You can update your information as you wish. Changes made are reflected at the same moment!",

    text2: "Dont lose potential partners or clients. Order now",
    btn1: "Learn more",
    btn2: "Order now",
  };

  const current = locale === "ar" ? textsAr : textsEn;

  return (
    <div>
      <div className="flex flex-col container my-12 md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center after:bg-ngc_orange after:h-4 after:w-8/12 after:absolute after:md:hidden after:top-40 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2  ">
        {/* <div className='w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4'>
          <img src={"/sectionone.jpg"} alt='image' className='w-full object-cover hover:scale-125 transition-all' />
        </div> */}
        <div className="w-full lg:w-1/2   lg:mt-[55px] px-[40px] sm:px-0">
          <div className="  md:mt-12 mb-4 sm:m-1   ">
            {/* <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{subText}</p> */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-ngc_orange shimmer font-bold mb-2 lg:mb-8">
              {current.title}
            </h2>
            <p className="text-base lg:text-xl text-ngc_secondary font-semibold  leading-6 lg:!leading-10 text-justify">
              {current.text}
            </p>
            <p className="text-base lg:text-xl text-ngc_secondary  font-semibold leading-6 lg:!leading-10 text-justify mt-2">
              {current.text2}
            </p>
          </div>

          {/* --buttons--- */}
          <div className="">
            <Link href='/contact'>
            <button className=" mx-2 border px-4 py-2 bg-purple-100 hover:bg-purple-600 transition-all  duration-200 text-white font-semibold  rounded-xl border-gray-50">

              {current.btn2}
            </button>
            </Link>

            {/* <button className="mx-2  px-4 py-2 hover:border-black  hover:border transition-all duration-200 bg-white text-black font-semibold rounded-xl ">
              {current.btn2}
            </button> */}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4">
          <img
            src={
               "/sec1-banner.png"
            
            }
            alt="image"
            className="w-full object-cover hover:scale-125 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
