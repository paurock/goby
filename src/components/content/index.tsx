import { Flex, Grid, SimpleGrid } from '@chakra-ui/react';
import { Img } from 'shared';
import { img1 } from '../../app/assets/rectangle_240x229.png';
import { img2 } from '../../app/assets/rectangle_240x319.png';
export const TabContent = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="5" mt="24px">
      <Img src={img1} w="full" h="229px"></Img>
      <Img src={img1} w="full" h="229px"></Img>
      <Img src={img2} w="full" h="319px"></Img>
      <Img src={img1} w="full" h="229px"></Img>
      <Img src={img2} w="full" h="319px"></Img>
      <Img src={img1} w="full" h="229px"></Img>
      <Img src={img2} w="full" h="319px"></Img>
    </Grid>
  );
};
