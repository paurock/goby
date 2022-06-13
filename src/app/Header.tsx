import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { Container, Flex } from "@chakra-ui/react";

export const Header = () => {
  const { route } = useRouter();
  return (
    <Container
      maxW={["none", "750px", "970px", "1100px", "1440px"]}
      px={["16px", "16px", "20px", "120px"]}
    >
      <Flex>
        <h1>Header</h1>
      </Flex>
    </Container>
  );
};
