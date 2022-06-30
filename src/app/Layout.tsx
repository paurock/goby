import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./theme/breakpoints";
import { fonts } from "./theme/fonts";
import TitleSection from "../components/sections/TitleSection";
import { Header } from "./Header";
import { Footer } from "./Footers/Footer";
import Head from "next/head"; 

const colors = {
  purple: "#6334B1",
  green: "#28FF98",
  lightGreen: {
    100: "#E7FFF1",
    300: "#30BE7A",
  },
  redcolor: {
    100: "#EB4E611A",
    900: "#EB4E61",
  },
  lightBlue: "#CECFEA",
  lightGray: "#F4F5FF",
  black: { 100: "#010504" },
  text: {
    100: "#010504",
    900: "#E7FFF1",
  },
};
const styles = {
  global: {
    ul: {
      listStyleType: "none",
    },
    // styles for the `a`
    a: {
      _hover: {
        textDecoration: "none",
        cursor: "pointer"
      }, 
  },
    svg: {
      _hover: { 
        cursor: "pointer", 
        background: "none"
      }
    }
  }
};

const components = { 
  // components styles  
};

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components,
  breakpoints,
});
import { ReactNode } from "react";

const Layout = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Goby Network App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  );
};

export default Layout;
