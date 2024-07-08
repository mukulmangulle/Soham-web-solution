import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ServiceContaint from './ServiceContaint'

import Footer2 from '../../Component/Footer2'
import Project_requirment from './Project_requirment'

const Service = () => {
  return (
    <>
      <Box >
        <Box className="bg-img ">
          <Typography className='primary-heading' variant='h1' >Services</Typography>
        </Box>
      </Box>

      <ServiceContaint />
      <Project_requirment />

      <Footer2 />



    </>
  )
}

export default Service
