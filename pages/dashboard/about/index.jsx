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
import { HuePicker, SketchPicker } from "react-color";
import { ImageEndpoint ,defaultImage } from "../../../src/lib/globall";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function AboutPage({ user, userdata }) {
  console.log("userPrisma", userdata);

  // const {
  //   handleSubmit,
  //   formState: { errors },
  //   register,
  //   setValue,
  //   watch,
  // } = useForm();

  const router = useRouter();

  const [title, setTitle] = useState(userdata?.about[0]?.title || "");
  const [desc, setDesc] = useState(userdata?.about[0]?.desc || "");
  const [pdf, setPdf] = useState(userdata?.about[0]?.pdf || "");
  const [link, setLink] = useState(userdata?.about[0]?.link || "");
  const [work, setWork] = useState(userdata?.about[0]?.work || "");
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
  const [themeColor, setThemeColor] = useState(
    userdata?.about[0]?.themeColor || ""
  );
  const [iconColor, setIconColor] = useState(
    userdata?.about[0]?.iconColor || ""
  );
  // iconColor themeColor

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [headpreviewImage, setHeadPreviewImage] = useState(null);

  const [headSelectedImage, setHeadSelectedImage] = useState(null);

  const handleColorChange = (newColor) => {
    setThemeColor(newColor.hex);
  };

  const handleIconColorChange = (newColor) => {
    setIconColor(newColor.hex);
  };

  const submitHandler = async (e) => {
    console.log("values-->");
    e.preventDefault();

    e.preventDefault();
    try {
      const object = {
        title,
        desc,
        whatsapp,
        telgram,
        instagram,
        twitter,
        pdf,
        link,
        facebook,
        themeColor,
        iconColor,
        work,
        myImage,
        headImage,
      };

      console.log(myImage, "????????");
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
        themeColor,
        iconColor,
        work,
        myImage: selectedImage
          ? await handleUploadImage(selectedImage, "myImage")
          : myImage,
        headImage: headSelectedImage
          ? await handleUploadImage(headSelectedImage, "headImage")
          : headImage,
      });

      console.log("AboutResponse Data", data);

    //  router.reload()

      errorHandler("Updated Successfully");
    } catch (error) {
      errorHandler(error);
    }
  };

  // image upload

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleHeadImageSelect = (e) => {
    const file = e.target.files[0];
    setHeadSelectedImage(file);
    setHeadPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleUploadImage = async (selected, imagetype, collection) => {
    try {
      const formData = new FormData();
      console.log("selected", selected);
      formData.append("image", selected);


      console.log("TYPE" ,imagetype )

      const oldfile =
        imagetype === "myImage"
          ? userdata?.about[0]?.myImage
          : userdata?.about[0]?.headImage;

          console.log("OLDDDDDDD" ,oldfile )


      const data = await axios.post(
        `/api/upload/?type=${imagetype}&&oldfile=${oldfile}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }


      );

      console.log("response setttt", data.data,data.data.fileName);

      return data.data.fileName;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout user={user}>
      <Hero user={user} title="About Page" />

      {/* {`${ImageEndpoint}/${myImage}`} */}

   

      <div
        // sm:mx-auto sm:w-full sm:max-w-md
        className="mt-4 

"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* <div className="file-upload">
            <label>Upload Profile Image</label>{" "}
            <input type="file" onChange={handleImageSelect} />
            {selectedImage && (
              <button onClick={() => handleUploadImage("myImage")}>
                Upload to api
              </button>
            )}
          </div>

          {previewImage && (
            <img
              className=" w-24 h-24  rounded-full"
              src={previewImage}
              alt=""
            />
          )} */}

    

          <form className="space-y-6" onSubmit={submitHandler}>
            {/* Name Field */}


            {/* <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Add Your image</div>
            <input
              type="file"
              onChange={handleImageSelect}
              className="hidden"
            />
            {/* <button
          onClick={()=>handleUploadImage("myImage",setSelectedImage ,setMyImage)}
          className=" bg-pink-500 text-white">Upload</button> */}
          {/* </label>  */}


<div className=" flex gap-12  my-12">

{/* {`${ImageEndpoint}/${myImage}`} */}



<div className=" w-[200px] h-[200px] object-cover ">


<h1 className=" mb-2">
Upload your image

</h1>


<div className=" relative">



<img className=" object-cover w-full h-full " src={previewImage ? previewImage : myImage ? `${ImageEndpoint}/${myImage}` : defaultImage  } alt="" />



<label>


<DriveFolderUploadIcon className=" top-2 left-2 rounded-full text-indigo-500 absolute"/>

<input
              type="file"
              onChange={handleImageSelect}
              className="hidden"
            />


</label>
</div>

 
 

 
 



</div>




<div className=" w-[200px] h-[200px] object-cover ">



<h1 className=" mb-2">
Upload header image

</h1>


<div className=" relative">



<img className=" object-cover w-full h-full" src={headpreviewImage ? headpreviewImage : headImage ? `${ImageEndpoint}/${headImage}` : defaultImage  } alt="" />



<label>


<DriveFolderUploadIcon className=" top-2 left-2 rounded-full text-indigo-500 absolute"/>

<input
              type="file"
              onChange={handleHeadImageSelect}
              className="hidden"
            />


</label>
</div>

 
 

 
 



</div>






</div>





     

          {/* <img src={`${ImageEndpoint}/${myImage}`} alt="" /> */}


          {/* {previewImage && (
            <img
              className=" w-24 h-24  rounded-full"
              src={previewImage}
              alt=""
            />
          )}
 */}



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
              value={work}
              setValue={setWork}
              label={"Work"}
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

            {/* ----------colors----- */}

            <div className=" md:flex-row flex flex-col gap-4  max-w-md  ">
              <div className="">
                <h2 className="my-2">Theme Color</h2>

                <SketchPicker
                  // HuePicker
                  color={themeColor}
                  onChangeComplete={handleColorChange}
                />
              </div>

              <div className="mt-6   md:mt-0">
                <h2 className="my-2">Icons Color</h2>

                <SketchPicker
                  // HuePicker
                  color={iconColor}
                  onChangeComplete={handleIconColorChange}
                />
              </div>
            </div>

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
