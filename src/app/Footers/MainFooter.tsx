import { Flex, chakra, HStack } from "@chakra-ui/react";
import { MainFooterRight } from "./MainFooterRight";
import { MainFooterLeft } from "./MainFooterLeft";

export const MainFooter = (): JSX.Element => (
  <Flex
      w="full" 
      h="full"
      justifyContent="center"
      mt="64px"
      px="0"
      bg="black.300"
    >
    <Flex 
      w="full"
      h="full"
      maxW="1050px"
      minH="332px" 
      mx={["16px", "16px", "16px", "80px", "195px", "195px"]} 
      pt={["32px", "64px"]}  
    >  
      <HStack w="full" h="full" pb="64px" gap="40px" flexWrap={["wrap", "nowrap"]}>
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
