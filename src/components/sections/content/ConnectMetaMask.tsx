import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import image from 'app/assets/MetaMaskFox.png';
import { GreenBtn } from 'components/Buttons/GreenBtn';

export const ConnectMetaMask = () => {
  const color = useColorModeValue('black.100', 'lightgreen.100');
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
          <Box pb="35px">
            <Image alt="image" width="72px" height="72px" src={image.src} />
          </Box>
          <Heading as="span" pb="12px" sx={{ fontSize: '20px' }}>
            Connect your MetaMask
          </Heading>
          <Heading
            as="span"
            pb="24px"
            sx={{ fontSize: '14px', color, opacity: 0.6 }}
          >
            Connect your wallet to get started with your assets
          </Heading>
          <Flex w="full" maxW="174px" h="40px" justifyContent="center">
            <GreenBtn
              text="Connect wallet"
              onClick={() => console.log('clicked')}
            />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};
