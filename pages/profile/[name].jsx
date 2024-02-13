import Image from "next/image";
import { Inter } from "next/font/google";
import AccordionComponent from "../../components/profilee/accordion";
import SliderImages from "../../components/profilee/slider";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import NextLink from "next/link";
import { FaPlus } from "react-icons/fa";

import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaFacebookF,
  FaPhone
} from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

import Contact from "../../components/profilee/contact";
import { useState } from "react";
import { prisma } from "../../src/lib/prisma";
import { ImageEndpoint, defaultImage } from "../../src/lib/globall";
import parse from "html-react-parser";
import vCardFactory from "vcards-js";
export default function Home3({ name, userdata }) {
  const [temp, setTemp] = useState(userdata[0]?.about[0]?.temp || 1);

  const status = userdata[0]?.status;
  console.log(status, "Status");
  const about = userdata[0]?.about[0];
  console.log(about?.bgImage, "A$$$$$$$$$$$$$$$$$$$$ASS");
  const sliders = userdata[0]?.slider;
  console.log("slidersDatas", sliders);
  const projects = userdata[0]?.projects;
  const portfoliemail = userdata[0]?.email;

  console.log(userdata);

  const domainUrl1 = "https://www.ultratech.top/profile";

  const domainUrl = `https://www.ultratech.top/profile/${name}`;

  const coverbg =
    temp === 1
      ? "bg-temp1-coverbg"
      : temp === 2
      ? "bg-temp2-coverbg"
      : temp === 3
      ? "bg-temp3-coverbg"
      : temp === 4
      ? "bg-temp4-coverbg"
      : temp === 5 && "bg-temp5-coverbg";

  const mainTextColor =
    temp === 1
      ? "text-temp1-main_text_color"
      : temp === 2
      ? "text-temp2-main_text_color"
      : temp === 3
      ? "text-temp3-main_text_color"
      : temp === 4
      ? "text-temp4-main_text_color"
      : temp === 5 && "text-temp5-main_text_color";

  const iconColor =
    temp === 1
      ? "text-temp1-icon_color"
      : temp === 2
      ? "text-temp2-icon_color"
      : temp === 3
      ? "text-temp3-icon_color"
      : temp === 4
      ? "text-temp4-icon_color"
      : temp === 5 && "text-temp5-icon_color";

  const iconBorderColor =
    temp === 1
      ? "border-temp1-icon_border_color"
      : temp === 2
      ? "border-temp2-icon_border_color"
      : temp === 3
      ? "border-temp3-icon_border_color"
      : temp === 4
      ? "border-temp4-icon_border_color"
      : temp === 5 && "border-temp5-icon_border_color";

  const phoneBtnBgColor =
    temp === 1
      ? "bg-temp1-phone_btn_bg"
      : temp === 2
      ? "bg-temp2-phone_btn_bg"
      : temp === 3
      ? "bg-temp3-phone_btn_bg"
      : temp === 4
      ? "bg-temp4-phone_btn_bg"
      : temp === 5 && "bg-temp5-phone_btn_bg";

  // phone_text_color
  const phoneBtnTextAndIconColor =
    temp === 1
      ? "text-temp1-phone_text_color"
      : temp === 2
      ? "text-temp2-phone_text_color"
      : temp === 3
      ? "text-temp3-phone_text_color"
      : temp === 4
      ? "text-temp4-phone_text_color"
      : temp === 5 && "text-temp5-phone_text_color";

  // accordion_title   accordion_desc   accordion_border
  const accordionTitleColor =
    temp === 1
      ? "text-temp1-accordion_title "
      : temp === 2
      ? "text-temp2-accordion_title "
      : temp === 3
      ? "text-temp3-accordion_title "
      : temp === 4
      ? "text-temp4-accordion_title "
      : temp === 5 && "text-temp5-accordion_title ";

  const accordionDescColor =
    temp === 1
      ? "text-temp1-accordion_desc"
      : temp === 2
      ? "text-temp2-accordion_desc"
      : temp === 3
      ? "text-temp3-accordion_desc"
      : temp === 4
      ? "text-temp4-accordion_desc"
      : temp === 5 && "text-temp5-accordion_desc";

  const accordionBorderColor =
    temp === 1
      ? "border-temp1-accordion_border"
      : temp === 2
      ? "border-temp2-accordion_border"
      : temp === 3
      ? "border-temp3-accordion_border"
      : temp === 4
      ? "border-temp4-accordion_border"
      : temp === 5 && "border-temp5-accordion_border";

  const accordionBgColor =
    temp === 1
      ? "bg-temp1-accordion_bg"
      : temp === 2
      ? "bg-temp2-accordion_bg"
      : temp === 3
      ? "bg-temp3-accordion_bg"
      : temp === 4
      ? "bg-temp4-accordion_bg"
      : temp === 5 && "bg-temp5-accordion_bg";

  // accordion_desc_bg
  const accordionDescBgColor =
    temp === 1
      ? "bg-temp1-accordion_desc_bg"
      : temp === 2
      ? "bg-temp2-accordion_desc_bg"
      : temp === 3
      ? "bg-temp3-accordion_desc_bg"
      : temp === 4
      ? "bg-temp4-accordion_desc_bg"
      : temp === 5 && "bg-temp5-accordion_desc_bg";

  // slider_title_color   slider_bg
  const sliderBgColor =
    temp === 1
      ? "bg-temp1-slider_bg"
      : temp === 2
      ? "bg-temp2-slider_bg"
      : temp === 3
      ? "bg-temp3-slider_bg"
      : temp === 4
      ? "bg-temp4-slider_bg"
      : temp === 5 && "bg-temp5-slider_bg";

  const sliderTitleColor =
    temp === 1
      ? "text-temp1-slider_title_color"
      : temp === 2
      ? "text-temp2-slider_title_color"
      : temp === 3
      ? "text-temp3-slider_title_color"
      : temp === 4
      ? "text-temp4-slider_title_color"
      : temp === 5 && "text-temp5-slider_title_color";

  // slider_underline_border

  const sliderUnderlineBorderColor =
    temp === 1
      ? "border-temp1-slider_underline_border"
      : temp === 2
      ? "border-temp2-slider_underline_border"
      : temp === 3
      ? "border-temp3-slider_underline_border"
      : temp === 4
      ? "border-temp4-slider_underline_border"
      : temp === 5 && "border-temp5-slider_underline_border";

  // arrows_bg_color  arrows_color

  const arrowsColor =
    temp === 1
      ? "text-temp1-arrows_color"
      : temp === 2
      ? "text-temp2-arrows_color"
      : temp === 3
      ? "text-temp3-arrows_color"
      : temp === 4
      ? "text-temp4-arrows_color"
      : temp === 5 && "text-temp5-arrows_color";

  const arrowsBgColor =
    temp === 1
      ? "bg-temp1-arrows_bg_color"
      : temp === 2
      ? "bg-temp2-arrows_bg_color"
      : temp === 3
      ? "bg-temp3-arrows_bg_color"
      : temp === 4
      ? "bg-temp4-arrows_bg_color"
      : temp === 5 && "bg-temp5-arrows_bg_color";

  // "contact_btn_bg":"#8BBA83",
  // "contact_btn_text_color

  const contactBTnBgColor =
    temp === 1
      ? "bg-temp1-contact_btn_bg"
      : temp === 2
      ? "bg-temp2-contact_btn_bg"
      : temp === 3
      ? "bg-temp3-contact_btn_bg"
      : temp === 4
      ? "bg-temp4-contact_btn_bg"
      : temp === 5 && "bg-temp5-contact_btn_bg";

  const contactBtnTextColor =
    temp === 1
      ? "text-temp1-contact_btn_text_color"
      : temp === 2
      ? "text-temp2-contact_btn_text_color"
      : temp === 3
      ? "text-temp3-contact_btn_text_color"
      : temp === 4
      ? "text-temp4-contact_btn_text_color"
      : temp === 5 && "text-temp5-contact_btn_text_color";

  // "contact_input_border_color":"#ffffff"
  const contactInputBorderColor =
    temp === 1
      ? "border-temp1-contact_input_border_color"
      : temp === 2
      ? "border-temp2-contact_input_border_color"
      : temp === 3
      ? "border-temp3-contact_input_border_color"
      : temp === 4
      ? "border-temp4-contact_input_border_color"
      : temp === 5 && "border-temp5-contact_input_border_color";

  //contact_overlay_bg
  const contactBgOverlayColor =
    temp === 1
      ? "bg-temp1-contact_overlay_bg"
      : temp === 2
      ? "bg-temp2-contact_overlay_bg"
      : temp === 3
      ? "bg-temp3-contact_overlay_bg"
      : temp === 4
      ? "bg-temp4-contact_overlay_bg"
      : temp === 5 && "bg-temp5-contact_overlay_bg";



      const downloadTxtFile1 = vcfText => {
        const element = document.createElement("a");
        const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.vcf";
        document.body.appendChild(element);
        element.click();
      };
    
      const CreateVCard1 = () => {
        var vCardsJS = require("vcards-js");
    
        //create a new vCard
        var vCard = vCardsJS();
    
        //set properties
        // vCard.firstName = "Eric";
        // vCard.middleName = "J";
        // vCard.lastName = "Nesser";
        // vCard.organization = "ACME Corporation";
        //  vCard.workPhone = "312-555-1212";
        // vCard.birthday = new Date(1985, 0, 1);
        vCard.title = "Information";
        vCard.url = domainUrl;
        vCard.email = userdata[0]?.email
        vCard.phone = about?.phone  ? about?.phone : '11111111';
    
        //save to file
        // vCard.saveToFile("./eric-nesser.vcf");
    
        //get as formatted string
        // console.log(vCard.getFormattedString());
        return vCard.getFormattedString();
      };



// --------------------------------

function cleanVCardString(vCardString) {
  let vCardCleaner = vCardString.replace(/;CHARSET=UTF-8/g, '');
  vCardCleaner = vCardCleaner.replace(/X-SOCIALPROFILE/g, 'URL');
  console.log(vCardCleaner);
  return vCardCleaner;
}



const downloadTxtFile = vcfText => {
  console.log(vcfText)
  const element = document.createElement("a");
  const file = new Blob([vcfText], { type: "text/vcard;charset=utf-8" });
  element.href = URL.createObjectURL(file);
  element.download = "contact.vcf";
  document.body.appendChild(element);
  element.click();
};


const CreateVCard= () => {
  const vcard = vCardFactory();

  vcard.firstName = name;
  vcard.email = userdata[0]?.email;
  vcard.organization = 'information';
  vcard.photo.attachFromUrl(
    "https://avatars.githubusercontent.com/u/56592200?v=4"
  );
  vcard.workPhone = about?.phone;

  vcard.socialUrls["website"] = domainUrl;

    // vcard.socialUrls["linkedin"] = "https://www.linkedin.com/company/ie-grupo/";
  // vcard.socialUrls["twitter"] = domainUrl;
  // vcard.socialUrls["facebook"] = "https://www.facebook.com/ie.grupo";
  // vcard.socialUrls["instagram"] = "https://www.instagram.com/iegrupo/";

  // console.log(vcard.getFormattedString());
  let vCardString = vcard.getFormattedString();
  vCardString = cleanVCardString(vCardString);
  console.log(vCardString);
  return vCardString;
};







  return (
    <main className=" bg-gray-50 font-serif">
      {status === "accepted" ? (
        <div className="layoutContainer">
          <div
            // style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1268759368/photo/close-up-of-a-black-slate-texture-background-stone-grunge-texture.webp?b=1&s=612x612&w=0&k=20&c=LfMAojas-XL8kBuLO-1av_2ITfr8am-Lmwgrla-yFRc=")' }}

            className="contentContainer"
          >
            {/* -----cover--- */}
            {/* // 🌐🌐  covercolor dynamic */}
            <div
              className={`  relative   ${coverbg}    bg-temp${Number(
                temp
              )}-coverbg  coverb`}
            >
              <img
                className="cover w-full h-[300px] lg:h-[500px] m-auto object-cover  object-center rounded-b-xl"
                src={
                  (about?.headImage &&
                    `${ImageEndpoint}/${about?.headImage}`) ||
                  "https://e0.pxfuel.com/wallpapers/393/237/desktop-wallpaper-facebook-cover-grey-abstract-3440x1440-abstract.jpg"
                }
                alt=""
              />

              {/* ----userImage--- */}
              <div className="  flex justify-center  ">
                <img
                  className="md:w-[13rem] relative -top-[80px] bg-white md:h-[13rem] w-[8rem] h-[8rem] shadow border-4 border-white rounded-full object-cover"
                  src={
                    about?.myImage
                      ? `${ImageEndpoint}/${about?.myImage}`
                      : defaultImage
                  }
                  // "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            {/* -----Details---- */}
            <div className={`  coverb pb-6 bg-temp${temp}-coverbg  pb-4  `}>
              <div
                className={` text-center text-whit  text-temp${temp}-main_text_color   font-semibold`}
              >
                {about?.title && (
                  <h1 className=" text-3xl md:text-5xl">{about?.title}</h1>
                )}

                {about?.work && (
                  <h3 className=" text-2xl md:text-3xl my-3">{about?.work}</h3>
                )}
              </div>

              {/* ----Social icons--- */}

              <div className=" flex  mx-auto  container !justify-center flex-wrap  flex-initial ">
                {about?.facebook && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.facebook}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaFacebookF
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Facebook</p>
                  </div>
                )}

                {about?.whatsapp && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.whatsapp}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaWhatsapp
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Whatsapp</p>
                  </div>
                )}

                {about?.instagram && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.instagram}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaInstagram
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Instagram</p>
                  </div>
                )}

                {about?.twitter && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.twitter}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaTwitter
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Twitter</p>
                  </div>
                )}

                {about?.telgram && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.telgram}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaTelegram
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Telgram</p>
                  </div>
                )}

