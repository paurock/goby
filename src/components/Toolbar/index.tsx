import { useState, useEffect } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { gridIcon, heartIcon, listIcon } from "app/assets/Icons";
import ProjDropdown from "./ProjDropdown";

const Toolbar = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const color = useColorModeValue("purple", "green");

  useEffect(() => {
    const likeD_LS = JSON.parse(localStorage.getItem("isLiked") || "false");
    const likeS_LS = JSON.parse(localStorage.getItem("likes") || "0");

    if (likeD_LS && likeD_LS !== "") {
      setIsLiked(likeD_LS);
    }
    if (likeS_LS && likeS_LS !== "") {
      setLikes(likeS_LS);
    }
  }, []);

  const handleClick = (): void => {
    setLikes(likes + 1);
    setIsLiked(true);
    localStorage.setItem("isLiked", JSON.stringify(true));
    localStorage.setItem("likes", JSON.stringify(likes + 1));
  };

  return (
    <Flex
      maxW="1600px"
      minH="100%"
      px={["16px", "16px", "16px", "120px", "120px"]}
      p="0"
      m="0 auto"
      mt="30px"
      sx={{ justifyContent: "center" }}
    >
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="5"
        mx={["16px", "16px", "16px", "80px", "80px", "195px"]}
      >
        <GridItem w="100%" h="10" rowStart={[2, 1]} colSpan={[3, 1]}>
          <ProjDropdown />
        </GridItem>
        <GridItem rowStart={[1, 1]} colSpan={[4, 1]}>
          <InputGroup>
            <Input type="search" placeholder="Search project" />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          display={["none", "flex", "flex", "flex", "flex"]}
        />
        <GridItem
          w="100%"
          h="10"
          gap="5px"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Flex
            minW="86px"
            minH="40px"
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid lightBlue",
              borderRadius: "10px",
            }}
          >
            <Icon
              //@ts-ignore
              as={heartIcon}
              w="25px"
              h="25px"
              _hover={{ fill: "red", stroke: "red" }}
              sx={{
                cursor: "pointer",
                fill: `${isLiked ? "red" : null}`,
                stroke: `${isLiked ? "red" : color}`,
              }}
              onClick={() => {
                !isLiked && handleClick();
              }}
            />
            {likes}
          </Flex>
          <Flex
            display={["none", "flex", "flex", "flex", "flex"]}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid lightBlue",
              borderRadius: "10px",
              maxWidth: "100px",
            }}
          >
            <IconButton
              w="40px"
              minH="40px"
              sx={{ borderRight: "1px solid lightBlue", borderRadius: "0" }}
              variant="outlined"
              aria-label="Grid mode"
              //@ts-ignore
              icon={gridIcon(color)}
              _active={{ background: "lightBlue" }}
              _selected={{ background: "lightBlue" }}
            />
            <IconButton
              w="40px"
              h="40px"
              variant="outlined"
              aria-label="List mode"
              //@ts-ignore
              icon={listIcon(color)}
              _active={{ background: "lightBlue" }}
              _selected={{ background: "lightBlue" }}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default Toolbar;