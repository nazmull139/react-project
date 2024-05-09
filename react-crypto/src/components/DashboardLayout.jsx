import { Box, Container, Flex, calc, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title , children}) => {
    const {onClose , isOpen , onOpen} = useDisclosure();
  return (
   

      <Flex>
        
      
      <Box 
        display={{
            base:"none",
            lg:"flex",
          }}>
<SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
      
      <Box flexGrow={1}>
         <TopNav title={title} onOpen={onOpen}></TopNav>
         <Container overflowX='hidden' overflowY='auto' h="calc(100vh - 88px)" mt="6" maxW="70rem" px="4" >{children}</Container>
      </Box>
     
      
    </Flex>

  )
}

export default DashboardLayout