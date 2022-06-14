/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/require-default-props */
/* eslint-disable no-restricted-imports */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Flex as FlexOrig, FlexProps, ImgProps, Img as ImgOrig,
} from '@chakra-ui/react';

type Sizes = {
    size?: string[]
}

export const VFlex = (props: FlexProps) => (<FlexOrig direction="column" {...props} />);

export const Img = (props: Omit<ImgProps, 'sizes'> & Sizes) => {
  const { size } = props;
  if (size && size.length >= 1) {
    const sizesTransformed = {
      maxH: size.map((h) => h.split(' ')?.[0]?.concat('px')),
      maxW: size.map((w) => w.split(' ')?.[1]?.concat('px')),
    };
    return (<ImgOrig {...props} {...sizesTransformed} />);
  }
  return <ImgOrig {...props} />;
};
