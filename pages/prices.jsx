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
import MenuPrices from "../components/PricesMain/menuPrices";
import Questions from "../components/Home/questions";
import ContactHome from "../components/Home/homeContact";
import PageHeaders from "../components/common/pageHeaders";
import SectionOne from "../components/Card/sectionOne";
import CardFeatures from "../components/Card/CardFeatures";
import SectionTwo from "../components/Card/sectionTwo";
import SectionThree from "../components/Card/section3";
import { getUser } from "../src/lib/getUser";

export default function PricesPage({user}) {
  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  return (
    <ClientLayout user={user}>
      <main dir={dir} id="main_page " className={`englishfont`}>
        <div className=" ">
          <AnimationOnView>
            <PageHeaders
              pt={true}
              pb={true}
              text={fetchWord("pricesPageTitle", locale)}
              gradient
            />

            <Prices />

            <MenuPrices locale={locale} />
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