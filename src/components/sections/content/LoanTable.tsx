import { Heading, HStack, Tag, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import image from "/src/app/assets/square_img_150x150.png"
export const LoanTable = () => {
  return (
    <HStack w="full" >
        <Image alt="image" width="150px" height="150px" src={image.src} /> 
        <VStack w="full">
            <HStack w="full" >
                <Heading sx={{fontSize:"20px"}} as="h3">Asset ID</Heading>
                <Tag colorScheme='lightGreen'>Open</Tag>
            </HStack>
            <HStack w="full" mb="24px">
                <Text as="span" sx={{fontSize:"14px", opacity: 0.4}}>Borrower:</Text>
                <Text as="span" sx={{fontSize:"14px", color:"purple", textTransform: "lowerCase"}}>Name of Borrower</Text>
            </HStack>
            <HStack w="full" maxW="310px"  >
                <Text as="span"  sx={{fontSize:"14px", opacity: 0.4}}>Duration</Text>
                <Text as="span"  sx={{fontSize:"14px", opacity: 0.4}}>APR</Text>
                <Text as="span"  sx={{fontSize:"14px", opacity: 0.4}}>Loan value</Text>
            </HStack>
            <HStack w="full" ></HStack>
        </VStack>
    </HStack>
  )
}
