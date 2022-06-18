import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';

const colors = {
  purple: '#6334B1',
  green: '#28FF98',
  lightBlue: '#CECFEA',
};
const styles = {
  global: {
    // styles for the `a`
    a: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
};

const components = {};

const theme = extendTheme({
  colors,
  styles,
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
