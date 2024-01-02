import React from "react";

import { getUser } from "../../src/lib/getUser";
import { DashboardLayout } from "../../../components/dashboardLayout";

import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import PollIcon from "@mui/icons-material/Poll";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { prisma } from "../../../src/lib/prisma";

import Link from "next/link";

import Head from "next/head";
import { Seo } from "../../../src/lib/seo";
import { useRouter } from "next/router";
export default function CreateProjectPage() {
  return (
    <DashboardLayout user={user}>
      <Seo
        title="Dashboard"
        description="POLLE is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
      />

      <div></div>
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
      projects: {},
    },
  });

  return {
    props: {
      user,
      userdata: JSON.parse(JSON.stringify(userdata)),
    },
  };
};
