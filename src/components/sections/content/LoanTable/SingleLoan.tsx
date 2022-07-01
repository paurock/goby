import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Tag,
  Text,
  VStack,
  Flex,
  GridItem,
} from "@chakra-ui/react";
import { ethereum, moreRound } from "app/assets/Icons";
import { loanTableType } from "components/types";
import React from "react";
import { Img } from "shared";
import image from "/src/app/assets/square_img_150x150.png";

export const LoanTable = ({ status, getAsset = false }: loanTableType) => {
  return (
    <Flex w="full" pt="24px" flexWrap={["wrap", "nowrap"]}>
      {/* IMAGE  */}
      <Box w="full" maxW={["100%", "150px"]} m={["24px", 0]}>
        <Img alt="image" width="100%" objectFit="cover" src={image.src} />
      </Box>
      <VStack w="full" pl="24px" sx={{ alignItems: "flex-start" }}>
        {/* NAME AND STATUS  */}
        <HStack w="full">
          <Heading as="h3" sx={{ fontSize: "20px" }} minW="fit-content">
            Asset ID
          </Heading>
          <Tag
            maxH="22px"
            minW="fit-content"
            colorScheme={status == "Open" ? "lightGreen" : "redcolor"}
          >
            {status ? status : "Close"}
          </Tag>
          <Box w="full"></Box>
          <IconButton
            bg="none"
            aria-label="more"
            //@ts-ignore
            as={moreRound}
            w="40px"
            h="40px"
            stroke="lightGray"
            _hover={{ bacground: "none" }}
            onClick={() => console.log("click")}
          />
        </HStack>
        <HStack w="full" mb="24px">
          <Text as="span" sx={{ fontSize: "14px", opacity: 0.4 }}>
            Borrower:
          </Text>
          <Text
            as="span"
            sx={{
              fontSize: "14px",
              color: "purple",
              textTransform: "lowerCase",
            }}
          >
            Name of Borrower
          </Text>
        </HStack>
        {/* DETAILS  */}
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} w="full">
          {/* LEFT COLUMN  */}
          <GridItem w="full">
            {/* table-head  */}
            <HStack w="full">
              <Text as="span" w="100px" sx={{ fontSize: "14px", opacity: 0.4 }}>
                Duration
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: "14px", opacity: 0.4 }}>
                APR
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: "14px", opacity: 0.4 }}>
                Loan value
              </Text>
            </HStack>
            {/* table-content  */}
            <HStack>
              <Text as="span" w="100px" sx={{ fontSize: "20px" }}>
                90 days
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: "20px" }}>
                22%
              </Text>
              <Text as="span" sx={{ fontSize: "20px" }}>
                7.35 ETH
              </Text>
            </HStack>
          </GridItem>

          {/* RIGHT COLUMN  */}
          <GridItem
            w="full"
            display="flex"
            justifyContent={["space-between", "flex-end"]}
          >
            <VStack spacing="0">
              <Text as="span" sx={{ fontSize: "14px", opacity: 0.4 }}>
                Repayment
              </Text>
              <HStack pr="20px">
                <Icon
                  //@ts-ignore
                  as={ethereum}
                />
                <Text>84.00 ETH</Text>
              </HStack>
            </VStack>
            {getAsset ? <HStack w="50%" justifyContent={["flex-end"]} alignItems={"center"}>
              <Button bg="green" w="fit-content" h="48px" p="13px 32px">
                Get an asset
              </Button>
            </HStack> : null}
          </GridItem>
        </Grid>
      </VStack>
    </Flex>
  );
};
