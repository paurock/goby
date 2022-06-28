import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { LikesIcon } from 'app/assets/Icons'
import React  from 'react'
 
export const LikesCount = ({count="120"} : {count?: string}):JSX.Element => {
  return (
    <HStack maxH="22px" py="0" bg="white"> 
      <Tag maxH="22px" py="0" variant='subtle' colorScheme='white'>
        <TagLeftIcon  boxSize='12px' 
          // @ts-ignore
          as={LikesIcon} 
          sx={{color:"lightGray", }} />
        <TagLabel sx={{color:"lightGray",  fontSize:"12px",  }}>{count}</TagLabel>
      </Tag> 
  </HStack>
  )
} 


