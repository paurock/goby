import { Grid, Flex } from '@chakra-ui/react';
import Toolbar from 'components/sections/content/Toolbar';
import { NextPage } from 'next';

const MyOffers: NextPage = () => {
  return (
    <>
      <Toolbar />
      <Flex
        maxW="1600px"
        m="0 auto"
        px={['16px', '16px', '16px', '120px', '120px']}
      >
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="5"
          mt="24px"
          mx={['16px', '16px', '16px', '80px', '80px', '195px']}
          minH="50vh"
        >
          My Offers Page Content
        </Grid>
      </Flex>
    </>
  );
};
export default MyOffers;
