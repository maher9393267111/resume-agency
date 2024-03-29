import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ImageEndpoint, defaultImage } from "../../src/lib/globall";
import { useEffect, useState } from "react";
import { Box, Button, Container, Link as MuiLink } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { prisma } from "../../src/lib/prisma";
import SectionBox from "../../components/profile/sectionBox";
import SliderImages from "../../components/profile/sliderImages";
import Image from "next/image";
import ReactPlayer from "react-player";
import { HiOutlineDocumentDownload } from "react-icons/hi";

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
} from "react-icons/fa";

import Contact from "../../components/profile/contact";

// framer-motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../src/lib/animation";

export default function ProfileNamePages({ name, userdata }) {
  // const router =useRouter()
  // const name =router.query.name

  console.log("data", userdata[0]?.name, userdata[0]?.about[0]?.themeColor);

  const about = userdata[0]?.about[0];
  console.log(about, "AASS");
  const sliders = userdata[0]?.slider;
  console.log("slidersData", sliders);
  const projects = userdata[0]?.projects;
  const portfoliemail = userdata[0]?.email;

  console.log(userdata);

  const domainUrl = "https://resume-agency.vercel.app/profile";

  return (
    <div
      style={{ color: `${about?.textColor}` }}
      className={`bg-gray-50 

    
    text-blue-90 py-3  font-semibold`}
    >
      <SectionBox
        themeColor={about?.themeColor}
        className={`




min-h-[70vh]  pb-12 relative top-3 mb-10 mx-4 md:mx-10 lg:mx-[100px] xl:mx-[140px]  rounded-xl  shadow-2xl`}
      >
        <div
          className=" cover-image  h-[290px]  bg-cover  bg-center"
          style={{
            backgroundImage: `url(${
              (about?.headImage && `${ImageEndpoint}/${about?.headImage}`) ||
              defaultImage
            })`,
          }}
        ></div>

        {/* ---user Image--- */}
        <div className="aspect-square border-4 border-gray-100 rounded-full w-[140px] h-[140px]  md:w-[222px] md:h-[222px] mx-auto relative   top-[-130px]">
          <Image
            src={
              about?.myImage
                ? `${ImageEndpoint}/${about?.myImage}`
                : defaultImage
            }
            alt="avatar"
            width={256}
            height={256}
            className="rounded-full w-full h-full object-cover shadow-xl "
          />
        </div>

        {/* ----about Section---- */}

        <motion.div
          className="-mt-20  bg-center   bg-cover pb-12  "
          whileInView={{ x: [-100, 50, 0], opacity: [0, 2, 1] }}
          transition={{ duration: 0.8 }}
          // style={{
          //   backgroundImage: `url(${
          //     (about?.bgImage && `${ImageEndpoint}/${about?.bgImage}`) ||
          //     defaultImage
          //   })`,
          // }}

          //   variants={fadeIn("up", 0.2)}
          //   initial="hidden"
          //   animate="show"
          //   exit="hidden"

          //   whileInView="visible"
          //   viewport={{ once: false }}
        >
          {/* ------About Section--- */}
          <div>
            {about !== undefined && (
              <div
                // style={{
                //   backgroundImage: `url(${
                //     (about?.bgImage && `${ImageEndpoint}/${about?.bgImage}`) ||
                //     defaultImage
                //   })`,
                // }}

                className=" relative text-center w-[80%] pb-[12px] pt-[20px] rounded-md mx-auto mt-1     "
              >
                {about?.bgImage && (
                  <div className="relative  min-h-[500px]">
                    <img
                      className=" !min-h-[500px]  !h-full !w-full  object-cover object-center z-10"
                      src={`${ImageEndpoint}/${about?.bgImage}`}
                      alt=""
                    />

                    <div className=" top-0 absolute w-full h-full">
                      {about?.title && (
                        <h1 className=" text-2xl md:text-4xl mt-4  mb-6">
                          {about?.title}
                        </h1>
                      )}

                      {about?.work && (
                        <h3 className=" text-md md:text-3xl mb-8">
                          {about?.work}
                        </h3>
                      )}

                      {/* ---pff resume link--- */}

                      {about?.link && (
                        <div className="mx-auto w-1/2 my-4 ">
                          <a
                            href={about?.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div
                              style={{
                                backgroundColor: about?.iconColor,
                                color: about?.textColor,
                              }}
                              className="rounded-xl shadow-lg shadow-gray-400 p-1 md:p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:shadow-none   gap-3 "
                            >
                              <HiOutlineDocumentDownload className="mx-auto mb-1 text-4xl" />

                              <p className=" te">Resume</p>
                            </div>
                          </a>
                        </div>
                      )}

                      <h4 className="text-2xl md:text-3xl mb-8 underline">
                        About me
                      </h4>

                      <p className=" text-sm font-semibold md:text-xl break-words mx-auto !w-full ">
                        {about?.desc}
                      </p>

                      <div className=" my-4 md:my-12">
                        <div className=" flex  flex-wrap    justify-center  items-center gap-12">
                          {about?.facebook && (
                            <div
                              style={{
                                color: about?.iconColor,
                                borderColor: about?.iconColor,
                              }}
                              className="rounded-full p-[10px] w-12 h-12 md:w-20 md:h-20 border-2  hover:scale-125 transiton-all duration-300"
                            >
                              <a
                                className=" "
                                target="_blank"
                                href={about?.facebook}
                                rel="noreferrer nofollow"
                                title="Portfolio"
                              >
                                <FaFacebook
                                  color={about?.iconColor}
                                  strokeWidth={1.5}
                                  // size={20}
                                  className="c !w-full !h-full transition-all"
                                />
                              </a>
                            </div>
                          )}

                          {about?.whatsapp && (
                            <div
                              style={{
                                color: about?.iconColor,
                                borderColor: about?.iconColor,
                              }}
                              className="rounded-full p-[10px]  w-12 h-12 md:w-20 md:h-20 border-2 hover:scale-125 transiton-all duration-300"
                            >
                              <a
                                className=""
                                target="_blank"
                                href={about?.whatsapp}
                                rel="noreferrer nofollow"
                                title="Portfolio"
                              >
                                <FaWhatsapp
                                  color={about?.iconColor}
                                  // size={20}
                                  className="c !w-full !h-full transition-all"
                                />
                              </a>
                            </div>
                          )}

                          {about?.instagram && (
                            <div
                              style={{
                                color: about?.iconColor,
                                borderColor: about?.iconColor,
                              }}
                              className="rounded-full p-[10px]  w-12 h-12 md:w-20 md:h-20 border-2 hover:scale-125 transiton-all duration-300"
                            >
                              <a
                                className=" text-xs"
                                target="_blank"
                                href={about?.instagram}
                                rel="noreferrer nofollow"
                                title="Portfolio"
                              >
                                <FaInstagram
                                  color={about?.iconColor}
                                  strokeWidth={1.5}
                                  // size={20}
                                  className="c !w-full !h-full transition-all"
                                />
                              </a>
                            </div>
                          )}

                          {about?.twitter && (
                            <div
                              style={{
                                color: about?.iconColor,
                                borderColor: about?.iconColor,
                              }}
                              className="rounded-full p-[10px]  w-12 h-12 md:w-20 md:h-20 border-2 hover:scale-125 transiton-all duration-300"
                            >
                              <a
                                className=""
                                target="_blank"
                                href={about?.twitter}
                                rel="noreferrer nofollow"
                                title="Portfolio"
                              >
                                <FaTwitter
                                  color={about?.iconColor}
                                  strokeWidth={1.5}
                                  // size={20}
                                  className="c !w-full !h-full transition-all"
                                />
                              </a>
                            </div>
                          )}

                          {/* <Linkedin size={40} color="#d10505" absoluteStrokeWidth /> */}

                          {about?.telgram && (
                            <div
                              style={{
                                color: about?.iconColor,
                                borderColor: about?.iconColor,
                              }}
                              className="rounded-full p-[10px]  w-12 h-12 md:w-20 md:h-20 border-2 hover:scale-125 transiton-all duration-300"
                            >
                              <a
                                className=""
                                target="_blank"
                                href={about?.telgram}
                                rel="noreferrer nofollow"
                                title="Portfolio"
                              >
                                <FaTelegram
                                  color={about?.iconColor}
                                  strokeWidth={1.5}
                                  // size={20}
                                  className="c !w-full !h-full transition-all"
                                />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ------- Projects Accordion ---- */}

            {/* //borderColor:about?.themeColor */}
            {projects && projects?.length > 0 && (
              <motion.div
                whileInView={{ x: [-100, 50, 0], opacity: [0, 2, 1] }}
                transition={{ duration: 0.8 }}
                //   variants={fadeIn("up", 0.2)}
                //   initial="hidden"
                //   animate="show"
                //   exit="hidden"

                //   whileInView="visible"
                //   viewport={{ once: false }}

                style={{ borderColor: about?.iconColor }}
                className=" p-4 shadow-3xl border-2 w-[80%]  mx-auto "
              >
                {projects?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Accordion
                        style={{ borderColor: about?.iconColor }}
                        className=" shadow-2xl  !border-whie border "
                        //   sx={{  border:'5px', borderColor:"white" ,color:about?.textColor }}
                      >
                        <AccordionSummary
                          style={{ borderColor: about?.iconColor }}
                          sx={{ bgcolor: about?.themeColor, border: "5px" }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography sx={{ color: about?.textColor }}>
                            {item?.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ color: about?.textColor }}>
                            {item?.desc}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* ------slider images --- */}

            {sliders && sliders?.length > 0 && (
              <motion.div
                whileInView={{ x: [-100, 50, 0], opacity: [0, 2, 1] }}
                transition={{ duration: 0.8 }}
                //   variants={fadeIn("up", 0.2)}
                //   initial="hidden"
                //   animate="show"
                //   exit="hidden"

                //   whileInView="visible"
                //   viewport={{ once: false }}

                className="mx-auto w-[80%]"
              >
                <SliderImages imagesData={sliders} />
              </motion.div>
            )}

            {/* ------video---- */}

            {about?.video && (
              <div className="relative w-[80%] h-[280px] mx-auto  md:h-[477px] ">
                <ReactPlayer
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={about?.video}
                />
              </div>
            )}

            {/* ------Contact--- */}

            <motion.div
              whileInView={{ x: [-100, 50, 0], opacity: [0, 2, 1] }}
              transition={{ duration: 0.8 }}
              //  variants={fadeIn("up", 0.2)}
              //  initial="hidden"
              //  animate="show"
              //  exit="hidden"

              //  whileInView="visible"
              //  viewport={{ once: false }}

              className="mx-auto w-[80%]"
            >
              <Contact
                portfoliemail={portfoliemail}
                color={about?.themeColor}
                user={userdata}
                about={about}
                textColor={about?.textColor}
                iconColor={about?.iconColor}
              />

              {/* ---social links share---- */}

              <div className="flex gap-2 justify-center mt-3 ">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${domainUrl}/${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="/face.png"
                    alt=""
                  />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?text=share&url=${domainUrl}/${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="/twit.png"
                    alt=""
                  />
                </a>

                <a
                  href={`mailto:?subject=sahre&body=Share your website: ${domainUrl}/${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-12 h-12 object-cover"
                    src="/mail.png"
                    alt=""
                  />
                </a>

                {/* 
                <img
                  className="w-12 h-12 object-cover"
                  src="/whatsapp.png"
                  alt=""
                />
                
                <img
                  className="w-12 h-12 object-cover"
                  src="/twit.png"
                  alt=""
                /> */}
              </div>
            </motion.div>
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
