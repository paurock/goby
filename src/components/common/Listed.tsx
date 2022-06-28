import { Badge, Center } from '@chakra-ui/react'
import React from 'react'

export const Listed = ({bg="green"} : {bg?: string} ): JSX.Element => {
  return (
    <Badge w="full" h="22px" colorScheme='green' bg={bg} 
    sx={{
        textTransform:"uppercase", 
        fontSize:"12px", 
        fontStyle:"regular", 
        fontWeight:"400", 
        }}>
        <Center w="full" h="full">Listed</Center>
        </Badge>
  )
}
