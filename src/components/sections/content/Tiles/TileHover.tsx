import React from 'react';
import {
  VStack,
  Box,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { OpenSeaAndListed } from 'components/common/OpenSeaAndListed';

export default function TileHover(): JSX.Element {
  const bgColors = useColorModeValue('white', 'black.100');
  return (
    <Flex
      w="full"
      h="full"
      flexWrap="wrap"
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        paddingBottom: '170px',
        boxShadow: 'rgba(99, 99, 99, 0.1) 0px 1px 8px 0px}}',
      }}
    >
      <VStack
        w="full"
        alignItems="flex-start"
        justifyContent="flex-end"
        mx="12px"
        pt="12px"
      >
        <OpenSeaAndListed bgColors={bgColors} />
        <Box h="full"></Box>
        <VStack
          w="full"
          maxW="full"
          spacing="12px"
          align="stretch"
          bg="white"
          sx={{
            padding: '12px',
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
                <Text sx={{ fontSize: '20px', color: 'black' }}>
                  154.00 ETH
                </Text>
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
      </VStack>
    </Flex>
  );
}
