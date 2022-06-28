import { Container } from "@chakra-ui/react"; 

import { MainFooter } from "./MainFooter";

export const Footer = ():JSX.Element => {
  return (
    <Container w="100%" maxW="1600px" m="0 auto" px="0" background="#191921">
      <MainFooter />
    </Container>
  );
};
