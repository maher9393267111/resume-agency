import React from "react";

export default function SectionTwo({ locale }) {
  const textsAr = {
    subText: "مبادرة استراتيجية لتعزيز الأمن الغذائي",
    title: "قرب البطاقة فقط!",
    text: "كل ما عليك هو تقريب البطاقة من الجوال لتفتح الصفحة الشخصية الخاصة بك، بداخلها جميع المعلومات التي ادخلتها من خلال صفحة المستخدم! ",

    btn1: "اطلب الان",
  };

  const textsEn = {
    subText: "",
    title: "Close to the card only!",
    text: "All you have to do is bring the card close to your mobile phone to open your personal page,containing all the information you entered through the user page!",

    btn1: "order now",
  };

  const current = locale === "ar" ? textsAr : textsEn;

  return (
    <div>
      <div className="flex flex-col container  items-center my-2 md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center  ">
      <div className="w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4">
          <img
            src={"/carssec2.webp"}
            alt="image"
            className="w-[80%] mx-auto object-contain  transition-all"
          />
        </div>
        <div className="w-full    md:!-mt-[33px] h-full lg:w-1/2   lg:mt-[55px]  !px-[40px] sm:px-0 ">
          <div className="  md:mt-12 mb-4 sm:m-1 ">
            {/* <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{subText}</p> */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-ngc_orange font-bold mb-2 lg:mb-8">
              {current.title}
            </h2>
            <p className="text-base lg:text-xl text-ngc_secondary  leading-6 lg:!leading-10 text-justify">
              {current.text}
            </p>
          </div>

          {/* --buttons--- */}
          <div className="">
            <button className=" mx-2 md:mt-0 mt-4 border px-4 py-2 bg-purple-100 hover:bg-purple-600 transition-all  duration-200 text-white font-semibold  rounded-xl border-gray-50">
              {current.btn1}
            </button>
          </div>
        </div>

        {/* <div className="w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4">
          <img
            src={"/carssec2.webp"}
            alt="image"
            className="w-full object-cover hover:scale-125 transition-all"
          />
        </div> */}
      </div>
    </div>
  );
}
