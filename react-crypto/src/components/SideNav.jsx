import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
const SideNav = () => {
    const navLinks =[
        {
        icon: RxDashboard ,
        text: " Dashboard ",
        link:"/"

    },
        {
        icon: LuArrowUpDown ,
        text: "Transactions",
        link:"/transactions"

    },


]
  return (

  <Stack boxShadow={{
base:"none",
lg:"lg"
  }}
   w={{
    base:"full",
    lg:"16rem"
}}
 h="100vh" justify={'space-between'} bg="white" >

    <Box>
   <Heading textAlign="center" as="h1" fontSize="20px" pt="56px">@Dosomecoding</Heading>
   
   <Box mx="12px" mt="6">
    {
        
        navLinks.map((nav)=>(

            <HStack  key={nav.text} py="3" px="4"
                borderRadius="10px"
                _hover={{
                    bg: "#F3F3F7",
                    color:"#171717"
                }}
                color="#797E82"
            >
                <Icon as={nav.icon}></Icon>
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>


        ))



    }</Box></Box>
 
 <Box mt="6" mx="12px" mb="6">
 <HStack  py="3" px="4"
                borderRadius="10px"
                _hover={{
                    bg: "#F3F3F7",
                    color:"#171717"
                }}
                color="#797E82"
            >
                <Icon as={BiSupport}></Icon>
                <Text fontSize="14px" fontWeight="medium">support</Text>
            </HStack>
        </Box>
  </Stack>
  )
}

export default SideNav