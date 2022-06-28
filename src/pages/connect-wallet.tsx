import { SVGProps } from "react";
import { NextPage } from "next";
import Image from "next/image";
import {
  Flex,
  Box,
  VStack,
  Text,
  Heading,
  IconButton,
  HStack,
  Icon,
  Divider,
  Button, 
} from "@chakra-ui/react";
import image from "/src/app/assets/mock_cw.png";
import imageBg from "/src/app/assets/mock_gray_bg.png";
import { svgProps } from "components/types";
import { OpenSeaIcon } from "components/common/OpenSeaIcon";
import { Listed } from "components/common/Listed";
import { ViewsCount } from "components/common/ViewsCount";
import { LikesCount } from "components/common/LikesCount";
import { BackIcon, ethereum } from "app/assets/Icons";

const lightGray = {
  fontSize: "14px",
  fontWeight: "500",
  opacity: "0.4",
} as const;

const ConnectWallet: NextPage = () => {
  return (
    <Flex
    bg="#F4F5FF"
      w="full"
      maxW="1600px"
      m="0 auto"
      px={["16px", "16px", "16px", "120px", "120px"]}
      pb={["10px", "20px", "40px", "60px"]}
    >
      <VStack maxW="50%" mx="15px">
        <Box mt="64px" mx="15px">
          <Image alt="image" width="510px" height="647px" src={image.src} />
        </Box>
        <Box mt="24px">
          <VStack
            maxW="510px"
            sx={{ borderRadius: "4px", border: "1px solid lightblue" }}
          >
            <Heading
              w="full"
              as="h2"
              px="24px"
              pt="16px"
              sx={{ fontSize: "16px" }}
            >
              Descrition
            </Heading>
            <Heading
              w="full"
              as="h5"
              px="24px"
              pt="0"
              pb="16px"
              sx={{
                fontSize: "14px",
                opacity: 0.3,
                borderBottom: "1px solid lightgray",
              }}
            >
              More information about the project and work
            </Heading>
            <Text p="24px">
              0xodia the otterboi is a light-hearted charity project to support
              both Ukraine and the Cystic Fibrosis Foundation. 100% proceeds
              from 45 0xodia the otterboi pieces will be split evenly between
              Ukraine relief (UkraineDAO) and the Cystic Fibrosis Foundation
              (sent from metamask to coinbase and withdrawn and donated in USD).
              This project was created by otterboi (@zellonwheels on twitter)
              using procreate on ipad.
            </Text>
          </VStack>
        </Box>
      </VStack>

      <VStack w="full" maxW="50%" mx="15px">
        <VStack w="full" mt="64px" mx="15px">
          <VStack w="full">
            <Box w="full">
              <IconButton aria-label="Go Back" icon={<BackIcon />} bg="white" _hover={{backgroundColor:"none"}} />
            </Box>
            <Text w="full" sx={{ color: "purple" }}>
              Project name
            </Text>
            <Heading
              as="h2"
              w="full"
              sx={{ fontSize: "40px", fontWeight: "400" }}
            >
              Asset ID
            </Heading>
            <Flex w="full">
              <HStack w="full">
                <Box  >
                  <OpenSeaIcon /> 
                </Box>
                <Box>
                  <Listed />
                </Box> 
                <Box w="full"></Box>
                <Box>
                  <ViewsCount/>
                </Box> 
                <Box>
                  <LikesCount/>
                </Box>
              </HStack>
            </Flex>
            <Divider />
          </VStack>
          <VStack w="full">
            <HStack w="full">
              <Text w="full" sx={lightGray}>
                Desired price
              </Text>
              <Text w="full" sx={lightGray}>
                Desired dates
              </Text>
              <Text w="full" sx={lightGray}>
                Desired APR
              </Text>
            </HStack>
            <HStack w="full" py="24px">
              <HStack w="full">
                <Icon
                  //@ts-ignore
                  as={ethereum}
                />
                <Text w="full">154.00 ETH</Text>
              </HStack>
              <Text w="full">40 days</Text>
              <Text w="full">0.5%</Text>
            </HStack>
            <HStack w="full">
              <Button maxW="382px" w="full" bg="green" colorScheme='green'>Make Offer</Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack></VStack>
      </VStack>
    </Flex>
  );
};
export default ConnectWallet;