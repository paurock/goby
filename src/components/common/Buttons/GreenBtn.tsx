import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
  text: string;
  bg?: string;
  color?: string;
}

export const GreenBtn = ({
  text,
  bg = 'green',
  color = 'black',
}: ButtonProps): JSX.Element => {
  return (
    <Button background={bg} fontWeight="normal" color={color} px="16px" mt="0">
      {text}
    </Button>
  );
};
