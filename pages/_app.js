import App from "next/app";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "components/Layout";

import "styles/global.css";

const theme = createTheme();

function TodosApp({ Component, pageProps }) {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

// Initialize LaunchDarkly
export default withLDProvider({
  clientSideID: "617ff920075461209fea0de0",
  user: {
    key: null,
    anonymous: true,
  },
})(TodosApp);

export async function getInitialProps(appContext) {
  return {
    ...(await App.getInitialProps(appContext)),
  };
}
