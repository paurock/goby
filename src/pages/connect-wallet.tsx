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
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import image from "/src/app/assets/mock_cw.png";
import imageBg from "/src/app/assets/mock_gray_bg.png";
import { OpenSeaIcon } from "components/common/OpenSeaIcon";
import { Listed } from "components/common/Listed";
import { ViewsCount } from "components/common/ViewsCount";
import { LikesCount } from "components/common/LikesCount";
import { BackIcon, ethereum, heartIcon, shareIcon } from "app/assets/Icons";
import { SquareButton } from "app/theme/components/SquareButton";

const lightGray = {
  fontSize: "14px",
  fontWeight: "500",
  opacity: "0.4",
} as const;

const ConnectWallet: NextPage = () => {
  const colors = useColorModeValue("black", "lightGreen");

  return (
    // CONTAINER
    <>
      <Box
        w="full"
        h="432px"
        bg="lightGray"
        sx={{ position: "absolute", zIndex: "0" }}
      ></Box>
      <VStack gap="24px" bg="white" zIndex="100">
        <Flex
          w="full"
          maxW="1050px"
          px={["16px", "0"]}
          pb={["10px"]}
          flexWrap="wrap"
        >
          {/* LEFT COLUMN  */}
          <VStack maxW={["100%", "50%"]} pr="15px" zIndex="100">
            <Box mt="64px">
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
                  0xodia the otterboi is a light-hearted charity project to
                  support both Ukraine and the Cystic Fibrosis Foundation. 100%
                  proceeds from 45 0xodia the otterboi pieces will be split
                  evenly between Ukraine relief (UkraineDAO) and the Cystic
                  Fibrosis Foundation (sent from metamask to coinbase and
                  withdrawn and donated in USD). This project was created by
                  otterboi (@zellonwheels on twitter) using procreate on ipad.
                </Text>
              </VStack>
            </Box>
          </VStack>
          {/* RIGHT COLUMN  */}
          <VStack w="full" maxW={["100%", "50%"]} pl="15px" zIndex="100">
            {/* TOP SIDE  */}
            <VStack w="full" mt="64px" mx="15px" maxW="510px">
              <VStack w="full">
                <Box w="full">
                  <IconButton
                    aria-label="Go Back"
                    icon={<BackIcon />}
                    bg="none"
                    _hover={{ backgroundColor: "none" }}
                  />
                </Box>
                <Text
                  w="full"
                  maxH="20px"
                  mb="0"
                  pb="0"
                  sx={{ color: "purple" }}
                >
                  Project name
                </Text>
                <Heading
                  as="h2"
                  w="full"
                  maxH="44px"
                  sx={{ fontSize: "40px", fontWeight: "400" }}
                >
                  Asset ID
                </Heading>
                <Flex w="full">
                  <HStack w="full">
                    <Box>
                      <OpenSeaIcon />
                    </Box>
                    <Box>
                      <Listed />
                    </Box>
                    <Box w="full"></Box>
                    <Box>
                      <ViewsCount />
                    </Box>
                    <Box>
                      <LikesCount />
                    </Box>
                  </HStack>
                </Flex>
                <Divider />
              </VStack>
              <VStack w="full">
                <HStack w="full">
                  <Text w="30%" sx={lightGray}>
                    Desired price
                  </Text>
                  <Text w="20%" sx={lightGray}>
                    Desired dates
                  </Text>
                  <Text w="25%" sx={lightGray}>
                    Desired APR
                  </Text>
                </HStack>
                <HStack w="full" pt="10px" pb="24px">
                  <HStack w="30%">
                    <Icon
                      //@ts-ignore
                      as={ethereum}
                    />
                    <Text w="full">154.00 ETH</Text>
                  </HStack>
                  <Text w="20%">40 days</Text>
                  <Text w="25%">0.5%</Text>
                </HStack>
                <HStack w="full">
                  <Button maxW="382px" w="full" bg="green" colorScheme="green">
                    Make Offer
                  </Button>
                  <Center w="57px" h="48px" bg="white" borderRadius="4px">
                    <SquareButton
                      bg="white"
                      widthBtn="20px"
                      heightBtn="20px"
                      ariaLabel="Like"
                      icon={heartIcon}
                      stroke={colors}
                      hoverColorStroke={"black"}
                      action={() => console.log("clicked")}
                    />
                  </Center>
                  <Center w="57px" h="48px" bg="white" borderRadius="4px">
                    <SquareButton
                      bg="white"
                      widthBtn="20px"
                      heightBtn="20px"
                      ariaLabel="Share"
                      icon={shareIcon}
                      stroke={colors}
                      hoverColorStroke={"black"}
                      action={() => console.log("clicked")}
                    />
                  </Center>
                </HStack>
              </VStack>
            </VStack>
            {/* LOW SIDE  */}
            <VStack>
              <Box pt="22px">
                <Image
                  alt="image"
                  width="510px"
                  height="647px"
                  src={imageBg.src}
                />
              </Box>
              <Box pt="22px">
                <Image
                  alt="image"
                  width="510px"
                  height="647px"
                  src={imageBg.src}
                />
              </Box>
            </VStack>
          </VStack>
        </Flex>
        <Divider w="full" maxW="1050px" />
        {/* ADVERT BLOCK  */}
        <Box w="full" h="238px" maxW="1050px" maxH="238px" bg="gray"></Box>
        {/* EMPTY GAP BOX  */}
        <Box h="64px"></Box>
      </VStack>
    </>
  );
};
export default ConnectWallet;
