import {
  Box,
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { heartIcon, moreHorizontal, shareIcon } from "app/assets/Icons"; 
import { SquareButton } from "app/theme/components/SquareButton";
import React  from "react";
import { useAssets } from "shared"; 

export default function UnderTiles():JSX.Element {
  const { text, background } = useAssets();
  const colors = useColorModeValue("black", "lightGreen");
  const bgColors = useColorModeValue("white", "black");
  return (
    <VStack
      w="full"
      sx={{
        boxShadow: "rgba(99, 99, 99, 0.1) 0px 1px 8px 0px}}",
      }}
      bg={bgColors}
    >
      <VStack w="full" p="24px">
        <Box w="full" h="22px">
          <Heading
            as="h5"
            sx={{ fontSize: "16px", fontWeight: 500, color: text }}
          >
            Asset ID
          </Heading>
        </Box>
        <Box w="full" h="22px">
          <Text sx={{ fontSize: "14px", color: text, opacity: 0.4 }}>
            Name project
          </Text>
        </Box>
      </VStack>
      <Box w="full" h="48px">
        <SimpleGrid w="full" h="48px" columns={3}>
          <Center maxW="111px" maxH="48px">
          <SquareButton
                bg="none"
                widthBtn="14px"
                heightBtn="14px"
                ariaLabel="Like" 
                icon={heartIcon} 
                stroke={colors} 
                hoverColorStroke={"red"}
                hoverColorFill={"red"}
                action={()=> console.log("clicked")}
              /> 
          </Center>
          <Center maxW="111px" maxH="48px">
            <SquareButton
                bg="none"
                widthBtn="14px"
                heightBtn="14px"
                ariaLabel="Share" 
                icon={shareIcon} 
                stroke={colors} 
                hoverColorStroke={"black"}
                action={()=> console.log("clicked")}
              />
         </Center> 
          <Center maxW="111px" maxH="48px">
          <SquareButton
                bg="none"
                widthBtn="14px"
                heightBtn="14px"
                ariaLabel="More " 
                icon={moreHorizontal} 
                stroke={colors} 
                hoverColorStroke={"black"}
                action={()=> console.log("clicked")}
              /> 
          </Center>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
