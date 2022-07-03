import { Button } from '@chakra-ui/react';
import { OpenSeaIconSVG } from 'app/assets/Icons';
import React from 'react';

type Props = {
  color?: string;
  bg?: string;
  bgColors: string;
};

export const OpenSeaIcon = ({ color, bg, bgColors }: Props): JSX.Element => {
  console.log(bgColors);
  return (
    <Button
      w="82px"
      h="22px"
      bg="white"
      _hover={{ backgroundColor: 'white' }}
      leftIcon={<OpenSeaIconSVG />}
      colorScheme="teal"
      variant="outline"
      p="0"
      sx={{
        color: bgColors === 'white' ? 'black' : 'white',
        fontSize: '12px',
        backgroundColor: bgColors,
        borderRadius: '2px',
        border: 'none',
      }}
    >
      OpenSea
    </Button>
  );
};
