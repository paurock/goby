import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useAssets, VFlex } from "shared";

const Toolbar = () => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="5">
      <GridItem w="100%" h="10">
        <Select placeholder="Collections">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </GridItem>
      <GridItem w="100%" h="10">
        <InputGroup>
          <Input type="search" placeholder="Search" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
        </InputGroup>
      </GridItem>
      <GridItem w="100%" h="10" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};
export default Toolbar;
