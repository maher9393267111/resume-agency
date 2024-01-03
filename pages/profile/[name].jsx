import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImageEndpoint, defaultImage } from "../../src/lib/globall";
import { useEffect, useState } from "react";
import { Box, Button, Container, Link as MuiLink } from "@mui/material";
import { prisma } from "../../src/lib/prisma";
import SectionBox from "../../components/profile/sectionBox";
import Image from "next/image";

import {
    FaFacebookF,
    FaPinterestP,
    FaInstagram,
    FaYoutube,
    FaTelegram,
    FaWhatsapp,
    FaPhone,
    FaTwitter,
    FaFacebook,
    
  } from 'react-icons/fa';


import Contact from "../../components/profile/contact";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../src/lib/animation";


export default function ProfileNamePages({ name, userdata }) {
  // const router =useRouter()
  // const name =router.query.name

  console.log("data", userdata[0].name, userdata[0].about[0].themeColor);

  const about = userdata[0]?.about[0];
  const sliders = userdata[0]?.slider;
  const projects = userdata[0]?.projects;

  console.log(userdata);
  return (
    <div
      style={{ color: `${about?.textColor}` }}
      className={`bg-gray-200 

    
    text-blue-90 py-3  font-semibold`}
    >
      [${about?.textColor}]
      <SectionBox
        themeColor={about?.themeColor}
        className={`




min-h-[70vh]  pb-12 relative top-3 mb-10 mx-4 md:mx-10 lg:mx-[100px] xl:mx-[140px] shadow-md rounded-lg`}
      >
        <div
          className="   h-[270px]  bg-cover  bg-center"
          style={{
            backgroundImage: `url(${
              (about?.headImage && `${ImageEndpoint}/${about?.headImage}`) ||
              defaultImage
            })`,
          }}
        >
          {/* ---user Image--- */}
          <div className="aspect-square border-4 border-gray-100 rounded-full w-48 h-48 mx-auto relative   top-32">
            <Image
              src={
                about?.myImage
                  ? `${ImageEndpoint}/${about?.myImage}`
                  : defaultImage
              }
              alt="avatar"
              width={256}
              height={256}
              className="rounded-full w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* ----about Section---- */}

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className=" text-center w-[70%] mx-auto mt-14 ">
            <h1 className=" text-4xl mb-6">{about?.title}</h1>

            <h3 className=" text-3xl mb-8">{about?.work}</h3>

            <h4 className=" text-3xl mb-8 underline">About me</h4>

            <p className="  break-words mx-auto !w-full ">{about?.desc}</p>

            {/* ------social Links--- */}
            <div className=" my-12">
              <div className=" flex justify-between items-center gap-12">
                {about?.facebook && (
                  <div
                    style={{
                      color: about?.iconColor,
                      borderColor: about?.iconColor,
                    }}
                    className="rounded-full p-[10px] w-20 h-20 border-2  hover:scale-125 transiton-all duration-300"
                  >
                    <FaFacebook
                      color={about?.iconColor}
                      strokeWidth={1.5}
                      // size={20}
                      className="c !w-full !h-full transition-all"
                    />
                  </div>
                )}

                {about?.whatsapp && (
                  <div
                    style={{
                      color: about?.iconColor,
                      borderColor: about?.iconColor,
                    }}
                    className="rounded-full p-[10px] w-20 h-20 border-2 hover:scale-125 transiton-all duration-300"
                  >
                    <FaWhatsapp
                      color={about?.iconColor}
                     
                      // size={20}
                      className="c !w-full !h-full transition-all"
                    />
                  </div>
                )}

                {about?.instagram && (
                  <div
                    style={{
                      color: about?.iconColor,
                      borderColor: about?.iconColor,
                    }}
                    className="rounded-full p-[10px] w-20 h-20 border-2 hover:scale-125 transiton-all duration-300"
                  >
                    <FaInstagram
                      color={about?.iconColor}
                      strokeWidth={1.5}
                      // size={20}
                      className="c !w-full !h-full transition-all"
                    />
                  </div>
                )}

                {about?.twitter && (
                  <div
                    style={{
                      color: about?.iconColor,
                      borderColor: about?.iconColor,
                    }}
                    className="rounded-full p-[10px] w-20 h-20 border-2 hover:scale-125 transiton-all duration-300"
                  >
                    <FaTwitter
                      color={about?.iconColor}
                      strokeWidth={1.5}
                      // size={20}
                      className="c !w-full !h-full transition-all"
                    />
                  </div>
                )}




{/* <Linkedin size={40} color="#d10505" absoluteStrokeWidth /> */}

{about?.telgram && (
                  <div
                    style={{
                      color: about?.iconColor,
                      borderColor: about?.iconColor,
                    }}
                    className="rounded-full p-2 w-20 h-20 border-1 border hover:scale-125 transiton-all duration-300"
                  >
                    <FaTelegram
                      color={about?.iconColor}
                      strokeWidth={1.5}
                      // size={20}
                      className="c !w-full !h-full transition-all"
                    />
                  </div>
                )}



          


              </div>



            </div>





            {/* ------- Projects Accordion ---- */}

            {/* ------Contact--- */}

            <div>
              <Contact />
            </div>
          </div>
        </motion.div>
      </SectionBox>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const name = params.name;

  const userdata = await prisma.user.findMany({
    where: {
      name: name,
    },

    include: {
      projects: {},
      slider: {},
      about: {},
    },
  });

  return {
    props: {
      name: params.name,
      userdata: JSON.parse(JSON.stringify(userdata)),
    },
  };
}
