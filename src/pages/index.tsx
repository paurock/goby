import type { NextPage } from "next";
import Collateral from "./collateral"; 
import ConnectWallet from "./connect-wallet";
import { Loans } from "./loans";

const Home: NextPage = () => {
  return <> 
  <Loans/>
  </>
};

export default Home;
