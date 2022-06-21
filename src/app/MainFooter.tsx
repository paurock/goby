/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Flex, Text, Link, chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import { Img } from "shared";
import logo from "./assets/logo.svg";

// eslint-disable-next-line max-lines-per-function
export const MainFooter = () => (
  <>
    <Flex
      as="div"
      gap="32px"
      sx={{
        justify: "space-around",
        fontFamily: "body",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
      w="full"
      maxW="1050px"
      minH="332px"
    >
      {/* Left Column block */}
      <Flex
        w={["full", "full", "full", "45%", "45%"]}
        flexDirection="column"
        justifyContent={["center", "center", "center", "flex-start"]}
        alignItems={["center", "center", "center", "flex-start"]}
        mt="75px"
      >
        <Flex
          mb="18px"
          justifyContent={["center", "center", "center", "flex-start"]}
        >
          <NextLink href="#" passHref>
            <Link>
              <Img src={logo.src} sx={{ cursor: "pointer" }} />
            </Link>
          </NextLink>
        </Flex>
        <Flex pr={[0, 0, 0, "50px"]} mb={["20px", "30px", "40px", "50px"]}>
          <Text
            color="#E7FFF1"
            w="full"
            maxW="50vw"
            justifyContent={["center", "center", "center", "flex-start"]}
            textAlign={["center", "center", "center", "left"]}
          >
            American online non-fungible token (NFT) marketplace headquartered
            in New York City.
          </Text>
        </Flex>
      </Flex>
      {/* Right Column Links */}
      <Flex
        pl="15%"
        mt="70px"
        w={["full", "full", "full", "45%", "45%"]}
        justifyContent={["center", "center", "center", "flex-start"]}
      >
        {/* 0 column */}
        <Box
          display={["none", "none", "none", "initial", "initial"]}
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#E7FFF1",
            opacity: 0,
          }}
        >
          <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Lend</Text>
          <Flex minW="170px">
            <ul
              style={{
                fontSize: "16px",
                letterSpacing: "0.02em",
                fontWeight: "400",
                listStyleType: "none",
              }}
            >
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Collateral</Link>
                </NextLink>
              </li>
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Loans</Link>
                </NextLink>
              </li>
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Offers</Link>
                </NextLink>
              </li>
            </ul>
          </Flex>
        </Box>
        {/* 1st column */}
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#E7FFF1",
          }}
        >
          <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Lend</Text>
          <Flex minW="170px">
            <ul
              style={{
                fontSize: "16px",
                letterSpacing: "0.02em",
                fontWeight: "400",
                listStyleType: "none",
              }}
            >
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Collateral</Link>
                </NextLink>
              </li>
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Loans</Link>
                </NextLink>
              </li>
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link>Offers</Link>
                </NextLink>
              </li>
            </ul>
          </Flex>
        </Box>
        {/* 2d column */}
        <Box
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#E7FFF1",
          }}
        >
          <Text sx={{ marginBottom: "10px", fontWeight: "500" }}>Support</Text>
          <Flex minW="170px">
            <ul
              style={{
                fontSize: "16px",
                letterSpacing: "0.02em",
                fontWeight: "400",
                listStyleType: "none",
              }}
            >
              <li style={{ margin: "20px 0" }}>
                <NextLink href="#" passHref>
                  <Link isExternal>FAQ</Link>
                </NextLink>
              </li>
              <li style={{ margin: "20px 0" }}>
                <NextLink href="https://t.me/goby_network" passHref>
                  <Link isExternal>Telegram</Link>
                </NextLink>
              </li>
            </ul>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    <chakra.hr
      color="#222228"
      opacity="0.1"
      display={["none", "none", "none", "block", "block"]}
    />
  </>
);