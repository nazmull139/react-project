import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgUrl , text , tagText,inverted}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "p.purple" : "white"} >

        <Tag  color={inverted ? "p.purple" : "white"} borderRadius="full"
        
            bg={inverted ? "white": "p.purple"}
        
        > {tagText}</Tag>
        <Text textStyle="h5" fontWeight="medium" mt="4" 
            color={inverted ? "white" : "black.80"}
        >{text}</Text>
     </CustomCard>
  )
}

export default InfoCard