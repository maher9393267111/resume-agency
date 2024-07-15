import dynamic from "next/dynamic";
import Head from "next/head";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";

import Resume from "./components/Resume";
import AboutMe from "./components/sections/AboutMe";
import BlogSection from "./components/sections/Blog";
import Clients from "./components/sections/Clients";
import ContactForm from "./components/sections/ContactForm";
import ContactInfo from "./components/sections/ContactInfo";
import FunFact from "./components/sections/FunFact";
import Quote from "./components/sections/Quote";
import { ResumeSectionFitness } from "./components/sections/Resume";
// import RecentWorksFitness from "../src/components/sections/recentWorks/RecentWorksFitness";
import Services from "./components/sections/Services";
import { SkillsFitness } from "./components/sections/Skills";
import Testimonials from "./components/sections/Testimonials";
import TypingAnimation from "./components/TypingAnimation";
import Work from "./components/Work";
import ContentContainer from "./layout/ContentContainer";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import { ImageEndpoint, defaultImage } from "../../src/lib/globall";
import { LuExternalLink } from "react-icons/lu";


import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaFacebookF,
  FaPhone,

} from "react-icons/fa";
import { BiArchiveIn } from "react-icons/bi";
const RecentWorksFitness = dynamic(
  () => import("./components/sections/recentWorks/RecentWorksFitness"),
  {
    ssr: false,
  }
);

const bio = `<p>
A compassionate veterinarian dedicated to providing top-notch care to animals of all shapes and sizes. With a deep-rooted passion for animal welfare and years of experience in veterinary medicine, I specialize in surgical procedures and preventive care.
</p>`;

const serviceList = [
  {
    icon: "fa fa-paw",
    title: "Radiology",
    desc: "Animals are notorious for getting anything inside their body, so imaging is often necessary.",
  },
  {
    icon: "fa fa-heartbeat",
    title: "Endoscopy",
    desc: "Sometimes, diseases may require a live and moving view of how your pet&apos;s internal system works. ",
  },
  {
    icon: "fa fa-stethoscope",
    title: "Bloodwork",
    desc: "A drop of blood can tell us many things your pets will not be able to convey.",
  },
  {
    icon: "fa fa-user-md",
    title: "Surgery",
    desc: "Our goal is to offer the safest, most efficient, practical, and pain-free surgery available.",
  },
];

