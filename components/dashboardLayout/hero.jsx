import React from 'react'




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
import Link from 'next/link'


export default function Hero({title ,user}) {
  return (
    

        
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
              {/* {router.query.ref === "signup"
                ? `Welcome 
                ${user?.name}
                !`
                : `Welcome Back ${user?.name}!`} */}
welcome

            </Typography>

            <Typography sx={{ my: 2, color: "#212b36" }}>
              Let start by creating 
            </Typography>

            <Link href="/dashboard/create-poll" passHref>
              <Button
                variant="contained"
                component="a"
                title="Create a Poll"
                color="primary"
                endIcon={<AddIcon />}
              >
                {/* Create a Poll */}
                {title}
              </Button>
            </Link>
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








  )
}
