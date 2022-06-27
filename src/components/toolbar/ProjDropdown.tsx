import { ChevronUpIcon } from '@chakra-ui/icons'
import {Box, Button,  Checkbox,  HStack,  Icon,  Image,  Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from '@chakra-ui/react'
import React, { SVGProps } from 'react'
import icon1 from "/src/app/assets/ic-logo-projects.svg"
import { svgProps } from 'components/types'

//FOLDER ICON
const folderIcon = (props: svgProps): SVGProps<SVGSVGElement> => (<svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3334 15.8333C18.3334 16.2754 18.1578 16.6993 17.8453 17.0118C17.5327 17.3244 17.1088 17.5 16.6667 17.5H3.33341C2.89139 17.5 2.46746 17.3244 2.1549 17.0118C1.84234 16.6993 1.66675 16.2754 1.66675 15.8333V4.16667C1.66675 3.72464 1.84234 3.30072 2.1549 2.98816C2.46746 2.67559 2.89139 2.5 3.33341 2.5H7.50008L9.16675 5H16.6667C17.1088 5 17.5327 5.17559 17.8453 5.48816C18.1578 5.80072 18.3334 6.22464 18.3334 6.66667V15.8333Z" stroke="#6334B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>)

const borderStyle = {
    borderRadius:"4px", 
    fontSize: "16px", 
    backgroundColor:"transparent",
    outline: `2px solid transparent`,
    border:"1px solid var(--chakra-colors-chakra-border-color)"
    }
export default function ProjDropdown() { 
  return (
    <Menu >
        <MenuButton w="full" as={Button} rightIcon={<ChevronUpIcon />} 
        sx={borderStyle}> 
            <HStack> 
                <Icon 
                //@ts-ignore
                    as={folderIcon}
                    w="20px"
                    h="20px"
                    mt="-5px"  
                /> 
                <Text mt="5px" >Collections</Text>

             </HStack>
        </MenuButton>
            <MenuList sx={borderStyle}>
                <MenuItem minH='48px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src={icon1.src}
                    alt='proj1'
                    mr='12px'
                />
                <HStack w="full">
                <Box w="full"  as="span">Option 1</Box>
                <input type="checkbox"/>
                </HStack>
                </MenuItem>
            </MenuList>
           
    </Menu>
  )
}
