import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';
import Loans from 'components/sections/content/LoanTable';

const Loan: NextPage = () => {
  return (
    <>
      <TitleSection
        pageTitle="Borrow"
        pageSubtitle="Put your NFT assets up as collateral for a loan"
      />
      <Loans pageName="Borrow" />
    </>
  );
};
export default Loan;