const headerMenus = [
  { title: "מי אנחנו", link: "about", icon: "icon ion-person" },
  { title: "שירותים", link: "resume", icon: "icon ion-android-list" },
  { title: "גלרייה", link: "works", icon: "icon ion-images" },
  //   { title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
  { title: "צור קשר", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Veterinarian", "Animal Lover", "Dog Trainer"];





const One = ({ about, temp, projects, images ,downloadTxtFile,CreateVCard }) => {


    const textColor =
    temp === 5
      ? "!text-[#957a4f]"
      : temp === 6
      ? "!text-[#957a4f]"
      : temp === 7
      ? "bg-temp3-contact_btn_bg"
      : temp === 8
      ? "bg-temp4-contact_btn_bg"
      : temp === 9 && "bg-temp5-contact_btn_bg";
    




  return (
    <Layout
      //   bg={"img"}
      bg={"gradient"}
      bgImgUrl="images/bg5.jpg"
      animationIn={"rollIn"}
      animationOut={"rollOut"}
    >
      <Head>
        <link rel="stylesheet" href="/ryan/css/basic.css" />
        <link rel="stylesheet" href="/ryan/css/layout.css" />
        <link rel="stylesheet" href="/ryan/css/blogs.css" />
        <link rel="stylesheet" href="/ryan/css/ionicons.css" />
        <link rel="stylesheet" href="/ryan/css/magnific-popup.css" />
        <link rel="stylesheet" href="/ryan/css/animate.css" />
        <link rel="stylesheet" href="/ryan/css/gradient.css" />
        <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />

     {/* {temp === 5 && <link rel="stylesheet" href="/ryan/css/demos/demo-5-colors.css" /> }
        {temp === 4 && <link rel="stylesheet" href="/ryan/css/demos/demo-4-colors.css" /> }  */}
        
        {/* <link rel="stylesheet" href="/ryan/css/demos/demo-5-colors.css" /> */}
        <link rel="stylesheet" href="/ryan/css/demos/ihab.css" />
      </Head>

      <Header noSideBarBtn menus={headerMenus} animationText={animationText} />
      <Home>
        <div className="profile no-photo rya">
          {/* profile image */}
          <div
            className="slide"
            style={{
              backgroundImage:
                //https://mobilecard.co.il/ehabdaher/images/bg.jpg
                `url(${ImageEndpoint}/${about?.headImage})`,
            }}
          />
          {/* profile titles */}

          {/* ---user image ryan --- */}

          <div className="title !top-[15px] !relative ">
            <img
              className=" w-[140px] h-[140px]  rounded-full relative  !top-6  shadow-2xl   "
              src={
                about?.myImage
                  ? `${ImageEndpoint}/${about?.myImage}`
                  : defaultImage
              }
              alt=""
            />
          </div>

          <div className={` ${textColor} mt-8   font-serif mb-4 font-semibold !text-center mid-content  custscren  `}>
            {about?.title}.
          </div>
          <div className={` ${textColor} font-serif mb-4 font-semibold !text-center mid-content  custscren  `}>
            {about?.work}
          </div>

          <div className="">
<div className={`${textColor} mb-4 font-serif font-semibold  flex gap-1 justify-center items-center`}>

<div>
    <BiArchiveIn
                        onClick={() => downloadTxtFile(CreateVCard())}
    
    
    className=" w-8 h-8"/>
</div>
<p
                        onClick={() => downloadTxtFile(CreateVCard())}


>
שמור אותנו באנשי קשר בטלפון 
</p>


</div>


</div>


          {/* <TypingAnimation data={animationText} /> */}

          {/* -----Social links --- */}
          <div class="cardicons mb-8 lg:!mb-16 pb-12 !text-center mid-content arabicfont  custscren">
            {about?.facebook && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.facebook}>
                <FaFacebookF className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                <span style={{ float: "left" }}>
                Face
                </span>
              </div>
            )}


{about?.whatsapp && (

              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a
                        href={about?.whatsapp}
                
                >
                    
                  {/* <img src="/ryan/images/whatsapp.png" /> */}
                  <FaWhatsapp className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>

                </a>
                <span style={{ float: "left" }}>
           Whats
                </span>
              </div>
            )}


{about?.instagram && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a
                        href={about?.instagram}
                
                >
                  {/* <img src="/ryan/images/instagram.png" /> */}
                  <FaInstagram className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>

                </a>
                <span style={{ float: "left" }}>
        Instagram
                </span>
              </div>
            )}



{about?.twitter && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a
                        href={about?.instagram}
                
                >
                    <FaTwitter className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>
                  {/* <img src="/ryan/images/instagram.png" /> */}
                </a>
                <span style={{ float: "left" }}>
             Twitter
                </span>
              </div>
            )}


{about?.telgram && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.telgram}>
                <FaTelegram className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                <span style={{ float: "left" }}>
                 Telgram
                </span>
              </div>
            )}


{about?.link && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.link}>
                <LuExternalLink className=" w-12  h-12  bg-[#8a6d3e]  rounded-full p-2  text-white"/>

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                <span style={{ float: "left" }}>
               Site
                </span>
              </div>
            )}






          </div>







        </div>
      </Home>
      <ContentContainer>
        <About animationIn={"rollIn"} animationOut={"rollOut"}>
          <AboutMe bio={about?.desc} />

          {/* <FunFact />
					<Clients />
					<Quote /> */}
        </About>
        <Resume animationIn={"rollIn"} animationOut={"rollOut"}>
          <Services serviceList={projects} />

          {/* <ResumeSectionFitness />
          <SkillsFitness />
          <Testimonials /> */}
        </Resume>
        <Work animationIn={"rollIn"} animationOut={"rollOut"}>
          <Testimonials images={images} />

          {/* <RecentWorksFitness /> */}
        </Work>
        {/* <Blog animationIn={"rollIn"} animationOut={"rollOut"}>
          <BlogSection />
        </Blog> */}
        <Contact animationIn={"rollIn"} animationOut={"rollOut"}>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default One;
