import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoMailSharp } from "react-icons/io5";
const SupportCard = ({leftComponent , icon , title , text}) => {
  return (
    <Flex gap={8} 
    justify="space-between"
     flexDir={{
        base:"column",
        xl:"row"
    }}>
        <Stack maxW="24rem">
            <Icon as={icon} color="p.purple" boxSize={6}></Icon>
            <Text as="h1" fontWeight="medium" textStyle="h1">{title}</Text>
            <Text fontSize="sm" color="black.60">{text}</Text>
        </Stack>
        <Box w="full" maxW="550px" >{leftComponent}</Box>
    </Flex>
  )
}

export default SupportCard