import React from "react";
import Image from "next/image";
import { ImageEndpoint } from "../../src/lib/globall";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import {
  RiArticleLine,
  RiBuildingFill,
  RiCalendarTodoFill,
  RiFacebookBoxFill,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiTwitterFill,
} from "react-icons/ri";
import Carousel from "framer-motion-carousel";

export default function SliderImages({ imagesData }) {
  return (
    <div className="mt-6">
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

{imagesData?.map((item ,index)=>{
return (

   
        

    <div className=" w-full">
              <div className="w-full h-full rounded-sm">
                <Image
                  src={`${ImageEndpoint}/${item?.link}`}
                  alt="image"
                  width={1000}
                  height={100}
                  className="w-full aspect-square rounded-md shadow-lg object-cover"
                />
              </div>
            </div>
        




    
)


})}

          </div>
         */}

      <div
        className={
          " flex w-full h-[333px] md:h-[700px] px-1 rounded-lg overflow-hidden"
        }
      >
        <Carousel
          autoPlay={true}
          interval={4000}
          loop={true}
          renderArrowLeft={() => null}
          renderArrowRight={({ activeIndex, handleNext }) => null}
          renderDots={({ setActiveIndex, activeIndex }) => {
            return (
              <div
                className={
                  "absolute bottom-0 left-0 w-full h-10 bg-gry-800 bg-opacity-20 flex flex-row gap-2 items-center justify-center rounded-lg"
                }
              >
                {imagesData.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index == activeIndex ? "bg-amber-400" : "bg-white"
                      } w-3 h-3 rounded-full cursor-pointer hover:bg-red-600 transition duration-300 ease-in-out rounded-lg`}
                      onClick={() => setActiveIndex(index)}
                    ></div>
                  );
                })}
              </div>
            );
          }}
        >
          {imagesData.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  "flex h-full w-full cursor-grab active:cursor-grabbing"
                }
              >
                <Image
                  height={1000}
                  width={1000}
                  draggable={false}
                  className={
                    " h-full mx-auto   object-fit rounded-md shadow-lg"
                  }
                  src={`${ImageEndpoint}/${image?.link}`}
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
