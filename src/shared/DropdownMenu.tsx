import React, { useState } from 'react';
import {
  IconButton, Menu, MenuButton, MenuItem, MenuList, Flex, Img,
} from '@chakra-ui/react';
import { useAssets } from 'shared';

interface MenuProps {
    entries: {
      imgSrc: string;
      caption: string;
  }[];
}

export function DropdownMenu({ entries }: MenuProps) {
  const [currency, setCurrency] = useState(entries[0].caption);
  const currencyInfo = entries.find((({ caption }) => caption === currency));
  const { select, toggleCurrency } = useAssets();
  return (
    <Menu isLazy styleConfig={{ display: 'flex', bgColor: 'none', width: '160px' }}>
      <Flex gap="8px" px="16px">
        <Flex width="fit-content">
          {currency}
        </Flex>
        <Img src={currencyInfo?.imgSrc} sizes="20px 20px" />
      </Flex>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Img src={toggleCurrency} sizes="20px 20px" />}
        variant="outline"
        p="0"
        m="0"
        border="0"
      />
      <MenuList border="none" borderRadius="none" marginLeft="-120px">
        {entries.filter(({ caption }) => caption !== currency).map(({ imgSrc, caption }) => (
          <MenuItem
            w="160px"
            display="flex"
            justifyContent="space-between"
            gap="8px"
            key={caption}
            onClick={() => setCurrency(caption)}
            bgColor={select}
            m="0"
            p="12px"
          >
            {caption}
            <Img src={imgSrc} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>

  );
}
