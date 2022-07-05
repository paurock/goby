import { NextPage } from 'next';
import TitleSection from 'components/sections/TitleSection';
import Loans from '../components/sections/content/LoanTable';

const Collateral: NextPage = () => {
  return (
    <>
      <TitleSection pageName="Loan" pageTitle="Loan" />
      <Loans />
    </>
  );
};
export default Collateral;
