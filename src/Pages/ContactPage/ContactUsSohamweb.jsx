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
    <Box >
      <Box  className="bg-img width1920" >
        <Typography  id='Heading-h2' variant='h2' padding={7} >Contact Us</Typography>
      </Box>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'}>
        {/* <Typography id="about-soham" variant='h3' fontSize={40} fontWeight={'600'} color={"#053480"} textAlign={'center'} paddingTop={5} paddingX={3} > Contact Us Soham Web</Typography> */}
        <Typography id="Typography-black" paddingY={2} width={"71%"} paddingBottom={7}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
          as a placeholder before the final copy is available.
        </Typography>

      </Box>
      <Contact />

    </Box>
  )
}

export default ContactUsSohamweb
