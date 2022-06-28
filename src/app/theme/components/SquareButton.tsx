import { Button } from '@chakra-ui/react'
import { svgProps } from 'components/types'
import React  from 'react'

export const SquareButton = (props: svgProps): JSX.Element=> {
  return (
    <Button {...props}> Hi
    </Button>
  )
}
