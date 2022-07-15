import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import image from 'app/assets/MetaMaskFox.png';
import { ConnectWalletBtn } from 'components/common/Buttons/ConnectWalletBtn';

export const ConnectMetaMask = () => {
  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        h="full"
        mx={['16px', '16px', '16px', '80px', '195px', '195px']}
        maxW="1050px"
        minH="400px"
        justifyContent="center"
        alignItems="center"
      >
        <VStack maxW="510px" maxH="200px">
          <Box>
            <Image alt="image" width="72px" height="72px" src={image.src} />
          </Box>
          <Heading as="span" sx={{ fontSize: '20px' }}>
            Connect your MetaMask
          </Heading>
          <Heading
            as="span"
            sx={{ fontSize: '14px', color: 'rgba(1, 5, 4, 0.6)' }}
          >
            Connect your wallet to get started with your assets
          </Heading>
          {/* <ConnectWalletBtn /> */}
        </VStack>
      </Flex>
    </Flex>
  );
};
