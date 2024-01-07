import Image from "next/image";
import { Inter } from "next/font/google";

import { UserContext } from "@/src/context";
import { useContext, useState } from "react";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import ClientLayout from "@/components/clientLayout/index";

import { AnimationOnView } from "@/src/lib/animateView";

import Link from "next/link";
import { useRouter } from "next/router";
import LangSwitcher from "@/components/clientLayout/langSwitcher";
import Banner from "../components/Home/banner";
import Featurs from "../components/Home/features";
import Services from "../components/Home/services";
import Prices from '../components/Home/price'
import Questions from '../components/Home/questions'
import ContactHome from '../components/Home/homeContact'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  return (
    <ClientLayout>
      <main dir={""} id="main_page " className={`englishfont`}>
        <div className=" ">
          <AnimationOnView>
            <Banner />
          </AnimationOnView>

          <AnimationOnView>
            <Featurs />
          </AnimationOnView>

          <AnimationOnView>
            <Services />
          </AnimationOnView>


          <AnimationOnView>
            <Prices />
          </AnimationOnView>

          <AnimationOnView>
            <Questions />
          </AnimationOnView>

          <AnimationOnView>
            <ContactHome />
          </AnimationOnView>


        </div>
      </main>
    </ClientLayout>
  );
}
