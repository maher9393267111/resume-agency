

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

import { errorHandler, successHandler } from "../../../src/lib/errorHandler";
import axios from "axios";
import { prisma } from "../../../src/lib/prisma";
import { HuePicker, SketchPicker } from "react-color";
import {
  ImageEndpoint,
  defaultImage,
  uploadApi,
} from "../../../src/lib/globall";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import { MuiColorInput } from "mui-color-input";
import MarkdownInput from "../../../components/dashboardLayout/markdown";
//  import { Upload } from "antd";


 import dynamic from "next/dynamic";

const Upload = dynamic(() => import("antd").then((mod) => mod.Upload));

function AboutPage({ user, userdata }) {
  console.log("userPrisma", userdata);

  const router = useRouter();

  const [temp, setTemp] = useState(userdata?.about[0]?.temp || 1);
  console.log("TEMPssss----->", userdata, userdata?.about[0]);
  const [title, setTitle] = useState(userdata?.about[0]?.title || "");
  const [desc, setDesc] = useState(userdata?.about[0]?.desc || "");
  const [pdf, setPdf] = useState(userdata?.about[0]?.pdf || "");
  const [link, setLink] = useState(userdata?.about[0]?.link || "");
  const [link2, setLink2] = useState(userdata?.about[0]?.link2 || "");
  const [email, setEmail] = useState(userdata?.about[0]?.email || "");
  const [work, setWork] = useState(userdata?.about[0]?.work || "");
  const [phone, setPhone] = useState(userdata?.about[0]?.phone || "");
  const [location, setLocation] = useState(userdata?.about[0]?.location || "");
  const [video, setVideo] = useState(userdata?.about[0]?.video || "");

  //userdata?.about[0]?.images || ["one" ,"two"]
  const [images, setImages] = useState(userdata?.about[0]?.images || []);
  const [files, setFiles] = useState([]);

  const [whatsapp, setWhatsapp] = useState(userdata?.about[0]?.whatsapp || "");
  const [telgram, setTelgram] = useState(userdata?.about[0]?.telgram || "");
  const [instagram, setInstagram] = useState(
    userdata?.about[0]?.instagram || ""
  );
  const [myImage, setMyImage] = useState(userdata?.about[0]?.myImage || "");
  const [headImage, setheadImage] = useState(
    userdata?.about[0]?.headImage || ""
  );

  //BG IMAGE
  const [bgImage, setBgImage] = useState(userdata?.about[0]?.bgImage || "");
  const [bgpreviewImage, setBgPreviewImage] = useState(null);

  const [bgSelectedImage, setBgSelectedImage] = useState(null);

  const [twitter, setTwitter] = useState(userdata?.about[0]?.twitter || "");
  const [facebook, setFacebook] = useState(userdata?.about[0]?.facebook || "");
  const [themeColor, setThemeColor] = useState(
    userdata?.about[0]?.themeColor || ""
  );
  const [iconColor, setIconColor] = useState(
    userdata?.about[0]?.iconColor || ""
  );
  const [textColor, setTextColor] = useState(
    userdata?.about[0]?.textColor || ""
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

  // handleTextolorChange

  const handleTextolorChange = (newColor) => {
    setTextColor(newColor.hex);
  };

  const handleTempChange = (selectedTemp) => {
    setTemp(selectedTemp);
  };

  // In your front-end code
  const handleDelete = async (filesToDelete) => {
    try {
      const res = await axios.post(`${uploadApi}/file/delets`,  {filesToDelete} );
      console.log("Files deleted successfully", res);
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };

  const handleUploadImages = async (filesarray) => {
    try {
      const formData = new FormData();
      filesarray.forEach((image) => {
        formData.append("images", image);
      });
  
      //?size=${(size = 1200)}&&hieghtsize=${(hieghtSize = 1000)}
      const response = await axios.post(
        `${uploadApi}/file/uploads`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Files Uplaoded successfully", response.data);
  
      return response.data;
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };



  const submitHandler = async (e) => {
    console.log("values-->");

    e.preventDefault();
    try {
      // delete images
      const imagesToDelete = userdata?.about[0]?.images.filter(
        (image) => !images.includes(image)
      );
      if (imagesToDelete?.length > 0){
      await handleDelete(imagesToDelete)}


      let uploadResponse = null
      if (files?.length > 0){
       uploadResponse = await handleUploadImages(files);
      }

       const newImagesUploaded =  uploadResponse?.files || [] ;
    //  const newImagesUploaded =files?.length > 0  ?  uploadResponse?.files : [] ;
      console.log("REIMAGES---->" ,newImagesUploaded )
      const imagedata = [...images, ...newImagesUploaded];


      console.log(textColor, "????????");
      const res = await axios.post("/api/about", {
        images: imagedata,
        temp,
        title,
        desc,
        whatsapp,
        telgram,
        instagram,
        twitter,
        pdf,
        link,
        link2,
        email,
        facebook,
        themeColor,
        iconColor,
        textColor,
        work,
        phone,
        location,
        video,
        myImage: selectedImage
          ? await handleUploadImage(selectedImage, "myImage")
          : myImage,
        headImage: headSelectedImage
          ? await handleUploadImage(headSelectedImage, "headImage")
          : headImage,
        bgImage: bgSelectedImage
          ? await handleUploadImage(bgSelectedImage, "bgImage")
          : bgImage,
      });

      console.log("AboutResponse Data", res);

    //  router.reload();

      successHandler("Updated Successfully");
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

  const handleBgImageSelect = (e) => {
    const file = e.target.files[0];
    setBgSelectedImage(file);
    setBgPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleResetMyImage = () => {
    setSelectedImage("");
    setPreviewImage("");
    setMyImage("");
  };

  const handleUploadImage = async (selected, imagetype, collection) => {
    try {
      const formData = new FormData();
      console.log("selected", selected);
      formData.append("image", selected);

      console.log("TYPE", imagetype);

      const oldfile =
        imagetype === "myImage"
          ? userdata?.about[0]?.myImage
          : imagetype === "bgImage"
          ? userdata?.about[0]?.bgImage
          : userdata?.about[0]?.headImage;

      const size =
        imagetype === "myImage" ? 200 : imagetype === "bgImage" ? 1000 : 900;
      const hieghtSize =
        imagetype === "myImage" ? 200 : imagetype === "bgImage" ? 700 : 900;

      console.log("HEIGHTHH", hieghtSize);

      console.log("OLDDDDDDD", oldfile);

      // const data = await axios.post(
      //   `/api/upload/?type=${imagetype}&&oldfile=${oldfile}&&size=${size}&&hieghtsize=${hieghtSize}`,

      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      //localhost:8000/file/upload

      const data = await axios.post(
        `${uploadApi}/file/upload?type=${imagetype}&&oldfile=${oldfile}&&size=${size}&&hieghtsize=${hieghtSize}`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("response setttt", data.data, data.data.fileName);

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
    
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <div>
                <Upload
                  accept="image/*"
                  multiple
                  beforeUpload={(file) => {
                    setFiles((prev) => [...prev, file]);
                    return false;
                  }}
                  listType="picture-card"
                  onRemove={(file) => {
                    console.log("fileDATA", file);
                    setFiles((prev) => {
                      const index = prev.indexOf(file);
                      const newFileList = prev.slice();
                      newFileList.splice(index, 1);
                      return newFileList;
                    });

                    console.log("files", files);
                  }}
                >
                  Upload Images {files?.length}
                </Upload>
              </div>

              <div className="flex flex-wrap gap-3 mt-2 ">
                {images?.map((data, index) => (
                  <div key={index}>
                    <img src={`${ImageEndpoint}/${data}`} className="w-20 h-20 rounded-full " />
                    <h1
                      onClick={() => {
                        // prev all previous images
                        setImages((prev) => {
                          // all images put into new array
                          const temp = [...prev];
                          // delete  image with clicked index
                          temp.splice(index, 1);
                          // return this new array after delete clicked image
                          return temp;
                        });
                      }}
                      className="text-center cursor-pointer text-red-600"
                    >
                      remove
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex gap-12  my-12">
              {/* {`${ImageEndpoint}/${myImage}`} */}

              <div className=" w-[200px] h-[200px] object-cover ">
                <h1 className=" mb-2 text-sm md:text-lg">user</h1>

                <div className=" relative">
                  <img
                    className=" object-cover w-full h-full "
                    src={
                      previewImage
                        ? previewImage
                        : myImage
                        ? `${ImageEndpoint}/${myImage}`
                        : defaultImage
                    }
                    alt=""
                  />

                  <label>
                    <ImageIcon className=" top-2 left-2 rounded-full text-indigo-500 absolute" />

                    <input
                      type="file"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                  </label>
                  {/* <div>
                    <DeleteIcon className=" top-2 right-2 rounded-full text-indigo-500 absolute" />
                  </div> */}
                </div>
              </div>

              <div className=" w-[200px] h-[200px] object-cover ">
                <h1 className=" mb-2 text-sm md:text-lg">header </h1>

                <div className=" relative">
                  <img
                    className=" object-cover w-full h-full"
                    src={
                      headpreviewImage
                        ? headpreviewImage
                        : headImage
                        ? `${ImageEndpoint}/${headImage}`
                        : defaultImage
                    }
                    alt=""
                  />

                  <label>
                    <ImageIcon className=" top-2 left-2 rounded-full text-indigo-500 absolute" />

                    <input
                      type="file"
                      onChange={handleHeadImageSelect}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className=" w-[200px] h-[200px] object-cover ">
                <h1 className=" mb-2 text-sm md:text-lg">back </h1>

                <div className=" relative">
                  <img
                    className=" object-cover w-full h-full"
                    src={
                      bgpreviewImage
                        ? bgpreviewImage
                        : bgImage
                        ? `${ImageEndpoint}/${bgImage}`
                        : defaultImage
                    }
                    alt=""
                  />

                  <label>
                    <ImageIcon className=" top-2 left-2 rounded-full text-indigo-500 absolute" />

                    <input
                      type="file"
                      onChange={handleBgImageSelect}
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
              label={"Name"}
              type={"text"}
            />

            {/* <CustomInput
              value={desc}
              setValue={setDesc}
              label={"Description"}
              type={"text"}
            /> */}

            {/* <div className="w-full h-64">
        <QuillNoSSRWrapper
          modules={modules}
          theme="snow"
          className="h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md    border-indigo-500 hover:border-blue-600"
          value={desc}
          // setValue={setDesc}
          label={"Description"}
          onChange={setDesc}
        
        />
      </div> */}

            <MarkdownInput desc={desc} setDesc={setDesc} />

            <CustomInput
              value={work}
              setValue={setWork}
              label={"Work"}
              type={"text"}
            />

            <CustomInput
              value={link}
              setValue={setLink}
              label={"Site Link"}
              type={"text"}
            />

            <CustomInput
              value={link2}
              setValue={setLink2}
              label={"Site Link 2"}
              type={"text"}
            />

            <CustomInput
              value={email}
              setValue={setEmail}
              label={"Email"}
              type={"text"}
            />

            <CustomInput
              value={location}
              setValue={setLocation}
              label={"Location"}
              type={"text"}
            />

            <CustomInput
              value={phone}
              setValue={setPhone}
              label={"Phone Number"}
              type={"text"}
            />

            <CustomInput
              value={video}
              setValue={setVideo}
              label={"Video Link"}
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

            <div className="mx-auto w-full md:flex-row flex flex-col gap-12 justify-center  max-w-md  ">
              <div className=" mx-auto ">
                <h2
                  className={`my-2  text-center  ${
                    temp === 1 && "text-red-500 font-semibold"
                  }`}
                >
                  Dark{" "}
                </h2>

                <h1
                  onClick={() => handleTempChange(1)}
                  className=" w-[90px] h-[90px] rounded-full  bg-temp1-coverbg"
                ></h1>

                {/* <SketchPicker
                  color={themeColor}
                  onChangeComplete={handleColorChange}
                /> */}

                {/* <MuiColorInput
                  value={themeColor}
                  onChange={handleColorChange}
                /> */}
              </div>

              <div className="mt-6 mx-auto  md:mt-0">
                <h2
                  className={`my-2 text-center  ${
                    temp === 2 && "text-red-500 font-semibold"
                  }`}
                >
                  Black{" "}
                </h2>
                <h1
                  onClick={() => handleTempChange(2)}
                  className=" w-[90px] h-[90px] rounded-full mx-auto  bg-temp2-coverbg"
                ></h1>

                {/* <MuiColorInput
                  value={iconColor}
                  onChange={handleIconColorChange}
                /> */}

                {/* <SketchPicker
                  // HuePicker
                  color={iconColor}
                  onChangeComplete={handleIconColorChange}
                /> */}
              </div>

              <div className="mt-6 mx-auto   md:mt-0">
                <h2
                  className={`my-2 text-center ${
                    temp === 3 && "text-red-500 font-semibold"
                  }`}
                >
                  Blue
                </h2>

                <h1
                  onClick={() => handleTempChange(3)}
                  className=" w-[90px] h-[90px] rounded-full mx-auto   bg-temp3-icon_color"
                ></h1>

                {/* {textColor}
                <MuiColorInput
                  value={textColor}
                  onChange={handleTextolorChange}
                /> */}

                {/* <SketchPicker
                  // HuePicker
                  color={textColor}
                  onChangeComplete={handleTextolorChange}
                /> */}
              </div>

              <div className="mt-6 mx-auto  md:mt-0">
                <h2
                  className={`my-2 text-center  ${
                    temp === 4 && "text-red-500 font-semibold"
                  }`}
                >
                  Red{" "}
                </h2>

                <h1
                  onClick={() => handleTempChange(4)}
                  className=" w-[90px] h-[90px] rounded-full mx-auto    bg-temp4-icon_color"
                ></h1>
              </div>

              {/* #ccae32 */}

              <div className="mt-6 mx-auto  md:mt-0">
                <h2
                  className={`my-2 text-center  ${
                    temp === 5 && "text-red-500 font-semibold"
                  }`}
                >
                  Golden{" "}
                </h2>

                <h1
                  onClick={() => handleTempChange(5)}
                  className=" w-[90px] h-[90px] rounded-full mx-auto   bg-temp5-icon_color"
                ></h1>
              </div>
            </div>

            {/* -------ContactColor--- */}
            <div className="my-4 mx-auto w-1/2 md:w-full   p-2">
              <h1 className="py-4  "> Contact text color </h1>
              <SketchPicker
                // HuePicker
                color={textColor}
                onChangeComplete={handleTextolorChange}
              />
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
  try {
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
  } catch (e) {
    console.error(e);
    return {
      props: {
        user: {},
        userdata: [],
      },
    };
  }
};

export default AboutPage;
