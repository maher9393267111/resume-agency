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
    <div dir={dir} className={`${locale === "ar" && "arabicfont"}`}>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 my-12  shadow-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg0 ">
          <h2 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] ">
            {fetchWord("contactTitle", locale)}
          </h2>
          <p className="mt-2 text-center text-xl text-gray-600">
            <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
              {fetchWord("contactSend", locale)}
            </span>
          </p>
          {subject} {email} {name} {message}
          {phone}
        </div>
        <div className="mt-8 sm:mx-auto w-[90%] mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white sm:py-12 py-6 px-6 sm:px-12 shadow-2xl sm:max-w-lg border border-1  border-purple-100 rounded-lg ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg mb-1 font-medium text-gray-700"
                >
                  {fetchWord("contactname", locale)}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="current-password"
                    className="appearance-none block py-4 border-2  border-purple-100 w-full px-3   border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xl mb-1 font-medium text-gray-700"
                >
                  {fetchWord("contectemail", locale)}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none block py-4 border-2  border-purple-100 w-full px-3   border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* number Field */}
              <div>
                <label
                  htmlFor=""
                  className="block text-lg mb-1 font-medium text-gray-700"
                >
                  {fetchWord("contactnumber", locale)}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isLoading}
                    id=""
                    name="number"
                    type="text"
                    className="appearance-none block py-4 border-2  border-purple-100 w-full px-3   border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block text-lg mb-1 font-medium text-gray-700"
                >
                  {fetchWord("contactsubject", locale)}
                </label>

                <select
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className="appearance-none block py-4 border-2  border-purple-100 w-full px-3   border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name=""
                  id=""
                >
                  <option value=""></option>
                  <option value="qr">{fetchWord("option1", locale)}</option>

                  <option value="menu-with-order">
                    {" "}
                    {fetchWord("option2", locale)}
                  </option>

                  <option value="paper-menu">
                    {fetchWord("option3", locale)}
                  </option>
                  <option value="nfc">{fetchWord("option4", locale)}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg mb-1 font-medium text-gray-700"
                >
                  {fetchWord("contactmessage", locale)}
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading}
                    column={"4"}
                    type="text"
                    autoComplete="current-password"
                    className="appearance-none block py-4 border-2  border-purple-100 w-full px-3   border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  value="Sign in"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  {fetchWord("sendmessagebtn", locale)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
