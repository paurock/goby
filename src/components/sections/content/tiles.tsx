import React from "react";
import { Flex, SimpleGrid, Box } from "@chakra-ui/react";
import { Img } from "shared";
import image1 from "/src/app/assets/rectangle_240x229.png";
import imgage2 from "/src/app/assets/rectangle_240x319.png";
import UnderTiles from "components/sections/content/underTiles";
import TileHover from "components/sections/content/tileHover";

export default function Tiles() {
  return (
    <Flex
      w="full"
      maxW="1600px"
      m="0 auto"
      px={["16px", "16px", "16px", "120px", "120px"]}
      pb={["10px", "20px", "40px", "60px"]}
    >
      <SimpleGrid
        w="full"
        columns={[1, 2, 3, 4]}
        gap="30px"
        mt="24px"
        mx={["0", "16px", "16px", "80px", "80px", "195px"]}
      >
        <Img src={image1.src} w="full" maxH="229px" />
        <Img src={image1.src} w="full" maxH="229px" />
        <Img src={imgage2.src} w="full" maxH="319px" />
        <Img src={image1.src} w="full" maxH="229px" />
        <Img src={imgage2.src} w="full" maxH="319px" />
        <Img src={image1.src} w="full" maxH="229px" />
        <Flex
          sx={{
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <Img src={imgage2.src} w="full" maxH="319px" />
          <TileHover />
          <UnderTiles />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
