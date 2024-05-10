import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { FaMessage } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import InfoCard from '../Dashboard/components/InfoCard';
import { Stack } from '@chakra-ui/react';
const Support = () => {
  return (
   <DashboardLayout title="Support">
    <Stack spacing="5rem">
    <SupportCard
    icon={IoMailSharp}
      leftComponent={<ContactCard></ContactCard>}
      title="Contact Us"
      text="Have a question or want to know more ?? Just feel free to text us"
    ></SupportCard>
    <SupportCard
    icon={FaMessage}

      leftComponent={ 
        <InfoCard  imgUrl="/Shapes.svg"  text="Chat With Us"
        inverted={true}
       tagText="Chat Bot">

       </InfoCard>
       }
      title="Live Chat"
      text="Dont have time to wait for reply ?? just live chat with us"
    ></SupportCard>
</Stack>

   </DashboardLayout>
  )
}

export default Support