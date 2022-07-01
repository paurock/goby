
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import image from "/src/app/assets/mock_cw.png";
import React from 'react'

export const LeftSide = () => {
  return (
    <VStack maxW={["100%", "50%"]} pr="15px" zIndex="100">
    <Box mt="64px">
      <Image alt="image" width="510px" height="647px" src={image.src} />
    </Box>
   
      
         
        <Accordion w="full" mt="24px" defaultIndex={[0]} allowMultiple
        sx={{ borderRadius: "4px", border: "1px solid lightblue" }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton >
                <VStack w="full" maxW="510px">
                  <Heading
                    w="full" 
                    sx={{ fontSize: "16px", textAlign:"left", paddingTop: "16px" }}
                  >
                    Descrition
                  </Heading>
                  <Heading
                    w="full" 
                    sx={{
                      fontSize: "14px",
                      opacity: 0.3,
                      borderBottom: "1px solid lightgray",
                      textAlign:"left",
                     paddingBottom: "16px"
                    }}
                  >
                    More information about the project and work
                  </Heading>
                </VStack>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p="24px">
              0xodia the otterboi is a light-hearted charity project to
              support both Ukraine and the Cystic Fibrosis Foundation. 100%
              proceeds from 45 0xodia the otterboi pieces will be split
              evenly between Ukraine relief (UkraineDAO) and the Cystic
              Fibrosis Foundation (sent from metamask to coinbase and
              withdrawn and donated in USD). This project was created by
              otterboi (@zellonwheels on twitter) using procreate on ipad.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack> 
  )
}



