import { Container, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { Img, useAssets } from 'shared';

export const Footer = () => {
  const { logo, text } = useAssets();
  return (
    <Container maxW={'1600px'} px={['16px', '16px', '20px', '32px']}>
      <Flex minH="80px">
        <Flex
          as="footer"
          gap="32px"
          justify="space-between"
          align="center"
          display={['none', 'none', 'none', 'flex', 'flex']}
          fontFamily="body"
          fontSize="16px"
          lineHeight="6"
          color={text}
          w="full"
          h="80px"
        >
          <Link href="#">
            <Img src={logo} sx={{ cursor: 'pointer' }} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
