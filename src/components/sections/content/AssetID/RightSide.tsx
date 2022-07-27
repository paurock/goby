import React from 'react';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { BackIcon, ethereum, heartIcon, shareIcon } from 'app/assets/Icons';
import { SquareButton } from 'app/theme/components/SquareButton';
import { OpenSeaAndListed } from 'components/OpenSeaAndListed';
import LikesAndViews from 'components/LikesAndViews';
import { GreenBtn } from 'components/Buttons/GreenBtn';

const lightGray = {
  fontSize: '14px',
  fontWeight: '500',
  opacity: '0.4',
} as const;

interface RightSideProps {
  colors: string;
  bgColors: string;
  btnClick: () => void;
  pageName: string;
}

export const RightSide = ({
  colors,
  bgColors,
  btnClick,
  pageName,
}: RightSideProps) => {
  const bg = useColorModeValue('rgba(255, 255, 255, 1)', 'rgba(48, 49, 60, 1)');
  const color = useColorModeValue('rgba(0, 0, 0, 1)', 'rgba(231, 255, 241, 1)');

  return (
    <VStack w="full" maxW={['100%', '50%']} pl="15px" zIndex="100">
      {/* TOP SIDE  */}
      <VStack w="full" mt="64px" mx="15px" maxW="510px">
        <VStack w="full">
          <Box w="full">
            <IconButton
              aria-label="Go Back"
              icon={<BackIcon fill={bg} stroke={color} />}
              bg="none"
              _hover={{ bg: 'none' }}
            />
          </Box>
          <Text w="full" maxH="20px" mb="0" pb="0" sx={{ color: colors }}>
            Project name
          </Text>
          <Heading
            as="h2"
            w="full"
            maxH="44px"
            sx={{ fontSize: '40px', fontWeight: '400' }}
          >
            Asset ID
          </Heading>
          <Flex w="full">
            <HStack w="full">
              <OpenSeaAndListed bgColors={bgColors} />
              <Box w="full"></Box>
              <LikesAndViews bgColors={bgColors} />
            </HStack>
          </Flex>
          <Divider />
        </VStack>
        <VStack w="full">
          <HStack w="full" mt="24px">
            <Text w="30%" sx={lightGray}>
              Desired price
            </Text>
            <Text w="20%" sx={lightGray}>
              Desired dates
            </Text>
            <Text w="25%" sx={lightGray}>
              Desired APR
            </Text>
          </HStack>
          <HStack w="full" pt="10px" pb="24px">
            <HStack w="30%">
              <Icon
                //@ts-ignore
                as={ethereum}
              />
              <Text w="full">154.00 ETH</Text>
            </HStack>
            <Text w="20%">40 days</Text>
            <Text w="25%">0.5%</Text>
          </HStack>
          <HStack w="full">
            <Flex w="full">
              <GreenBtn
                height="48px"
                text={
                  pageName === 'Lend' ? 'Make offer' : 'Create borrow terms'
                }
                onClick={btnClick}
              />
            </Flex>
            <Center w="57px" h="48px" bg={bgColors} borderRadius="4px">
              <SquareButton
                bg={bgColors}
                widthBtn="20px"
                heightBtn="20px"
                ariaLabel="Like"
                icon={heartIcon}
                stroke={colors}
                hoverColorStroke={'red'}
                hoverColorFill={'red'}
                action={() => console.log('clicked')}
              />
            </Center>
            <Center w="57px" h="48px" bg={bgColors} borderRadius="4px">
              <SquareButton
                bg={bgColors}
                widthBtn="20px"
                heightBtn="20px"
                ariaLabel="Share"
                icon={shareIcon}
                stroke={colors}
                hoverColorStroke={'black'}
                action={() => console.log('clicked')}
              />
            </Center>
          </HStack>
        </VStack>
      </VStack>
      {/* LOW SIDE  */}
      {/*  <VStack>
        <Box pt="22px">
          <Image alt="image" width="510px" height="647px" src={imageBg.src} />
        </Box>
        <Box pt="22px">
          <Image alt="image" width="510px" height="647px" src={imageBg.src} />
        </Box>
      </VStack>*/}
    </VStack>
  );
};
