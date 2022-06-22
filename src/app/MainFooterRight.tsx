import { Box, Flex, Text, Link  } from "@chakra-ui/react";
import NextLink from "next/link";
 {/* Column Links */}
 export const MainFooterRight:React.FC = () =>
 <>
   {/* 0 column */}
   <Box
     display={["none", "none", "none", "initial", "initial"]}
     sx={{
       fontSize: "20px",
       fontWeight: "500",
       color: "#E7FFF1",
       opacity: 0, 
     }}
   >
     <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Lend</Text>
     <Flex  >
       <ul
         style={{
           fontSize: "16px",
           letterSpacing: "0.02em",
           fontWeight: "400",
           listStyleType: "none",
         }}
       >
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Collateral</Link>
           </NextLink>
         </li>
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Loans</Link>
           </NextLink>
         </li>
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Offers</Link>
           </NextLink>
         </li>
       </ul>
     </Flex>
   </Box>
   {/* 1st column */}
   <Box 
     sx={{ 
       fontSize: "20px",
       fontWeight: "500",
       color: "#E7FFF1", 
       minWidth: "170px",
     }}
   >
     <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Lend</Text>
     <Flex  >
       <ul
         style={{
           fontSize: "16px",
           letterSpacing: "0.02em",
           fontWeight: "400",
           listStyleType: "none", 
         }}
       >
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Collateral</Link>
           </NextLink>
         </li>
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Loans</Link>
           </NextLink>
         </li>
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link>Offers</Link>
           </NextLink>
         </li>
       </ul>
     </Flex>
   </Box>
   {/* 2d column */}
   <Box
     sx={{
       fontSize: "20px",
       fontWeight: "500",
       color: "#E7FFF1",
       minWidth: "170px",
     }}
   >
     <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Support</Text>
     <Flex minW="170px">
       <ul
         style={{
           fontSize: "16px",
           letterSpacing: "0.02em",
           fontWeight: "400",
           listStyleType: "none",
         }}
       >
         <li style={{ margin: "20px 0" }}>
           <NextLink href="#" passHref>
             <Link isExternal>FAQ</Link>
           </NextLink>
         </li>
         <li style={{ margin: "20px 0" }}>
           <NextLink href="https://t.me/goby_network" passHref>
             <Link isExternal>Telegram</Link>
           </NextLink>
         </li>
       </ul>
     </Flex>
   </Box>
   </> 