import {
  Flex, Heading, chakra,
} from '@chakra-ui/react';

import {
  Img, Carousel,
} from 'shared';

export const OurParners = ({ slides } :{slides: Array<string>}) => (
  <>
    <Heading
      fontFamily="Inter medium"
      fontWeight="400"
      fontSize="32px"
      lineHeight="110%"
      textAlign="center"
      color="#E7FFF1"
    >
      Our partners and backers
    </Heading>
    <Flex
      gap={['32px', '32px', '32px', '32px', '40px']}
      maxW={['full', '800px', '900px', '1000px', 'full']}
      opacity={['1', '1', '0.4', '0.4', '0.4']}
      justify="center"
      display={['none', 'none', 'flex', 'flex', 'flex']}
      py={['80px']}
    >
      {slides.map((slide) => (
        <Img
          key={slide}
          size={['180 180', '180 180', '180 180', '180 180', 'full full']}
          src={slide}
        />
      ))}
    </Flex>
    <chakra.hr
      color="#222228"
      opacity="0.1"
      display={['none', 'none', 'none', 'block', 'block']}
    />
    <Carousel slides={slides} interval={2500} direction="right" />
  </>
);
