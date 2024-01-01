import '@/styles/globals.css'
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "react-notifications/lib/notifications.css";
import { useState ,useEffect } from 'react';
const clientSideEmotionCache = createEmotionCache();


const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isSSR, setIsSSR] = useState(true);

useEffect(() => {
	setIsSSR(false);

}, []);



  return (


    <>
    
    {!isSSR && 
  


    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

      
            <Component {...pageProps} />





      </ThemeProvider>

    
    </CacheProvider>

    }
    
</>


  );
};

export default App;
