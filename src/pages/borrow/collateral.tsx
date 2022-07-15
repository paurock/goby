import Toolbar from '../../components/Toolbar';
import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';
import { ConnectMetaMask } from 'components/sections/content/ConnectMetaMask';

const Collateral: NextPage = () => {
  return (
    <>
      <TitleSection
        pageTitle="Borrow"
        pageSubtitle="Put your NFT assets up as collateral for a loan"
      />
      <Toolbar />
      <ConnectMetaMask />
    </>
  );
};
export default Collateral;
