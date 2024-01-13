"use client";

import Link from "next/link";

// import { SmallLogo } from "./Logo";

import Image from "next/image";
import { useRouter } from "next/router";
import { fetchWord } from "@/src/lib/lang/fetchWord";
import LangSwitcher from "./langSwitcher";
import { UserContext } from "@/src/context";
import { useContext, useState } from "react";
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
  AppBar,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const NavLinks = [
  {
    name: "Home",
    url: "/",
  },

  {
    name: "menu",
    url: "/menu",
  },

  {
    name: "smart cards",
    url: "/smartcard",
  },

  {
    name: "Prices",
    url: "/prices",
  },

  {
    name: "about us",
    url: "/aboutus",
  },

  {
    name: "Contact",
    url: "/contact",
  },
];

const ArNavLinks = [
  {
    name: "الرئسية",
    url: "/",
  },
  {
    name: "المينيو الالكتروني",
    url: "/menu",
  },

  {
    name: "البطاقة الذكية",
    url: "/smartcard",
  },

  {
    name: "الاسعار",
    url: "/prices",
  },
  {
    name: "من نحن ",
    url: "/aboutus",
  },

  {
    name: "اتصل بنا",
    url: "/contact",
  },
];



const Header = ({ user }) => {

  const settingsAr = [
    { title: "الملف الشخصي", link: `/profile/${user?.name}` },
    { title: "لوحة التحكم", link: "/dashboard" },
    { title: "الاعدادات", link: "/dashbord/about" },
  ];
  
  const settingsEn = [
    { title: "profile", link: `/profile/${user?.name}` },
    { title: "Dashboard", link: "/dashboard" },
    { title: "Settings", link: "/dashboard/about" },
  ];




  const [isOpen, setIsOpen] = useState(false);

  const { logoutHandler } = useContext(UserContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { locale, asPath } = useRouter();

  console.log("locale", locale);

  const currentLinks = locale === "ar" ? ArNavLinks : NavLinks;
  const cureentSettings = locale === "ar" ? settingsAr : settingsEn;
  const { dir } = useContext(UserContext);

  return (
    <div dir={dir} className={` englishfont`}>
      <div className="header absolute-center container top-10 z-20">
        <header className="z-50">
          <div className="py-3 px-7 tab-800:px-10 bg-white rounded-[50px] border border-[#00000014] flex justify-between w-full items-center">
            {/* {width > 800 ? <SmallLogo /> : <Logo />} */}
            {/* <Logo /> */}

            <Image
              src="/logo.jpg"
              width={50}
              height={50}
              objectFit="contain"
              alt="POLLE"
              className=" rounded-full"
            />

            <nav className="max-tab-800:hidden">
              <ul className="flex transition-all duration-300 gap-[10px] lg-1150:gap-[30px]">
                {currentLinks?.map(({ name, url }) => (
                  <li key={name}>
                    <Link className="navlink" href={url}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ---user dropdown-- */}
            {user && user?.name ? (
              <div className="max-ta-800:hidden">
                <div>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {cureentSettings.map((setting) => (
                      <Link href={setting.link} key={setting.title}>
                        <MenuItem selected={setting.link === asPath}>
                          <Typography textAlign="center">
                            {setting.title}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                    <MenuItem>
                      <Typography onClick={logoutHandler} textAlign="center">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            ) : (
              <div className="flex max-tab-800:hidden gap-[10px] transition-all duration-300 lg:gap-8 items-center">
                <Link
                  className="text-sm lg-1150:text-base text-blue-100 font-medium"
                  href="/login"
                >
                  {fetchWord("login", locale)}
                </Link>
                <Link
                  className="text-sm lg-1150:text-base font-medium text-white bg-blue-200 py-4 px-8 rounded-3xl"
                  href="/signup"
                >
                  {fetchWord("register", locale)}
                </Link>
              </div>
            )}

            <div className=" flex gap-2 items-center">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="tab-800:hidden cursor-pointer"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      stroke="#1127E3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.332 21.335h21.333M5.332 10.668h21.333H5.332Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                  >
                    <path
                      fill="#1127E3"
                      d="m19.557 17.498 6.27-6.256a1.464 1.464 0 0 0-2.07-2.07l-6.256 6.27-6.257-6.27a1.464 1.464 0 0 0-2.07 2.07l6.27 6.256-6.27 6.256a1.459 1.459 0 0 0 0 2.071 1.46 1.46 0 0 0 2.07 0l6.257-6.27 6.256 6.27a1.46 1.46 0 0 0 2.07 0 1.457 1.457 0 0 0 0-2.07l-6.27-6.257Z"
                    ></path>
                  </svg>
                )}
              </div>

              <div className=" lg:hidde">
                <LangSwitcher />
              </div>
            </div>
          </div>
        </header>
      </div>

      {isOpen ? (
        <nav className="h-screen tab-800:hidden fixed_center z-10 bg-white w-full">
          <ul className="flex-col text-center absolute-center mt-[150px] space-y-7 items-center justify-center top-60 transition-all duration-300 ">
            {currentLinks.map(({ name, url }) => (
              <li onClick={() => setIsOpen(false)} className="" key={name}>
                <Link
                  className="text-lg font-medium text-gray-100 p-1 active:text-blue-100 hover:text-blue-100 transition-all duration-300"
                  href={url}
                >
                  {name}
                </Link>
              </li>
            ))}

            {!user && (
              <div className=" flex flex-col gap-[20px] transition-all duration-300 lg:gap-8 items-center">
                <Link
                  className="text-lg text-blue-100 font-medium"
                  href="/login"
                >
                  {fetchWord("login", locale)}
                </Link>
                <Link
                  className="text-lg font-medium text-white bg-blue-200 py-4 px-8 rounded-3xl"
                  href="/signup"
                >
                  {fetchWord("login", locale)}
                </Link>
              </div>
            )}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
