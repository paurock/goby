import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Img,
  Button,
} from "@chakra-ui/react";
import { useAssets } from "shared";

interface MenuProps {
  entries: {
    imgSrc: string;
    caption: string;
  }[];
}

export function DropdownMenu({ entries }: MenuProps) {
  const [currency, setCurrency] = useState(entries[0].caption);
  const currencyInfo = entries.find(({ caption }) => caption === currency);
  const { select, toggleCurrency } = useAssets();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        sx={{
          minWidth: "145px",
          borderRadius: "20px",
          padding: "5px 16px",
        }}
      >
        {/* Initial Currency start */}
        <Flex gap="8px">
          <Img src={currencyInfo?.imgSrc} sizes="20px 20px" />
          <Flex
            width="fit-content"
            sx={{ fontSize: "14px", alignItems: "center" }}
          >
            {currency}
          </Flex>
        </Flex>
        {/* Initial Currency end */}
      </MenuButton>

      <MenuList
        sx={{
          border: "none",
          borderRadius: "5px",

          minWidth: "145px",
        }}
      >
        {entries
          .filter(({ caption }) => caption !== currency)
          .map(({ imgSrc, caption }) => (
            <MenuItem
              sx={{ minWidth: "145px" }}
              pl="5px"
              gap="10px"
              key={caption}
              onClick={() => setCurrency(caption)}
            >
              <Img src={imgSrc} />
              {caption}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}
