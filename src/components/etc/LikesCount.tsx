import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { svgProps } from 'components/types'
import React, { SVGProps } from 'react'


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

export const LikesIcon = (props: svgProps): SVGProps<SVGSVGElement> => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.4">
        <path d="M10.42 2.30506C10.1646 2.04956 9.86141 1.84688 9.52768 1.7086C9.19395 1.57032 8.83624 1.49915 8.475 1.49915C8.11376 1.49915 7.75605 1.57032 7.42232 1.7086C7.08859 1.84688 6.78538 2.04956 6.53 2.30506L6 2.83506L5.47 2.30506C4.95415 1.78921 4.25452 1.49941 3.525 1.49941C2.79548 1.49941 2.09584 1.78921 1.58 2.30506C1.06415 2.8209 0.774353 3.52054 0.774353 4.25006C0.774353 4.97957 1.06415 5.67921 1.58 6.19506L2.11 6.72506L6 10.6151L9.89 6.72506L10.42 6.19506C10.6755 5.93968 10.8782 5.63647 11.0165 5.30274C11.1547 4.96901 11.2259 4.6113 11.2259 4.25006C11.2259 3.88881 11.1547 3.53111 11.0165 3.19738C10.8782 2.86365 10.6755 2.56044 10.42 2.30506V2.30506Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>

  )
}
