import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";


const PriceSection = () => {

  const timestamps = ["6.55 pm", "7.55 pm", "7.60 pm" , "8:55 pm", "9:55 pm"];

  return (
    <CustomCard h="full">

<HStack>

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


           <HStack>   <Text textStyle="h2" fontWeight="bold">$ 22.39401000</Text>
           <HStack fontWeight="medium" color="green.500">
            <Icon as={BsArrowUpRight}></Icon>
                <Text fontSize="sm" fontWeight="bold">22%</Text>

            </HStack>   

         </HStack>

       </HStack>

    </Stack>

    <HStack>
      <Button leftIcon={<Icon as={AiFillPlusCircle }></Icon>}>Buy</Button>
      <Button leftIcon={<Icon as={AiFillMinusCircle }></Icon>}>Sell</Button>
    </HStack>



</HStack>

<Tabs variant='soft-rounded' colorScheme='green'>
  <Flex justify="flex-end" >
     <TabList bg="black.5" p="3px">
      {
        ["1H","1D","1W","1M"].map((tab)=>(
          <Tab fontSize="sm" p="6px" borderRadius="4" _selected={{bg:"white"}}>{tab}</Tab>

        ))
      }
   
  </TabList>
  </Flex>
 
  <TabPanels>
    <TabPanel>
    <Image w="100%" src='/graph.svg' mt="48px"></Image>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>




   <HStack justify="space-between">
    {

      timestamps.map((timestamp)=>(

          <Text key={timestamp} fontSize="sm" color="black.80"  >{timestamp}</Text>


      ))

    }
   </HStack>



    </CustomCard>
  )
}

export default PriceSection