{/* <LuExternalLink /> */}


{about?.link && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.link}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <LuExternalLink
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Site</p>
                  </div>
                )}


{/* import { FaLocationDot } from "react-icons/fa6"; */}


{about?.location && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                      <a
                        className=" "
                        target="_blank"
                        href={about?.location}
                        rel="noreferrer nofollow"
                        title="Portfolio"
                      >
                        <FaLocationDot
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </a>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Location</p>
                  </div>
                )}




                  {/* <NextLink href={"tel:" + about?.phone} target={"_self"}> */}



                  {about?.location && (
                  <div
                    className={` ${mainTextColor} iconsMain  w-[30%] md:w-1/6 text-center  text-[11px] md:text-lg  font-semibold `}
                  >
                    <div className={`iconCircle ${iconBorderColor}`}>
                    <NextLink href={"tel:" + about?.phone} target={"_self"}> 
                        <FaPhone
                          className={` ${iconColor} block w-[30px] top-[12px] left-[12px] md:left-[22px]  md:top-[22px] h-[30px] absolute  text-yellow-10`}
                        />
                      </NextLink>
                    </div>

                    {/* text */}
                    <p className="w-[75px] mx-auto  ">Phone</p>
                  </div>
                )}






              </div>

              {/* --- telephone button --- */}

              {(  userdata[0]?.email ) && (
                <div dir="rt" className=" my-6">
                  {/* // 🌐🌐  text and Bg color dynamic */}


                  {/* <NextLink href={"tel:" + about?.phone} target={"_self"}> */}
                    <div
                      className={`telbtn cursor-pointer ${phoneBtnBgColor} ${phoneBtnTextAndIconColor}`}
                    >
                      <div className=" flex items-center gap-2 justify-center px-4">
                        <FaPlus 
                         // onClick={handleSubmit} 
                          onClick={() => downloadTxtFile(CreateVCard())}
                         />
                       


                        <span 
                            //  onClick={handleSubmit} 
                        
                         onClick={() => downloadTxtFile(CreateVCard())}
                        
                        dir="rtl"> שמרו אותנו באנשי הקשר</span>
                      </div>
                    </div>
                  {/* </NextLink> */}




                </div>
              )}

              {/* desc about 🌐🌐🌐🌐--- */}

              <div
              dir="rtl"
                className={` ${mainTextColor} text-whit w-[90%] mx-auto  font-semibold text-center container`}
              >
                {/* title-- */}
                <div>
                  <h2 className=" text-2xl md:text-3xl mb-6  underline font-bold">
                    {" "}
                    קצת עלינו{" "}
                  </h2>
                </div>

                {about?.desc && (
                  <div dir={'rtl'} className="my-3   text-right">
                    {parse(about?.desc)}

                    {/* {about?.desc} */}

                    {/* משה פסחוב- משרד עורכי דין הוא משרד מוביל במימוש זכויות רפואיות
                מול המוסד לביטוח לאומי, חברות הביטוח וקרנות הפנסיה. משרדנו מעניק
                ללקוחותיו ליווי מלא וצמוד במימוש הזכויות הרפואיות, לרבות ייצוג
                בוועדות הרפואיות, בבית */}
                  </div>
                )}

                {/* <div className="my-3">
                משה פסחוב- משרד עורכי דין הוא משרד מוביל במימוש זכויות רפואיות
                מול המוסד לביטוח לאומי, חברות הביטוח וקרנות הפנסיה. משרדנו מעניק
                ללקוחותיו ליווי מלא וצמוד במימוש הזכויות הרפואיות, לרבות ייצוג
                בוועדות הרפואיות, בבית
              </div>

              <div className="my-3">
                משה פסחוב- משרד עורכי דין הוא משרד מוביל במימוש זכויות רפואיות
                מול המוסד לביטוח לאומי, חברות הביטוח וקרנות הפנסיה. משרדנו מעניק
                ללקוחותיו ליווי מלא וצמוד במימוש הזכויות הרפואיות, לרבות ייצוג
                בוועדות הרפואיות, בבית
              </div> */}
              </div>

              {projects && projects?.length > 0 && (
                <AccordionComponent
                  projects={projects}
                  mainTextColor={mainTextColor}
                  accordionBorderColor={accordionBorderColor}
                  accordionDescColor={accordionDescColor}
                  accordionTitleColor={accordionTitleColor}
                  accordionBgColor={accordionBgColor}
                  accordionDescBgColor={accordionDescBgColor}
                />
              )}
            </div>

            {/* ----SliderImages---- */}

            <div className="   bg-gray-300 my-6">
              <SliderImages
                sliderTitleColor={sliderTitleColor}
                sliderBgColor={sliderBgColor}
                arrowsBgColor={arrowsBgColor}
                arrowsColor={arrowsColor}
                sliderUnderlineBorderColor={sliderUnderlineBorderColor}
                video={about?.video}
                sliders={sliders}
              />
            </div>

            <div>
              <Contact
                bgImage={about?.bgImage}
                mainTextColor={ about?.textColor
               //   mainTextColor
                }
                contactBtnTextColor={
                 
                  contactBtnTextColor
                }
                contactBTnBgColor={contactBTnBgColor}
                coverbg={contactBgOverlayColor}
                tempBg={coverbg}
                contactInputBorderColor={contactInputBorderColor}
                domainUrl={domainUrl}
                portfoliemail={portfoliemail}
                user={userdata}
                about={about}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className=" text-center text-4xl mt-24  font-bold text-red-600">
          <h1>Your Account is not accepted yet</h1>
        </div>
      )}
    </main>
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
