import React from "react";
import Hero from "../../../components/dashboardLayout/hero";
import { DashboardLayout } from "../../../components/dashboardLayout";
import { getUser } from "../../../src/lib/getUser";
import AboutForm from "../../../components/aboutMain/aboutForm";

import CustomInput from "../../../components/common/customInput";

import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { classNames } from "../../../src/lib/classes";

import { errorHandler } from "../../../src/lib/errorHandler";
import axios from "axios";
import { prisma } from "../../../src/lib/prisma";

function AboutPage({ user, userdata }) {
  console.log("userPrisma", userdata);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm();
  const router = useRouter();

  const [title, setTitle] = useState(userdata?.about[0]?.title || "");
  const [desc, setDesc] = useState(userdata?.about[0]?.desc || "");
  const [pdf, setPdf] = useState(userdata?.about[0]?.pdf || "");
  const [link, setLink] = useState(userdata?.about[0]?.link || "");
  const [whatsapp, setWhatsapp] = useState(userdata?.about[0]?.whatsapp || "");
  const [telgram, setTelgram] = useState(userdata?.about[0]?.telgram || "");
  const [instagram, setInstagram] = useState(
    userdata?.about[0]?.instagram || ""
  );
  const [myImage, setMyImage] = useState(userdata?.about[0]?.myImage || "");
  const [headImage, setheadImage] = useState(
    userdata?.about[0]?.headImage || ""
  );
  const [twitter, setTwitter] = useState(userdata?.about[0]?.twitter || "");
  const [facebook, setFacebook] = useState(userdata?.about[0]?.facebook || "");
  
  const submitHandler = async (e) => {
    console.log("values-->");

    e.preventDefault();
    try {
      const { data } = await axios.post("/api/about", {
        title,
        desc,
        whatsapp,
        telgram,
        instagram,
        twitter,
        pdf,
        link,
        facebook,
      });

      console.log("AboutResponse Data", data);

      errorHandler("Updated Successfully");
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <DashboardLayout user={user}>
      <Hero user={user} title="About Page" />

      {user?.name}

      <div
        // sm:mx-auto sm:w-full sm:max-w-md
        className="mt-4 

"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
       
          <form className="space-y-6" onSubmit={submitHandler}>
            {/* Name Field */}

            <CustomInput
              value={title}
              setValue={setTitle}
              label={"Title"}
              type={"text"}
            />


            <CustomInput
              value={desc}
              setValue={setDesc}
              label={"Description"}
              type={"text"}
            />

            <CustomInput
              value={whatsapp}
              setValue={setWhatsapp}
              label={"Whatsapp"}
              type={"text"}
            />

            <CustomInput
              value={telgram}
              setValue={setTelgram}
              label={"Telgram"}
              type={"text"}
            />

            <CustomInput
              value={instagram}
              setValue={setInstagram}
              label={"Instagram"}
              type={"text"}
            />

            <CustomInput
              value={twitter}
              setValue={setTwitter}
              label={"Twitter"}
              type={"text"}
            />

            <CustomInput
              value={facebook}
              setValue={setFacebook}
              label={"Facebook"}
              type={"text"}
            />

            {/* Submit Button */}
            <div>
              <input
                type="submit"
                value="Update"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const user = await getUser(req, res);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  const userdata = await prisma.user.findUnique({
    where: {
      id: user.id,
    },

    include: {
      about: true,
    },
  });

  return {
    props: {
      user,
      userdata: JSON.parse(JSON.stringify(userdata)),
    },
  };
};

export default AboutPage;
