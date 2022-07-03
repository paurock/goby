import { NextPage } from 'next';
import {
  Flex,
  Box,
  VStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

import { LeftSide } from 'components/sections/content/ConnectWallet/LeftSide';
import { RightSide } from 'components/sections/content/ConnectWallet/RightSide';

const ConnectWallet: NextPage = () => {
  const colors = useColorModeValue('black', 'lightGreen');
  const bgColors = useColorModeValue('white', 'black.100');
  const bgColors300 = useColorModeValue('white', 'black.300');
  return (
    // CONTAINER
    <>
      <Box
        w="full"
        h="432px"
        bg={bgColors}
        sx={{ position: 'absolute', zIndex: '0' }}
      ></Box>
      <VStack gap="24px" zIndex="100">
        <Flex
          w="full"
          maxW="1050px"
          px={['16px', '0']}
          pb={['10px']}
          flexWrap="wrap"
        >
          {/* LEFT COLUMN  */}
          <LeftSide colors={colors} bgColors={bgColors300} />
          {/* RIGHT COLUMN  */}
          <RightSide colors={colors} bgColors={bgColors300} />
        </Flex>
        <Divider w="full" maxW="1050px" />
        {/* ADVERT BLOCK  */}
        <Box w="full" h="238px" maxW="1050px" maxH="238px" bg="gray"></Box>
        {/* EMPTY GAP BOX  */}
        <Box h="64px"></Box>
      </VStack>
    </>
  );
};
export default ConnectWallet;
