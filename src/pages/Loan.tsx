import { Grid, Flex } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { Img } from "shared";
import image1 from "../app/assets/rectangle_240x229.png";
import imgage2 from "../app/assets/rectangle_240x319.png";
import Toolbar from "../components/Toolbar";
import { NextPage } from "next";

export interface imageInf {
  src: string | StaticImageData;
  className?: string;
}

const Loan: NextPage = () => {
  return (
    <>
      <Toolbar />
      <Flex px={["16px", "16px", "16px", "30px", "120px"]}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="5"
          mt="24px"
          mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
          minH="50vh"
        >
          Loan Page Content
        </Grid>
      </Flex>
    </>
  );
};
export default Loan;
