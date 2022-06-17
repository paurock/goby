import {
  Flex,
  Container,
  Box,
  Icon,
  useColorMode,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { VFlex, useAssets } from '../../../shared';

const tabsStyle = {
  display: 'flex',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '16px',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  height: '36px',
  gap: '12px',
  cursor: 'pointer',
};

const TitleSection = () => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      bg={background}
      maxW="full"
      maxH="249px"
      h={['fit-content', '847px', '847px', '847px', '860px']}
      px={['16px', '16px', '16px', '30px', '120px']}
      pt={['32px', '32px', '32px', '64px', '64px']}
      color={text}
    >
      <VFlex
        mx={['16px', '16px', '16px', '80px', '80px', '195px']}
        justify="space-between"
        h="185px"
      >
        <Box>
          <Flex
            fontFamily="Inter"
            fontWeight="400"
            fontSize="48px"
            lineHeight="100%"
            color={text}
          >
            Lend
          </Flex>
          <Flex
            mt="12px"
            fontFamily="Inter"
            fontSize="20px"
            lineHeight="100%"
            color={text}
            opacity="0.6"
          >
            Offer loans to other users on their non-fungible tokens
          </Flex>
        </Box>
        <TabsComp text={text} colorMode={colorMode} />
      </VFlex>
    </Container>
  );
};
export default TitleSection;

const TabsComp = ({ text, colorMode }) => {
  const hoverHandler = () => {
    return colorMode === 'light' ? '#6334B1' : '#28FF98';
  };
  const [isHover, setIsHover] = useState(0);

  return (
    <Flex maxH="36px" justify="start" gap="32px">
      <Tabs isFitted isLazy align="start">
        <TabList>
          <motion.div
            style={{
              ...tabsStyle,
              color: text,
            }}
            whileHover={
              colorMode === 'light'
                ? { borderBottom: '2px solid #6334B1' }
                : { borderBottom: '2px solid #28FF98' }
            }
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(0)}
          >
            <Tab
              sx={{
                justifyContent: 'space-around',
              }}
            >
              <Icon
                as={collatIcon}
                w="25px"
                h="25px"
                stroke={isHover === 1 ? hoverHandler() : text}
              />
              Collateral
            </Tab>
          </motion.div>

          <motion.div
            style={{
              ...tabsStyle,
              color: text,
            }}
            whileHover={
              colorMode === 'light'
                ? { borderBottom: '2px solid #6334B1' }
                : { borderBottom: '2px solid #28FF98' }
            }
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(0)}
          >
            <Tab
              sx={{
                justifyContent: 'space-around',
              }}
            >
              <Icon
                as={cardIcon}
                w="25px"
                h="25px"
                stroke={isHover === 2 ? hoverHandler() : text}
              />
              Loans
            </Tab>
          </motion.div>

          <motion.div
            style={{
              ...tabsStyle,
              color: text,
            }}
            whileHover={
              colorMode === 'light'
                ? { borderBottom: '2px solid #6334B1' }
                : { borderBottom: '2px solid #28FF98' }
            }
            onMouseEnter={() => setIsHover(3)}
            onMouseLeave={() => setIsHover(0)}
          >
            <Tab
              sx={{
                justifyContent: 'space-around',
              }}
            >
              <Icon
                as={flagIcon}
                w="25px"
                h="25px"
                stroke={isHover === 3 ? hoverHandler() : text}
              />
              My offers
            </Tab>
          </motion.div>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

//Collateral Icon
const collatIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.08331 8.33333C7.77367 8.33333 8.33331 7.77368 8.33331 7.08333C8.33331 6.39297 7.77367 5.83333 7.08331 5.83333C6.39296 5.83333 5.83331 6.39297 5.83331 7.08333C5.83331 7.77368 6.39296 8.33333 7.08331 8.33333Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5L13.3334 8.33333L4.16669 17.5"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//SVG ICONS
//CARDICON
const cardIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 3.33333H2.50001C1.57954 3.33333 0.833344 4.07952 0.833344 4.99999V15C0.833344 15.9205 1.57954 16.6667 2.50001 16.6667H17.5C18.4205 16.6667 19.1667 15.9205 19.1667 15V4.99999C19.1667 4.07952 18.4205 3.33333 17.5 3.33333Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.833344 8.33333H19.1667"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//FLAG ICON
const flagIcon = (props) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33334 12.5C3.33334 12.5 4.16668 11.6667 6.66668 11.6667C9.16668 11.6667 10.8333 13.3333 13.3333 13.3333C15.8333 13.3333 16.6667 12.5 16.6667 12.5V2.50001C16.6667 2.50001 15.8333 3.33334 13.3333 3.33334C10.8333 3.33334 9.16668 1.66667 6.66668 1.66667C4.16668 1.66667 3.33334 2.50001 3.33334 2.50001V12.5Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33334 18.3333V12.5"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
