import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "styles/global.css";

const theme = createTheme();

export default function TodosApp({ Component, pageProps }) {
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
            <Typography variant="body2" align="center" sx={{ padding: "1rem .75rem" }}>
              Made with{" "}
              <code style={{ color: theme.palette.error.main, fontWeight: theme.typography.fontWeightBold }}>love</code>{" "}
              by Răzvan Sbîngu
            </Typography>
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
