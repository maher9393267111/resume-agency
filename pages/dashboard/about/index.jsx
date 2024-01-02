import React from "react";
import Hero from "../../../components/dashboardLayout/hero";
import { DashboardLayout } from "../../../components/dashboardLayout";
import { getUser } from "../../../src/lib/getUser";
 import AboutForm from "../../../components/aboutMain/aboutForm";

import { errorHandler } from "../../../src/lib/errorHandler";
import axios from 'axios'
function AboutPage({ user }) {
  console.log("userPrisma");



  const onFinish = async (values) => {
    console.log("values-->", values);
    //console.log("filess", file);

   
  
    //setLoading(true);

    try {
      const { data } = await axios.post("/api/about", {
       values
      });

      console.log("AboutResponse Data" , data)
     // router.replace("/dashboard");
    } catch (error) {
      errorHandler(error);
    }

   // setLoading(false);



  
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
          {/* is:{userdata.projects?.length} */}
          <AboutForm onFinish={onFinish} />
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

  // const userdata = await prisma.user.findUnique({
  //   where: {
  //     id: user.id,
  //   },

  //   include: {
  //   //about
  //   },
  // });

  return {
    props: {
      user,
      //  userdata: JSON.parse(JSON.stringify(userdata)),
    },
  };
};


export default AboutPage;