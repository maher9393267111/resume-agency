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
import { errorHandler } from "../../../src/lib/errorHandler";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomInput from "../../../components/common/customInput";


import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <div>...Loading</div>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};






export default function ProjectsPage({ user, projects }) {
  console.log("projects", projects);

  const [allData, setAllData] = [projects ? projects : []];

  const [open, setOpen] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDesc("");
    setIsEdit(false);
  };

  const handleSelect = (item) => {
    console.log(item);
    setOpen(true);
    setIsEdit(true);
    setTitle(item?.title);
    setDesc(item?.desc);
    setId(item?.id);
  };

  const HandlerAdd = async (e) => {
    e.preventDefault();

    //setLoading(true);

    try {
      if (isedit) {
        const { data } = await axios.patch("/api/projects", {
          title,
          desc,
          id,
        });

        console.log("Edit", data);
        //setAllData(data?.cats);

        setIsEdit(false);
        setDesc("");
        setTitle("");

        router.reload();
      } else {
        const { data } = await axios.post("/api/projects", {
          title,
          desc,
        });

        //  console.log("Add", data?.cats);

        setIsEdit(false);
        setDesc("");
        setTitle("");

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

  const HandleDelete = async (id, e) => {
    e.preventDefault();

    //setLoading(true);

    try {
      const { data } = await axios.delete(`/api/projects?projectId=${id}`);

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
          <div className="sm:flex sm:items-center mt-12">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Projects
              </h1>
              {/* <p className="mt-2 text-sm text-gray-700">
                A list of all Projects
              </p> */}
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                onClick={handleClickOpen}
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Project
                
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
                      Id
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Title
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
                            {project?.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {project?.title}
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
                                onClick={(e) => HandleDelete(project?.id, e)}
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

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            {isedit ? "Edit Project" : "Add Project"}
            Id{id}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the information of the new project
            </DialogContentText>

            <CustomInput
              label="title"
              type="text"
              value={title}
              setValue={setTitle}
            />

            {/* <CustomInput
              label="description"
              type="text"
              value={desc}
              setValue={setDesc}
            /> */}

<div className="w-full mt-4 h-64">
        <QuillNoSSRWrapper
          modules={modules}
          theme="snow"
          className="h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md  border-indigo-600 hover:border-blue-600"
          value={desc}
          setValue={setDesc}
          label={"Description"}
          onChange={setDesc}
        
        />
      </div>


          </DialogContent>
          <DialogActions>
            <Button className="   text-indigo-600" onClick={handleClose}>
              Close
            </Button>
            <Button className="   text-indigo-600" onClick={HandlerAdd}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
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

  const userdata = await prisma.user.findMany({
    where: {
      id: user.id,
    },

    include: {
      projects: {},
    },
  });

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      user,
      userdata: JSON.parse(JSON.stringify(userdata)),
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };


}



catch (e) {
  console.error(e)
  return {
    props: { 
      user:{},
      
      userdata:[],
      projects: [],
     },
  }
}


};
