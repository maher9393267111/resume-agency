import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
  Hidden,
Toolbar,

AppBar


} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import classes from "./style.module.scss";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeCookies } from "cookies-next";
import BarChartIcon from "@mui/icons-material/BarChart";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Image from "next/image";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { UserContext } from "../../src/context";
import { useContext } from "react";
import {useState ,useEffect} from 'react'


import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'






export const DashboardLayout = ({ children, user }) => {
  const router = useRouter();
  const { logoutHandler } = useContext(UserContext);

  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { title: 'Home', link: '/' },
    { title: 'Features', link: '/#features' },
    { title: 'Pricing', link: '/#pricing' },
  ]
  const settings = [
    { title: 'Dashboard', link: '/app/dashboard' },
    { title: 'Settings', link: '/app/settings' },
  ]
  const signIn = [
    { title: 'Sign-up', link: '/sign-up' },
    { title: 'Login', link: '/login' },
  ]




  return (
    <>
      <Grid container sx={{ mb: "15px" }}>
        <Hidden mdDown>
          <Grid
            item
            sx={{
              width: { sm: "200px", md: "250px" },
              // height:"100vh" ,overflowY:"scroll"
            }}
          >
            <Paper
              sx={{ minHeight: "100vh", px: 2, position: "sticky", top: 0 }}
            >
              <Box display="flex" justifyContent="center" mt={3}>
                <Image
                  src="/logo.jpg"
                  width={55}
                  height={55}
                  objectFit="contain"
                  alt="POLLE"
                  className=" rounded-full"
                />

                {/* <img src="/logo.jpg" className=" w-24 object-fill h-24" alt="" /> */}
              </Box>

              <Typography
                component="h3"
                variant="h6"
                sx={{ fontWeight: 500, pt: 3, mt: 2 }}
              >
                Welcome {user.name}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <nav className={classes.nav}>
                <Link
                  href="/dashboard"
                  title="dashboard"
                  className={
                    router.pathname === "/dashboard" ? classes.activeLink : null
                  }
                >
                  <DashboardIcon />
                  Dashboard
                </Link>


                <Link
                  href="/dashboard/about"
                  title="Manage About"
                  className={
                    router.pathname === "/dashboard/about"
                      ? classes.activeLink
                      : null
                  }
                >
                  <HowToVoteIcon />
                  About ME
                </Link>



                {/* <Link
                  href="/dashboard/projects/create-project"
                  title="Create a Project"
                  className={
                    router.pathname === "/dashboard/projects/create-project"
                      ? classes.activeLink
                      : null
                  }
                >
                  <AddBoxIcon />
                  New Project
                </Link> */}

                <Link
                  href="/dashboard/projects"
                  title="Manage Project"
                  className={
                    router.pathname === "/dashboard/projects"
                      ? classes.activeLink
                      : null
                  }
                >
                  {/* <HowToVoteIcon /> */}
                  <AddBoxIcon />
                  Projects
                </Link>


                <Link
                  href="/dashboard/sliders"
                  title="Manage Project"
                  className={
                    router.pathname === "/dashboard/sliders"
                      ? classes.activeLink
                      : null
                  }
                >
                  {/* <HowToVoteIcon /> */}
                  <AddBoxIcon />
                  Sliders
                </Link>






                {/* <Link
                  href="/dashboard/skills"
                  title="Manage Skills"
                  className={
                    router.pathname === "/dashboard/skills"
                      ? classes.activeLink
                      : null
                  }
                >
                
                  <AddBoxIcon />
                  Skills
                </Link> */}



                {/* <Link
                  href="/dashboard/skills/create-skill"
                  title="Create a Project"
                  className={
                    router.pathname === "/dashboard/skills/create-skill"
                      ? classes.activeLink
                      : null
                  }
                >
                  <AddBoxIcon />
                  New Skill
                </Link> */}

            
           

                {/* <Link
                  href="/dashboard/links"
                  title="Manage Links"
                  className={
                    router.pathname === "/dashboard/links"
                      ? classes.activeLink
                      : null
                  }
                >
                  <HowToVoteIcon />
                  Links
                </Link> */}



           

                {/*   
                  <Link
                           title="View Analytics"
                           className={
                             router.pathname.includes("/dashboard/analytics")
                               ? classes.activeLink
                               : null
                           }
                  
                  href="/dashboard/analytics">
                   
                      <BarChartIcon />
                      Analytics
                   
                  </Link> */}

                <Button onClick={logoutHandler}>
                  <LogoutIcon /> Logout
                </Button>
              </nav>
            </Paper>



            
          </Grid>
        </Hidden>

        <Grid item xs>
          <Hidden mdUp>
            <Navbar user={user} />
          </Hidden>
          <Container sx={{ mb: 5, minHeight: "100vh" }}>


          <div>
<Hidden mdDown>


<Box className=' '  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      
      <div className=" flex justify-between  my-4 mx-4">

     


      <div className=" flex items-center">
<p>
  Dashboard
</p>
      </div>

<div>
  

<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >



              {settings.map((setting) => (
                <Link href={setting.link} key={setting.title}>
                  <MenuItem selected={setting.link === router.asPath}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <MenuItem >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>



</div>


</div>


      </AppBar>



      </Box>

      </Hidden>
</div>

  


  





            {children}
            
            
            
            </Container>

          
        </Grid>
      </Grid>
    </>
  );
};
