import React, { useState } from 'react';
import { Flex, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { Img } from 'shared';
import image1 from '/src/app/assets/rectangle_240x229.png';
import imgage2 from '/src/app/assets/rectangle_240x319.png';
import TileHover from './TileHover';
import UnderTiles from './UnderTiles';

export default function Tiles(): JSX.Element {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        mx={['16px', '16px', '16px', '80px', '195px', '195px']}
        maxW="1050px"
      >
        <SimpleGrid w="full" columns={[1, 2, 3, 4]} gap="30px" mt="24px">
          <Skeleton w="full" maxH="229px">
            <Img src={image1.src} w="full" maxH="229px" />
          </Skeleton>
          <Skeleton w="full" h="319px">
            <Img src={image1.src} w="full" maxH="319px" />
          </Skeleton>
          <Skeleton w="full" maxH="229px">
            <Img src={image1.src} w="full" maxH="229px" />
          </Skeleton>
          <Skeleton w="full" maxH="229px">
            <Img src={image1.src} w="full" maxH="229px" />
          </Skeleton>
          <Skeleton w="full" maxH="319px">
            <Img src={image1.src} w="full" maxH="319px" />
          </Skeleton>
          <Flex
            h="full"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            sx={{
              flexWrap: 'wrap',
              position: 'relative',
            }}
          >
            <Skeleton w="full" maxH="319px">
              <Img src={image1.src} w="full" maxH="319px" />
            </Skeleton>
            {isHover ? (
              <>
                <TileHover />
                <UnderTiles />
              </>
            ) : null}
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
