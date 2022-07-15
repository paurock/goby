import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

export const ConnectWalletBtn = (): JSX.Element => {
  return (
    <Flex w="full" minH="40px" justifyContent="center" alignItems="center">
      <Button
        background="green"
        fontWeight="normal"
        color="black"
        px="16px"
        mt="0"
      >
        Connect wallet
      </Button>
    </Flex>
  );
};
