import { Flex, Container, VStack, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { VFlex, Img, useAssets } from '../../shared';

const tabsStyle = {
  display: 'flex',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '16px',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  height: '36px',
  gap: '12px',
};

const Tabs = ({ text, collateral, loanLightStore, flag }) => (
  <Flex maxH="36px" justify="start" gap="32px">
    <motion.div
      style={{
        ...tabsStyle,
        color: text,
        borderBottom: '2px solid #6334B1',
      }}
    >
      <Img
        src={collateral}
        w="25px"
        h="25px"
        justifySelf="start"
        alignSelf="start"
      />
      Collateral
    </motion.div>
    <motion.div
      style={{
        ...tabsStyle,
        color: text,
      }}
    >
      <Img
        src={loanLightStore}
        w="25px"
        h="25px"
        justifySelf="start"
        alignSelf="start"
      />
      Loans
    </motion.div>
    <motion.div
      style={{
        ...tabsStyle,
        color: text,
      }}
    >
      <Img src={flag} w="25px" h="25px" justifySelf="start" alignSelf="start" />
      My offers
    </motion.div>
  </Flex>
);

const TitleSection = () => {
  const { text, collateral, loans, flag } = useAssets();
  const [selectedMenu, setSelectedMenu] = useState('Collateral');
  return (
    <Container
      bg="#F4F5FF"
      maxW="full"
      maxH="249px"
      h={['fit-content', '847px', '847px', '847px', '860px']}
      px={['16px', '16px', '16px', '30px', '120px']}
      pt={['32px', '32px', '32px', '64px', '64px']}
      color="#010504"
    >
      <VFlex
        mx={['16px', '16px', '16px', '195px', '245px']}
        justify="space-between"
        h="185px"
      >
        <Box>
          <Flex
            fontFamily="Inter"
            fontWeight="400"
            fontSize="48px"
            lineHeight="100%"
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
        <Tabs
          collateral={collateral}
          loanLightStore={loans}
          text={text}
          flag={flag}
        />
      </VFlex>
    </Container>
  );
};
export default TitleSection;
