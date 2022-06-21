/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "@chakra-ui/react";
import { VFlex } from "shared";

import { MainFooter } from "./MainFooter";

export const Footer = () => {
  return (
    <Container w="full" px="0" background="#191921">
      <MainFooter />
    </Container>
  );
};
