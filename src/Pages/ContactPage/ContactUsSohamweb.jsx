import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Contact from './Contact';



const ContactUsSohamweb = () => {
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
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box className="contact" >
      <Box className="bg-img " >
        <Typography className='primary-heading' variant='h1'  >Contact Us</Typography>
      </Box>

      <Box className="container_space" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'}>
          <Typography className="secondary_heading" variant='h3'   >Let's Build Something Amazing Together!
          </Typography>  

          <Typography className='primary_subheading contant_pre'  >
            We're excited to help you bring your vision to life! Whether you have a question about our services, need assistance with an ongoing project, or want to explore how we can collaborate, our team is here for you.
          </Typography>

        </Box>
        <Contact />
      </Box>

    </Box>
  )
}

export default ContactUsSohamweb
