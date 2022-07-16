import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
  text: string;
  bg?: string;
  color?: string;
  onClick: () => void;
  height?: string;
}

export const GreenBtn = ({
  text,
  bg = 'green',
  color = 'black',
  onClick,
  height,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      w="full"
      h={height}
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
