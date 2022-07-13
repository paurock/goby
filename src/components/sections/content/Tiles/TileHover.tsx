import React from 'react';
import { VStack, Box, Text, SimpleGrid, Flex } from '@chakra-ui/react';

export default function TileHover(): JSX.Element {
  return (
    <Flex
      w="full"
      h="full"
      alignItems="flex-end"
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        paddingBottom: '170px',
        boxShadow: 'rgba(99, 99, 99, 0.1) 0px 1px 8px 0px}}',
      }}
    >
      <VStack
        maxW="full"
        maxH="125px"
        p="12px"
        spacing="16px"
        align="stretch"
        bg="white"
        sx={{
          width: '90%',
          margin: '0 11px 0 11px',
          borderRadius: '4px',
        }}
      >
        <Box h="40px">
          <VStack maxW="216px" spacing="4px" align="stretch">
            <Box h="17px">
              <Text sx={{ fontSize: '12px', color: 'black', opacity: '0.4' }}>
                Desired Price
              </Text>
            </Box>
            <Box h="16px">
              <Text sx={{ fontSize: '20px', color: 'black' }}>154.00 ETH</Text>
            </Box>
          </VStack>
        </Box>
        <Box h="40px">
          <SimpleGrid columns={2} spacing="4px">
            <Box height="20px">
              <Text sx={{ fontSize: '12px', color: 'black', opacity: '0.4' }}>
                Desired dates
              </Text>
            </Box>
            <Box height="20px">
              <Text sx={{ fontSize: '12px', color: 'black', opacity: '0.4' }}>
                Desired AP
              </Text>
            </Box>
            <Box height="20px" sx={{ fontSize: '16px', color: 'black' }}>
              40 days
            </Box>
            <Box height="20px" sx={{ fontSize: '16px', color: 'black' }}>
              0.5%
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Flex>
  );
}
