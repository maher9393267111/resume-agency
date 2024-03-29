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
import Prices from "../components/Home/price";
import Questions from "../components/Home/questions";
import ContactHome from "../components/Home/homeContact";
 import { getUser } from "../src/lib/getUser";
const inter = Inter({ subsets: ["latin"] });

export default function Menu({user}) {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  return (
    <ClientLayout user={user} >
      <main dir={""} id="main_page " className={`englishfont`}>
        <div className=" ">
          <AnimationOnView>
            <Banner />

            <Featurs />
          </AnimationOnView>
        </div>
      </main>
    </ClientLayout>
  );
}



export const getServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

 


  return {
    props: {user},
  };
};