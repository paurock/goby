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
import Image from "next/image";
import React from "react";
import image from "/src/app/assets/square_img_150x150.png";

export const LoanTable = ({ status, getAsset = false }: loanTableType) => {
  return (
    <Flex w="full" pt="24px" pr={[0, 0, 0, "195px"]}>
      <Image alt="image" width="150px" height="150px" src={image.src} />
      <VStack w="full" pl="24px" sx={{ alignItems: "flex-start" }}>
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
            sx={{
              cursor: "pointer",
            }}
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

        <Grid
          templateColumns={getAsset ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
          w="full"
        >
          <GridItem w="full">
            <HStack w="full">
              <Text
                as="span"
                minW="fit-content"
                pr="24px"
                sx={{ fontSize: "14px", opacity: 0.4 }}
              >
                Duration
              </Text>

              <Text
                as="span"
                minW="fit-content"
                pr="24px"
                sx={{ fontSize: "14px", opacity: 0.4 }}
              >
                APR
              </Text>

              <Text
                as="span"
                minW="full"
                pr="24px"
                sx={{ fontSize: "14px", opacity: 0.4 }}
              >
                Loan value
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="full">
            <HStack w="full" sx={{ justifyContent: "flex-end" }}>
              <Text
                as="span"
                minW="fit-content"
                sx={{ fontSize: "14px", opacity: 0.4 }}
              >
                Repayment
              </Text>
            </HStack>
          </GridItem>
          {getAsset ? <GridItem minW="200px"></GridItem> : null}
        </Grid>
        <Grid
          templateColumns={getAsset ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}
          w="full"
        >
          <GridItem w="full">
            <HStack w="full">
              <Text
                as="span"
                minW="fit-content"
                pr="24px"
                sx={{ fontSize: "20px" }}
              >
                90 days
              </Text>

              <Text
                as="span"
                minW="fit-content"
                pr="24px"
                sx={{ fontSize: "20px" }}
              >
                22%
              </Text>

              <Text as="span" minW="full" w="full" sx={{ fontSize: "20px" }}>
                7.35 ETH
              </Text>
            </HStack>
          </GridItem>
          <GridItem w="full">
            <HStack sx={{ justifyContent: "flex-end" }}>
              <Icon
                //@ts-ignore
                as={ethereum}
              />
              <Text minW="fit-content">84.00 ETH</Text>
            </HStack>
          </GridItem>
          {getAsset ? (
            <GridItem>
              <HStack w="full" sx={{ justifyContent: "flex-end" }}>
                <Button bg="green" w="fit-content" h="48px" p="13px 32px">
                  Get an asset
                </Button>
              </HStack>
            </GridItem>
          ) : null}
        </Grid>
      </VStack>
    </Flex>
  );
};
