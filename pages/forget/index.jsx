import axios from "axios";
import { errorHandler, successHandler } from "../../src/lib/errorHandler";

import { useRouter } from "next/router";

import PageHeaders from "../../components/common/pageHeaders";

import { AiOutlineLoading } from "react-icons/ai";

import { MailIcon } from "@heroicons/react/outline";

import Link from "next/link";
import { Seo } from "../../src/lib/seo";

import { newPetition } from "../../src/lib/petition";

import { UserContext } from "@/src/context";
import { useContext, useState, useEffect } from "react";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import ClientLayout from "@/components/clientLayout/index";

const ForgetPage = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });

  const { locale, asPath } = useRouter();

  console.log("locale", locale);
  const { dir, profile, signInUser } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const { email } = user;

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isUser = Object.values({ email }).every((item) => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);

    try {
      //  await signInUser(email, password);

      const response = await newPetition("POST", "/api/auth/forget", {
        email,
      });
      console.log("Response");

      if (response.Error) {
        errorHandler(response.Error);
      } else {
        successHandler(
          `${
            locale === "ar"
              ? "تم ارسال رسالة لتغيير كلمة السر الى ايميلك"
              : "Reset password link sended to your email check it"
          }`
        );

        //   router.replace("/"

        //     );
      }
    } catch (error) {
      errorHandler(error);
    }

    setFormLoading(false);
  };

  return (
    <ClientLayout>
      <div dir={dir} className=" englishfont">
        <Seo title="Forget - ultratech" description="" />

        <PageHeaders
          pt={true}
          pb={true}
          text={fetchWord("forgetTitle", locale)}
          gradient
        />

        <div className="min-h-screen flex items-cente justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-24 text-center text-2xl sm:text-4xl  font-extrabold  shimmer">
                {/* Welcome to Driwwwle */}
                {fetchWord("welcomeRegister", locale)}
              </h2>
              {/* <p className="text-center text-pink-600 mt-2 mb-6 font-semibold text-md">
                  We're thrilled to have you onboard
                </p> */}
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {/* Email */}
                    {fetchWord("emailauth", locale)}
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-purple-600 focus:border-purple-600  block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
              </div>
{/* 
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    href="/signup"
                    className="font-medium text-purple-600   hover:text-purple-700"
                  >
                    {fetchWord("nothaveAcoount", locale)}
                    
                  </Link>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:ring-purple-600 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                 bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submitDisabled}
                >
                  {formLoading && (
                    <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                      <AiOutlineLoading
                        className="h-5 w-5 text-gray-100 animate-spin"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                  {fetchWord("send", locale)}
                  {/* Sign Up */}
                </button>
              </div>
            </form>
          </div>
          {/* <EmailConfirmModal open={modalOpen} setOpen={setModalOpen} /> */}
        </div>
      </div>
    </ClientLayout>
  );
};

export default ForgetPage;
