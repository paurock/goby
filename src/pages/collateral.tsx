import { Grid, Flex } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

import Toolbar from "../components/toolbar";
import Tiles from "../components/sections/content/tiles";
import TileHover from "../components/sections/content/tileHover";
import { NextPage } from "next";

const Collateral: NextPage = () => {
  return (
    <>
      <Toolbar />
      <Tiles />
    </>
  );
};
export default Collateral;
