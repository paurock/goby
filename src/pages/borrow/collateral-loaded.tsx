import Toolbar from '../../components/sections/content/Toolbar';
import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';
import image3 from '/src/app/assets/mockImgs/Rectangle3.png';
import image4 from '/src/app/assets/mockImgs/Rectangle4.png';
import image5 from '/src/app/assets/mockImgs/Rectangle5.png';
import image6 from '/src/app/assets/mockImgs/Rectangle6.png';
import image7 from '/src/app/assets/mockImgs/Rectangle7.png';
import image8 from '/src/app/assets/mockImgs/Rectangle8.png';
import image9 from '/src/app/assets/mockImgs/Rectangle9.png';
import image10 from '/src/app/assets/mockImgs/Rectangle10.png';
import { Img } from 'shared';
import { Flex, SimpleGrid } from '@chakra-ui/react';

const Collateral: NextPage = () => {
  return (
    <>
      <TitleSection
        pageTitle="Borrow"
        pageSubtitle="Put your NFT assets up as collateral for a loan"
      />
      <Toolbar />
      <Flex w="full" justifyContent="center">
        <Flex
          w="full"
          mx={['16px', '16px', '16px', '80px', '195px', '195px']}
          maxW="1050px"
        >
          <SimpleGrid w="full" columns={[1, 2, 3, 4]} gap="30px" mt="24px">
            <Img src={image3.src} w="full" />
            <Img src={image4.src} w="full" />
            <Img src={image5.src} w="full" />
            <Img src={image6.src} w="full" />
            <Img src={image7.src} w="full" />
            <Img src={image8.src} w="full" />
            <Img src={image9.src} w="full" />
            <Img src={image10.src} w="full" />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
};
export default Collateral;
