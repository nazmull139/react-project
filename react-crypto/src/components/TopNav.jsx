import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const TopNav = ({title , onOpen}) => {
  return (

    <Box px="4" bg="white">
    <HStack  h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon as={FaBars} onClick={onOpen} 
        display={{
            base:"block",
            lg:"none"
        }}

        ></Icon>
            <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
            <Menu>
  <MenuButton>
    <Icon as={FaUserTie} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
   
  </MenuList>
</Menu>
        
    </HStack>
    
    </Box>
  )
}

export default TopNav