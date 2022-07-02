import { svgPropsSquareBtn } from 'components/types';
import React from 'react';
import { IconButton } from '@chakra-ui/react';

export const SquareButton = (props: svgPropsSquareBtn): JSX.Element => {
  return (
    <IconButton
      bg={props.bg}
      aria-label={props.ariaLabel}
      //@ts-ignore
      as={props.icon}
      w={props.widthBtn}
      h={props.heightBtn}
      stroke={props.stroke}
      _hover={{ stroke: props.hoverColorStroke, fill: props.hoverColorFill }}
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => (props.action ? props.action() : null)}
    />
  );
};
