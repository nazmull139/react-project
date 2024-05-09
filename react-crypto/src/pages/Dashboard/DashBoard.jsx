import React from 'react'

import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transaction from './components/Transaction'
import InfoCard from './components/InfoCard'

const DashBoard = () => {
  return (
   <DashboardLayout title="Dashboard">
  <Grid gridTemplateColumns={{
    base:"repeat(1,1fr)",
    xl:"repeat(2,1fr)"

  }}
  gap="6">
    <GridItem colSpan={{
      base:"1",
      xl:"2"
    }}>
       <PortfolioSection></PortfolioSection>
    </GridItem>
    <GridItem colSpan={1}>
    <PriceSection></PriceSection>
    </GridItem>
    <GridItem colSpan={1}>
    <Transaction></Transaction>
    </GridItem>
    <GridItem colSpan={1}>
    <InfoCard imgUrl="/Visual.svg"
     text="Learn More about loans keep your bitcoin access its value without selling it"
     inverted={false}
     tagText="Loan"
     >

     </InfoCard>
    </GridItem>
    <GridItem colSpan={1}>
    <InfoCard imgUrl="/Shapes.svg"  text="Learn More about loans keep your bitcoin access its value without selling it"
      inverted={true}
     tagText="Contact"></InfoCard>
    </GridItem>

  </Grid>
  
  
    </DashboardLayout>
  )
}

export default DashBoard