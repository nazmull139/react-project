import React from 'react'
import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
    <Stack spacing="6" >
    <Text fontSize="sm" fontWeight="medium">You will receive responce within 24 hours of submit</Text>

    <HStack    
     flexDir={{
       base:"column",
        md:"row"
       }}>
        <FormControl>
            <FormLabel>
                Name
            </FormLabel>
            <Input placeholder="Enter Your Name..."></Input>
          
        </FormControl>
        <FormControl>
        <FormLabel>
                Surname
            </FormLabel>
            <Input placeholder="Enter Your Surname..."></Input>
        </FormControl>
     </HStack>   
     
        <FormControl>
        <FormLabel>
                Email
            </FormLabel>
            <Input type="email" placeholder="Enter Your Email..."></Input>
        </FormControl>
        <FormControl>
        <FormLabel>
                Message
            </FormLabel>
                <Textarea placeholder="Enter your message.."></Textarea>
        </FormControl>
        <Checkbox defaultChecked>
            <Text fontSize="xs">
            I agree with
            <Box as='span' color="p.purple">
                Terms and Conditions
            </Box>  
            </Text>
        </Checkbox>

        <Stack>
            <Button fontSize="sm" >Send a message</Button>
            <Button fontSize="sm" colorScheme='gray'>Book a meeting</Button>
        </Stack>
  

    </Stack>
</Card>
  )
}

export default ContactCard