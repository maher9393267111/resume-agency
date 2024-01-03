import React from "react";

import { getUser } from "../../../src/lib/getUser";
import { DashboardLayout } from "../../../components/dashboardLayout";
import Hero from "../../../components/dashboardLayout/hero";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import PollIcon from "@mui/icons-material/Poll";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { prisma } from "../../../src/lib/prisma";

import Link from "next/link";

import Head from "next/head";
import { Seo } from "../../../src/lib/seo";
import { useRouter } from "next/router";
import axios from "axios";
import { errorHandler, successHandler } from "../../../src/lib/errorHandler";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomInput from "../../../components/common/customInput";
import { defaultImage, ImageEndpoint } from "../../../src/lib/globall";
import ImageIcon from "@mui/icons-material/Image";

export default function SlidersPage({ user, sliders }) {
  console.log("projects", sliders);

  const [allData, setAllData] = [sliders ? sliders : []];

  const [open, setOpen] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [id, setId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDesc("");
    setIsEdit(false);
    setSelectedImage(null);
    setImage("");
  };

  const handleSelect = (item) => {
    console.log(item);
    setOpen(true);
    setIsEdit(true);
    setTitle(item?.title);
    setDesc(item?.desc);
    setImage(item.link);
    setId(item?.id);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the selected image
  };

  const handleUploadImage = async (selected, imagetype) => {
    try {
      const formData = new FormData();
      console.log("selected", selected);
      formData.append("image", selected);

      console.log("TYPE", imagetype);

      const oldfile = image;

      console.log("OLDDDDDDD", oldfile);

      const data = await axios.post(
        `/api/upload/?type=${imagetype}&&oldfile=${oldfile}&&size=${400}`,

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

  const HandlerAdd = async (e) => {
    e.preventDefault();

    //setLoading(true);

    try {
      if (isedit) {


        if (!title && (!selectedImage  || !image ))



        {

          errorHandler("All fields is requeired")
          return
        }



        const { data } = await axios.patch("/api/sliders", {
          title,
          link: selectedImage
            ? await handleUploadImage(selectedImage, "sliderImage")
            : image,
          id,
        });

        successHandler("Slider updated successfully");

        console.log("Edit", data);
        //setAllData(data?.cats);

        setIsEdit(false);
        setDesc("");
        setTitle("");
        setImage("")

        router.reload();
      } else {


        if (!title )

        {

          errorHandler("title field is requeired")
          return
        }

        if (selectedImage ===""  && image === "" )


        {

          errorHandler("image field is requeired")
          return

        }





        console.log(selectedImage , image ,title)


        const { data } = await axios.post("/api/sliders", {
          title,
          link: selectedImage
            ? await handleUploadImage(selectedImage, "sliderImage")
            : image,
        });

          console.log("Add workkk");
        successHandler("Slider added successfully");
        setIsEdit(false);
        setDesc("");
        setTitle("");
        setImage("");

        router.reload();

        //  setAllData(data?.cats);
        // console.log(allData?.length)

        //  router.replace("/dashboard?ref=signup");
      }
    } catch (error) {
      errorHandler(error);
    }

    // setLoading(false);
  };

  const imageDelete = async (ImageName) => {
    try {

    const deleteimageResponse = await axios.post("/api/upload/delete", {
      link: ImageName,
    });

    console.log("deleteImage response-->", deleteimageResponse?.data);


  }

  catch(error){

    errorHandler(error?.message)
  }



  };

  const HandleDelete = async (item, e) => {
    e.preventDefault();

    //setLoading(true);

    // first delete slider image from digitalOCean

    try {
      console.log(item);
      await imageDelete(item?.link);

      const { data } = await axios.delete(`/api/sliders?sliderId=${item?.id}`);

      successHandler("Slider deleted successfully");

      //    console.log("Add", data?.cats);
      // setAllData(data?.cats);

      setId(null);

      router.reload();
    } catch (error) {
      errorHandler(error?.message);
    }

    // setLoading(false);
  };

  return (
    <DashboardLayout user={user}>
      <Seo
        title="Dashboard"
        description="POLLE is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
      />

      <div>
        <Hero user={user} title="Projects Page" />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Projects
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all Sliders
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                onClick={handleClickOpen}
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Slider Image
                {allData?.length}
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Image
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Actions
                      </th>
                      {/* <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th> */}
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {allData?.map((project, index) => {
                      return (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {project?.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {/* {project?.desc} */}

                            <Image
                              width={50}
                              height={50}
                              objectFit="fit"
                              className=""
                              src={`${ImageEndpoint}/${project?.link}`}
                            />
                          </td>
                          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    {project?.themeColor}
  </td>
  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    {project.userId}
  </td> */}
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <div className=" gap-2 flex">
                              <p
                                onClick={() => handleSelect(project)}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                {/* <span className="sr-only">, {person.name}</span> */}
                              </p>

                              <p
                                onClick={(e) => HandleDelete(project, e)}
                                className="text-red-600 hover:text-indigo-900"
                              >
                                Delete
                                {/* <span className="sr-only">, {.name}</span> */}
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* -------Modal----- */}

        <Dialog className=" !min-h-screen" open={open} onClose={handleClose}>
          <DialogTitle>{isedit ? "Edit Slider" : "Add Slider"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the information of the new slider
            </DialogContentText>

            <CustomInput
              label="title"
              type="text"
              value={title}
              setValue={setTitle}
            />

            <div className=" w-[200px] h-[200px] object-cover ">
              <h1 className=" mb-2">Upload your image</h1>

              <div className=" relative">
                <img
                  className=" object-cover w-full h-full "
                  src={
                    previewImage
                      ? previewImage
                      : image
                      ? `${ImageEndpoint}/${image}`
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
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button className="   text-indigo-600" onClick={handleClose}>
              Close
            </Button>
            <Button className="   text-indigo-600" onClick={HandlerAdd}>
              {isedit ?  "Edit" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
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

  const userdata = await prisma.user.findMany({
    where: {
      id: user.id,
    },

    include: {
      slider: {},
    },
  });

  const sliders = await prisma.slider.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      user,
      userdata: JSON.parse(JSON.stringify(userdata)),
      sliders: JSON.parse(JSON.stringify(sliders)),
    },
  };
};
