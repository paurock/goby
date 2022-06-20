import { Container, Flex,  Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Img } from 'shared';
import logo from './assets/logo.svg';

export const Footer = () => {
  return (
    <Container
      w="full"
      maxW="1600px"
      px="0"
      sx={{
        background: 'black',
      }}
    >
      <Flex
        as="footer"
        gap="32px"
        sx={{
          justify: 'space-around',
          fontFamily: 'body',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
        w="full"
        maxW="1050px"
        minH="332px"
      >
        {/* Left Column Logo */}
        <Flex
          w={['full', 'full', 'full', '505px', '505px']}
          flexDirection="column"
          mt="75px"
          justifyContent={['center', 'center', 'center', 'flex-start']}
        >
          <Flex
            mb="18px"
            justifyContent={['center', 'center', 'center', 'flex-start']}
          >
            <NextLink  href="#" passHref>
            <Link>
              <Img src={logo.src} sx={{ cursor: 'pointer' }} />
            </Link>
            </NextLink>
          </Flex>
          <Flex
            pr="50px"
            justifyContent={['center', 'center', 'center', 'flex-start']}
          >
            <Text color="lightGreen">
              American online non-fungible token (NFT) marketplace headquartered
              in New York City.
            </Text>
          </Flex>
        </Flex>
        {/* Right Column Links */}
        <Flex
          mt="75px"
          w={['full', 'full', 'full', '505px', '505px']}
          justifyContent={['center', 'center', 'center', 'flex-start']}
        >
          <Box
            sx={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'lightGreen',
            }}
          >
            <Text sx={{ marginBottom: '10px', fontWeight: '500' }}></Text>
            <Flex minW="170px">
              <ul
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  fontWeight: '400',
                }}
              >
                <li style={{ margin: '20px 0' }}> </li>
                <li style={{ margin: '20px 0' }}> </li>
                <li style={{ margin: '20px 0' }}> </li>
              </ul>
            </Flex>
          </Box>
          <Box
            sx={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'lightGreen',
            }}
          >
            <Text sx={{ marginBottom: '10px', fontWeight: '500' }}>Lend</Text>
            <Flex minW="170px">
              <ul
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  fontWeight: '400',
                }}
              >
                <li style={{ margin: '20px 0' }}>
                <NextLink  href="#" passHref><Link  >Collateral</Link></NextLink>
                </li>
                <li style={{ margin: '20px 0' }}>
                <NextLink  href="#" passHref><Link  >Loans</Link></NextLink>
                </li>
                <li style={{ margin: '20px 0' }}>
                <NextLink  href="#" passHref><Link  >Offers</Link></NextLink>
                </li>
              </ul>
            </Flex>
          </Box>
          <Box
            sx={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'lightGreen',
            }}
          >
            <Text sx={{ marginBottom: '10px', fontWeight: '500' }}>
              Support
            </Text>
            <Flex minW="170px">
              <ul
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  fontWeight: '400',
                  margin: '10px 0 ',
                }}
              >
                <li style={{ margin: '20px 0' }}>
                <NextLink  href="#" passHref><Link>FAQ</Link></NextLink>
                </li>
                <li style={{ margin: '20px 0' }}>
                <NextLink  href="#" passHref><Link>Telegram</Link></NextLink>
                </li>
              </ul>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
