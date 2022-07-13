/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */

import {
  Flex,
  Button,
  Img,
  useColorMode,
  useDisclosure,
  Container,
  Box as Div,
  IconButton,
  Divider,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import React, { useState } from 'react';

import { links, useAssets, VFlex, DropdownMenu } from 'shared';

export const Header: React.FC = () => {
  const {
    logo,
    toggler,
    text,
    burger,
    logoMob,
    burgerClose,
    backgroundBurger,
    ethereum,
    lightModeMob,
    darkModeMob,
    textInverted,
    polygon,
    bnbChain,
    mobileHeaderBg,
    startWithGoby,
    bellLight,
  } = useAssets();

  const currencies = [
    { caption: 'Ethereum', imgSrc: ethereum },
    { caption: 'Poligon', imgSrc: polygon },
    { caption: 'BNB Chain', imgSrc: bnbChain },
  ];

  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  const [showCurrencyPopup, setShowCurrencyPopup] = useState(false);
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  const changeCurrency = (): void => {
    setShowCurrencyPopup(!showCurrencyPopup);
  };
  return (
    <Container maxW="1600px" px={['16px', '16px', '20px', '32px']}>
      <Flex minH="80px">
        <Flex
          as="header"
          gap="32px"
          justify="space-between"
          align="center"
          display={['none', 'none', 'none', 'flex', 'flex']}
          fontFamily="body"
          fontSize="16px"
          lineHeight="6"
          color={text}
          w="full"
          h="80px"
        >
          <Link href="/">
            <Img src={logo} sx={{ cursor: 'pointer' }} />
          </Link>
          <Flex as="nav" gap="32px" sx={{ alignItems: 'center' }}>
            {links.map((link) => (
              <Flex
                key={link.href}
                mt="2"
                _hover={{
                  opacity: '0.8',
                  textDecor: 'none',
                  borderBottom: '2px solid #6334B1',
                }}
                sx={{
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Link href={link.href}>{link.name}</Link>
              </Flex>
            ))}
            <Flex as="div" gap="20px" sx={{ alignItems: 'center' }}>
              {/* Devider  */}
              <Center height="80px">
                <Divider orientation="vertical" />
              </Center>
              <IconButton
                aria-label="notifications"
                rounded="20px"
                zIndex="4"
                icon={<Img src={toggler} onClick={toggleColorMode} />}
              />
              {/* Devider  */}
              <Center height="80px">
                <Divider orientation="vertical" />
              </Center>
              <IconButton
                aria-label="notifications"
                rounded="20px"
                zIndex="4"
                icon={<Img src={bellLight} />}
              />
              {/* Devider  */}
              <Center height="80px">
                <Divider orientation="vertical" />
              </Center>

              <VFlex onClick={changeCurrency}>
                <DropdownMenu currencies={currencies} />
              </VFlex>
            </Flex>
            <Button
              background="green"
              fontWeight="normal"
              color="black"
              px="16px"
              mt="0"
            >
              Connect wallet
            </Button>
          </Flex>
        </Flex>
        <Flex
          as="header"
          display={[
            hidden ? 'flex' : 'none',
            hidden ? 'flex' : 'none',
            hidden ? 'flex' : 'none',
            'none',
            'none',
          ]}
          justify="space-between"
          pos={hidden ? 'fixed' : 'absolute'}
          ml="-20px"
          w="100%"
          p={['32px 16px', '32px 16px', '32px 32px', '32px 16px', '32px 16px']}
          zIndex="228"
          sx={{ backgroundColor: 'background' }}
        >
          <Div
            pos="absolute"
            w="full"
            h="full"
            bgColor={mobileHeaderBg}
            opacity="0.84"
            left="0"
            blur="16px"
            backdropBlur="4px"
            top="0"
            mb="-20px"
          />
          <Img src={logoMob} zIndex="4" />
          <Flex gap="16px">
            <IconButton
              aria-label="notifications"
              rounded="20px"
              zIndex="4"
              icon={<Img src={bellLight} />}
            />
            <Img
              src={hidden ? burger : burgerClose}
              onClick={() => setHidden((prev) => !prev)}
              {...getButtonProps()}
              zIndex="4"
              pr="20px"
            />
          </Flex>
        </Flex>
        <motion.div
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? '100%' : 0 }}
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'fixed',
            right: '0',
            top: '0',
            fontSize: '40px',
            color: text,
            gap: '32px',
            fontFamily: 'Grotesk',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: backgroundBurger,
            zIndex: '3',
          }}
        >
          <Flex
            as="header"
            w="full"
            display={[
              hidden ? 'none' : 'flex',
              hidden ? 'none' : 'flex',
              hidden ? 'none' : 'flex',
              'none',
              'none',
            ]}
            justify="space-between"
            p={[
              '32px 16px',
              '32px 16px',
              '32px 32px',
              '32px 16px',
              '32px 16px',
            ]}
          >
            <Img src={logoMob} zIndex="4" />
            <Img
              src={hidden ? burger : burgerClose}
              onClick={() => setHidden((prev) => !prev)}
              {...getButtonProps()}
              zIndex="4"
              pr="20px"
            />
          </Flex>

          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
          <Flex
            h="50px"
            w="100px"
            rounded="20px"
            bgColor={textInverted}
            gap="30px"
            p="10px"
          >
            <Img
              src={lightModeMob}
              onClick={() => setColorMode('light')}
              rounded="20px"
              fill={colorMode === 'dark' ? '#fff' : '#000'}
            />
            <Img
              src={darkModeMob}
              onClick={() => setColorMode('dark')}
              rounded="20px"
            />
          </Flex>
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 8, repeat: Infinity }}
            src={startWithGoby}
          />
        </motion.div>
      </Flex>
    </Container>
  );
};
