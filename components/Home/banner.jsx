import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../public/hero-img.png";
import {useState ,useContext} from 'react'
import { UserContext } from '@/src/context';
import { useRouter } from 'next/router';
import { fetchWord } from '@/src/lib/lang/fetchWord';
export default function Banner() {


  
  const { locale, asPath } = useRouter()

  console.log("locale" ,locale)
  const {dir} = useContext(UserContext)




  return (
    <div dir={dir} className={`${locale ==='ar' && 'arabicfont'}`}>

<section className="gradient">
          <div className="container">
            <div className="grid tab:grid-cols-2 mb-[120px] items-start gap-[80px] tab:gap-[10px] max-md:pt-[190px] pt-[210px] pb-[120px] tab:pb-[35px]">
              <div>
                <motion.h1
                  transition={{ duration: 0.5 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="font-bold max-md:text-[42px] max-md:leading-[48px] max-md:mb-4 mb-10 leading-[68px] text-[64px] text-white"
                >
                  {/* Anyone, anywhere can teach live */}
                  {fetchWord('bannerdesc',locale)}
                </motion.h1>
                <motion.p
                  transition={{ duration: 0.7 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]"
                >
                  {/* Bring together live classes, community, and payments- all on
                  Klas. */}

{fetchWord('bannertitle',locale)}
                </motion.p>



                <motion.p
                  transition={{ duration: 0.7 }}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  className="text-2xl max-md:text-[18px] max-md:leading-[28px] mb-[40px] leading-8 text-[hsla(0,0%,100%,.8)]"
                >
                  {/* Bring together live classes, community, and payments- all on
                  Klas. */}

{fetchWord('bannertitle2',locale)}
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
                      {fetchWord('register',locale)}
                  </Link>
                  {/* <Link
                    className="text-white flex gap-[5px] hover:gap-[10px] duration-300 transition-all justify-center items-center text-base font-bold"
                    href="https://calendly.com/nathanstark101/chat"
                  >
                    Request demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        d="m9.29 8.119 3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42Z"
                      ></path>
                    </svg>
                  </Link> */}


                </motion.div>
              </div>
              <motion.div
                transition={{ duration: 0.7 }}
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="flex justify-center"
              >
                <Image src={HeroImage} width={640} height={640} />
              </motion.div>
            </div>
          </div>
        </section>


    </div>
  )
}
