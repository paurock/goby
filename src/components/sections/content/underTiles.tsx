import {
  Box,
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { heartIcon } from "components/Toolbar";
import { svgProps } from "components/types";
import React, { SVGProps } from "react";
import { useAssets } from "shared";

export const shareIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4">
      <path
        d="M2.66663 8V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2761C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V8"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 3.99999L8.00004 1.33333L5.33337 3.99999"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33333V10"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const moreHorizontal = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4">
      <path
        d="M8.00004 8.66666C8.36823 8.66666 8.66671 8.36818 8.66671 7.99999C8.66671 7.63181 8.36823 7.33333 8.00004 7.33333C7.63185 7.33333 7.33337 7.63181 7.33337 7.99999C7.33337 8.36818 7.63185 8.66666 8.00004 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.63181 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.63181 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33329 8.66666C3.70148 8.66666 3.99996 8.36818 3.99996 7.99999C3.99996 7.63181 3.70148 7.33333 3.33329 7.33333C2.9651 7.33333 2.66663 7.63181 2.66663 7.99999C2.66663 8.36818 2.9651 8.66666 3.33329 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default function UnderTiles():JSX.Element {
  const { text, background } = useAssets();
  const colors = useColorModeValue("black", "lightGreen");
  const bgColors = useColorModeValue("white", "black");
  return (
    <VStack
      w="full"
      sx={{
        boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 8px 0px}}",
      }}
      bg={bgColors}
    >
      <VStack w="full" p="24px">
        <Box w="full" h="22px">
          <Heading
            as="h5"
            sx={{ fontSize: "16px", fontWeight: 500, color: text }}
          >
            Asset ID
          </Heading>
        </Box>
        <Box w="full" h="22px">
          <Text sx={{ fontSize: "14px", color: text, opacity: 0.4 }}>
            Name project
          </Text>
        </Box>
      </VStack>
      <Box w="full" h="48px">
        <SimpleGrid w="full" h="48px" columns={3}>
          <Center maxW="111px" maxH="48px">
            <Icon
              //@ts-ignore
              as={heartIcon}
              w="14px"
              h="14px"
              stroke={colors}
              _hover={{ fill: "red", stroke: "red" }}
              sx={{
                cursor: "pointer",
                fill: "none",
              }}
              onClick={() => console.log("pressed")}
            />
          </Center>
          <Center maxW="111px" maxH="48px">
            <Icon
              //@ts-ignore
              as={shareIcon}
              w="14px"
              h="14px"
              stroke={colors}
              _hover={{ stroke: "black" }}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => console.log("pressed")}
            />
          </Center>
          <Center maxW="111px" maxH="48px">
            <Icon
              //@ts-ignore
              as={moreHorizontal}
              w="14px"
              h="14px"
              stroke={colors}
              _hover={{ stroke: "black" }}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => console.log("pressed")}
            />
          </Center>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
