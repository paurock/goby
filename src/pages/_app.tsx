import type { AppProps } from "next/app";
import React, { FC } from "react";
import Layout from "../app/Layout";

function MyApp({ Component, pageProps }: AppProps):JSX.Element  {
  return (
    <Layout>
      <Component {...pageProps}  />
    </Layout>
  );
}

export default MyApp;
