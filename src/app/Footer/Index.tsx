/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
} from '@chakra-ui/react';

import {
  VFlex, useAssets,
} from 'shared';
import { Copyrights } from './Copyrights';
import { MainFooter } from './MainFooter';
import { OurParners } from './OurPartners';

export const Footer = () => {
  const {
    animoca, maven, pantera, binance,
  } = useAssets();

  const slides = [animoca, maven, pantera, binance];

  return (
    <Container w="full" minW="100%" px="0" background="#191921">
      <VFlex pt="120px" w="full" justify="space-between" align="center">

        <Container
          maxW={['none', '750px', '970px', '1100px', '1440px']}
          px={['16px', '16px', '20px', '80px', '120px']}
          opacity="1"
        >
          {/* Our partners */}
          <OurParners slides={slides} />
          <MainFooter />
          <Copyrights />
        </Container>
      </VFlex>
      );
    </Container>
  );
};
