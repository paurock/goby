import { Flex, Container, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { VFlex, Img, useAssets } from "../../shared";

const Tabs = ({ text, collateral, loanLightStore }) => (
  <Flex maxH="36px" maxW="216px" justify="start" gap="32px">
    <motion.div
      style={{
        display: "flex",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "16px",
        color: text,
        gap: "12px",
        borderBottom: "2px solid #6334B1",
        height: "46px",
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
        display: "flex",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "16px",
        color: text,
        gap: "12px",
        width: "25px",
        height: "25px",
      }}
    >
      <Img src={loanLightStore} />
      Loans
    </motion.div>
  </Flex>
);

const Heading = () => {
  const { text, collateral, loans } = useAssets();
  const [selectedMenu, setSelectedMenu] = useState("Collateral");
  return (
    <Flex
      bg="#F4F5FF"
      h={["fit-content", "847px", "847px", "847px", "860px"]}
      w="100%"
      maxH="249px"
      color="#010504"
    >
      <Container
        maxW={["none", "750px", "970px", "1100px", "1440px"]}
        px={["16px", "16px", "16px", "30px", "120px"]}
        pt={["32px", "32px", "32px", "54px", "64px"]}
      >
        <VFlex>
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
            mb="60px"
            fontFamily="Inter"
            fontSize="20px"
            lineHeight="100%"
            color={text}
            opacity="0.6"
          >
            Offer loans to other users on their non-fungible tokens
          </Flex>
          <Tabs collateral={collateral} loanLightStore={loans} text={text} />
        </VFlex>
      </Container>
    </Flex>
  );
};
export default Heading;
