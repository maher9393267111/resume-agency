import Image from "next/image";
import { Inter } from "next/font/google";

import { UserContext } from "@/src/context";
import { useContext, useState } from "react";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import ClientLayout from "@/components/clientLayout/index";

import { AnimationOnView } from "@/src/lib/animateView";

import Link from "next/link";
import { useRouter } from "next/router";
import ContactForm from '../components/Home/homeContact'


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
              text={fetchWord("contactUsTitle", locale)}
              gradient
            />

            <div className="  mb-14 mt-12 px-8 container text-lg sm:text-xl font-semibold">
         

         <ContactForm/>

            </div>
          </AnimationOnView>
        </div>
      </main>
    </ClientLayout>
  );
}
