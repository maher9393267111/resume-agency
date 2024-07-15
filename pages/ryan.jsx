import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../components/ryanComponents/components/About";
import Blog from "../components/ryanComponents/components/Blog";
import Contact from "../components/ryanComponents/components/Contact";
import Home from "../components/ryanComponents/components/Home";

import Resume from "../components/ryanComponents/components/Resume";
import AboutMe from "../components/ryanComponents/components/sections/AboutMe";
import BlogSection from "../components/ryanComponents/components/sections/Blog";
import Clients from "../components/ryanComponents/components/sections/Clients";
import ContactForm from "../components/ryanComponents/components/sections/ContactForm";
import ContactInfo from "../components/ryanComponents/components/sections/ContactInfo";
import FunFact from "../components/ryanComponents/components/sections/FunFact";
import Quote from "../components/ryanComponents/components/sections/Quote";
import { ResumeSectionFitness } from "../components/ryanComponents/components/sections/Resume";
// import RecentWorksFitness from "../src/components/sections/recentWorks/RecentWorksFitness";
import Services from "../components/ryanComponents/components/sections/Services";
import { SkillsFitness } from "../components/ryanComponents/components/sections/Skills";
import Testimonials from "../components/ryanComponents/components/sections/Testimonials";
import TypingAnimation from "../components/ryanComponents/components/TypingAnimation";
import Work from "../components/ryanComponents/components/Work";
import ContentContainer from "../components/ryanComponents/layout/ContentContainer";
import Header from "../components/ryanComponents/layout/Header";
import Layout from "../components/ryanComponents/layout/Layout";


import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaFacebookF,
  FaPhone,
} from "react-icons/fa";

const RecentWorksFitness = dynamic(
  () =>
    import(
      "../components/ryanComponents/components/sections/recentWorks/RecentWorksFitness"
    ),
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
  { title: "About", link: "about", icon: "icon ion-person" },
  { title: "Resume", link: "resume", icon: "icon ion-android-list" },
  { title: "Gallery", link: "works", icon: "icon ion-images" },
//   { title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
  { title: "Contact", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Veterinarian", "Animal Lover", "Dog Trainer"];

const IndexDark = () => {
  return (
    <Layout
    //   bg={"img"}
	  bg={"gradient"}
      bgImgUrl="images/bg5.jpg"
      animationIn={"rollIn"}
      animationOut={"rollOut"}
    >
      <Head>
        <link rel="stylesheet" href="ryan/css/basic.css" />
        <link rel="stylesheet" href="ryan/css/layout.css" />
        <link rel="stylesheet" href="ryan/css/blogs.css" />
        <link rel="stylesheet" href="ryan/css/ionicons.css" />
        <link rel="stylesheet" href="ryan/css/magnific-popup.css" />
        <link rel="stylesheet" href="ryan/css/animate.css" />
        <link rel="stylesheet" href="ryan/css/gradient.css" />
        <link rel="stylesheet" href="ryan/css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="ryan/css/demos/demo-5-colors.css" />
        <link rel="stylesheet" href="ryan/css/demos/ihab.css" />
      </Head>
      <Header noSideBarBtn menus={headerMenus} animationText={animationText} />
      <Home>
        <div className="profile no-photo ryan">
          {/* profile image */}
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://mobilecard.co.il/ehabdaher/images/bg.jpg)",
            }}
          />
          {/* profile titles */}

          {/* ---user image ryan --- */}

          <div className="title !top-[-33px] !relative ">
            <img
              className=" w-28 h-28  rounded-full  !top-12  shadow-2xl   "
              src="https://mobilecard.co.il/ehabdaher/images/logo.jpg"
              alt=""
            />
          </div>

          <div className="  text-[#957a4f] mb-4 font-semibold !text-center mid-content  custscren  ">Dr. Octavia H.</div>

          {/* <TypingAnimation data={animationText} /> */}

          <div class="cardicons !text-center mid-content  custscren">
		  <div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד1</a>
              </span>
            </div>
			<div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד 1</a>
              </span>
            </div>
            <div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד</a>
              </span>
            </div>

            <div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד</a>
              </span>
            </div>

            <div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד</a>
              </span>
            </div>

            <div style={{ width: "33%", float: "right", marginBottom: "7px" }}>
              <a href="tel:0522483919">
                <img src="https://mobilecard.co.il/ehabdaher/images/mobile.png" />
              </a>
              <span style={{ float: "left" }}>
                <a href="tel:0522483919">שיחה לנייד 1</a>
              </span>
            </div>
          </div>
        </div>

        {/* -----social links ----- */}
      </Home>
      <ContentContainer>
        <About animationIn={"rollIn"} animationOut={"rollOut"}>
          <AboutMe bio={bio} />
        
					{/* <FunFact />
					<Clients />
					<Quote /> */} 
        </About>
        <Resume animationIn={"rollIn"} animationOut={"rollOut"}>

		<Services serviceList={serviceList} /> 

          {/* <ResumeSectionFitness />
          <SkillsFitness />
          <Testimonials /> */}
        </Resume>
        <Work animationIn={"rollIn"} animationOut={"rollOut"}>

<Testimonials/>


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
export default IndexDark;
