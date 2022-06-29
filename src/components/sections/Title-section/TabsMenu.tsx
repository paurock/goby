import {
  Icon,
  ColorMode,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

import NextLink from "next/link";
import { useRouter, NextRouter } from "next/router";
import { cardIcon, collatIcon, flagIcon } from "app/assets/Icons";

type TabType = {
  name: string;
  icon: object;
};
const tabNames: Array<TabType> = [
  { name: "Collateral", icon: collatIcon },
  { name: "Loan", icon: cardIcon },
  // { name: "My Offers", icon: flagIcon },
];

const tabStyle: object = {
  justifyContent: "space-around",
  maxWidth: "115px",
  borderBottom: "none",
  marginBottom: "14px",
};

type TabsCompType = {
  text: string;
  colorMode: ColorMode;
};

export const TabsMenu = ({ text }: TabsCompType): JSX.Element => {
  const [isHover, setIsHover] = useState<number>(-1);
  const router: NextRouter = useRouter();
  const color: string = useColorModeValue("purple", "green");

  const showBottomBorder = (): object => ({
    borderBottom: `2px solid ${color}`,
  });

  const pathName = (): string =>
    router.pathname.replace(/\s+/g, "").toLocaleLowerCase();
  const linkName = (linkName: string): string =>
    `/${linkName}`.replace(/\s+/g, "").toLocaleLowerCase();

  const isActiveLink = (tabName: string): boolean =>
    pathName() === linkName(tabName);

  return (
    <Flex maxW="1600px" maxH="36px" w="full">
      <Flex gap="32px">
        {tabNames.map((tab, i) => (
          <motion.div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "16px",
              width: "fit-content",
              whiteSpace: "nowrap",
              height: "36px",
              cursor: "pointer",
              textDecoration: "none",
            }}
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
                  stroke={
                    isHover === i ||
                    router.pathname.replace(/\s+/g, "") ==
                      `/${tab.name}`.replace(/\s+/g, "")
                      ? color
                      : text
                  }
                />
                <Link
                  _hover={{ textDecoration: "none", color }}
                  color={isActiveLink(tab.name) ? color : text}
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
