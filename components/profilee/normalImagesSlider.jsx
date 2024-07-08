import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ReactPlayer from "react-player";
import { ImageEndpoint } from "../../src/lib/globall";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};


export default function NormalSliderImages({
  sliders,
  video,
  sliderTitleColor,
  sliderBgColor,
  arrowsBgColor,
  arrowsColor,
  sliderUnderlineBorderColor,
  title
}) {
  const customLeftArrow = (
    <div
      className={`absolute ${arrowsBgColor}   arrow-btn botto-10 top-1/2 text-center py-2 px-2 md:py-4 md:px-4 coverbg  cursor-pointer bg-medicu left-0 rounded-full flex justify-center`}
    >
      <FaArrowLeft
        className={` ${arrowsColor} h-6 w-6 text-whit`}
        aria-hidden="true"
      />
    </div>
  );

  const customRightArrow = (
    <div
      className={`${arrowsBgColor} absolute arrow-btn botto-10 py-2 px-2 md:py-4 md:px-4 coverbg   top-1/2 text-center  cursor-pointer bg-medicu right-0 rounded-full flex justify-center`}
    >
      <FaArrowRight
        className={` ${arrowsColor} h-6 w-6 text-whit`}
        aria-hidden="true"
      />
    </div>
  );

  //${sliderBgColor}

  return (
    <section
      className={` !-mt-12 containe px-2 mx-auto my-12 lg:my-16 pb-20 text-center relative z-3 `}
    >

<h3 className="font-semibold py-8   md:text-2xl  textColor text-medicus-2 dark:text-white">
     

     <p
       className={`${sliderTitleColor} arabicfont rainbow-borde textColo text-2xl md:text-5xl leading-normal font-black sm:text-4xl  lg:text-6xl lg:leading-relaxed `}
     >
       {title}
     </p>

     <hr
       className={`${sliderUnderlineBorderColor} rainbow-borde w-[22%] mx-auto borderColo`}
     ></hr>
   </h3>



      {sliders && sliders?.length > 0 ? (
        <div>
          <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-4"
          >
            {sliders?.map((image, index) => (
              <div
        
                className=" cursor-pointer  bg-no-repeat bg-center bg-cover  w-[100%]   h-auto mx-auto"
              >
                <img
                  className=" rounded-md   object-center    object-cover w-full h-full"
                  src={`${ImageEndpoint}/${image}`}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div>
          <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-4"
          >
            {images.map((image, index) => (
              <div className=" cursor-pointer w-full h-[45vh] md:h-[40vh]">
                <img
                  className=" rounded-md object-cover object-center w-full h-full"
                  src={image?.img}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}


    </section>
  );
}
