import React from "react";


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
import { ImageEndpoint , defaultImage } from "../../../../src/lib/globall";

export default function SliderImagess({ images}) {

const imagesData =[
	"https://mobilecard.co.il/ehabdaher/images/gallery/2.jpg",
	"https://mobilecard.co.il/ehabdaher/images/gallery/2.jpg"

	,
	"https://mobilecard.co.il/ehabdaher/images/gallery/2.jpg"

]


  return (

    <div className="mt-6">

      <div
        className={
          " flex w-full h-[455px] md:h-[700px] px-1 rounded-lg overflow-hidden"
        }
      >
        <Carousel
          autoPlay={true}
          interval={4000}
          loop={true}
        //   renderArrowLeft={() => null}
        //   renderArrowRight={({ activeIndex, handleNext }) => null}
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
          {images?.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  "flex h-full w-full cursor-grab active:cursor-grabbing"
                }
              >
                <img
                  height={1000}
                  width={1000}
                  draggable={false}
                  className={
                    " h-full mx-auto   object-fit rounded-md shadow-lg"
                  }
                  // src={`https://mobilecard.co.il/ehabdaher/images/gallery/2.jpg`}
                  src={`${ImageEndpoint}/${image}`}

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
