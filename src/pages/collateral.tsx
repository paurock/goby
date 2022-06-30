import Toolbar from "../components/Toolbar";
import Tiles from "../components/sections/content/Tiles";
import { NextPage } from "next";
import TitleSection from "components/sections/TitleSection";

const Collateral: NextPage = () => {
  return (
    <>
      <TitleSection pageName="Collateral"/>
      <Toolbar />
      <Tiles />
    </>
  );
};
export default Collateral;
