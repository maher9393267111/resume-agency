import React from "react";
import Image from "next/image";
export default function SingleFeature({ index, image, title, desc }) {
  return (
    <div key={index} className=" shadow-2xl  border-gray-50 border-2 bg-white  rounded-2xl p-12">
      <div className="">
        <div>
          {/* <img className=' object-cover' src={image} alt="" /> */}
          <Image
            width={200}
            height={200}
            className=" mx-auto object-contain !w-[240px] !h-[153px]"
            src={image}
            alt=""
          />
        </div>

        <div className="mt-6  mb-4 text-center flex-col  space-y-2">
          <h1 className=" text-3xl font-bold">{title}</h1>


          <p className=" font-semibold">{desc}</p>
        </div>
      </div>
    </div>
  );
}
