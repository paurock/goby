import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Img } from "shared";
import image1 from "/src/app/assets/rectangle_240x229.png";
import imgage2 from "/src/app/assets/rectangle_240x319.png";
import TileHover from "./TileHover";
import UnderTiles from "./UnderTiles";

export default function Tiles(): JSX.Element {
  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        mx={["16px", "16px", "16px", "80px", "195px", "195px"]}
        maxW="1050px"
      >
        <SimpleGrid w="full" columns={[1, 2, 3, 4]} gap="30px" mt="24px">
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
    </Flex>
  );
}
