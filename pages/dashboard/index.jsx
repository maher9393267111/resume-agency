

import { getUser } from "../../src/lib/getUser" ;
import { DashboardLayout } from '../../components/dashboardLayout';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Link as MuiLink,
  Hidden,
} from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import PollIcon from "@mui/icons-material/Poll";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { prisma } from "../../src/lib/prisma";
// import { AnalyticsBox } from "../../components/AnalyticsBox/";
// import { getTotalVotes, getTodayVotes } from "../../utils/votes";
import moment from "moment";
import Link from "next/link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { PollItem } from "../../components/PollItem/";
import Head from "next/head";
import { Seo } from "../../src/lib/seo";
import { useRouter } from "next/router";

const DashboardPage = ({ user, polls }) => {
  const router = useRouter();

  return (
    <DashboardLayout user={user}>
      <Seo
        title="Dashboard"
        description="POLLE is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
      />

      <Box
        sx={{
          backgroundColor: "#C8FACD",
          p: 4,
          borderRadius: "20px",
          mt: 4,
          // maxWidth: "800px",
        }}
        component="section"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} lg={10} sm={8}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: 700, color: "#212b36" }}
            >
              {router.query.ref === "signup"
                ? `Welcome ${user.name}!`
                : `Welcome Back ${user.name}!`}
            </Typography>

            <Typography sx={{ my: 2, color: "#212b36" }}>
              Let start by creating 
            </Typography>


            <Typography sx={{ my: 2, color: "#212b36" }}>
              {user?.status}
            </Typography>


            {/* <Link href="/dashboard/create-poll" passHref>
              <Button
                variant="contained"
                component="a"
                title="Create a Poll"
                color="primary"
                endIcon={<AddIcon />}
              >
                Create a Poll
              </Button>
            </Link> */}
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} lg={2} sm={4}>
              <Image
                src="/dashboard.webp"
                width={400}
                height={400}
                objectFit="contain"
                alt="Create a new Poll!"
              />
            </Grid>
          </Hidden>
        </Grid>
      

    
      </Box>



    </DashboardLayout>
  );
};

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
      projects: {
     
      },

    },
  });

  return {
    props: {
      user,
      userdata: JSON.parse(JSON.stringify(userdata)),
    },
  };
};

export default DashboardPage;