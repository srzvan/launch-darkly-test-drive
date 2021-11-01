import Head from "next/head";
import { Typography } from "@mui/material";

export default function Index() {
  return (
    <>
      <Head>
        <title>LaunchDarkly test-drive 🏎</title>
        <meta name="description" content="LaunchDarkly test-drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography>Testing 1, 2, 3...</Typography>
    </>
  );
}
