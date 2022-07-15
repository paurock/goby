import Toolbar from '../../components/Toolbar';
import Tiles from '../../components/sections/content/Tiles';
import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';

const Collateral: NextPage = () => {
  return (
    <>
      <TitleSection
        pageTitle="Lend"
        pageSubtitle="Offer loans to other users on their non-fungible tokens"
      />
      <Toolbar />
      <Tiles />
    </>
  );
};
export default Collateral;
