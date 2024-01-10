import {
    Button,
    CircularProgress,
    Container,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState ,useEffect } from "react";
  import axios from "axios";
  import { errorHandler ,successHandler } from "../src/lib/errorHandler";
  import { getUser } from "../src/lib/getUser";
  import { useRouter } from "next/router";
  import Head from "next/head";
 
import { AiOutlineLoading } from 'react-icons/ai';

import {
  LockClosedIcon,
  MailIcon,
  DotsCircleHorizontalIcon,
  UserCircleIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  XIcon,
} from '@heroicons/react/outline';
 
 
  import Link from "next/link";
  import { Seo } from "../src/lib/seo";

  
  const SignupPage = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
    });
  
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
  
    const [username, setUsername] = useState('');
    const [usernameLoading, setUsernameLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);
  
    const [modalOpen, setModalOpen] = useState(false);
  
    const { name, email, password } = user;


    const handleChange = (e) => {
      setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };


    useEffect(() => {
      const isUser = Object.values({ name, email, password }).every((item) =>
        Boolean(item)
      );
      isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
    }, [user]);
  


  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setLoading(true);
  
      try {
        const { data } = await axios.post("/api/auth/signup", {
          name,
          email,
          password,
        });

        console.log("Response")

        router.replace("/dashboard?ref=signup");
      } catch (error) {
        errorHandler(error);
      }
  
      setLoading(false);
    };
  



    return (
    //   <HomeLayout user={null}>

        <Container maxWidth="xl">
          <Seo
            title="Signup - Polle"
            description="POLLE is the easiest and fastest way to create, distribute and analyze your polls, from start to finish!"
          />
  
          {/* <Typography
            component="h1"
            variant="h3"
            align="center"
            sx={{ fontWeight: 700, mt: 4 }}
          >
            SignUp
          </Typography>
  
          <Paper
            component="form"
            onSubmit={signupHandler}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "600px",
              mx: "auto",
              p: 3,
              mt: 4,
            }}
          >
            <TextField
              type="text"
              label="Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
  
            <TextField
              type="email"
              label="Email"
              required
              sx={{ my: 3 }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
  
            <TextField
              type="password"
              label="Password"
              required
              sx={{ mb: 3 }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
  
            <Button 
             sx={{ mt: 2  ,backgroundColor:"primary.main"}}
            
            type="submit" disabled={loading}>
              Signup {loading && <CircularProgress size={25} />}
            </Button>
          </Paper>
  
          <Typography align="center" sx={{ mt: 2  ,color:"primary.main"}}>
            Already have an account?{" "}
            <Link href="/signup">
              Login!
            </Link>
          </Typography> */}


<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Driwwwle
          </h2>
          <p className="text-center text-pink-600 mt-2 mb-6 font-semibold text-md">
            We're thrilled to have you onboard
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircleIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {usernameLoading || username === '' ? (
                    <DotsCircleHorizontalIcon
                      className={`h-5 w-5 text-gray-400 ${
                        usernameLoading && 'animate-spin'
                      }`}
                      aria-hidden="true"
                    />
                  ) : username !== '' && usernameAvailable ? (
                    <CheckIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <XIcon className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={`focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                    username !== '' && !usernameAvailable ? 'bg-red-100' : ''
                  }`}
                  placeholder="something_legendary"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (usernameRegex.test(e.target.value)) {
                      setUsernameAvailable(true);
                    } else {
                      setUsernameAvailable(false);
                    }
                  }}
                />
              </div>
              {username !== '' && !usernameLoading && !usernameAvailable && (
                <small className="text-xs text-red-600">
                  This username is invalid or not available
                </small>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={password}
                  onChange={handleChange}
                  placeholder="Must be atleast 6 characters"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/login" className="font-medium text-pink-600 hover:text-pink-500">
                
                  Already have an account?
                
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitDisabled}
            >
              {formLoading && (
                <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                  <AiOutlineLoading
                    className="h-5 w-5 text-gray-100 animate-spin"
                    aria-hidden="true"
                  />
                </span>
              )}
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* <EmailConfirmModal open={modalOpen} setOpen={setModalOpen} /> */}
    </div>









        </Container>


    //   </HomeLayout>
    );
  };
  
  export const getServerSideProps = async ({ req, res }) => {
    const user = await getUser(req, res);
  
    if (user) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
    }
    return {
      props: {},
    };
  };
  
  export default SignupPage;
  