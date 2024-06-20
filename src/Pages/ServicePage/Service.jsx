import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ServiceContaint from './ServiceContaint'
import ProjectRequirement from './ProjectRequirement'
import Footer2 from '../../Component/Footer2'

const Service = () => {
  return (
    <>
      <Box >
                <Box className="bg-img  padding-top-bottom">
                    <Typography  id='Heading-h2' variant='h2' >Service</Typography>
                </Box>
            </Box>
            
            <ServiceContaint/>
            <Footer2/>
      
      <Button>
        
      </Button>
            
            </>
  )
}

export default Service
