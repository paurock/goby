import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export const Header = () => {
  const { route } = useRouter();
  return (
    <Container
      maxW={['none', '750px', '970px', '1440px', '1440px']}
      px={['16px', '16px', '20px', '120px']}
      border={'1px solid red'}
      paddingStart={0}
    >
      <Image src="/images/logoPic.png" alt="Logo" width={40} height={40} />
      <Image
        src="/images/logoText.png"
        alt="Logo"
        width={94.39}
        height={33.33}
      />
      {/* <h1 style={{ border: '1px solid green' }}>Header</h1> */}
    </Container>
  );
};
