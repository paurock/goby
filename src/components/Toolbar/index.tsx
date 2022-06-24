import { useState, useEffect } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useAssets } from "shared";
import { svgProps } from "components/types";
import { modeColorSelector } from "components/utils";

const Toolbar = (): JSX.Element => {
  const { text, background } = useAssets();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);


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

  const handleClick = () => {
    setLikes(likes + 1);
    setIsLiked(true);
    localStorage.setItem("isLiked", JSON.stringify(isLiked));
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
        <GridItem w="100%" h="10">
          <Select placeholder="Collections">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </GridItem>
        <GridItem>
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
          display={["none", "none", "none", "flex", "flex"]}
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
              as={heartIcon}
              stroke={text}
              w="25px"
              h="25px"
              _hover={{ fill: "red", stroke: "red" }}
              sx={{
                cursor: "pointer",
                fill: `${isLiked ? "red" : null}`,
                stroke: `${isLiked ? "red" : null}`,
              }}
              onClick={() => handleClick()}
            />
            {likes}
          </Flex>
          <Flex
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
              icon={gridIcon(modeColorSelector(colorMode))}
              _active={{ background: "lightBlue" }}
              _selected={{ background: "lightBlue" }}
            />
            <IconButton
              w="40px"
              h="40px"
              variant="outlined"
              aria-label="List mode"
              icon={listIcon(modeColorSelector(colorMode))}
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

const heartIcon = (props: svgProps) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3667 3.84166C16.941 3.41583 16.4357 3.07803 15.8795 2.84757C15.3232 2.6171 14.7271 2.49847 14.125 2.49847C13.5229 2.49847 12.9268 2.6171 12.3705 2.84757C11.8143 3.07803 11.309 3.41583 10.8833 3.84166L10 4.725L9.11666 3.84166C8.25692 2.98192 7.09086 2.49892 5.875 2.49892C4.65914 2.49892 3.49307 2.98192 2.63333 3.84166C1.77359 4.70141 1.29059 5.86747 1.29059 7.08333C1.29059 8.29919 1.77359 9.46525 2.63333 10.325L3.51666 11.2083L10 17.6917L16.4833 11.2083L17.3667 10.325C17.7925 9.89937 18.1303 9.39401 18.3608 8.83779C18.5912 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5912 5.88508 18.3608 5.32887C18.1303 4.77265 17.7925 4.26729 17.3667 3.84166V3.84166Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const gridIcon = (text: string) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 2.5H2.5V6.25H8.75V2.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 2.5H11.25V10H17.5V2.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5H11.25V17.5H17.5V12.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.75 8.75H2.5V17.5H8.75V8.75Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const listIcon = (text: string) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66669 5H17.5"
      stroke="#010504"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66669 10H17.5"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66669 15H17.5"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 15H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
