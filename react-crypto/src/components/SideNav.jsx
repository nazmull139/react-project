import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
const SideNav = () => {
    const location = useLocation();

    const isActiveLink = (link)=>{
        return location.pathname == link;
    };

    const navLinks =[
        {
        icon: RxDashboard ,
        text: " Dashboard ",
        link:"/"

    },
        {
        icon: LuArrowUpDown ,
        text: "Transactions",
        link:"/transactionpage"

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
            <Link to={nav.link} key={nav.text}>
            <HStack   py="3" px="4"
             bg={isActiveLink(nav.link)? "#F3F3F7" : "transparent"}
             color={isActiveLink(nav.link)? "#171717" : "#797E82"}
                borderRadius="10px"
                _hover={{
                    bg: "#F3F3F7",
                    color:"#171717"
                }}
                
            >


                <Icon as={nav.icon}></Icon>
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>
            </Link>

        ))



    }</Box></Box>
 
 <Box mt="6" mx="12px" mb="6">


    <Link to="/support">

 <HStack  py="3" px="4"

 bg={isActiveLink("/support")? "#F3F3F7" : "transparent"}
 color={isActiveLink("/support")? "#171717" : "#797E82"}

                borderRadius="10px"
                _hover={{
                    bg: "#F3F3F7",
                    color:"#171717"
                }}
                
            >
                <Icon as={BiSupport}></Icon>
                <Text fontSize="14px" fontWeight="medium">support</Text>
            </HStack>
            
            </Link>
            
        </Box>
  </Stack>
  )
}

export default SideNav