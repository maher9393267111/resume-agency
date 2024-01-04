import {
    Button,
    CircularProgress,
    Container,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import axios from "axios";
  import { errorHandler } from "../src/lib/errorHandler";
  import { getUser } from "../src/lib/getUser";
  import { useRouter } from "next/router";
  import Head from "next/head";
 
 
  import Link from "next/link";
  import { Seo } from "../src/lib/seo";

  
  const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
  
    const signupHandler = async (e) => {
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
  
          <Typography
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
          </Typography>
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
  