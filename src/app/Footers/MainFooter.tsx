import { Flex, chakra } from "@chakra-ui/react";
import { MainFooterRight } from "./MainFooterRight";
import { MainFooterLeft } from "./MainFooterLeft";

export const MainFooter  = ():JSX.Element => (
  <>
    <Flex 
      gap="32px" 
      w="full" 
      minH="332px"
      px={["16px", "0"]}
      sx={{
        justify: "space-around",
        fontFamily: "body",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
     <Flex
 mx={['0', '0', '0', '80px', '80px', '195px']}
 w={["full", "full", "full", "35%", "25%"]}
 flexDirection="column"
 justifyContent={["flex-start", "center", "center", "flex-start"]}
 alignItems={["center", "center", "center", "flex-start"]}
 mt="75px">
     <MainFooterLeft/>
     </Flex>
  <Flex 
  gap="30px"
   mt={["0", "0", "0", "70px", "70px"]}
   w={["full", "full", "full", "35%", "25%"]}
   pl={['0', '10%', '10%', '0', '0', '0']} 
   mr={['0', '0', '0', '0', '80px', '195px']} 
   justifyContent={["center", "center", "center", "flex-start"]}
 >
     <MainFooterRight/>
     </Flex>
    </Flex>
    <chakra.hr
      color="#222228"
      opacity="0.1"
      display={["none", "none", "none", "block", "block"]}
    />
  </>
);
