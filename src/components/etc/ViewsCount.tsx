import { ViewIcon } from '@chakra-ui/icons'
import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import React from 'react'

export const ViewsCount = ({count="359"} : {count?: string}):JSX.Element => {
  return (
    <HStack maxH="22px" py="0" bg="white"> 
      <Tag maxH="22px" py="0" variant='subtle' colorScheme='white'>
        <TagLeftIcon  boxSize='12px' as={ViewIcon} sx={{color:"lightGray", }} />
        <TagLabel sx={{color:"lightGray",  fontSize:"12px",  }}>{count}</TagLabel>
      </Tag>
  </HStack>
  )
}
