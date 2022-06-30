import { Flex, Box, useColorMode, Heading } from "@chakra-ui/react";
import { VFlex, useAssets } from "../../../shared";
import { TabsMenu } from "./TabsMenu";

const TitleSection = ({
  pageName = "Collateral",
}: {
  pageName: string;
}): JSX.Element => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="full" bg={background} justifyContent="center">
      <Flex
        w="full"
        maxH="249px"
        h={["fit-content", "847px", "847px", "847px", "860px"]}
        mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
        px={["16px", "30px", "36px"]}
        pt={["32px", "64px"]}
        color={text}
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
                as="h1"
              >
                {pageName}
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
          <TabsMenu text={text} colorMode={colorMode} pageName={pageName} />
        </VFlex>
      </Flex>
    </Flex>
  );
};
export default TitleSection;
