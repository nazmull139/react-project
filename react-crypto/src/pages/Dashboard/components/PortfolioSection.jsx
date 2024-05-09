import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown  ,AiOutlineArrowUp } from "react-icons/ai";

const PortfolioSection = () => {
  return (


   <HStack justifyContent={'space-between'} bg="white" borderRadius="xl" p="6" 
    align={{
      base:"flex-start",
      xl:"center"
    }}
   flexDir={{
    base:"column",
    xl:"row"
   }}
   spacing={{
    base:"4",
    xl:"0"}}
   >


    <HStack spacing={{
      base:"0",
      xl:"16"
    }} 
    align={{
      base:"flex-start",
      xl:"center"
    }}
   flexDir={{
    base:"column",
    xl:"row"
   }}
    >


    <Stack>
      <HStack color="black.80">
        <Text fontSize="14px" >Total portfolio value</Text>
        <Icon as={AiOutlineInfoCircle}></Icon>
      </HStack>
      <Text textStyle="h2" fontWeight="bold">$ 112,312.24</Text>
    </Stack>


    <Stack>
      <HStack color="black.80">
        <Text fontSize="14px" >Wallet Balance</Text>
        
      </HStack>


  <HStack spacing="4" align={{
      base:"flex-start",
      sm:"center"
    }}
   flexDir={{
    base:"column",
    sm:"row"
   }}>


           <HStack>   <Text textStyle="h2" fontWeight="bold">$ 22.39401000</Text><Tag colorScheme={'gray'}>BTC</Tag></HStack>

          <HStack>   <Text textStyle="h2" fontWeight="bold">$ 1300.00</Text><Tag colorScheme={'gray'}>INR</Tag></HStack>

      </HStack>
      
  
    </Stack>
</HStack>
    <HStack>
      <Button leftIcon={<Icon as={AiOutlineArrowDown }></Icon>}>Deposite</Button>
      <Button leftIcon={<Icon as={AiOutlineArrowUp }></Icon>}>Withdraw</Button>
    </HStack>
   </HStack>
  )
}

export default PortfolioSection