import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { Listed } from './Listed';
import { OpenSeaIcon } from './OpenSeaIcon';

export const OpenSeaAndListed = ({
  bgColors,
}: {
  bgColors: string;
}): JSX.Element => {
  return (
    <HStack>
      <Box>
        <OpenSeaIcon bgColors={bgColors} />
      </Box>
      <Box>
        <Listed />
      </Box>
    </HStack>
  );
};
