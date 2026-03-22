import React from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {theme} from "../lib/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <Navbar />
            <div style={{
              margin: "0 auto",
              maxWidth: 1080
            }}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
      </React.Fragment>
  )
}

export default MyApp
