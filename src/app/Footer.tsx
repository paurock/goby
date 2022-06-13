import { Container, Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container
      maxW={["none", "750px", "970px", "1100px", "1440px"]}
      px={["16px", "16px", "20px", "80px", "120px"]}
    >
      <Flex>
        <h1>Footer (c) 2022</h1>
      </Flex>
    </Container>
  );
};
