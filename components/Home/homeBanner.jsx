import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../public/hero-img.png";
import { useState, useContext } from "react";
import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import ReactPlayer from 'react-player'
export default function HomeBanner() {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const handleClick = () => {
    const whatsappNumber = "+972507301710";
  
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20want%20to%20chat%20with%20you!`;
  
    window.open(whatsappUrl, "_blank");
  };




  return (
    <div dir={dir} className={`${locale === "ar" && "arabicfont"}`}>
      <section className="gradient">
        <div className="container">
          <div className="grid tab:grid-cols-2 mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
            <div
            
            className=" md:mt-2"
            
            >
              {/* <motion.h1
                transition={{ duration: 0.5 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white"
              >
              
                {fetchWord("bannerdesc", locale)}
              </motion.h1> */}



              <motion.p
                transition={{ duration: 0.7 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                //  text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]
                className="
                text-xl leading-[31px] font-bold md:text-3xl md:leading-[47px]
            text-white mb-4
                
                "
              >
                {/* Bring together live classes, community, and payments- all on
                  Klas. */}

                {fetchWord("homeBannerTitle", locale)}
              </motion.p>


              <motion.div
                transition={{ duration: 0.9 }}
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="flex items-center gap-6"
              >
                <div
                  // href="/login"
                  className="bg-white rounded-[50px] cursor-pointer text-base font-bold py-[14px] px-[30px] text-blue-100"
                >

<p onClick={handleClick}>
{locale === 'ar' ? 'اطلب الان' :'order now'}
</p>
                



                </div>
            
              </motion.div>
            </div>
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              className="flex justify-center   mx-4 md:mx-2"
            >
              {/* <Image src={HeroImage} width={640} height={640} /> */}

              <ReactPlayer
className='!rounded-2xl '

              
              controls
                  width="auto"
                 height="500px"
                playing={true}
                muted={true}
              
              url='/carts-video.mp4' />


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
