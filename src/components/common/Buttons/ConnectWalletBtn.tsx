import { Button } from '@chakra-ui/react';
import React from 'react';

export const ConnectWalletBtn = (): JSX.Element => {
  return (
    <Button
      background="green"
      fontWeight="normal"
      color="black"
      px="16px"
      mt="0"
    >
      Connect wallet
    </Button>
  );
};
