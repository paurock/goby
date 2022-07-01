import { Flex, chakra, HStack } from "@chakra-ui/react";
import { MainFooterRight } from "./MainFooterRight";
import { MainFooterLeft } from "./MainFooterLeft";

export const MainFooter = (): JSX.Element => (
  <Flex
      w="full"
      justifyContent="center"
      mt="64px"
      px="0"
      background="#191921"
    >
    <Flex
      gap="32px"
      w="full"
      maxW="1050px"
      minH="332px"
      mx={["16px", "16px", "16px", "80px", "195px", "195px"]} 
      pt={["32px", "64px"]}
      sx={{
        justify: "space-between",
        fontFamily: "body", 
        flexWrap: "wrap",
      }}
    >  
      <HStack w="full" gap="40px">
        <MainFooterLeft /> 
        <MainFooterRight /> 
      </HStack>
    <chakra.hr
      color="black"
      opacity="0.1"
      display={["none", "none", "none", "block", "block"]}
    />
    </Flex>
  </Flex>
);
