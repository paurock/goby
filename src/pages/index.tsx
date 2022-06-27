import type { NextPage } from "next";
import Collateral from "./collateral";
import ConnectWallet from "./connect-wallet";

const Home: NextPage = () => {
  return <ConnectWallet />;
};

export default Home;
