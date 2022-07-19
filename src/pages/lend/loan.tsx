import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';
import Loans from 'components/sections/content/Loans';

const Loan: NextPage = () => {
  return (
    <>
      <TitleSection
        pageTitle="Lend"
        pageSubtitle="Offer loans to other users on their non-fungible tokens"
      />
      <Loans pageName="Lend" />
    </>
  );
};
export default Loan;
