import { Flex, Text, Link  } from "@chakra-ui/react";
import { Img } from "shared";
import logo from "./assets/logo.svg";
import NextLink from "next/link";

 {/* Left Logo block */}
export const MainFooterLeft:React.FC = () => <><Flex
   mb="18px" 
   w="full" 
   justifyContent={["flex-start", "center", "center", "flex-start"]}
 >
   <NextLink href="#" passHref>
     <Link>
       <Img src={logo.src} sx={{ cursor: "pointer" }} />
     </Link>
   </NextLink>
 </Flex>
 <Flex mb={["20px", "30px", "40px", "50px"]}>
   <Text
     color="#E7FFF1"
     w="full"
     maxW="100vw" 
   >
     American online non-fungible token (NFT) marketplace headquartered
     in New York City.
   </Text>
 </Flex>
 </>