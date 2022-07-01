import {Flex } from "@chakra-ui/react";
import { Copyrights } from "./Copyrights";

import { MainFooter } from "./MainFooter";

export const Footer = (): JSX.Element => {
  return ( 
    <>
      <MainFooter />  
      <Copyrights/>
    </>
  );
};
