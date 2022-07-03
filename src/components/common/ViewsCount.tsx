import { ViewIcon } from '@chakra-ui/icons';
import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React from 'react';

export const ViewsCount = ({
  count = '359',
  bgColors,
}: {
  count?: string;
  bgColors: string;
}): JSX.Element => {
  return (
    <HStack maxH="22px" py="0" bg={bgColors}>
      <Tag maxH="22px" py="0" variant="subtle" colorScheme="white">
        <TagLeftIcon boxSize="12px" as={ViewIcon} sx={{ color: 'gray' }} />
        <TagLabel sx={{ color: 'gray', fontSize: '12px' }}>{count}</TagLabel>
      </Tag>
    </HStack>
  );
};
