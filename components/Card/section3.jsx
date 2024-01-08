import React from "react";

export default function SectionThree({ locale }) {
  const textsAr = {
    subText: "مبادرة استراتيجية لتعزيز الأمن الغذائي",
    title: "بطاقة واحدة .. تُغنيك",
    text: "لمسة عصرية وجديدة على البزنس كارد التقليدية",
text2:'بطاقة uCard الذكية تغني عن البزنس كارد التقليدية بدون الحاجة للطابعة أو اللمس .. يكفي فقط تقريب البطاقة لأي جوال .. وتواصل مع من حولك ...',
btn1: "اعرف المزيد",
btn2: "اطلب الان",
  };

  const textsEn = {
    subText: "",
    title: "One card.. makes you rich",
    text: "A modern and new touch on the traditional business card",
    text2:'The smart uCard replaces the traditional business card Without the need for a printer or touchscreen...it is enough just to bring the card close to any mobile phone...and communicatewith those around you...',

    btn1: "Learn more",
    btn2: "Order now",
  };

  const current = locale === "ar" ? textsAr : textsEn;

  return (
    <div>
      <div className="flex flex-col container  mt-6 items-center my-2 md:flex-row gap-2 md:gap-6 lg:gap-12 justify-center  ">
   
        <div className="w-full    md:!-mt-[33px] h-full lg:w-1/2  !px-[40px] sm:px-0  lg:mt-[55px]">
          <div className="  md:mt-12 mb-4 sm:m-1 ">
            {/* <p className='text-base lg:text-xl text-ngc_secondary font-light lg:mb-4'>{subText}</p> */}
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-ngc_orange font-bold mb-2 lg:mb-8">
              {current.title}
            </h2>
            <p className="text-base lg:text-xl text-ngc_secondary  leading-6 lg:!leading-10 text-justify">
              {current.text}
            </p>

            <p className="text-base lg:text-xl text-ngc_secondary  leading-6 lg:!leading-10 text-justify">
              {current.text}
            </p>
          </div>

          {/* --buttons--- */}
          <div className="">
            <button className=" mx-2 border px-4 py-2 bg-purple-100 hover:bg-purple-600 transition-all  duration-200 text-white font-semibold  rounded-xl border-gray-50">
              {current.btn1}
            </button>

            <button className="mx-2  px-4 py-2 hover:border-black  hover:border transition-all duration-200 bg-white text-black font-semibold rounded-xl ">
              {current.btn2}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[433px] md:h-[525px] flex max-md:mb-4">
          <img
            src={"/section3.webp"}
            alt="image"
            className="w-[80%] mx-auto object-contain  transition-all"
          />
        </div>
      </div>
    </div>
  );
}
