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

const lightGray = {
  fontSize: "14px",
  fontWeight: "500",
  opacity: "0.4",
} as const;

const ConnectWallet: NextPage = () => {
  return (
    <Flex
      bg="gray"
      w="full"
      maxW="1600px"
      m="0 auto"
      px={["16px", "16px", "16px", "120px", "120px"]}
      pb={["10px", "20px", "40px", "60px"]}
    >
      <VStack maxW="50%" bg="White" mx="15px">
        <Box mt="64px" mx="15px">
          <Image width="510px" height="647px" src={image.src} />
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

      <VStack w="full" maxW="50%" mx="15px" bg="white">
        <VStack w="full" mt="64px" mx="15px">
          <VStack w="full">
            <Box w="full">
              <IconButton aria-label="Go Back" icon={<BackIcon />} />
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
            <Flex w="full">три горизонт кнопки</Flex>
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
            <HStack w="full">
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
            <HStack w="full"></HStack>
          </VStack>
        </VStack>

        <VStack></VStack>
      </VStack>
    </Flex>
  );
};
export default ConnectWallet;

const ethereum = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#627EEA" />
    <g opacity="0.6">
      <path
        opacity="0.6"
        d="M9.92647 8.26309L5.83331 10.1246L9.92647 12.5429L14.018 10.1246L9.92647 8.26309Z"
        fill="white"
      />
    </g>
    <g opacity="0.45">
      <path
        opacity="0.45"
        d="M5.83331 10.1247L9.92647 12.5429V3.33333L5.83331 10.1247Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M9.92645 3.33328V12.5429L14.018 10.1246L9.92645 3.33328Z"
        fill="white"
      />
    </g>
    <g opacity="0.45">
      <path
        opacity="0.45"
        d="M5.83331 10.9001L9.92647 16.6666V13.3184L5.83331 10.9001Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M9.92645 13.3184V16.6666L14.0212 10.9001L9.92645 13.3184Z"
        fill="white"
      />
    </g>
  </svg>
);

const BackIcon = (props: svgProps): JSX.Element => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_640_4550)">
      <circle cx="24" cy="22" r="20" fill="white" />
    </g>
    <path
      d="M25.5 27L20.5 22L25.5 17"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_640_4550"
        x="0"
        y="0"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.805903 0 0 0 0 0.812825 0 0 0 0 0.916667 0 0 0 0.24 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_640_4550"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_640_4550"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
