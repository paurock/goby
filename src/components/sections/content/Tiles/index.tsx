import React, { useState } from 'react';
import { Flex, Link, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { Img } from 'shared';
import image1 from '/src/app/assets/rectangle_240x229.png';
import TileHover from './TileHover';
import UnderTiles from './UnderTiles';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';

export default function Tiles(): JSX.Element {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  const url = router.pathname;
  const urlNoLastEl = url.substring(0, url.lastIndexOf('/'));

  return (
    <Flex w="full" justifyContent="center">
      <Flex
        w="full"
        mx={['16px', '16px', '16px', '80px', '195px', '195px']}
        maxW="1050px"
      >
        <SimpleGrid w="full" columns={[1, 2, 3, 4]} gap="30px" mt="24px">
          <NextLink href={urlNoLastEl + '/asset-id'} passHref>
            <Link>
              <Skeleton w="full" maxH="229px">
                <Img src={image1.src} w="full" maxH="229px" />
              </Skeleton>
            </Link>
          </NextLink>
          <NextLink href={urlNoLastEl + '/asset-id'} passHref>
            <Link>
              <Skeleton w="full" h="319px">
                <Img src={image1.src} w="full" maxH="319px" />
              </Skeleton>
            </Link>
          </NextLink>
          <NextLink href={urlNoLastEl + '/asset-id'} passHref>
            <Link>
              <Skeleton w="full" maxH="229px">
                <Img src={image1.src} w="full" maxH="229px" />
              </Skeleton>
            </Link>
          </NextLink>
          <NextLink href={urlNoLastEl + '/asset-id'} passHref>
            <Link>
              <Skeleton w="full" maxH="229px">
                <Img src={image1.src} w="full" maxH="229px" />
              </Skeleton>
            </Link>
          </NextLink>
          <NextLink href={urlNoLastEl + '/asset-id'} passHref>
            <Link>
              <Skeleton w="full" maxH="319px">
                <Img src={image1.src} w="full" maxH="319px" />
              </Skeleton>
            </Link>
          </NextLink>
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
