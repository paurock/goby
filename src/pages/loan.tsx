import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LoanTable } from "components/sections/content/loanTable";
import { NextPage } from "next";
import React, { useState } from "react";

const fontStyle = {
  fontWeight: "400",
  color: "black",
};

const Loans: NextPage = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <>
      <VStack
        w="full"
        maxW="1050px"
        m="0 auto"
        mt={["50px", 0]} 
        px={["16px", "0"]}
        pb={["10px"]}
        flexWrap="wrap"
      >
        <Heading as="h2" w="full" sx={{ ...fontStyle, fontSize: "24px" }}>
          My Loans
        </Heading>
        <Text
          as="h5"
          w="full"
          sx={{ ...fontStyle, fontSize: "24px", opacity: 0.4 }}
        >
          2 loans
        </Text>
        <HStack w="full">
          <Button
            maxW="67px"
            maxH="32px"
            variant="outline"
            sx={
              active
                ? {
                    borderColor: "purple",
                    borderRadius: "3px",
                    fontSize: "16px",
                  }
                : {
                    borderColor: "initial",
                    borderRadius: "3px",
                    fontSize: "16px",
                  }
            }
          >
            Open
          </Button>
          <Button
            maxW="67px"
            maxH="32px"
            variant="outline"
            sx={{ borderRadius: "2px", fontSize: "16px" }}
          >
            Closed
          </Button>
        </HStack>
        <LoanTable status={"Open"} />
        <Divider />
        <LoanTable status={"Closed"} getAsset={false} />
        <Box h="104px"></Box>
      </VStack>
    </>
  );
};

export default Loans;
