import React from 'react'
import {  Table,  Thead, Tbody,  Tfoot,  Tr,  Th, Td, TableCaption, TableContainer, Stack, Text, Tag,} from '@chakra-ui/react'

const TransactionTable = () => {

    const tableData = [

        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"pending"
        },
        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"processing"
        },
        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"cancelled"
        },
        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"completed"
        },
        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"completed"
        },
        {
            id:"HD82NA2H",
            date:"20-6-2023",
            time:"07:50 PM",
            type:{
                name:"INR Deposite",
                tag:"E-Transfer"
            },
            amount:"+$81,123",
            status:"completed"
        },
    ]

    const statusColor = {
        pending:"#797E82",
        processing:"#F5A50B",
        completed:"#059669",
        cancelled:"#D62626"
    }
    


  return (
    <TableContainer>
  <Table variant='simple' colorScheme='gray'>
   
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Date & Time</Th>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody color="p.black">
      {
        tableData.map((data)=>(
            <Tr key={data.id}>
                <Td fontSize="md" fontWeight="medium">{data.id}</Td>

                <Td>
                    <Stack spacing={0}>
                        <Text fontSize="md" fontWeight="medium">{data.date}</Text>
                        <Text fontSize="xs" color="black.60">{data.time}</Text>
                    </Stack>
                    
                </Td>
                <Td>
                    <Stack spacing={0}>
                        <Text fontSize="md" fontWeight="medium">{data.type.name}</Text>
                        <Text fontSize="xs" color="black.60">{data.type?.tag}</Text>
                    </Stack>
                </Td>

                <Td fontSize="md" fontWeight="medium">{data.amount}</Td>
                <Td fontSize="md" fontWeight="medium"><Tag bg={statusColor[data.status]} color="white" borderRadius="full" >{data.status}</Tag></Td>
                
            </Tr>



        ))
      }
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default TransactionTable