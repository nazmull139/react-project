import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {

  const tabs =[
    {
      name:"All",
      count:349,
    },
    {
      name:"Deposite",
      count:349,
    },
    {
      name:"Withdrawl",
      count:349,
    },
    {
      name:"Trade",
      count:349,
    },
  ]


  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload}></Icon>}>Export csv</Button>
      </Flex>
      <Card borderRadius="1rem">
        
        <Tabs>
  <TabList pt="2" display="flex" justifyContent="space-between">
  <HStack>
  {
      tabs.map((tab)=>(
          <Tab display="flex" pb="4" gap="2" key={tab.name}>{tab.name} <Tag borderRadius="full" colorScheme="gray">{tab.count}</Tag></Tab>
      ))
    }

  </HStack>
     <InputGroup maxW="250px" justifySelf="end" pr="4">
    <InputLeftElement pointerEvents='none'>
      <Icon as={BsSearch}></Icon>
    </InputLeftElement>
    <Input  type='tel' placeholder='Search by ID or Destination' />
  </InputGroup>
  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable></TransactionTable>
    </TabPanel>
    <TabPanel>
    <TransactionTable></TransactionTable>
    </TabPanel>
    <TabPanel>
    <TransactionTable></TransactionTable>
    </TabPanel>
    <TabPanel>
    <TransactionTable></TransactionTable>
    </TabPanel>
  </TabPanels>
</Tabs>

</Card>
    </DashboardLayout>
    
  )
}

export default TransactionPage