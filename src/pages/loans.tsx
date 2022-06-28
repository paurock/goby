import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { LoanTable } from 'components/sections/Content/LoanTable'
import React from 'react'

const fontStyle = {  
    fontWeight:"400", 
    color:"black", 
}

export const Loans = () => {
  return (
    <>
        <VStack 
            bg="lightGray"
            w="full"
            maxW="1050px" 
            m="0 auto"
            px={["16px", "0"]}
            pb={["10px"]}
            flexWrap="wrap" 
        >
            <Heading as="h2" w="full" sx={{...fontStyle, fontSize: "24px"}}>My Loans</Heading>
            <Text as="h5" w="full" sx={{...fontStyle, fontSize: "24px", opacity: 0.4}}>2 loans</Text>
            <HStack w="full">
                <Button maxW="67px" maxH="32px" variant="outline" sx={{borderRadius:"2px", fontSize:"16px"}}>Open</Button>
                <Button maxW="67px" maxH="32px" variant="outline" sx={{borderRadius:"2px", fontSize:"16px"}}>Closed</Button>
            </HStack>
            <LoanTable/>
            <LoanTable/>
        </VStack>
    </>
    )
}
