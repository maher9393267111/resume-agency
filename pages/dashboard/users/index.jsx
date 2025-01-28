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

export default function ProjectsPage({ user, projects, usersdata }) {
  console.log("AllUsers", usersdata);

  const [allData, setAllData] = [projects ? projects : []];

  const [open, setOpen] = useState(false);
  const [isedit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

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

  const HandlerAdd = async (userId, status, e) => {
    e.preventDefault();

    //setLoading(true);

    try {
      const { data } = await axios.patch("/api/admin/status", {
        userId,
        status,
      });

      //  console.log("Add", data?.cats);

      setIsEdit(false);
      setDesc("");
      setTitle("");

      router.reload();

      //  setAllData(data?.cats);
      // console.log(allData?.length)

      //  router.replace("/dashboard?ref=signup");
    } catch (error) {
      errorHandler(error);
    }

    // setLoading(false);
  };

  const handleDeleteClick = (userId) => {
    setUserToDelete(userId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    try {
      await HandleDelete(userToDelete);
      setDeleteDialogOpen(false);
      setUserToDelete(null);
      successHandler("User deleted successfully");
      router.reload();
    } catch (error) {
      errorHandler(error?.message);
    }
  };

  const HandleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/admin/status?userid=${id}`);
      setId(null);
      return data;
    } catch (error) {
      throw error;
    }
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
                All Users
              </h1>
              {/* <p className="mt-2 text-sm text-gray-700">
                A list of all Projects
              </p> */}
            </div>
            {/* <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                onClick={handleClickOpen}
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Project
              </button>
            </div> */}
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
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Actions
                      </th>

                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {usersdata?.map((project, index) => {
                      return (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-500 sm:pl-0">
                            {project?.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {project?.role}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Link href={`/profile/${project?.name}`}>
                           
                            {project?.email}
                            </Link>
                          </td>

                          <td
                            className={` cursor-pointer  font-bold whitespace-nowrap px-3 py-4 text-sm  ${
                              project?.status === "accepted"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {project?.status}
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <div className=" gap-2 flex">
                              <p
                                onClick={(e) =>
                                  HandlerAdd(
                                    project?.id,
                                    project?.status === "pending"
                                      ? "accepted"
                                      : project?.status === "rejected"
                                      ? "accepted"
                                      : project?.status === "accepted" &&
                                        "rejected",
                                    e
                                  )
                                }
                                className={
                                

                                    `
                                    ${project?.status === "pending"
                                    ? " bg-green-600 hover:bg-green-800"
                                    : project?.status === "rejected"
                                    ? "bg-green-600 hover:bg-green-800"
                                    : "hover:bg-red-700 bg-red-500"}
                                    text-white py-2 px-4 rounded-lg   cursor-pointer
                                    
                                    
                                    `}
                              >
                                {project?.status === "pending"
                                  ? "accept"
                                  : project?.status === "rejected"
                                  ? "accept"
                                  : "reject"}
                                {/* // ('pending' || 'reject') ? 'accept' :'reject' */}
                              </p>

                              <p
                                onClick={() => handleDeleteClick(project?.id)}
                                className="cursor-pointer py-2 px-4 rounded-lg hover:bg-red-700 bg-red-500 text-white"
                              >
                                Delete
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

            <CustomInput
              label="description"
              type="text"
              value={desc}
              setValue={setDesc}
            />
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

        <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel}>Cancel</Button>
            <Button onClick={handleDeleteConfirm} color="error">
              Delete
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

  const usersdata = await prisma.user.findMany({});

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });

  return {
    props: {
      user,
      usersdata: JSON.parse(JSON.stringify(usersdata)),
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
};
