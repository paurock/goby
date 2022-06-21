import { Grid } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { Img } from "shared";
import image1 from "../../app/assets/rectangle_240x229.png";
import imgage2 from "../../app/assets/rectangle_240x319.png";

export interface imageInf {
  src: string | StaticImageData;
  className?: string;
}

export const TabContent: React.FC = () => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      border="2px solid purple"
      gap="5"
      mt="24px"
    >
      <Img src={image1.src} w="full" h="229px"></Img>
      <Img src={image1.src} w="full" h="229px"></Img>
      <Img src={imgage2.src} w="full" h="319px"></Img>
      <Img src={image1.src} w="full" h="229px"></Img>
      <Img src={imgage2.src} w="full" h="319px"></Img>
      <Img src={image1.src} w="full" h="229px"></Img>
      <Img src={imgage2.src} w="full" h="319px"></Img>
    </Grid>
  );
};
