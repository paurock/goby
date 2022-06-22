/* eslint-disable jsx-a11y/anchor-is-valid */
import { Flex, chakra } from "@chakra-ui/react";
import { MainFooterRight } from "./MainFooterRight";
import { MainFooterLeft } from "./MainFooterLeft";
// eslint-disable-next-line max-lines-per-function
export const MainFooter:React.FC = () => (
  <>
    <Flex 
      gap="32px"
      sx={{
        justify: "space-around",
        fontFamily: "body",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
      w="full" 
      minH="332px"
      pl={["16px", "16px", "16px", "120px", "120px"]} 
    >
     <Flex
 mx={['0', '0', '0', '80px', '80px', '195px']}
 w={["full", "full", "full", "35%", "35%"]}
 flexDirection="column"
 justifyContent={["flex-start", "center", "center", "flex-start"]}
 alignItems={["center", "center", "center", "flex-start"]}
 mt="75px">
     <MainFooterLeft/>
     </Flex>
  <Flex 
  gap="30px"
   mt={["0", "0", "0", "70px", "70px"]}
   w={["full", "full", "full", "35%", "35%"]}
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
