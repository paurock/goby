/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-imports */
import { useColorMode } from '@chakra-ui/react';
import { assetsList, colorsList } from '../app/assets';
import { VFlex, Img } from './FlexUtils';
import { DropdownMenu } from './DropdownMenu';

const useAssets = () => {
  const { colorMode: theme } = useColorMode();
  return {
    ...Object.entries(assetsList).reduce(
      (assets, [type, [{ src: dark }, { src: light }]]) => {
        assets[type as keyof typeof assetsList] =
          theme === 'dark' ? dark : light;
        return assets;
      },
      {} as Record<keyof typeof assetsList, string>
    ),
    ...Object.entries(colorsList).reduce((colors, [type, [dark, light]]) => {
      colors[type as keyof typeof colorsList] =
        theme === 'dark' ? `#${dark}` : `#${light}`;
      return colors;
    }, {} as Record<keyof typeof colorsList, string>),
  };
};

const links = ['Lend', 'Borrow', 'Stats'];

export { links, useAssets, VFlex, Img, DropdownMenu };
