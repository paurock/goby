import { Button } from '@chakra-ui/react';
import { OpenSeaIconSVG } from 'app/assets/Icons';
import React from 'react';

type Props = {
  color?: string;
  bg?: string;
};

export const OpenSeaIcon = ({ color, bg }: Props): JSX.Element => {
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
        color: color ? color : 'black',
        fontSize: '12px',
        backgroundColor: bg ? bg : 'white',
        borderRadius: '2px',
        border: 'none',
      }}
    >
      OpenSea
    </Button>
  );
};
