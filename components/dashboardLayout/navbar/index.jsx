import {
    Drawer,
    IconButton,
    Paper,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
  } from "@mui/material";
  import Image from "next/image";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useContext, useState } from "react";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import BarChartIcon from "@mui/icons-material/BarChart";
  import HowToVoteIcon from "@mui/icons-material/HowToVote";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import AddBoxIcon from "@mui/icons-material/AddBox";
  import classes from "./style.module.scss";
   import { UserContext } from "../../../src/context/index";
  import LogoutIcon from "@mui/icons-material/Logout";
  import LockOpenIcon from "@mui/icons-material/LockOpen";
  import HomeIcon from "@mui/icons-material/Home";
  
  export const Navbar = ({ user }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
     const { logoutHandler } = useContext(UserContext);
  
    const closeDrawer = () => setOpen(false);
    const openDrawer = () => setOpen(true);
  
    return (
      <Paper sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
        <Image
          src="/logo.jpg"
          width={40}
          height={40}
          objectFit="contain"
          alt="POLLE"
          className=" rounded-full"
        />
  
        <IconButton onClick={openDrawer}>
          <MenuIcon />
        </IconButton>
  
        <Drawer anchor="left" open={open} onClose={closeDrawer}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          >
            {user ? (
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/dashboard")}>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>



                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/about")}
                  >
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="AboutMe" />
                  </ListItemButton>
                </ListItem>
  






  
                {/* <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/projects/create-project")}
                  >
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Project" />
                  </ListItemButton>
                </ListItem> */}
  
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/dashboard/projects")}>
                    <ListItemIcon>
                      {/* <HowToVoteIcon /> */}
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                  </ListItemButton>
                </ListItem>
  
                {/* <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/skills/create-skill")}
                  >
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Skill" />
                  </ListItemButton>
                </ListItem> */}
  

                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/skills")}
                  >
                    <ListItemIcon>
                      {/* <BarChartIcon /> */}
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Skills" />
                  </ListItemButton>
                </ListItem>
  


            
  

  
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/sliders")}
                  >
                    <ListItemIcon>
                    <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Sliders" />
                  </ListItemButton>
                </ListItem>
  
{/* 
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => router.push("/dashboard/links")}
                  >
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Links" />
                  </ListItemButton>
                </ListItem>
   */}








                <ListItem disablePadding>
                  <ListItemButton 
                   onClick={logoutHandler}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            ) : (
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/")}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
  
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/login")}>
                    <ListItemIcon>
                      <LockOpenIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
  
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/signup")}>
                    <ListItemIcon>
                      <LockOpenIcon />
                    </ListItemIcon>
                    <ListItemText primary="Signup" />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Box>
        </Drawer>
      </Paper>
    );
  };
  