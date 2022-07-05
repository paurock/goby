import { Flex, Text, Link, VStack } from '@chakra-ui/react';
import { Img } from 'shared';
import logo from '../assets/logo.svg';
import NextLink from 'next/link';

{
  /* Left Logo block */
}
export const MainFooterLeft = (): JSX.Element => (
  <VStack w="full" h="full" bg="black.300" alignItems="flex-start">
    <Flex w="full" mb="35px">
      <NextLink href="#" passHref>
        <Link>
          <Img src={logo.src} sx={{ cursor: 'pointer' }} />
        </Link>
      </NextLink>
    </Flex>
    <Flex w="full">
      <Text color="text.900">
        American online non-fungible token (NFT) marketplace headquartered in
        New York City.
      </Text>
    </Flex>
  </VStack>
);
