import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ServiceContaint from './ServiceContaint'

import Footer2 from '../../Component/Footer2'
import Project_requirment from './Project_requirment'

const ServiceMan = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <Box className="loder_shadow">
          <CircularProgress />
        </Box>
      </Box>
    );
  }

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

export default ServiceMan
