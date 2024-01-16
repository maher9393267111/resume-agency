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

  return (
    <div dir={dir} className={`${locale === "ar" && "arabicfont"}`}>
      <section className="gradient">
        <div className="container">
          <div className="grid tab:grid-cols-2 mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
            <div
            
            className=" md:mt-24"
            
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
                <Link
                  href="/login"
                  className="bg-white rounded-[50px] text-base font-bold py-[14px] px-[30px] text-blue-100"
                >
                  {fetchWord("register", locale)}
                </Link>
            
              </motion.div>
            </div>
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              className="flex justify-center"
            >
              {/* <Image src={HeroImage} width={640} height={640} /> */}

              <ReactPlayer
className='rounded-xl'

              
              controls
              width="400px"
              height="400px"
              
              url='/carts-video.mp4' />


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
