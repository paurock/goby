import type { NextPage } from "next";
import Collateral from "./collateral";
import ConnectWallet from "./connect-wallet";
import Loan from "./loan";

const Home: NextPage = () => {
  return (
    <>
      <Loan />
    </>
  );
};

export default Home;
