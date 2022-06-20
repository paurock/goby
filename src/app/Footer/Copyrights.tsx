/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Flex, Link, chakra, Box as Div, Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  VFlex,
} from 'shared';

export const Copyrights = () => (
  <>
    <Flex
      gap="40px"
      py="40px"
      alignSelf="start"
      justify="space-between"
      color="#E7FFF1"
      w="full"
      display={['none', 'none', 'flex', 'flex', 'flex']}
    >
      <Flex gap="40px" opacity="0.4">
        <Text>© 2022 Goby.Network Ltd</Text>
        <Link href="#">Help</Link>
        <Link href="#">Terms</Link>
        {/* <Link href="#">Privacy policy</Link> */}
      </Flex>
      <Flex alignSelf="end" gap="40px">
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>

          <NextLink href="https://twitter.com/GobyNetwork" passHref>
            <Link isExternal>
              Twitter
            </Link>
          </NextLink>
        </Flex>
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>
          <NextLink
            href="https://t.me/goby_network"
            passHref
          >
            <Link isExternal>
              Telegram
            </Link>
          </NextLink>
        </Flex>
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>
          <NextLink
            href="https://t.me/Goby_chat"
            passHref
          >
            <Link isExternal>
              Telegram Chat
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>

    <VFlex
      display={['flex', 'flex', 'none', 'none', 'none']}
      justify="center"
      align="center"
      fontFamily="Inter Medium"
      fontWeight="500"
      fontSize="18px"
      lineHeight="140%"
    >
      <chakra.hr color="#000" />
      <Flex
        justify="space-between"
        color="#e7fff1"
        gap="40px"
        p="32px"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>
          <Link href="https://twitter.com/gobynetwork?s=11&t=WlSPnwPpH-u2WNywzuu-AQ">
            Twitter
          </Link>
        </Flex>
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>
          <Link href="https://t.me/goby_network">Telegram</Link>
        </Flex>
        <Flex justify="center" align="center" gap="8px">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="6" fill="#1D9BF0" />
          </svg>
          <Link href="https://t.me/Goby_chat">Telegram chat</Link>
        </Flex>
      </Flex>
      <Div opacity="0.4">
        <Flex
          justify="space-between"
          color="#e7fff1"
          gap="32px"
          p={['0px', '32px', '32px', '32px', '32px']}
        >
          <Link>Help</Link>
          {/* <Link>Privacy policy</Link> */}
          <Link>Terms</Link>
        </Flex>
      </Div>
      <Text
        color="#e7fff1"
        opacity="0.4"
        mt={['32px', 0, 0, 0, 0]}
        p={['0px', '32px', '32px', '32px', '32px']}
      >
        © 2022 Goby.Network Ltd
      </Text>
    </VFlex>
  </>
);
