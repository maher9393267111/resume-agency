import React, { useState, useContext } from "react";

// import { toast } from "react-toastify";
import { errorHandler, successHandler } from "../../src/lib/errorHandler";

// icons
import { MdLocalPostOffice as MailIcon } from "react-icons/md";

import {
  FaInstagram as InstagramIcon,
  FaGithub as GithubIcon,
  FaFacebook as FacebookIcon,
} from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { BsTwitter as TwitterIcon } from "react-icons/bs";
import { ImSpinner3 as SpinnerIcon } from "react-icons/im";

import { UserContext } from "@/src/context";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir } = useContext(UserContext);

  const sendMessage = async (data) => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/homecontact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          title: "تواصل",
          name: name,
          email: email,
          message: message,
          subject: subject,
          phone: phone,
        }),
      });

      console.log("response", res?.status);

      if (res.status === 200) {
        successHandler(" تم ارسال الرسالة بنجاح");
      }

      setIsLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPhone("");
      successHandler("تم ارسال الرسالة بنجاح!");
    } catch (error) {
      setIsLoading(false);
      errorHandler("فشل ارسال الرسالة");
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "name",
      name,
      "email",
      email,
      "subject",
      subject,
      "mesage",
      message,
      "phone",
      phone
    );
    if (name && email && subject && message && phone) {
      sendMessage({
        name,
        email,
        subject,
        message,
        phone,
      });
    } else {
      errorHandler("الرجاء ملأ جميع المدخلات");
    }
  };

  return (
    <div dir={dir} className=" px-4 sm:px-6 lg:px-8 pb-20  englishfont">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-5xl mx-auto">
        {/* Content goes here */}
        <div className="space-y-3 text-center p-8">
          <div className="text-[#162A43] font-semibold text-4xl shimmer ">
            <h1 className="leading-snug">
              {/* Contact Us */}
            {fetchWord("contactUsTitle", locale)}
            
            </h1>
          </div>

          {/* <p className="text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto">
            We're here to help you find the perfect rental property. Whether
            it's a cozy apartment or a spacious house, our dedicated team is
            ready to assist you. Contact us today to start your journey toward
            your dream space!
          </p> */}
        </div>

        <div className="py-5 px-6 sm:px-10 lg:col-span-2 xl:p-6 max-w-4xl mx-auto">
          <form
             onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-500"
              >
                 {/* Name */}
                 {fetchWord("contactname", locale)}
                 
                  <span className="text-red-500 font-bold ">*</span>
              </label>
              <div className="mt-1">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder={fetchWord("contactname", locale)}
                  className={`py-2 px-4 block w-full shadow-sm ${"border-gray-100"} focus:ring-purple-600 focus:border-purple-600 border-2 rounded-md`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                 {fetchWord("contactemail", locale)}
                
                
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <div className="mt-1">
                <input
                 value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={ fetchWord("contactemail", locale)}
                  className={`py-2 px-4 block w-full shadow-sm ${"border-gray-100"} focus:ring-purple-600 focus:border-purple-600 border-2 rounded-md`}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-500"
              >
                 {fetchWord("contactsubject", locale)}
                
                <span className="text-red-500 font-bold ">*</span>
              </label>
              <div className="mt-1">
                <input
                 value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  name="Subject"
                  id="subject"
                  autoComplete="family-name"
                  placeholder= {fetchWord("contactsubject", locale)}
                  className={`py-2 px-4 block w-full shadow-sm ${"border-gray-100"} focus:ring-purple-600 focus:border-purple-600 border-2 rounded-md`}
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-500"
                >
                   {fetchWord("contactnumber", locale)}
                  
                   <span className="text-red-500 font-bold ">*</span>
                </label>
              </div>
              <div className="mt-1">
                <input
                 value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder= {fetchWord("contactnumber", locale)}
                  className={`py-2 px-4 block w-full shadow-sm ${"border-gray-100"} focus:ring-purple-600 focus:border-purple-600 border-2 rounded-md`}
                  aria-describedby="phone-optional"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-500"
                >
                   {fetchWord("contactmessage", locale)}
                  <span className="text-red-500 font-bold ">*</span>
                </label>
                <span
                  id="message-max"
                  className="text-sm text-warm-gray-500"
                ></span>
              </div>
              <div className="mt-1">
                <textarea
                 value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  rows={4}
                  className={`py-2 px-4 block w-full shadow-sm ${
                    // errors.tenantMessage
                    //   ? "border-red-500"
                    // :

                    "border-gray-100"
                  } focus:ring-purple-600 focus:border-purple-600 border-2 rounded-md`}
                  // {...register("tenantMessage", {
                  //   required: "Message is required",
                  // })}

                  aria-describedby="message-max"
                  placeholder= {fetchWord("contactmessage", locale)}
                />
                {/* {errors.tenantMessage && (
                <p className="text-red-500 mt-2">
                  {errors.tenantMessage.message}
                </p>
              )} */}
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end lg:justify-center">
              <button
                disabled={isLoading}
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-purple-100 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BD8472] sm:w-auto disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending Message" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Contact;
