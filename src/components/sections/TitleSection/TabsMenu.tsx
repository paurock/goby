import {
  Icon,
  ColorMode,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import NextLink from 'next/link';
import { cardIcon, collatIcon, flagIcon } from 'app/assets/Icons';

type TabType = {
  name: string;
  icon: object;
};
const tabNames: Array<TabType> = [
  { name: 'Collateral', icon: collatIcon },
  { name: 'Loan', icon: cardIcon },
  // { name: "My Offers", icon: flagIcon },
];

const tabStyle: object = {
  justifyContent: 'space-around',
  maxWidth: '115px',
  borderBottom: 'none',
  marginBottom: '14px',
};

type TabsCompType = {
  text: string;
  colorMode: ColorMode;
  pageName: string;
};

const menuItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '16px',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  height: '36px',
  cursor: 'pointer',
  textDecoration: 'none',
};

export const TabsMenu = ({ text, pageName }: TabsCompType): JSX.Element => {
  const [isHover, setIsHover] = useState<number>(-1);
  const color: string = useColorModeValue('#6334B1', '#28FF98');

  const showBottomBorder = (): object => ({
    borderBottom: `2px solid ${color}`,
  });

  // const pathName = (): string =>
  //   router.pathname.replace(/\s+/g, "").toLowerCase();

  const linkName = (tabName: string): string =>
    `/${tabName}`.replace(/\s+/g, '').toLowerCase();

  const pageNameNormal = (): string => `/${pageName}`.toLowerCase();

  const isActiveLink = (tabName: string): boolean =>
    pageNameNormal() === linkName(tabName);

  return (
    <Flex maxW="1600px" maxH="36px" w="full">
      <Flex gap="32px">
        {tabNames.map((tab, i) => (
          <motion.div
            key={i}
            //@ts-ignore
            style={
              isActiveLink(tab.name) && {
                ...menuItemStyle,
                borderBottom: `2px solid ${color}`,
              }
            }
            whileHover={showBottomBorder()}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => setIsHover(-1)}
          >
            <NextLink href={linkName(tab.name)} passHref>
              <Flex key={i} sx={tabStyle}>
                <Icon
                  key={i}
                  //@ts-ignore
                  as={tab.icon}
                  w="25px"
                  h="25px"
                  mr="10px"
                  stroke={isActiveLink(tab.name) ? color : text}
                />
                <Link
                  _hover={{ textDecoration: 'none', color }}
                  color={isActiveLink(tab.name) ? color : text}
                  sx={{ fontSize: '16px', fontFamily: 'Inter' }}
                >
                  {tab.name}
                </Link>
              </Flex>
            </NextLink>
          </motion.div>
        ))}
      </Flex>
    </Flex>
  );
};
