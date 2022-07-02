import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../app/Layout';
import '../app/theme/fonts/index.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
