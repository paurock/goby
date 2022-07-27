import {
  Box,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Tag,
  Text,
  VStack,
  Flex,
  GridItem,
  useColorModeValue,
  Link,
  Center,
} from '@chakra-ui/react';
import { ethereum, moreRound } from 'app/assets/Icons';
import React from 'react';
import { Img } from 'shared';
import image from '/src/app/assets/square_img_150x150.png';
import NextLink from 'next/link';
import { GreenBtn } from 'components/Buttons/GreenBtn';

export type loanTableType = {
  status: string;
  getAsset?: boolean;
  isShowBtn?: boolean;
  pageName: string;
};

export const SingleLoan = ({
  status,
  isShowBtn = false,
  pageName,
}: loanTableType) => {
  const strokeColor = useColorModeValue('black.100', 'lightGreen.100');
  const color: string = useColorModeValue('purple', 'green');
  const openStateColor: string = useColorModeValue('lightgreen', 'green.200');
  const overdueStateColor: string = useColorModeValue(
    'redcolor.100',
    'redcolor.900'
  );
  const closedStateColor: string = useColorModeValue('lightgray', 'gray');

  const setColorScheme = (status: string): string => {
    switch (status) {
      case 'Open':
        return openStateColor;
      case 'Overdue':
        return overdueStateColor;
      case 'Closed':
        return closedStateColor;
      default:
        return 'gray';
    }
  };
  return (
    <Flex w="full" pt="24px" pb="24px" flexWrap={['wrap', 'nowrap']}>
      {/* IMAGE  */}
      <Box
        w="full"
        maxW={['100%', '150px']}
        m="0"
        mb={['24px', 0]}
        position="relative"
      >
        <Box
          position="absolute"
          right="12px"
          top="12px"
          display={['block', 'none']}
        >
          <IconButton
            bg="none"
            aria-label="more"
            //@ts-ignore
            as={moreRound}
            w="40px"
            h="40px"
            stroke={strokeColor}
            fill="white"
            _hover={{ background: 'none' }}
            onClick={() => console.log('click')}
          />
        </Box>
        <Img alt="image" width="100%" objectFit="cover" src={image.src} />
      </Box>
      <VStack w="full" px={[0, '24px']} sx={{ alignItems: 'flex-start' }}>
        {/* NAME AND STATUS  */}
        <HStack w="full">
          <Heading as="h3" sx={{ fontSize: '20px' }} minW="fit-content">
            Asset ID
          </Heading>
          <Tag
            maxH="22px"
            minW="fit-content"
            //colorScheme={setColorScheme(status)}
            sx={{
              backgroundColor: setColorScheme(status),
              opacity: 0.7,
            }}
          >
            <Center
              w="fit-content"
              sx={{ backgroundColor: setColorScheme(status) }}
            >
              {status.toUpperCase()}
            </Center>
          </Tag>
          <Box w="full"></Box>
          <IconButton
            bg="none"
            aria-label="more"
            //@ts-ignore
            as={moreRound}
            w="40px"
            h="40px"
            stroke={strokeColor}
            fill="transparent"
            _hover={{ background: 'none' }}
            onClick={() => console.log('click')}
            display={['none', 'block']}
          />
        </HStack>
        <HStack w="full" mb="24px">
          <Text as="span" sx={{ fontSize: '14px', opacity: 0.4 }}>
            Borrower:
          </Text>
          <Text
            as="span"
            sx={{
              fontSize: '14px',
              color,
              textTransform: 'lowerCase',
            }}
          >
            <NextLink href="#" passHref>
              <Link _hover={{ textDecoration: 'none' }}>Name of Borrower</Link>
            </NextLink>
          </Text>
        </HStack>
        {/* DETAILS  */}
        <Box h="full"></Box>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} w="full">
          {/* LEFT COLUMN  */}
          <GridItem w="full">
            {/* table-head  */}
            <HStack w="full">
              <Text as="span" w="100px" sx={{ fontSize: '14px', opacity: 0.4 }}>
                Duration
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: '14px', opacity: 0.4 }}>
                APR
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: '14px', opacity: 0.4 }}>
                Loan value
              </Text>
            </HStack>
            {/* table-content  */}
            <HStack>
              <Text as="span" w="100px" sx={{ fontSize: '20px' }}>
                90 days
              </Text>
              <Text as="span" w="100px" sx={{ fontSize: '20px' }}>
                22%
              </Text>
              <Text as="span" sx={{ fontSize: '20px' }}>
                7.35 ETH
              </Text>
            </HStack>
          </GridItem>

          {/* RIGHT COLUMN  */}
          <GridItem
            w="full"
            display="flex"
            justifyContent={['space-between', 'flex-end']}
            pt={['10px', 0]}
          >
            <VStack spacing="0" alignContent="flex-start">
              <Text
                w="full"
                as="span"
                alignContent="flex-start"
                sx={{ fontSize: '14px', opacity: 0.4 }}
              >
                Repayment
              </Text>
              <HStack>
                <Icon
                  //@ts-ignore
                  as={ethereum}
                />
                <Text sx={{ strokeColor }}>84.00 ETH</Text>
              </HStack>
            </VStack>
            {isShowBtn ? (
              <HStack justifyContent={['flex-end']} alignItems={'center'}>
                <Flex justifyContent="flex-end" h="48px" ml="20px">
                  <GreenBtn
                    text={pageName === 'Lend' ? 'Get an asset' : 'Return'}
                    onClick={() => console.log('clicked')}
                  />
                </Flex>
              </HStack>
            ) : null}
          </GridItem>
        </Grid>
      </VStack>
    </Flex>
  );
};
