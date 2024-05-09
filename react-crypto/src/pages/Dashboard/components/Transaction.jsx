import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

const Transaction = () => {

 const transactions = [
        {
            id:"1",
            icon:BsCurrencyRupee,
            text:"INR Deposite",
            amount:"+ $81,123.0 ",
            timestamp:"2022-06-09 7.55 pm"
        },
        {
            id:"2",
            icon:FaBtc,
            text:"INR Deposite",
            amount:"+ $81,123.0 ",
            timestamp:"2022-06-09 7.55 pm"
        },
        {
            id:"3",
            icon:BsCurrencyRupee,
            text:"INR Deposite",
            amount:"+ $81,123.0 ",
            timestamp:"2022-06-09 7.55 pm"
        },
    ]

  return (
   
    <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black.80">Recent Transactions</Text>
        <Stack spacing={4}>
            {
                transactions.map((transaction , i )=>(
                    <Fragment key={transaction.id}>
                        {i!==0 && <Divider ></Divider>}
                    <Flex  gap="4" w="full">
                        <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full"> <Icon as={transaction.icon}></Icon></Grid>

                        <Flex justify="space-between" w="full" >
                            <Stack spacin0>
                                <Text textStyle="h6" >{transaction.text}</Text>
                                <Text textStyle="h6" color="black.40">{transaction.timestamp}</Text>
                            </Stack>
                            <Text textStyle="h6" color="black.40">{transaction.amount}</Text>
                        </Flex>

                    </Flex>
   </Fragment>
                ))
            }
        </Stack>
        <Button w="full" mt="6" colorScheme='gray'>View All</Button>
    </CustomCard>
  )
}

export default Transaction