import { Flex, Container, Box, useColorMode } from '@chakra-ui/react';
import { VFlex, useAssets } from '../../../shared';

import { TabsComponent } from './TabsComponent';

const TitleSection = () => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      minH="100%"
      maxW="full"
      p="0"
      m="0" 
    >
      <Flex
        bg={background}
        maxW="full"
        maxH="249px"
        h={['fit-content', '847px', '847px', '847px', '860px']}
        px={['16px', '16px', '16px', '120px', '120px']}
        pt={['32px', '32px', '32px', '64px', '64px']}
        color={text}
      >
        <VFlex
          mx={['16px', '16px', '16px', '80px', '80px', '195px']}
          justify="space-between"
          maxH="185px" 
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
          <TabsComponent text={text} colorMode={colorMode} />
        </VFlex>
      </Flex>
    </Container>
  );
};
export default TitleSection;
