import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { LikesCount } from './LikesCount';
import { ViewsCount } from './ViewsCount';

export default function index({ bgColors }: { bgColors: string }) {
  return (
    <Flex>
      <Box>
        <ViewsCount bgColors={bgColors} />
      </Box>
      <Box>
        <LikesCount bgColors={bgColors} />
      </Box>
    </Flex>
  );
}
