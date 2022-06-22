import { Grid, Flex } from "@chakra-ui/react"; 
import Toolbar from "../components/Toolbar";
import { NextPage } from "next";

const Loan: NextPage = () => {
  return (
    <>
      <Toolbar />
      <Flex px={["16px", "16px", "16px", "120px", "120px"]}>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="5"
          mt="24px"
          mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
          minH="50vh"
        >
          Loan Page Content
        </Grid>
      </Flex>
    </>
  );
};
export default Loan;
