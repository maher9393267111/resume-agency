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

const One = ({
  about,
  temp,
  projects,
  images,
  downloadTxtFile,
  CreateVCard,
  domainUrl,
  email,
}) => {
  const textColor =
    temp === 5
      ? "!text-[#957a4f]"
      : temp === 6
      ? "!text-[#957a4f]"
      : temp === 7
      ? "!text-[#edff20]"
      : temp === 8
      ? "text-[#f07038]"
      : temp === 9
      ? "!text-[#fff250]"
      : temp === 10 && "text-[#4c7753]";

  const bgColor =
    temp === 5
      ? "!bg-[#957a4f]"
      : temp === 6
      ? "!bg-[#957a4f]"
      : temp === 7
      ? "!bg-[#edff21]"
      : temp === 8
      ? "bg-[#f07038]"
      : temp === 9
      ? "bg-[#fff250]"
      : temp === 10 && "bg-[#4c7753]";

  const iconTextColor =
    temp === 5
      ? "text-white"
      : temp === 6
      ? "text-white"
      : temp === 7
      ? "text-black"
      : temp === 8
      ? "text-white"
      : temp === 9
      ? "text-black"
      : temp === 10 && "text-white";


const btnbgColor =   temp === 5
? "bg-white"
: temp === 6
? "bg-[#c0a77f]"
: temp === 7
? "bg-black"
: temp === 8
? "bg-[bisque]"
: temp === 9
? "bg-black"
: temp === 10 && "bg-[#c8ffc4]";


const profileBg =   temp === 5
? "bg-white"
: temp === 6
? "!bg-[#103842]"
: temp === 7
? "bg-black"
: temp === 8
? "!bg-[#103842]"
: temp === 9
? "bg-black"
: temp === 10 && "!bg-[#8a6d3]";




  return (
    <Layout
      //  bg={"img"}
     // bg={"gradient"}
      // bg={"blured"}

       bg={ temp === 6 ? "gradient" : "blured"}



      bgImgUrl="images/bg7.jpg"
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

        {/* --------------- */}

        {/* {temp === 5 && <link rel="stylesheet" href="/ryan/css/demos/demo-5-colors.css" /> }
        {temp === 4 && <link rel="stylesheet" href="/ryan/css/demos/demo-4-colors.css" /> }  */}

        {temp === 6 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        )}
        {temp === 6 && (
          <link rel="stylesheet" href="/ryan/css/demos/demo-5-colors.css" />
        )}
        {/* {temp === 6 && (
          <link rel="stylesheet" href="/ryan/css/demos/ihab.css" />
        )} */}

        {temp === 7 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        )}
        {temp === 7 && (
          <link rel="stylesheet" href="/ryan/css/template-dark/dark.css" />
        )}
        {temp === 7 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/minimal-skin.css" />
        )}

        {temp === 8 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        )}

        {temp === 8 && (
          <link rel="stylesheet" href="/ryan/css/demos/demo-8-colors.css" />
        )}

        {temp === 9 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        )}

        {temp === 9 && (
          <link rel="stylesheet" href="/ryan/css/demos/demo-7-colors.css" />
        )}
        {temp === 9 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/classic-skin.css" />
        )}

        {temp === 9 && (
          <link rel="stylesheet" href="/ryan/css/template-dark/dark.css" />
        )}

        {temp === 10 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        )}
        {temp === 10 && (
          <link rel="stylesheet" href="/ryan/css/demos/demo-3-colors.css" />
        )}
        {temp === 10 && (
          <link rel="stylesheet" href="/ryan/css/new-skin/classic-skin.css" />
        )}
      </Head>

      <Header noSideBarBtn menus={headerMenus} animationText={animationText} />
      <Home>
        <div className={`profile ${profileBg} no-photo ryan`}>
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

          <div className="title  !top-[110px] md:!top-[88px] !relative ">
            <img
              className=" w-[150px] lg:-mt-[100px] myimage h-[150px]  !border-3 border-[#eaeaea]   rounded-full   !shadow-4xl   "
              src={
                about?.myImage
                  ? `${ImageEndpoint}/${about?.myImage}`
                  : defaultImage
              }
              alt=""
            />
          </div>

          <div
            className={` ${textColor} pt-[100px]  text-xl md:text-2xl   !font-serif mb-2 font-semibold !text-center mid-content  custscren  `}
          >
            {about?.title}
          </div>

          {/* --------------------------XXXX----------------------- */}

          <div
            className={` ${textColor}  text-xl md:text-2xl font-serif mb-2 !font-semibold !text-center mid-content  custscren  `}
          >
            {about?.work}
          </div>

          <div className="">
            <div
              className={`${textColor} mb-4 font-serif font-semibold  flex gap-1 justify-center items-center`}
            >
              <div>
                <BiArchiveIn
                  onClick={() => downloadTxtFile(CreateVCard())}
                  className=" w-8 h-8"
                />
              </div>
              <p onClick={() => downloadTxtFile(CreateVCard())}>
                שמור אותנו באנשי קשר בטלפון
              </p>
            </div>
          </div>

          <div class="cardicons !gap-3  !mb-20 lg:!mb-16 pb-14 !text-center mid-content arabicfont  custscren">
            {about?.facebook && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.facebook}>
                  <FaFacebookF
                    className={`   w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                {/* <span style={{ float: "left" }}>Face</span> */}
              </div>
            )}

            {about?.whatsapp && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.whatsapp}>
                  {/* <img src="/ryan/images/whatsapp.png" /> */}
                  <FaWhatsapp
                    className={` w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />
                </a>
                {/* <span style={{ float: "left" }}>Whats</span> */}
              </div>
            )}

            {about?.instagram && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.instagram}>
                  {/* <img src="/ryan/images/instagram.png" /> */}
                  <FaInstagram
                    className={`   w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />
                </a>
                {/* <span style={{ float: "left" }}>Instagram</span> */}
              </div>
            )}

            {about?.twitter && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.instagram}>
                  <FaTwitter
                    className={`   w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />
                  {/* <img src="/ryan/images/instagram.png" /> */}
                </a>
                {/* <span style={{ float: "left" }}>Twitter</span> */}
              </div>
            )}

            {about?.telgram && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.telgram}>
                  <FaTelegram
                    className={`w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                {/* <span style={{ float: "left" }}>Telgram</span> */}
              </div>
            )}

            {about?.link && (
              <div
                style={{ width: "33%", float: "right", marginBottom: "7px" }}
              >
                <a href={about?.link}>
                  <LuExternalLink
                    className={` w-14  h-14  ${bgColor}  rounded-full p-2  ${iconTextColor}`}
                  />

                  {/* <img src="/ryan/images/facebook.png" /> */}
                </a>
                {/* <span style={{ float: "left" }}>Site</span> */}
              </div>
            )}
          </div>

          {/* </div> */}
        </div>
      </Home>
      <ContentContainer>
        <About animationIn={"rollIn"} animationOut={"rollOut"}>
          <AboutMe textColor={textColor} bio={about?.desc} />

          {/* <FunFact />
					<Clients />
					<Quote /> */}
        </About>
        <Resume animationIn={"rollIn"} animationOut={"rollOut"}>
          <Services textColor={textColor} serviceList={projects} />

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
          <ContactInfo about={about} email={email} />
          <ContactForm
          btnbgColor={btnbgColor}
            btnColor={iconTextColor}
            textColor={textColor}
            bgColor={bgColor}
            domainUrl={domainUrl}
          />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default One;
