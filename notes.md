prisma

npm run update ----> THENNN  npx prisma generate  
npx prisma migrate dev  ---> {update prisma schema} ---> then terminate terminal down and run
--> { npm run generate} : {npx prisma generate}  for client schema side

mainColor = #00AB55

---------


pdf link

https://my-website-a-eiber.vercel.app/assets/Alec_Eiber_Resume.pdf
https://my-website-a-eiber.vercel.app/#contact
https://github.com/a-eiber/portfolio/blob/b62efb6c9076c29c2c538a42d84d030e5ff7e8fc/components/Contact.jsx#L2
------------



export default async (req, res) => {
//   let { name, email, password } = req.body;

//   if (req.method === "POST") {
//     name = name.trim();
//     email = email.trim();

//     if (!name.length)
//       return res.status(422).json({ message: "Enter your name!" });

//     if (!EMAIL_REGEX.test(email))
//       return res.status(422).json({ message: "Invalid email!" });

//     if (password.length < 6 || password.length > 32)
//       return res
//         .status(422)
//         .json({ message: "Password be 6 - 32 characters long!" });





//     const userExist = await prisma.user.findUnique({ where: { email } });

//     if (userExist)
//       return res.status(422).json({ message: "Email already in use!" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     });

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     setCookie("token", token, {
//       req,
//       res,
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//       path: "/",
//     });

//     res.status(201).json(user);
//   } else {
//     res.status(424).json({ message: "Invalid method!" });
//   }
// };


-------------

        {/* <div>
<Hidden mdDown>


<Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>



          <Button color="inherit">Login</Button>




        {/* </Toolbar> */}
      {/* </AppBar>
    </Box>
    </Hidden>

</div> */} */}


-----------

       <div>
<Hidden mdDown>


<Box className=' '  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      
      <div className=" flex justify-between  my-4 mx-4">

     


      <div>
Dashboard
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
              <MenuItem onClick={signOut}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>



</div>


</div>


      </AppBar>



      </Box>

      </Hidden>
</div>

--------------

  const { locale, asPath } = useRouter()

  console.log("locale" ,locale)
  const {dir} = useContext(UserContext)




{locale}
{/* <LangSwitcher/> */}


<div className={`${locale ==='ar' && 'arabicfont'}`}> 

{fetchWord('company', locale)}

</div>


    dir={dir}

    ---------------------------
    text title
    text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px]

    ----------
    