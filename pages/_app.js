import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Grid, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "styles/global.css";

const theme = createTheme();

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
          <Box sx={{ minHeight: "100vh", display: "grid", gridTemplateRows: "auto 1fr auto", gap: ".5rem" }}>
            <header>
              <Typography variant="h1" align="center">
                A boring notes taking app
              </Typography>
            </header>
            <main>
              <Component {...pageProps} />
            </main>
            <Grid
              container
              direction="column"
              component="footer"
              justifyContent="center"
              align="center"
              gap=".75rem"
              style={{ padding: "1rem .75rem" }}
            >
              <Grid item>
                <Typography variant="body2">
                  Made with <code>love</code> by Răzvan Sbîngu
                </Typography>
              </Grid>
              <Grid item>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{" "}
                  <Typography component="span">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export async function getInitialProps(appContext) {
  return {
    ...(await App.getInitialProps(appContext)),
  };
}
