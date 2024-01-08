import Image from "next/image";
import { Inter } from "next/font/google";

import { UserContext } from "@/src/context";
import { useContext, useState } from "react";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import ClientLayout from "@/components/clientLayout/index";

import { AnimationOnView } from "@/src/lib/animateView";

import Link from "next/link";
import { useRouter } from "next/router";

import Questions from "../components/Home/questions";

import PageHeaders from "../components/common/pageHeaders";


export default function PricesPage() {
  const { locale, asPath } = useRouter();





  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  return (
    <ClientLayout>
      <main dir={dir} id="main_page " className={`englishfont`}>
        <div className=" ">
          <AnimationOnView>
            <PageHeaders
              pt={true}
              pb={true}
              text={fetchWord("AboutPageTitle", locale)}
              gradient
            />


<div className="  mb-14 mt-12 px-8 container text-lg sm:text-xl font-semibold">

<h3 className="my-6 flex gap-2">


<svg
className='w-[44px] md:mt-[5px] hidden md:block'
                    
                      width="16"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.668 8.973 4 4 6.667-8"
                        stroke="#1127E3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>


    {fetchWord("AboutSecOne" ,locale)}
    
    
    </h3>


<h3 className="my-6 flex gap-2">
    
<svg
className='w-[44px] md:mt-[5px] hidden md:block'
                    
                      width="16"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.668 8.973 4 4 6.667-8"
                        stroke="#1127E3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>


    
    
    {fetchWord("AboutSecTwo" ,locale)}</h3>


<h3 className="my-6 flex gap-2">
    
<svg
className='w-[44px]  hidden md:block md:mt-[5px]'
                    
                      width="16"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.668 8.973 4 4 6.667-8"
                        stroke="#1127E3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
    
    
    {fetchWord("AboutSecThree" ,locale)}</h3>

</div>



            

          </AnimationOnView>
        </div>
      </main>
    </ClientLayout>
  );
}
