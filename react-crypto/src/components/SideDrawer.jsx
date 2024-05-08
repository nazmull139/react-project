import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import SideNav from './SideNav'

const SideDrawer = ({isOpen , onClose}) => {

  
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
        
  
            <DrawerBody>
            <SideNav></SideNav>
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer