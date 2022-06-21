/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
} from '@chakra-ui/react'; 
import { VFlex } from 'shared';
 
import { MainFooter } from './MainFooter';
export const Footer = () => { 
  return (
    <Container w="full" px="0" background="#191921">
      <VFlex pt="120px" w="full" justify="space-between" align="center">

        <Container
          maxW={['none', '750px', '970px', '1100px', '1440px']}
          px={['16px', '16px', '20px', '80px', '120px']}
          opacity="1"
        > 
          <MainFooter /> 
        </Container>
      </VFlex>
      );
    </Container>
  );
};
