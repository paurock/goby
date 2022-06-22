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

const Collateral: NextPage = () => {
  return (
    <>
      <Toolbar />
      <Flex px={['16px', '16px', '16px', '120px', '120px']} pb={["10px", "20px", "40px", "60px"]}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="30px"
          mt="24px"
          mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
        >
          <Img src={image1.src} w="full" h="229px"></Img>
          <Img src={image1.src} w="full" h="229px"></Img>
          <Img src={imgage2.src} w="full" h="319px"></Img>
          <Img src={image1.src} w="full" h="229px"></Img>
          <Img src={imgage2.src} w="full" h="319px"></Img>
          <Img src={image1.src} w="full" h="229px"></Img>
          <Img src={imgage2.src} w="full" h="319px"></Img>
        </Grid>
      </Flex>
    </>
  );
};
export default Collateral;
