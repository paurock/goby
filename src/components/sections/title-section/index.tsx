import { Flex, Box, useColorMode, Heading } from "@chakra-ui/react";
import { VFlex, useAssets } from "../../../shared";

import { TabsMenu } from "./TabsMenu";

const TitleSection: React.FC = () => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={background}
      maxW="1600px"
      maxH="249px"
      h={["fit-content", "847px", "847px", "847px", "860px"]}
      px={["16px", "16px", "16px", "120px", "120px"]}
      pt={["32px", "64px", "64px", "64px", "64px"]}
      color={text}
      margin="0 auto"
    >
      <VFlex
        mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
        justify="space-between"
        maxH="185px"
      >
        <Box>
          <Flex>
            <Heading 
              fontFamily="Inter"
              fontWeight="400"
              fontSize="48px"
              lineHeight="100%"
              color={text}
              mt="12px"
              mb="12px" 
              as="h1">
                Lend
            </Heading>
          </Flex>
          <Flex
            mt="12px"
            fontFamily="Inter"
            fontSize="20px"
            lineHeight="100%"
            color={text}
            opacity="0.6"
            mb="32px"
          >
            Offer loans to other users on their non-fungible tokens
          </Flex>
        </Box>
        <TabsMenu text={text} colorMode={colorMode} />
      </VFlex>
    </Flex>
  );
};
export default TitleSection;
