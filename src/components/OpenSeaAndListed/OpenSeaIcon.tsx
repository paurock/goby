import { Button } from '@chakra-ui/react';
import { OpenSeaIconSVG } from 'app/assets/Icons';
import React from 'react';

type Props = {
  color?: string;
  bg?: string;
  bgColors: string;
};

export const OpenSeaIcon = ({ bgColors }: Props): JSX.Element => {
  return (
    <Button
      w="82px"
      h="22px"
      _hover={{ backgroundColor: 'white', color: 'black' }}
      leftIcon={<OpenSeaIconSVG />}
      variant="outline"
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
