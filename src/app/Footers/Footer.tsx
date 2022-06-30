import { Flex } from "@chakra-ui/react";

import { MainFooter } from "./MainFooter";

export const Footer = (): JSX.Element => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      mt="64px"
      px="0"
      background="#191921"
    >
      <MainFooter />
    </Flex>
  );
};
