import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  useColorMode,
} from '@chakra-ui/react';
import { useAssets, VFlex } from 'shared';

const Toolbar = () => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="full"
      maxH="249px"
      h={['fit-content', '847px', '847px', '847px', '860px']}
      px={['16px', '16px', '16px', '30px', '120px']}
      pt={['10px', '10px', '10px', '20px', '30px']}
      color={text}
    >
      <VFlex
        mx={['16px', '16px', '16px', '80px', '80px', '195px']}
        justify="space-between"
        h="185px"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </VFlex>
    </Container>
  );
};
export default Toolbar;
