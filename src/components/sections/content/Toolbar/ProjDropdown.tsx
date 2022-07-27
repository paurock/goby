import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import icon1 from '/src/app/assets/ic-logo-projects.svg';
import { folderIcon } from 'app/assets/Icons';

const borderStyle = {
  borderRadius: '4px',
  fontSize: '16px',
  outline: `2px solid transparent`,
  border: '1px solid var(--chakra-colors-chakra-border-color)',
} as const;

export default function ProjDropdown(): JSX.Element {
  const bgColor: string = useColorModeValue('white', 'black');
  return (
    <Menu>
      <MenuButton
        w="full"
        as={Button}
        rightIcon={<ChevronUpIcon />}
        sx={borderStyle}
        bg="none"
      >
        <HStack>
          <Icon
            //@ts-ignore
            as={folderIcon}
            w="20px"
            h="20px"
            mt="-5px"
            stroke="var(--chakra-colors-chakra-border-color)"
          />
          <Text mt="5px">Collections</Text>
        </HStack>
      </MenuButton>
      <MenuList sx={{ ...borderStyle, backgroundColor: bgColor }}>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src={icon1.src}
            alt="proj1"
            mr="12px"
          />
          <HStack w="full">
            <Text w="full" as="span">
              Option 1
            </Text>
            <input type="checkbox" />
          </HStack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
