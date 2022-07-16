import { NextPage } from 'next';
import {
  Flex,
  Box,
  VStack,
  Divider,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { LeftSide } from 'components/sections/content/AssetID/LeftSide';
import { RightSide } from 'components/sections/content/AssetID/RightSide';
import { ModalAsset } from 'components/sections/content/AssetID/ModalAsset';

const ConnectWallet: NextPage = () => {
  const colors = useColorModeValue('black', 'lightGreen');
  const bgColors = useColorModeValue('lightGray', 'black.100');
  const bgColors300 = useColorModeValue('white', 'black.300');

  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <RightSide
            colors={colors}
            bgColors={bgColors300}
            btnClick={() => onOpen()}
            pageName="Borrow"
          />
        </Flex>
        <Divider w="full" maxW="1050px" />
        {/* ADVERT BLOCK
        <Box w="full" h="238px" maxW="1050px" maxH="238px" bg="gray"></Box>
        */}
        {/* EMPTY GAP BOX  */}
        <Box h="64px">
          <ModalAsset isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
      </VStack>
    </>
  );
};
export default ConnectWallet;
