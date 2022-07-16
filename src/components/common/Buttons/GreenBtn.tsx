import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
  text: string;
  bg?: string;
  color?: string;
  onClick: () => void;
}

export const GreenBtn = ({
  text,
  bg = 'green',
  color = 'black',
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      w="full"
      background={bg}
      fontWeight="normal"
      color={color}
      px="16px"
      mt="0"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
