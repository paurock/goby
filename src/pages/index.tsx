import type { NextPage } from "next";
import Head from "next/head";
import { Header, Footer } from "../app";
import { Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container h="calc(90vh)">
          <h1>Welcome to Next.js!</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
